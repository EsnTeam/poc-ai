import { animate, state, style, transition, trigger, } from '@angular/animations';
import { Component, Input, Optional } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ConfirmationDialogComponent } from '../confirmation-dialog';
import * as i0 from "@angular/core";
import * as i1 from "../dialog";
import * as i2 from "@angular/router";
import * as i3 from "../../utils/services/drafts";
import * as i4 from "@angular/common";
import * as i5 from "../button/button.component";
import * as i6 from "../stepper/stepper";
import * as i7 from "../icon/icon.component";
import * as i8 from "../icon/icon-bg.component";
import * as i9 from "../dialog/dialog-content";
import * as i10 from "../progress-bar/progress-bar.component";
import * as i11 from "../loader/loader.component";
import * as i12 from "../error-state/error-state.component";
export class EsnWizard {
    constructor(dialogRef, activatedRoute, router, elementCreationService, dialog) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.elementCreationService = elementCreationService;
        this.dialog = dialog;
        this.getRedirectPathOnCreationSuccess = () => { };
        this.getSubtitle = (elm) => undefined;
        this.isRouted = true;
        // If true the the element is created on init
        this.initElement = false;
        this.onSuccess = () => { };
        this.contentPhase = 'entered';
        this.subscriptions = new Subscription();
        this.currentStepIndex = 0;
        this.nextStepLoading = false;
        this.isLastStep = false;
        this.isUploadOngoing = false;
        this.shouldProcessStepChange = true;
        // this._listenForRouteEvents();
    }
    get nextStepDisabled() {
        console.log({ aasteps: this.steps, currIndex: this.currentStepIndex });
        return (!!this.elementCreationService?.forms[this.steps[this.currentStepIndex || 0].path].invalid || this.nextStepLoading);
    }
    async ngOnInit() {
        this.stepperStepEnum = Object.keys(this.stepperSteps);
        this.elementCreationService.initialElement$.subscribe((el) => {
            this.initialElement = el;
            this.subtitle = this.getSubtitle(el);
        });
        if (this.isRouted) {
            this._listenForRouteEvents();
        }
        else {
            this.stepToDisplay = this.steps[0].path;
            if (this.initElement) {
                const elm = await this.elementCreationService.initElementInDb();
                this.elementUuid = elm.externalUuid;
            }
            if (!this.elementUuid) {
                throw `No element uuid was provided. Either use the wizard in routed mode ([isRouted]="true"), use the initElement option to initialize an element automaticaly ([initElement]="true"), or provide the uuid of a draft element that exists in db (elementUuid="XXXX")`;
            }
            this.elementCreationService.init(this.elementUuid);
        }
        this._refreshCurrentStep();
    }
    async onCloseClick() {
        if (this.elementCreationService.elementDoesntExist) {
            await this.closeAndRedirect();
        }
        if (!this.elementCreationService.initialized) {
            return;
        }
        if (this.elementCreationService.noChangesMade()) {
            await this.elementCreationService.discardChanges();
            await this.closeAndRedirect();
            return;
        }
        this.dialog
            .open(ConfirmationDialogComponent, {
            disableClose: false,
            autoFocus: false,
            data: this.closeConfirmDialogData || {
                title: 'Quitter la page',
                paragraphs: [
                    'Vous êtes sur le point de quitter cette page. Souhaitez-vous sauvegarder les modifications ?',
                ],
                cancelLabel: 'Ne pas sauvegarder',
                confirmLabel: 'Sauvegarder',
                thirdButton: true,
            },
        })
            .componentInstance.decision.subscribe(async (confirm) => {
            if (confirm) {
                await this.elementCreationService.saveChanges();
            }
            else {
                await this.elementCreationService.discardChanges();
            }
            await this.closeAndRedirect();
        });
    }
    _displayIncompleteDialog(stepPath) {
        this.dialog
            .open(ConfirmationDialogComponent, {
            disableClose: false,
            autoFocus: false,
            data: {
                title: 'Formulaire incomplet',
                paragraphs: [
                    "Certaines étapes du formulaire n'ont pas été complétées.",
                ],
                cancelLabel: 'Annuler',
                confirmLabel: "Aller à l'étape incomplète",
            },
        })
            .componentInstance.decision.subscribe(async (confirm) => {
            if (confirm) {
                const incompleteStep = this.elementCreationService.getFirstIncompleteStep();
                this._saveAndGoToStep(this.steps.findIndex((s) => s.path == incompleteStep));
            }
        });
    }
    get selectedStepperStepIndex() {
        return this.stepperStepEnum.findIndex((step) => this.steps[this.currentStepIndex].stepperStep == step);
    }
    handleBackClick() {
        this._saveAndGoToStep(Math.max(this.currentStepIndex - 1, 0));
    }
    async handleNextClick() {
        this._saveAndGoToStep(Math.min(this.currentStepIndex + 1, this.steps.length - 1));
    }
    async _saveAndGoToStep(stepIndex) {
        this.shouldProcessStepChange = false;
        this.elementCreationService.updateAndSave();
        this.nextStepLoading = true;
        if (this.isRouted) {
            this.router.navigate(['./' + this.steps[stepIndex].path], {
                relativeTo: this.activatedRoute,
            });
        }
        else {
            this.stepToDisplay = this.steps[stepIndex].path;
            this._refreshCurrentStep();
        }
        this.contentPhase =
            stepIndex > this.currentStepIndex ? 'enterFromRight' : 'enterFromLeft';
        setTimeout(() => (this.shouldProcessStepChange = true));
    }
    backToHome() {
        this.dialogRef?.close();
        if (!!this.redirectUrlOnClose) {
            this.router.navigate([this.redirectUrlOnClose]);
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    closeAndRedirect() {
        this.dialogRef?.close();
        const redirectUrl = this.redirectUrlOnClose;
        if (!!redirectUrl) {
            return this.router.navigate([redirectUrl]);
        }
        return Promise.resolve(true);
    }
    async onStepChange(event) {
        if (!this.shouldProcessStepChange) {
            return;
        }
        const incompleteStep = this.steps.findIndex((s) => s.path == this.elementCreationService.getFirstIncompleteStep());
        const targetStep = this.steps.findIndex((s) => this.stepperStepEnum.findIndex((stepperStep) => stepperStep == s.stepperStep) == event.selectedIndex);
        if (targetStep != this.currentStepIndex &&
            (incompleteStep === -1 ||
                targetStep === 0 ||
                +incompleteStep >= targetStep)) {
            this._saveAndGoToStep(targetStep);
        }
    }
    async onCreate() {
        const incompleteStep = this.elementCreationService.getFirstIncompleteStep();
        if (!!incompleteStep) {
            this._displayIncompleteDialog(incompleteStep);
            return;
        }
        this.isUploadOngoing = true;
        const id = await this.elementCreationService.sendElementToServer();
        if (!!id) {
            // this.toProcessCountersService.updateCounts();
            this.dialogRef?.close();
            this.onSuccess(id);
            const redirectPath = this.getRedirectPathOnCreationSuccess(id);
            if (!!redirectPath) {
                this.router.navigate([redirectPath]);
            }
        }
        this.isUploadOngoing = false;
    }
    couldCreate() {
        return !this.steps.find((s) => this.elementCreationService.forms[s.path].invalid);
    }
    _listenForRouteEvents() {
        this.activatedRoute.params.pipe(take(1)).subscribe((params) => {
            this.elementCreationService.init(params['uuid']);
        });
        this.subscriptions.add(this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd))
            .subscribe((val) => {
            this._refreshCurrentStep();
        }));
    }
    _refreshWithAnimation() {
        setTimeout(() => {
            this.nextStepLoading = false;
            setTimeout(() => {
                this.contentPhase = 'entered';
            });
        });
    }
    _refreshCurrentStep() {
        const nextStep = this.isRouted
            ? this.activatedRoute.snapshot.firstChild?.routeConfig?.path
            : this.stepToDisplay;
        console.log('refreshCurrStep', { nextStep });
        this.currentStepIndex = this.steps.findIndex((s) => s.path === nextStep);
        this.currentStep = nextStep;
        this._refreshWithAnimation();
    }
    getStepperStepCompletion(step) {
        return (this.steps
            .filter((s) => s.stepperStep == step)
            .reduce((acc, curr) => acc && this.elementCreationService.forms[curr.path].valid, true) &&
            !(this.selectedStepperStepIndex < this.stepperStepEnum.indexOf(step)));
    }
}
EsnWizard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnWizard, deps: [{ token: i1.EsnDialogRef, optional: true }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i3.EsnDraftService }, { token: i1.EsnDialog }], target: i0.ɵɵFactoryTarget.Component });
EsnWizard.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnWizard, selector: "esn-wizard", inputs: { title: "title", createButtonLabel: "createButtonLabel", steps: "steps", stepperSteps: "stepperSteps", getRedirectPathOnCreationSuccess: "getRedirectPathOnCreationSuccess", redirectUrlOnClose: "redirectUrlOnClose", getSubtitle: "getSubtitle", isRouted: "isRouted", elementUuid: "elementUuid", initElement: "initElement", closeConfirmDialogData: "closeConfirmDialogData", onSuccess: "onSuccess" }, host: { properties: { "class.loading": "isUploadOngoing" }, classAttribute: "esn-wizard" }, ngImport: i0, template: "<esn-dialog-header [divider]=\"false\">\r\n  <div class=\"dialog-element-content-container\">\r\n    <div class=\"element-creation-layout__header__leading\">\r\n      <esn-icon-bg color=\"primary\" shape=\"circle\" type=\"mono\">\r\n        <esn-icon name=\"edit-3\"></esn-icon>\r\n      </esn-icon-bg>\r\n      <div class=\"element-creation-layout__header__text\">\r\n        <div class=\"title\">{{ title }}</div>\r\n        <div class=\"subtitle\">{{ subtitle }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <esn-icon\r\n      name=\"close\"\r\n      class=\"element-creation-layout__header__close-button\"\r\n      (click)=\"onCloseClick()\"\r\n    >\r\n    </esn-icon>\r\n  </div>\r\n</esn-dialog-header>\r\n<esn-dialog-content>\r\n  <esn-progress-bar\r\n    class=\"example-margin\"\r\n    [mode]=\"isUploadOngoing ? 'query' : 'determinate'\"\r\n    [value]=\"(currentStepIndex / steps.length) * 100\"\r\n  >\r\n  </esn-progress-bar>\r\n  <div class=\"dialog-element-content-container\">\r\n    <div *ngIf=\"elementCreationService.elementDoesntExist\" class=\"esn-wizard-error-wrapper\">\r\n      <esn-error-state\r\n        (btnClicked)=\"backToHome()\"\r\n        [retryPossible]=\"true\"\r\n        btnText=\"Revenir\"\r\n      >\r\n        Ce brouillon n'existe pas\r\n      </esn-error-state>\r\n    </div>\r\n    <esn-loader\r\n      *ngIf=\"\r\n        !elementCreationService.initialized &&\r\n        !elementCreationService.elementDoesntExist\r\n      \"\r\n      [centered]=\"true\"\r\n    ></esn-loader>\r\n    <div *ngIf=\"elementCreationService.initialized\" class=\"content-container\">\r\n      <esn-stepper\r\n        (selectionChange)=\"onStepChange($event)\"\r\n        [orientation]=\"'vertical'\"\r\n        [detachContent]=\"true\"\r\n        headerPosition=\"bottom\"\r\n        [selectedIndex]=\"selectedStepperStepIndex\"\r\n        [linear]=\"true\"\r\n      >\r\n        <esn-step\r\n          *ngFor=\"let step of stepperStepEnum; let i = index\"\r\n          [label]=\"stepperSteps[step].label\"\r\n          [esnIcon]=\"stepperSteps[step].icon\"\r\n          [completed]=\"getStepperStepCompletion(step)\"\r\n        >\r\n          <div\r\n            *ngIf=\"!nextStepLoading && i == selectedStepperStepIndex\"\r\n            class=\"element-creation-layout__content-container\"\r\n          >\r\n            <div [@enteringAnimation]=\"contentPhase\">\r\n              <router-outlet *ngIf=\"isRouted\"></router-outlet>\r\n\r\n              <ng-container *ngIf=\"!isRouted\">\r\n                <ng-container\r\n                  *ngComponentOutlet=\"steps[currentStepIndex].component\"\r\n                ></ng-container>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </esn-step>\r\n      </esn-stepper>\r\n    </div>\r\n  </div>\r\n</esn-dialog-content>\r\n<esn-dialog-footer align=\"center\">\r\n  <div class=\"dialog-element-content-container\">\r\n    <esn-button color=\"neutral\" type=\"basic\" (click)=\"onCloseClick()\">\r\n      Annuler\r\n    </esn-button>\r\n    <div class=\"step-change-buttons-container\">\r\n      <esn-button\r\n        *ngIf=\"currentStepIndex != 0\"\r\n        color=\"primary\"\r\n        type=\"basic\"\r\n        (click)=\"handleBackClick()\"\r\n      >\r\n        <esn-icon class=\"esn-icon-prefix\" name=\"chevron-left\"></esn-icon>\r\n        Retour\r\n      </esn-button>\r\n      <esn-button\r\n        class=\"next-btn\"\r\n        *ngIf=\"currentStepIndex != steps.length - 1; else creation_btn\"\r\n        (click)=\"handleNextClick()\"\r\n        [disabled]=\"nextStepDisabled\"\r\n      >\r\n        Continuer\r\n        <esn-icon class=\"esn-icon-suffix\" name=\"chevron-right\"></esn-icon>\r\n      </esn-button>\r\n    </div>\r\n  </div>\r\n  <ng-template #creation_btn>\r\n    <esn-button\r\n      class=\"next-btn\"\r\n      (click)=\"onCreate()\"\r\n      [disabled]=\"!couldCreate()\"\r\n    >\r\n      {{ createButtonLabel }}\r\n    </esn-button>\r\n  </ng-template>\r\n</esn-dialog-footer>\r\n", styles: [":host ::ng-deep .esn-dialog-header{padding:1.5rem!important}:host ::ng-deep .esn-dialog-header .element-creation-layout__header__leading{display:flex;align-items:center}:host ::ng-deep .esn-dialog-header .element-creation-layout__header__leading .element-creation-layout__header__text{color:#00359e;font-weight:500;margin-left:1rem;font-size:16px}:host .esn-wizard-error-wrapper{width:100%}:host .esn-wizard-error-wrapper .esn-error-state{margin:3rem auto}:host ::ng-deep .esn-dialog-header{justify-content:space-around!important}:host ::ng-deep h3.step-title{margin-top:0}:host ::ng-deep .esn-dialog-content{display:flex!important;justify-content:space-around!important}:host ::ng-deep .esn-dialog-content .dialog-element-content-container{align-items:flex-start}:host ::ng-deep .dialog-element-content-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;max-width:1000px}:host ::ng-deep esn-stepper .detached__content{min-width:350px;padding:1px;margin-top:1rem}:host .esn-progressbar{position:absolute;top:92px;left:0;right:0}:host .content-container-wrapper{overflow:hidden;margin-top:.5rem;margin-left:5rem}:host .element-creation-layout__content-container{display:inline-block;padding-left:.25rem;min-width:450px;padding-bottom:150px}:host__stepper{display:inline-block}:host .content-container{display:flex;padding:1.5rem 1.5rem 1rem}:host .next-btn{float:right}:host__footer{margin-top:2rem}:host .element-creation-layout__header__close-button{cursor:pointer;color:#4b5565}\n"], dependencies: [{ kind: "directive", type: i4.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i5.EsnButton, selector: "esn-button", inputs: ["type", "size", "disabled", "round", "iconOnly", "color"], outputs: ["click"] }, { kind: "component", type: i6.EsnStep, selector: "esn-step", inputs: ["esnIcon"], exportAs: ["esnStep"] }, { kind: "component", type: i6.EsnStepper, selector: "esn-stepper, esn-vertical-stepper, esn-horizontal-stepper, [esnStepper]", inputs: ["selectedIndex", "disableRipple", "labelPosition", "headerPosition", "detachContent", "animationDuration"], outputs: ["animationDone"], exportAs: ["esnStepper", "esnVerticalStepper", "esnHorizontalStepper"] }, { kind: "component", type: i7.EsnIcon, selector: "esn-icon", inputs: ["name", "boxed", "size"] }, { kind: "component", type: i8.EsnIconBg, selector: "esn-icon-bg", inputs: ["shape", "type", "color", "shade", "rings", "theme"] }, { kind: "component", type: i9.EsnDialogHeader, selector: "esn-dialog-header", inputs: ["divider", "color"], exportAs: ["esnDialogHeader"] }, { kind: "component", type: i9.EsnDialogContent, selector: "esn-dialog-content", exportAs: ["esnDialogContent"] }, { kind: "component", type: i9.EsnDialogFooter, selector: "esn-dialog-footer", inputs: ["divider", "align"], exportAs: ["esnDialogFooter"] }, { kind: "component", type: i10.ProgressBarComponent, selector: "esn-progress-bar", inputs: ["color", "mode", "bufferValue", "value"], outputs: ["animationEnd"] }, { kind: "component", type: i11.EsnLoader, selector: "esn-loader", inputs: ["type", "centered", "size"] }, { kind: "component", type: i12.EsnErrorState, selector: "esn-error-state", inputs: ["retryPossible", "retryOngoing", "btnText"], outputs: ["btnClicked"] }], animations: [
        trigger('enteringAnimation', [
            state('entered', style({
                opacity: 1,
                transform: 'translateX(0)',
            })),
            state('enterFromRight', style({
                opacity: 0,
                transform: 'translateX(100%)',
            })),
            state('enterFromLeft', style({
                opacity: 0,
                transform: 'translateX(-100%)',
            })),
            transition('* => entered', [animate('0.2s')]),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnWizard, decorators: [{
            type: Component,
            args: [{ selector: 'esn-wizard', host: {
                        class: 'esn-wizard',
                        '[class.loading]': `isUploadOngoing`,
                    }, animations: [
                        trigger('enteringAnimation', [
                            state('entered', style({
                                opacity: 1,
                                transform: 'translateX(0)',
                            })),
                            state('enterFromRight', style({
                                opacity: 0,
                                transform: 'translateX(100%)',
                            })),
                            state('enterFromLeft', style({
                                opacity: 0,
                                transform: 'translateX(-100%)',
                            })),
                            transition('* => entered', [animate('0.2s')]),
                        ]),
                    ], template: "<esn-dialog-header [divider]=\"false\">\r\n  <div class=\"dialog-element-content-container\">\r\n    <div class=\"element-creation-layout__header__leading\">\r\n      <esn-icon-bg color=\"primary\" shape=\"circle\" type=\"mono\">\r\n        <esn-icon name=\"edit-3\"></esn-icon>\r\n      </esn-icon-bg>\r\n      <div class=\"element-creation-layout__header__text\">\r\n        <div class=\"title\">{{ title }}</div>\r\n        <div class=\"subtitle\">{{ subtitle }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <esn-icon\r\n      name=\"close\"\r\n      class=\"element-creation-layout__header__close-button\"\r\n      (click)=\"onCloseClick()\"\r\n    >\r\n    </esn-icon>\r\n  </div>\r\n</esn-dialog-header>\r\n<esn-dialog-content>\r\n  <esn-progress-bar\r\n    class=\"example-margin\"\r\n    [mode]=\"isUploadOngoing ? 'query' : 'determinate'\"\r\n    [value]=\"(currentStepIndex / steps.length) * 100\"\r\n  >\r\n  </esn-progress-bar>\r\n  <div class=\"dialog-element-content-container\">\r\n    <div *ngIf=\"elementCreationService.elementDoesntExist\" class=\"esn-wizard-error-wrapper\">\r\n      <esn-error-state\r\n        (btnClicked)=\"backToHome()\"\r\n        [retryPossible]=\"true\"\r\n        btnText=\"Revenir\"\r\n      >\r\n        Ce brouillon n'existe pas\r\n      </esn-error-state>\r\n    </div>\r\n    <esn-loader\r\n      *ngIf=\"\r\n        !elementCreationService.initialized &&\r\n        !elementCreationService.elementDoesntExist\r\n      \"\r\n      [centered]=\"true\"\r\n    ></esn-loader>\r\n    <div *ngIf=\"elementCreationService.initialized\" class=\"content-container\">\r\n      <esn-stepper\r\n        (selectionChange)=\"onStepChange($event)\"\r\n        [orientation]=\"'vertical'\"\r\n        [detachContent]=\"true\"\r\n        headerPosition=\"bottom\"\r\n        [selectedIndex]=\"selectedStepperStepIndex\"\r\n        [linear]=\"true\"\r\n      >\r\n        <esn-step\r\n          *ngFor=\"let step of stepperStepEnum; let i = index\"\r\n          [label]=\"stepperSteps[step].label\"\r\n          [esnIcon]=\"stepperSteps[step].icon\"\r\n          [completed]=\"getStepperStepCompletion(step)\"\r\n        >\r\n          <div\r\n            *ngIf=\"!nextStepLoading && i == selectedStepperStepIndex\"\r\n            class=\"element-creation-layout__content-container\"\r\n          >\r\n            <div [@enteringAnimation]=\"contentPhase\">\r\n              <router-outlet *ngIf=\"isRouted\"></router-outlet>\r\n\r\n              <ng-container *ngIf=\"!isRouted\">\r\n                <ng-container\r\n                  *ngComponentOutlet=\"steps[currentStepIndex].component\"\r\n                ></ng-container>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </esn-step>\r\n      </esn-stepper>\r\n    </div>\r\n  </div>\r\n</esn-dialog-content>\r\n<esn-dialog-footer align=\"center\">\r\n  <div class=\"dialog-element-content-container\">\r\n    <esn-button color=\"neutral\" type=\"basic\" (click)=\"onCloseClick()\">\r\n      Annuler\r\n    </esn-button>\r\n    <div class=\"step-change-buttons-container\">\r\n      <esn-button\r\n        *ngIf=\"currentStepIndex != 0\"\r\n        color=\"primary\"\r\n        type=\"basic\"\r\n        (click)=\"handleBackClick()\"\r\n      >\r\n        <esn-icon class=\"esn-icon-prefix\" name=\"chevron-left\"></esn-icon>\r\n        Retour\r\n      </esn-button>\r\n      <esn-button\r\n        class=\"next-btn\"\r\n        *ngIf=\"currentStepIndex != steps.length - 1; else creation_btn\"\r\n        (click)=\"handleNextClick()\"\r\n        [disabled]=\"nextStepDisabled\"\r\n      >\r\n        Continuer\r\n        <esn-icon class=\"esn-icon-suffix\" name=\"chevron-right\"></esn-icon>\r\n      </esn-button>\r\n    </div>\r\n  </div>\r\n  <ng-template #creation_btn>\r\n    <esn-button\r\n      class=\"next-btn\"\r\n      (click)=\"onCreate()\"\r\n      [disabled]=\"!couldCreate()\"\r\n    >\r\n      {{ createButtonLabel }}\r\n    </esn-button>\r\n  </ng-template>\r\n</esn-dialog-footer>\r\n", styles: [":host ::ng-deep .esn-dialog-header{padding:1.5rem!important}:host ::ng-deep .esn-dialog-header .element-creation-layout__header__leading{display:flex;align-items:center}:host ::ng-deep .esn-dialog-header .element-creation-layout__header__leading .element-creation-layout__header__text{color:#00359e;font-weight:500;margin-left:1rem;font-size:16px}:host .esn-wizard-error-wrapper{width:100%}:host .esn-wizard-error-wrapper .esn-error-state{margin:3rem auto}:host ::ng-deep .esn-dialog-header{justify-content:space-around!important}:host ::ng-deep h3.step-title{margin-top:0}:host ::ng-deep .esn-dialog-content{display:flex!important;justify-content:space-around!important}:host ::ng-deep .esn-dialog-content .dialog-element-content-container{align-items:flex-start}:host ::ng-deep .dialog-element-content-container{display:flex;align-items:center;justify-content:space-between;flex-grow:1;max-width:1000px}:host ::ng-deep esn-stepper .detached__content{min-width:350px;padding:1px;margin-top:1rem}:host .esn-progressbar{position:absolute;top:92px;left:0;right:0}:host .content-container-wrapper{overflow:hidden;margin-top:.5rem;margin-left:5rem}:host .element-creation-layout__content-container{display:inline-block;padding-left:.25rem;min-width:450px;padding-bottom:150px}:host__stepper{display:inline-block}:host .content-container{display:flex;padding:1.5rem 1.5rem 1rem}:host .next-btn{float:right}:host__footer{margin-top:2rem}:host .element-creation-layout__header__close-button{cursor:pointer;color:#4b5565}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.EsnDialogRef, decorators: [{
                    type: Optional
                }] }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.EsnDraftService }, { type: i1.EsnDialog }]; }, propDecorators: { title: [{
                type: Input
            }], createButtonLabel: [{
                type: Input
            }], steps: [{
                type: Input
            }], stepperSteps: [{
                type: Input
            }], getRedirectPathOnCreationSuccess: [{
                type: Input
            }], redirectUrlOnClose: [{
                type: Input
            }], getSubtitle: [{
                type: Input
            }], isRouted: [{
                type: Input
            }], elementUuid: [{
                type: Input
            }], initElement: [{
                type: Input
            }], closeConfirmDialogData: [{
                type: Input
            }], onSuccess: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3dpemFyZC93aXphcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvd2l6YXJkL3dpemFyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWtCLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUF5Q3JFLE1BQU0sT0FBTyxTQUFTO0lBbUNwQixZQUNxQixTQUFvRCxFQUNoRSxjQUE4QixFQUM5QixNQUFjLEVBQ2Qsc0JBQXdELEVBQ3hELE1BQWlCO1FBSkwsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDaEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQWtDO1FBQ3hELFdBQU0sR0FBTixNQUFNLENBQVc7UUFqQ2pCLHFDQUFnQyxHQUFtRCxHQUFFLEVB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Q0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt5QkFDOUMsQ0FBQztxQkFDSDs7MEJBdUNFLFFBQVE7b0pBbkNGLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBR0csZ0NBQWdDO3NCQUF4QyxLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLHNCQUFzQjtzQkFBOUIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybWF0aW9uLWRpYWxvZyc7XHJcbmltcG9ydCB7IEVzbkRpYWxvZywgRXNuRGlhbG9nUmVmIH0gZnJvbSAnLi4vZGlhbG9nJztcclxuaW1wb3J0IHsgRHJhZnRUbXBFbGVtZW50LCBFc25EcmFmdFNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlscy9zZXJ2aWNlcy9kcmFmdHMnO1xyXG5pbXBvcnQgeyBFc25XaXphcmRTdGVwLCBFc25XaXphcmRTdGVwcGVyU3RlcCB9IGZyb20gJy4vbW9kZWwvc3RlcC1wYXJhbWV0ZXJzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLXdpemFyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dpemFyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vd2l6YXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24td2l6YXJkJyxcclxuICAgICdbY2xhc3MubG9hZGluZ10nOiBgaXNVcGxvYWRPbmdvaW5nYCxcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2VudGVyaW5nQW5pbWF0aW9uJywgW1xyXG4gICAgICBzdGF0ZShcclxuICAgICAgICAnZW50ZXJlZCcsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHN0YXRlKFxyXG4gICAgICAgICdlbnRlckZyb21SaWdodCcsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHN0YXRlKFxyXG4gICAgICAgICdlbnRlckZyb21MZWZ0JyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXJlZCcsIFthbmltYXRlKCcwLjJzJyldKSxcclxuICAgIF0pLFxyXG4gIF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuV2l6YXJkIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNyZWF0ZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3RlcHM6IEVzbldpemFyZFN0ZXBbXTtcclxuICBASW5wdXQoKSBzdGVwcGVyU3RlcHM6IHtcclxuICAgIFtrZXkgaW4gc3RyaW5nXTogRXNuV2l6YXJkU3RlcHBlclN0ZXA7XHJcbiAgfTtcclxuICBASW5wdXQoKSBnZXRSZWRpcmVjdFBhdGhPbkNyZWF0aW9uU3VjY2VzczogKGNyZWF0ZWRJZDogc3RyaW5nIHwgYm9vbGVhbikgPT4gc3RyaW5nIHwgdm9pZCA9ICgpPT4ge307XHJcbiAgQElucHV0KCkgcmVkaXJlY3RVcmxPbkNsb3NlPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGdldFN1YnRpdGxlOiAoZWxtOiBEcmFmdFRtcEVsZW1lbnQpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IChlbG0pID0+XHJcbiAgICB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgaXNSb3V0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vIFRoZSAgZWxlbWVudCB1dWlkIGNhbiBiZSBwYXNzZWQgaWYgdGhlIHdpemFyZCBpcyBub3Qgcm91dGVkXHJcbiAgQElucHV0KCkgZWxlbWVudFV1aWQ/OiBzdHJpbmc7XHJcbiAgLy8gSWYgdHJ1ZSB0aGUgdGhlIGVsZW1lbnQgaXMgY3JlYXRlZCBvbiBpbml0XHJcbiAgQElucHV0KCkgaW5pdEVsZW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbG9zZUNvbmZpcm1EaWFsb2dEYXRhPzogYW55O1xyXG4gIEBJbnB1dCgpIG9uU3VjY2VzczogKGNyZWF0ZWRJZDogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBjb250ZW50UGhhc2U6IHN0cmluZyA9ICdlbnRlcmVkJztcclxuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHVibGljIHN1YnRpdGxlPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBjdXJyZW50U3RlcDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc3RlcHBlclN0ZXBFbnVtOiBzdHJpbmdbXTtcclxuICBwdWJsaWMgc3RlcFRvRGlzcGxheTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaW5pdGlhbEVsZW1lbnQ6IERyYWZ0VG1wRWxlbWVudDtcclxuICBwdWJsaWMgY3VycmVudFN0ZXBJbmRleCA9IDA7XHJcbiAgcHVibGljIG5leHRTdGVwTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0xhc3RTdGVwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGlzVXBsb2FkT25nb2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG91bGRQcm9jZXNzU3RlcENoYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZGlhbG9nUmVmOiBFc25EaWFsb2dSZWY8Q29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50PixcclxuICAgIHB1YmxpYyBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgZWxlbWVudENyZWF0aW9uU2VydmljZTogRXNuRHJhZnRTZXJ2aWNlPERyYWZ0VG1wRWxlbWVudD4sXHJcbiAgICBwdWJsaWMgZGlhbG9nOiBFc25EaWFsb2dcclxuICApIHtcclxuICAgIC8vIHRoaXMuX2xpc3RlbkZvclJvdXRlRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmV4dFN0ZXBEaXNhYmxlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHthYXN0ZXBzOiB0aGlzLnN0ZXBzLCBjdXJySW5kZXg6IHRoaXMuY3VycmVudFN0ZXBJbmRleH0pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICEhdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlPy5mb3Jtc1tcclxuICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleCB8fCAwXSEucGF0aCFcclxuICAgICAgXSEuaW52YWxpZCB8fCB0aGlzLm5leHRTdGVwTG9hZGluZ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5zdGVwcGVyU3RlcEVudW0gPSBPYmplY3Qua2V5cyh0aGlzLnN0ZXBwZXJTdGVwcyk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLmluaXRpYWxFbGVtZW50JC5zdWJzY3JpYmUoKGVsKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbEVsZW1lbnQgPSBlbCE7XHJcbiAgICAgIHRoaXMuc3VidGl0bGUgPSB0aGlzLmdldFN1YnRpdGxlKGVsISk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmlzUm91dGVkKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbkZvclJvdXRlRXZlbnRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0ZXBUb0Rpc3BsYXkgPSB0aGlzLnN0ZXBzWzBdLnBhdGg7XHJcbiAgICAgIGlmKHRoaXMuaW5pdEVsZW1lbnQpe1xyXG4gICAgICAgIGNvbnN0IGVsbSA9IGF3YWl0IHRoaXMuZWxlbWVudENyZWF0aW9uU2VydmljZS5pbml0RWxlbWVudEluRGIoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRVdWlkID0gZWxtLmV4dGVybmFsVXVpZDtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5lbGVtZW50VXVpZCl7XHJcbiAgICAgICAgdGhyb3cgYE5vIGVsZW1lbnQgdXVpZCB3YXMgcHJvdmlkZWQuIEVpdGhlciB1c2UgdGhlIHdpemFyZCBpbiByb3V0ZWQgbW9kZSAoW2lzUm91dGVkXT1cInRydWVcIiksIHVzZSB0aGUgaW5pdEVsZW1lbnQgb3B0aW9uIHRvIGluaXRpYWxpemUgYW4gZWxlbWVudCBhdXRvbWF0aWNhbHkgKFtpbml0RWxlbWVudF09XCJ0cnVlXCIpLCBvciBwcm92aWRlIHRoZSB1dWlkIG9mIGEgZHJhZnQgZWxlbWVudCB0aGF0IGV4aXN0cyBpbiBkYiAoZWxlbWVudFV1aWQ9XCJYWFhYXCIpYFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZWxlbWVudENyZWF0aW9uU2VydmljZS5pbml0KHRoaXMuZWxlbWVudFV1aWQhKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZWZyZXNoQ3VycmVudFN0ZXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBvbkNsb3NlQ2xpY2soKSB7XHJcbiAgICBpZih0aGlzLmVsZW1lbnRDcmVhdGlvblNlcnZpY2UuZWxlbWVudERvZXNudEV4aXN0KXtcclxuICAgICAgYXdhaXQgdGhpcy5jbG9zZUFuZFJlZGlyZWN0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudENyZWF0aW9uU2VydmljZS5pbml0aWFsaXplZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLm5vQ2hhbmdlc01hZGUoKSkge1xyXG4gICAgICBhd2FpdCB0aGlzLmVsZW1lbnRDcmVhdGlvblNlcnZpY2UuZGlzY2FyZENoYW5nZXMoKTtcclxuICAgICAgYXdhaXQgdGhpcy5jbG9zZUFuZFJlZGlyZWN0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGlhbG9nXHJcbiAgICAgIC5vcGVuKENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiB0aGlzLmNsb3NlQ29uZmlybURpYWxvZ0RhdGEgfHwge1xyXG4gICAgICAgICAgdGl0bGU6ICdRdWl0dGVyIGxhIHBhZ2UnLFxyXG4gICAgICAgICAgcGFyYWdyYXBoczogW1xyXG4gICAgICAgICAgICAnVm91cyDDqnRlcyBzdXIgbGUgcG9pbnQgZGUgcXVpdHRlciBjZXR0ZSBwYWdlLiBTb3VoYWl0ZXotdm91cyBzYXV2ZWdhcmRlciBsZXMgbW9kaWZpY2F0aW9ucyA/JyxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYW5jZWxMYWJlbDogJ05lIHBhcyBzYXV2ZWdhcmRlcicsXHJcbiAgICAgICAgICBjb25maXJtTGFiZWw6ICdTYXV2ZWdhcmRlcicsXHJcbiAgICAgICAgICB0aGlyZEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAuY29tcG9uZW50SW5zdGFuY2UuZGVjaXNpb24uc3Vic2NyaWJlKGFzeW5jIChjb25maXJtOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSkge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLnNhdmVDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuZWxlbWVudENyZWF0aW9uU2VydmljZS5kaXNjYXJkQ2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLmNsb3NlQW5kUmVkaXJlY3QoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZGlzcGxheUluY29tcGxldGVEaWFsb2coc3RlcFBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5kaWFsb2dcclxuICAgICAgLm9wZW4oQ29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRpdGxlOiAnRm9ybXVsYWlyZSBpbmNvbXBsZXQnLFxyXG4gICAgICAgICAgcGFyYWdyYXBoczogW1xyXG4gICAgICAgICAgICBcIkNlcnRhaW5lcyDDqXRhcGVzIGR1IGZvcm11bGFpcmUgbidvbnQgcGFzIMOpdMOpIGNvbXBsw6l0w6llcy5cIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYW5jZWxMYWJlbDogJ0FubnVsZXInLFxyXG4gICAgICAgICAgY29uZmlybUxhYmVsOiBcIkFsbGVyIMOgIGwnw6l0YXBlIGluY29tcGzDqHRlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLmNvbXBvbmVudEluc3RhbmNlLmRlY2lzaW9uLnN1YnNjcmliZShhc3luYyAoY29uZmlybTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0pIHtcclxuICAgICAgICAgIGNvbnN0IGluY29tcGxldGVTdGVwID1cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLmdldEZpcnN0SW5jb21wbGV0ZVN0ZXAoKTtcclxuICAgICAgICAgIHRoaXMuX3NhdmVBbmRHb1RvU3RlcChcclxuICAgICAgICAgICAgdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMucGF0aCA9PSBpbmNvbXBsZXRlU3RlcClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFN0ZXBwZXJTdGVwSW5kZXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGVwcGVyU3RlcEVudW0uZmluZEluZGV4KFxyXG4gICAgICAoc3RlcCkgPT4gdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwSW5kZXhdLnN0ZXBwZXJTdGVwID09IHN0ZXBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQmFja0NsaWNrKCkge1xyXG4gICAgdGhpcy5fc2F2ZUFuZEdvVG9TdGVwKE1hdGgubWF4KHRoaXMuY3VycmVudFN0ZXBJbmRleCAtIDEsIDApKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVOZXh0Q2xpY2soKSB7XHJcbiAgICB0aGlzLl9zYXZlQW5kR29Ub1N0ZXAoXHJcbiAgICAgIE1hdGgubWluKHRoaXMuY3VycmVudFN0ZXBJbmRleCArIDEsIHRoaXMuc3RlcHMubGVuZ3RoIC0gMSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBfc2F2ZUFuZEdvVG9TdGVwKHN0ZXBJbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLnNob3VsZFByb2Nlc3NTdGVwQ2hhbmdlID0gZmFsc2U7XHJcbiAgICB0aGlzLmVsZW1lbnRDcmVhdGlvblNlcnZpY2UudXBkYXRlQW5kU2F2ZSgpO1xyXG5cclxuICAgIHRoaXMubmV4dFN0ZXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlzUm91dGVkKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi8nICsgdGhpcy5zdGVwc1tzdGVwSW5kZXhdLnBhdGhdLCB7XHJcbiAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0ZXBUb0Rpc3BsYXkgPSB0aGlzLnN0ZXBzW3N0ZXBJbmRleF0ucGF0aDtcclxuICAgICAgdGhpcy5fcmVmcmVzaEN1cnJlbnRTdGVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZW50UGhhc2UgPVxyXG4gICAgICBzdGVwSW5kZXggPiB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPyAnZW50ZXJGcm9tUmlnaHQnIDogJ2VudGVyRnJvbUxlZnQnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5zaG91bGRQcm9jZXNzU3RlcENoYW5nZSA9IHRydWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBiYWNrVG9Ib21lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWY/LmNsb3NlKCk7XHJcbiAgICAgaWYgKCEhdGhpcy5yZWRpcmVjdFVybE9uQ2xvc2UpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmVkaXJlY3RVcmxPbkNsb3NlXSk7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VBbmRSZWRpcmVjdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMuZGlhbG9nUmVmPy5jbG9zZSgpO1xyXG4gICAgY29uc3QgcmVkaXJlY3RVcmwgPSB0aGlzLnJlZGlyZWN0VXJsT25DbG9zZTtcclxuICAgIGlmICghIXJlZGlyZWN0VXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RVcmxdKTtcclxuICAgIH0gXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblN0ZXBDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLnNob3VsZFByb2Nlc3NTdGVwQ2hhbmdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoXHJcbiAgICAgIChzKSA9PiBzLnBhdGggPT0gdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLmdldEZpcnN0SW5jb21wbGV0ZVN0ZXAoKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHRhcmdldFN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleChcclxuICAgICAgKHMpID0+XHJcbiAgICAgICAgdGhpcy5zdGVwcGVyU3RlcEVudW0uZmluZEluZGV4KFxyXG4gICAgICAgICAgKHN0ZXBwZXJTdGVwKSA9PiBzdGVwcGVyU3RlcCA9PSBzLnN0ZXBwZXJTdGVwXHJcbiAgICAgICAgKSA9PSBldmVudC5zZWxlY3RlZEluZGV4XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGFyZ2V0U3RlcCAhPSB0aGlzLmN1cnJlbnRTdGVwSW5kZXggJiZcclxuICAgICAgKGluY29tcGxldGVTdGVwID09PSAtMSB8fFxyXG4gICAgICAgIHRhcmdldFN0ZXAgPT09IDAgfHxcclxuICAgICAgICAraW5jb21wbGV0ZVN0ZXAgPj0gdGFyZ2V0U3RlcClcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9zYXZlQW5kR29Ub1N0ZXAodGFyZ2V0U3RlcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGluY29tcGxldGVTdGVwID0gdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLmdldEZpcnN0SW5jb21wbGV0ZVN0ZXAoKTtcclxuICAgIGlmICghIWluY29tcGxldGVTdGVwKSB7XHJcbiAgICAgIHRoaXMuX2Rpc3BsYXlJbmNvbXBsZXRlRGlhbG9nKGluY29tcGxldGVTdGVwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1VwbG9hZE9uZ29pbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmVsZW1lbnRDcmVhdGlvblNlcnZpY2Uuc2VuZEVsZW1lbnRUb1NlcnZlcigpO1xyXG4gICAgaWYgKCEhaWQpIHtcclxuICAgICAgLy8gdGhpcy50b1Byb2Nlc3NDb3VudGVyc1NlcnZpY2UudXBkYXRlQ291bnRzKCk7XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVmPy5jbG9zZSgpO1xyXG4gICAgICB0aGlzLm9uU3VjY2VzcyhpZCk7XHJcbiAgICAgIGNvbnN0IHJlZGlyZWN0UGF0aCA9IHRoaXMuZ2V0UmVkaXJlY3RQYXRoT25DcmVhdGlvblN1Y2Nlc3MoaWQpO1xyXG4gICAgICBpZighIXJlZGlyZWN0UGF0aCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0UGF0aF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzVXBsb2FkT25nb2luZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY291bGRDcmVhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuc3RlcHMuZmluZChcclxuICAgICAgKHMpID0+IHRoaXMuZWxlbWVudENyZWF0aW9uU2VydmljZS5mb3Jtc1tzLnBhdGhdLmludmFsaWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfbGlzdGVuRm9yUm91dGVFdmVudHMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuZWxlbWVudENyZWF0aW9uU2VydmljZS5pbml0KHBhcmFtc1sndXVpZCddKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKChlKSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9yZWZyZXNoQ3VycmVudFN0ZXAoKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9yZWZyZXNoV2l0aEFuaW1hdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5leHRTdGVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRQaGFzZSA9ICdlbnRlcmVkJztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9yZWZyZXNoQ3VycmVudFN0ZXAoKSB7XHJcbiAgICBjb25zdCBuZXh0U3RlcCA9IHRoaXMuaXNSb3V0ZWRcclxuICAgICAgPyB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LmZpcnN0Q2hpbGQ/LnJvdXRlQ29uZmlnPy5wYXRoXHJcbiAgICAgIDogdGhpcy5zdGVwVG9EaXNwbGF5O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hDdXJyU3RlcCcsIHtuZXh0U3RlcH0pXHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy5wYXRoID09PSBuZXh0U3RlcCk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gbmV4dFN0ZXAhO1xyXG4gICAgdGhpcy5fcmVmcmVzaFdpdGhBbmltYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwcGVyU3RlcENvbXBsZXRpb24oc3RlcDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnN0ZXBzXHJcbiAgICAgICAgLmZpbHRlcigocykgPT4gcy5zdGVwcGVyU3RlcCA9PSBzdGVwKVxyXG4gICAgICAgIC5yZWR1Y2UoXHJcbiAgICAgICAgICAoYWNjLCBjdXJyKSA9PlxyXG4gICAgICAgICAgICBhY2MgJiYgdGhpcy5lbGVtZW50Q3JlYXRpb25TZXJ2aWNlLmZvcm1zW2N1cnIucGF0aF0udmFsaWQsXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKSAmJlxyXG4gICAgICAhKHRoaXMuc2VsZWN0ZWRTdGVwcGVyU3RlcEluZGV4IDwgdGhpcy5zdGVwcGVyU3RlcEVudW0uaW5kZXhPZihzdGVwKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIjxlc24tZGlhbG9nLWhlYWRlciBbZGl2aWRlcl09XCJmYWxzZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctZWxlbWVudC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtY3JlYXRpb24tbGF5b3V0X19oZWFkZXJfX2xlYWRpbmdcIj5cclxuICAgICAgPGVzbi1pY29uLWJnIGNvbG9yPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgdHlwZT1cIm1vbm9cIj5cclxuICAgICAgICA8ZXNuLWljb24gbmFtZT1cImVkaXQtM1wiPjwvZXNuLWljb24+XHJcbiAgICAgIDwvZXNuLWljb24tYmc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LWNyZWF0aW9uLWxheW91dF9faGVhZGVyX190ZXh0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGl0bGVcIj57eyBzdWJ0aXRsZSB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxlc24taWNvblxyXG4gICAgICBuYW1lPVwiY2xvc2VcIlxyXG4gICAgICBjbGFzcz1cImVsZW1lbnQtY3JlYXRpb24tbGF5b3V0X19oZWFkZXJfX2Nsb3NlLWJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsb3NlQ2xpY2soKVwiXHJcbiAgICA+XHJcbiAgICA8L2Vzbi1pY29uPlxyXG4gIDwvZGl2PlxyXG48L2Vzbi1kaWFsb2ctaGVhZGVyPlxyXG48ZXNuLWRpYWxvZy1jb250ZW50PlxyXG4gIDxlc24tcHJvZ3Jlc3MtYmFyXHJcbiAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcclxuICAgIFttb2RlXT1cImlzVXBsb2FkT25nb2luZyA/ICdxdWVyeScgOiAnZGV0ZXJtaW5hdGUnXCJcclxuICAgIFt2YWx1ZV09XCIoY3VycmVudFN0ZXBJbmRleCAvIHN0ZXBzLmxlbmd0aCkgKiAxMDBcIlxyXG4gID5cclxuICA8L2Vzbi1wcm9ncmVzcy1iYXI+XHJcbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1lbGVtZW50LWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZWxlbWVudENyZWF0aW9uU2VydmljZS5lbGVtZW50RG9lc250RXhpc3RcIiBjbGFzcz1cImVzbi13aXphcmQtZXJyb3Itd3JhcHBlclwiPlxyXG4gICAgICA8ZXNuLWVycm9yLXN0YXRlXHJcbiAgICAgICAgKGJ0bkNsaWNrZWQpPVwiYmFja1RvSG9tZSgpXCJcclxuICAgICAgICBbcmV0cnlQb3NzaWJsZV09XCJ0cnVlXCJcclxuICAgICAgICBidG5UZXh0PVwiUmV2ZW5pclwiXHJcbiAgICAgID5cclxuICAgICAgICBDZSBicm91aWxsb24gbidleGlzdGUgcGFzXHJcbiAgICAgIDwvZXNuLWVycm9yLXN0YXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZXNuLWxvYWRlclxyXG4gICAgICAqbmdJZj1cIlxyXG4gICAgICAgICFlbGVtZW50Q3JlYXRpb25TZXJ2aWNlLmluaXRpYWxpemVkICYmXHJcbiAgICAgICAgIWVsZW1lbnRDcmVhdGlvblNlcnZpY2UuZWxlbWVudERvZXNudEV4aXN0XHJcbiAgICAgIFwiXHJcbiAgICAgIFtjZW50ZXJlZF09XCJ0cnVlXCJcclxuICAgID48L2Vzbi1sb2FkZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZWxlbWVudENyZWF0aW9uU2VydmljZS5pbml0aWFsaXplZFwiIGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgPGVzbi1zdGVwcGVyXHJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblN0ZXBDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW29yaWVudGF0aW9uXT1cIid2ZXJ0aWNhbCdcIlxyXG4gICAgICAgIFtkZXRhY2hDb250ZW50XT1cInRydWVcIlxyXG4gICAgICAgIGhlYWRlclBvc2l0aW9uPVwiYm90dG9tXCJcclxuICAgICAgICBbc2VsZWN0ZWRJbmRleF09XCJzZWxlY3RlZFN0ZXBwZXJTdGVwSW5kZXhcIlxyXG4gICAgICAgIFtsaW5lYXJdPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZXNuLXN0ZXBcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBwZXJTdGVwRW51bTsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICBbbGFiZWxdPVwic3RlcHBlclN0ZXBzW3N0ZXBdLmxhYmVsXCJcclxuICAgICAgICAgIFtlc25JY29uXT1cInN0ZXBwZXJTdGVwc1tzdGVwXS5pY29uXCJcclxuICAgICAgICAgIFtjb21wbGV0ZWRdPVwiZ2V0U3RlcHBlclN0ZXBDb21wbGV0aW9uKHN0ZXApXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICpuZ0lmPVwiIW5leHRTdGVwTG9hZGluZyAmJiBpID09IHNlbGVjdGVkU3RlcHBlclN0ZXBJbmRleFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZWxlbWVudC1jcmVhdGlvbi1sYXlvdXRfX2NvbnRlbnQtY29udGFpbmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBbQGVudGVyaW5nQW5pbWF0aW9uXT1cImNvbnRlbnRQaGFzZVwiPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0ICpuZ0lmPVwiaXNSb3V0ZWRcIj48L3JvdXRlci1vdXRsZXQ+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNSb3V0ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgKm5nQ29tcG9uZW50T3V0bGV0PVwic3RlcHNbY3VycmVudFN0ZXBJbmRleF0uY29tcG9uZW50XCJcclxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Vzbi1zdGVwPlxyXG4gICAgICA8L2Vzbi1zdGVwcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZXNuLWRpYWxvZy1jb250ZW50PlxyXG48ZXNuLWRpYWxvZy1mb290ZXIgYWxpZ249XCJjZW50ZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWVsZW1lbnQtY29udGVudC1jb250YWluZXJcIj5cclxuICAgIDxlc24tYnV0dG9uIGNvbG9yPVwibmV1dHJhbFwiIHR5cGU9XCJiYXNpY1wiIChjbGljayk9XCJvbkNsb3NlQ2xpY2soKVwiPlxyXG4gICAgICBBbm51bGVyXHJcbiAgICA8L2Vzbi1idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RlcC1jaGFuZ2UtYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgPGVzbi1idXR0b25cclxuICAgICAgICAqbmdJZj1cImN1cnJlbnRTdGVwSW5kZXggIT0gMFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICB0eXBlPVwiYmFzaWNcIlxyXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVCYWNrQ2xpY2soKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZXNuLWljb24gY2xhc3M9XCJlc24taWNvbi1wcmVmaXhcIiBuYW1lPVwiY2hldnJvbi1sZWZ0XCI+PC9lc24taWNvbj5cclxuICAgICAgICBSZXRvdXJcclxuICAgICAgPC9lc24tYnV0dG9uPlxyXG4gICAgICA8ZXNuLWJ1dHRvblxyXG4gICAgICAgIGNsYXNzPVwibmV4dC1idG5cIlxyXG4gICAgICAgICpuZ0lmPVwiY3VycmVudFN0ZXBJbmRleCAhPSBzdGVwcy5sZW5ndGggLSAxOyBlbHNlIGNyZWF0aW9uX2J0blwiXHJcbiAgICAgICAgKGNsaWNrKT1cImhhbmRsZU5leHRDbGljaygpXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwibmV4dFN0ZXBEaXNhYmxlZFwiXHJcbiAgICAgID5cclxuICAgICAgICBDb250aW51ZXJcclxuICAgICAgICA8ZXNuLWljb24gY2xhc3M9XCJlc24taWNvbi1zdWZmaXhcIiBuYW1lPVwiY2hldnJvbi1yaWdodFwiPjwvZXNuLWljb24+XHJcbiAgICAgIDwvZXNuLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy10ZW1wbGF0ZSAjY3JlYXRpb25fYnRuPlxyXG4gICAgPGVzbi1idXR0b25cclxuICAgICAgY2xhc3M9XCJuZXh0LWJ0blwiXHJcbiAgICAgIChjbGljayk9XCJvbkNyZWF0ZSgpXCJcclxuICAgICAgW2Rpc2FibGVkXT1cIiFjb3VsZENyZWF0ZSgpXCJcclxuICAgID5cclxuICAgICAge3sgY3JlYXRlQnV0dG9uTGFiZWwgfX1cclxuICAgIDwvZXNuLWJ1dHRvbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Vzbi1kaWFsb2ctZm9vdGVyPlxyXG4iXX0=