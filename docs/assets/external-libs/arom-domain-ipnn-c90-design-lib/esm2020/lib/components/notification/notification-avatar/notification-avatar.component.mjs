import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icon/icon.component";
import * as i3 from "../../person-avatar/person-avatar.component";
export class EsnNotificationAvatar {
    constructor() {
        this.slots = {};
        this.categoryTypeIconMap = {
            REMINDER: 'clock',
            FORM: 'edit-3',
            NOTIFY: 'bell-ringing-2',
            DONE: 'check',
            EXCLAMATION: 'alert-square',
            ANNOUNCEMENT: 'megaphone',
            COMMENT: 'annotation-alert',
        };
        this.criticalityTypeIconMap = {
            URGENT: 'exclamation',
            IMPORTANT: 'chevron-up-double',
            NONE: '',
        };
    }
    ngOnChanges(changes) {
        this.readSlots();
    }
    readSlots() {
        this.slots = {};
        const view = this.notification.view;
        if (!view) {
            return;
        }
        for (let i = 3; i > 0; i--) {
            if (!!view['slot' + i]) {
                this.slots[view['slot' + i]] = i;
            }
        }
    }
}
EsnNotificationAvatar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationAvatar, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnNotificationAvatar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnNotificationAvatar, selector: "esn-notification-avatar", inputs: { notification: "notification" }, host: { classAttribute: "esn-notification-avatar" }, usesOnChanges: true, ngImport: i0, template: "<!-- User-->\r\n<div\r\n  *ngIf=\"!!slots.USER && notification.concernedUser\"\r\n  class=\"esn-notification-user-avatar\"\r\n  [ngClass]=\"'slot' + slots.USER\"\r\n>\r\n  <esn-person-avatar\r\n    [user]=\"notification.concernedUser!\"\r\n    [size]=\"slots.USER > 1 ? 'xs' : 'lg'\"\r\n  ></esn-person-avatar>\r\n</div>\r\n\r\n<!-- Criticality -->\r\n<div\r\n  *ngIf=\"\r\n    !!slots.CRITICALITY &&\r\n    notification.criticality &&\r\n    notification.criticality != 'NONE'\r\n  \"\r\n  [ngClass]=\"\r\n    'slot' +\r\n    slots.CRITICALITY +\r\n    ' esn-notification-criticality-' +\r\n    notification.criticality\r\n  \"\r\n>\r\n  <esn-icon\r\n    [name]=\"criticalityTypeIconMap[notification.criticality]\"\r\n    [size]=\"slots.CRITICALITY > 1 ? 'xs' : 'md'\"\r\n  ></esn-icon>\r\n</div>\r\n\r\n<!-- Category -->\r\n<div\r\n  *ngIf=\"!!slots.CATEGORY && notification.category\"\r\n  [ngClass]=\"\r\n    'slot' +\r\n    slots.CATEGORY +\r\n    ' esn-notification-category-' +\r\n    notification.category!.level\r\n  \"\r\n>\r\n  <esn-icon\r\n    [name]=\"categoryTypeIconMap[notification.category!.type]\"\r\n    [size]=\"slots.CATEGORY > 1 ? 'xs' : 'md'\"\r\n  ></esn-icon>\r\n</div>\r\n\r\n<!-- Sub-category -->\r\n<div\r\n  *ngIf=\"!!slots.SUBCATEGORY && notification.subCategory\"\r\n  [ngClass]=\"\r\n    'slot' +\r\n    slots.SUBCATEGORY +\r\n    ' esn-notification-category-' +\r\n    notification.subCategory!.level\r\n  \"\r\n>\r\n  <esn-icon\r\n    [name]=\"categoryTypeIconMap[notification.subCategory!.type]\"\r\n    [size]=\"slots.SUBCATEGORY > 1 ? 'xs' : 'md'\"\r\n  ></esn-icon>\r\n</div>\r\n\r\n<!-- Not read point -->\r\n<div *ngIf=\"!notification.isRead\" class=\"esn-notification-not-read-point\"></div>", styles: [":host{position:relative}:host .esn-notification-category-INFO{background-color:#155eef}:host .esn-notification-category-SUCCESS{background-color:#039855}:host .esn-notification-category-WARN{background-color:#f79009}:host .esn-notification-category-ERROR{background-color:#d92d20}:host .esn-notification-category-SYSTEM{background-color:#697586}:host .esn-notification-criticality-URGENT{background-color:#b42318}:host .esn-notification-criticality-IMPORTANT{background-color:#f97066}:host .slot2,:host .slot3{position:absolute;width:16px;height:16px}:host .slot2:not(.esn-notification-user-avatar),:host .slot3:not(.esn-notification-user-avatar){display:flex;align-items:center;justify-content:space-around;color:#fff}:host .slot3{top:0;right:0;border-radius:50%}:host .slot2{bottom:0;right:0;border-radius:4px}:host .slot1{width:48px;height:48px}:host .slot1:not(.esn-notification-user-avatar){display:flex;align-items:center;justify-content:space-around;color:#fff;border-radius:50%}:host .esn-notification-not-read-point{position:absolute;top:0;left:-8px;border-radius:50%;height:8px;width:8px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EsnIcon, selector: "esn-icon", inputs: ["name", "boxed", "size"] }, { kind: "component", type: i3.EsnPersonAvatar, selector: "esn-person-avatar", inputs: ["user", "size"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationAvatar, decorators: [{
            type: Component,
            args: [{ selector: 'esn-notification-avatar', host: {
                        class: 'esn-notification-avatar',
                    }, template: "<!-- User-->\r\n<div\r\n  *ngIf=\"!!slots.USER && notification.concernedUser\"\r\n  class=\"esn-notification-user-avatar\"\r\n  [ngClass]=\"'slot' + slots.USER\"\r\n>\r\n  <esn-person-avatar\r\n    [user]=\"notification.concernedUser!\"\r\n    [size]=\"slots.USER > 1 ? 'xs' : 'lg'\"\r\n  ></esn-person-avatar>\r\n</div>\r\n\r\n<!-- Criticality -->\r\n<div\r\n  *ngIf=\"\r\n    !!slots.CRITICALITY &&\r\n    notification.criticality &&\r\n    notification.criticality != 'NONE'\r\n  \"\r\n  [ngClass]=\"\r\n    'slot' +\r\n    slots.CRITICALITY +\r\n    ' esn-notification-criticality-' +\r\n    notification.criticality\r\n  \"\r\n>\r\n  <esn-icon\r\n    [name]=\"criticalityTypeIconMap[notification.criticality]\"\r\n    [size]=\"slots.CRITICALITY > 1 ? 'xs' : 'md'\"\r\n  ></esn-icon>\r\n</div>\r\n\r\n<!-- Category -->\r\n<div\r\n  *ngIf=\"!!slots.CATEGORY && notification.category\"\r\n  [ngClass]=\"\r\n    'slot' +\r\n    slots.CATEGORY +\r\n    ' esn-notification-category-' +\r\n    notification.category!.level\r\n  \"\r\n>\r\n  <esn-icon\r\n    [name]=\"categoryTypeIconMap[notification.category!.type]\"\r\n    [size]=\"slots.CATEGORY > 1 ? 'xs' : 'md'\"\r\n  ></esn-icon>\r\n</div>\r\n\r\n<!-- Sub-category -->\r\n<div\r\n  *ngIf=\"!!slots.SUBCATEGORY && notification.subCategory\"\r\n  [ngClass]=\"\r\n    'slot' +\r\n    slots.SUBCATEGORY +\r\n    ' esn-notification-category-' +\r\n    notification.subCategory!.level\r\n  \"\r\n>\r\n  <esn-icon\r\n    [name]=\"categoryTypeIconMap[notification.subCategory!.type]\"\r\n    [size]=\"slots.SUBCATEGORY > 1 ? 'xs' : 'md'\"\r\n  ></esn-icon>\r\n</div>\r\n\r\n<!-- Not read point -->\r\n<div *ngIf=\"!notification.isRead\" class=\"esn-notification-not-read-point\"></div>", styles: [":host{position:relative}:host .esn-notification-category-INFO{background-color:#155eef}:host .esn-notification-category-SUCCESS{background-color:#039855}:host .esn-notification-category-WARN{background-color:#f79009}:host .esn-notification-category-ERROR{background-color:#d92d20}:host .esn-notification-category-SYSTEM{background-color:#697586}:host .esn-notification-criticality-URGENT{background-color:#b42318}:host .esn-notification-criticality-IMPORTANT{background-color:#f97066}:host .slot2,:host .slot3{position:absolute;width:16px;height:16px}:host .slot2:not(.esn-notification-user-avatar),:host .slot3:not(.esn-notification-user-avatar){display:flex;align-items:center;justify-content:space-around;color:#fff}:host .slot3{top:0;right:0;border-radius:50%}:host .slot2{bottom:0;right:0;border-radius:4px}:host .slot1{width:48px;height:48px}:host .slot1:not(.esn-notification-user-avatar){display:flex;align-items:center;justify-content:space-around;color:#fff;border-radius:50%}:host .esn-notification-not-read-point{position:absolute;top:0;left:-8px;border-radius:50%;height:8px;width:8px}\n"] }]
        }], propDecorators: { notification: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWF2YXRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLWF2YXRhci9ub3RpZmljYXRpb24tYXZhdGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tYXZhdGFyL25vdGlmaWNhdGlvbi1hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQTJCLE1BQU0sZUFBZSxDQUFDOzs7OztBQWN6RSxNQUFNLE9BQU8scUJBQXFCO0lBVGxDO1FBYVMsVUFBSyxHQUFnRCxFQUFFLENBQUM7UUFDeEQsd0JBQW1CLEdBQXVEO1lBQy9FLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixJQUFJLEVBQUUsT0FBTztZQUNiLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFlBQVksRUFBRSxXQUFXO1lBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7U0FDNUIsQ0FBQTtRQUVNLDJCQUFzQixHQUFzRDtZQUNqRixNQUFNLEVBQUUsYUFBYTtZQUNyQixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQTtLQWtCRjtJQWhCQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBRyxDQUFDLElBQUksRUFBQztZQUNQLE9BQU87U0FDUjtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdEIsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFnQyxDQUFDLEVBQUM7Z0JBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFnQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakU7U0FDRjtJQUNILENBQUM7O21IQXBDVSxxQkFBcUI7dUdBQXJCLHFCQUFxQixtTENkbEMsc3NEQWlFZ0Y7NEZEbkRuRSxxQkFBcUI7a0JBVGpDLFNBQVM7K0JBQ0UseUJBQXlCLFFBRzdCO3dCQUNKLEtBQUssRUFBRSx5QkFBeUI7cUJBQ2pDOzhCQU1RLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzbk5vdGlmaWNhdGlvbkNhdGVnb3J5VHlwZUVudW0sIEVzbk5vdGlmaWNhdGlvbkNyaXRpY2FsaXR5RW51bSwgRXNuTm90aWZpY2F0aW9uTW9kZWwsIEVzbk5vdGlmaWNhdGlvblZpZXdUeXBlIH0gZnJvbSAnLi4vbW9kZWwvbm90aWZpY2F0aW9uJztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tbm90aWZpY2F0aW9uLWF2YXRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbi1hdmF0YXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1ub3RpZmljYXRpb24tYXZhdGFyJyxcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXNuTm90aWZpY2F0aW9uQXZhdGFyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIG5vdGlmaWNhdGlvbjogRXNuTm90aWZpY2F0aW9uTW9kZWw7XHJcbiAgcHVibGljIHNsb3RzOiB7W2tleSBpbiBFc25Ob3RpZmljYXRpb25WaWV3VHlwZV0/OiBudW1iZXJ9ID0ge307XHJcbiAgcHVibGljIGNhdGVnb3J5VHlwZUljb25NYXA6IHtba2V5IGluIEVzbk5vdGlmaWNhdGlvbkNhdGVnb3J5VHlwZUVudW1dOiBzdHJpbmd9ID0ge1xyXG4gICAgUkVNSU5ERVI6ICdjbG9jaycsXHJcbiAgICBGT1JNOiAnZWRpdC0zJyxcclxuICAgIE5PVElGWTogJ2JlbGwtcmluZ2luZy0yJyxcclxuICAgIERPTkU6ICdjaGVjaycsXHJcbiAgICBFWENMQU1BVElPTjogJ2FsZXJ0LXNxdWFyZScsXHJcbiAgICBBTk5PVU5DRU1FTlQ6ICdtZWdhcGhvbmUnLFxyXG4gICAgQ09NTUVOVDogJ2Fubm90YXRpb24tYWxlcnQnLFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyaXRpY2FsaXR5VHlwZUljb25NYXA6IHtba2V5IGluIEVzbk5vdGlmaWNhdGlvbkNyaXRpY2FsaXR5RW51bV06IHN0cmluZ30gPSB7XHJcbiAgICBVUkdFTlQ6ICdleGNsYW1hdGlvbicsXHJcbiAgICBJTVBPUlRBTlQ6ICdjaGV2cm9uLXVwLWRvdWJsZScsXHJcbiAgICBOT05FOiAnJyxcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZFNsb3RzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVhZFNsb3RzKCl7XHJcbiAgICB0aGlzLnNsb3RzID0ge307XHJcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5ub3RpZmljYXRpb24udmlldztcclxuICAgIGlmKCF2aWV3KXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBpID0gMzsgaT4wOyBpLS0pe1xyXG4gICAgICBpZighIXZpZXdbJ3Nsb3QnICsgaSBhcyAnc2xvdDEnIHwgJ3Nsb3QyJyB8ICdzbG90MyddKXtcclxuICAgICAgICB0aGlzLnNsb3RzW3ZpZXdbJ3Nsb3QnICsgaSBhcyAnc2xvdDEnIHwgJ3Nsb3QyJyB8ICdzbG90MyddXSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPCEtLSBVc2VyLS0+XHJcbjxkaXZcclxuICAqbmdJZj1cIiEhc2xvdHMuVVNFUiAmJiBub3RpZmljYXRpb24uY29uY2VybmVkVXNlclwiXHJcbiAgY2xhc3M9XCJlc24tbm90aWZpY2F0aW9uLXVzZXItYXZhdGFyXCJcclxuICBbbmdDbGFzc109XCInc2xvdCcgKyBzbG90cy5VU0VSXCJcclxuPlxyXG4gIDxlc24tcGVyc29uLWF2YXRhclxyXG4gICAgW3VzZXJdPVwibm90aWZpY2F0aW9uLmNvbmNlcm5lZFVzZXIhXCJcclxuICAgIFtzaXplXT1cInNsb3RzLlVTRVIgPiAxID8gJ3hzJyA6ICdsZydcIlxyXG4gID48L2Vzbi1wZXJzb24tYXZhdGFyPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gQ3JpdGljYWxpdHkgLS0+XHJcbjxkaXZcclxuICAqbmdJZj1cIlxyXG4gICAgISFzbG90cy5DUklUSUNBTElUWSAmJlxyXG4gICAgbm90aWZpY2F0aW9uLmNyaXRpY2FsaXR5ICYmXHJcbiAgICBub3RpZmljYXRpb24uY3JpdGljYWxpdHkgIT0gJ05PTkUnXHJcbiAgXCJcclxuICBbbmdDbGFzc109XCJcclxuICAgICdzbG90JyArXHJcbiAgICBzbG90cy5DUklUSUNBTElUWSArXHJcbiAgICAnIGVzbi1ub3RpZmljYXRpb24tY3JpdGljYWxpdHktJyArXHJcbiAgICBub3RpZmljYXRpb24uY3JpdGljYWxpdHlcclxuICBcIlxyXG4+XHJcbiAgPGVzbi1pY29uXHJcbiAgICBbbmFtZV09XCJjcml0aWNhbGl0eVR5cGVJY29uTWFwW25vdGlmaWNhdGlvbi5jcml0aWNhbGl0eV1cIlxyXG4gICAgW3NpemVdPVwic2xvdHMuQ1JJVElDQUxJVFkgPiAxID8gJ3hzJyA6ICdtZCdcIlxyXG4gID48L2Vzbi1pY29uPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gQ2F0ZWdvcnkgLS0+XHJcbjxkaXZcclxuICAqbmdJZj1cIiEhc2xvdHMuQ0FURUdPUlkgJiYgbm90aWZpY2F0aW9uLmNhdGVnb3J5XCJcclxuICBbbmdDbGFzc109XCJcclxuICAgICdzbG90JyArXHJcbiAgICBzbG90cy5DQVRFR09SWSArXHJcbiAgICAnIGVzbi1ub3RpZmljYXRpb24tY2F0ZWdvcnktJyArXHJcbiAgICBub3RpZmljYXRpb24uY2F0ZWdvcnkhLmxldmVsXHJcbiAgXCJcclxuPlxyXG4gIDxlc24taWNvblxyXG4gICAgW25hbWVdPVwiY2F0ZWdvcnlUeXBlSWNvbk1hcFtub3RpZmljYXRpb24uY2F0ZWdvcnkhLnR5cGVdXCJcclxuICAgIFtzaXplXT1cInNsb3RzLkNBVEVHT1JZID4gMSA/ICd4cycgOiAnbWQnXCJcclxuICA+PC9lc24taWNvbj5cclxuPC9kaXY+XHJcblxyXG48IS0tIFN1Yi1jYXRlZ29yeSAtLT5cclxuPGRpdlxyXG4gICpuZ0lmPVwiISFzbG90cy5TVUJDQVRFR09SWSAmJiBub3RpZmljYXRpb24uc3ViQ2F0ZWdvcnlcIlxyXG4gIFtuZ0NsYXNzXT1cIlxyXG4gICAgJ3Nsb3QnICtcclxuICAgIHNsb3RzLlNVQkNBVEVHT1JZICtcclxuICAgICcgZXNuLW5vdGlmaWNhdGlvbi1jYXRlZ29yeS0nICtcclxuICAgIG5vdGlmaWNhdGlvbi5zdWJDYXRlZ29yeSEubGV2ZWxcclxuICBcIlxyXG4+XHJcbiAgPGVzbi1pY29uXHJcbiAgICBbbmFtZV09XCJjYXRlZ29yeVR5cGVJY29uTWFwW25vdGlmaWNhdGlvbi5zdWJDYXRlZ29yeSEudHlwZV1cIlxyXG4gICAgW3NpemVdPVwic2xvdHMuU1VCQ0FURUdPUlkgPiAxID8gJ3hzJyA6ICdtZCdcIlxyXG4gID48L2Vzbi1pY29uPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gTm90IHJlYWQgcG9pbnQgLS0+XHJcbjxkaXYgKm5nSWY9XCIhbm90aWZpY2F0aW9uLmlzUmVhZFwiIGNsYXNzPVwiZXNuLW5vdGlmaWNhdGlvbi1ub3QtcmVhZC1wb2ludFwiPjwvZGl2PiJdfQ==