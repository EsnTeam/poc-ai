import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { EsnUtils } from '../../../utils/public-api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icon/icon.component";
import * as i3 from "../../icon/icon-bg.component";
import * as i4 from "../file-size.pipe";
export class EsnFileSelector {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.multiple = true;
        this.disabled = true;
        this.accept = '*';
        this.filesAdded = new EventEmitter();
        this.identifier = '';
        this.acceptedExtensions = '*';
    }
    ngOnInit() {
        this.identifier = EsnUtils.generateRandomUuid();
    }
    async ngAfterViewInit() {
        if (this.elementRef) {
            const dropArea = this.elementRef.nativeElement;
            dropArea.addEventListener('dragover', (event) => {
                event.stopPropagation();
                event.preventDefault();
                dropArea.classList.add('esn-file-selector--active');
                // Style the drag-and-drop as a "copy file" operation.
                if (event && event.dataTransfer) {
                    event.dataTransfer.dropEffect = 'copy';
                }
            });
            dropArea?.addEventListener('dragleave', (event) => {
                dropArea.classList.remove('esn-file-selector--active');
            });
            dropArea?.addEventListener('drop', (event) => {
                event.stopPropagation();
                event.preventDefault();
                dropArea.classList.remove('esn-file-selector--active');
                if (event && event.dataTransfer) {
                    this.filesAdded.emit(event.dataTransfer.files);
                }
            });
            if (window.FileList && window.File && dropArea) {
                dropArea.addEventListener('change', async (event) => {
                    this.filesAdded.emit(event.target.files);
                    event.target.value = null;
                });
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['fileTypesLabel']) {
            this.acceptedExtensions = this.fileTypesLabel?.split(',').map(s => '.' + s.trim()).join(',');
        }
    }
}
EsnFileSelector.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileSelector, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
EsnFileSelector.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnFileSelector, selector: "esn-file-selector", inputs: { multiple: "multiple", disabled: "disabled", accept: "accept", fileTypesLabel: "fileTypesLabel", text: "text", maxSize: "maxSize" }, outputs: { filesAdded: "filesAdded" }, host: { classAttribute: "esn-file-selector" }, usesOnChanges: true, ngImport: i0, template: "<label [for]=\"'file-input-' + identifier\" [ngClass]=\"{'disabled': disabled}\">\r\n  <esn-icon-bg color=\"neutral\" type=\"mono\" shape=\"circle\">\r\n    <esn-icon name=\"file\"></esn-icon>\r\n  </esn-icon-bg>\r\n  <div *ngIf=\"!text\">\r\n    <span class=\"placeholder\">\r\n      Glissez et d\u00E9posez\r\n      {{ !multiple ? \"un seul fichier\" : \"vos fichiers\"}} ou\r\n      <span class=\"browse\">parcourir</span>\r\n    </span>\r\n    <br/>\r\n    <span class=\"subplaceholder\">{{!!fileTypesLabel ?  fileTypesLabel : \"\"}} {{!!maxSize ?  '(Max. ' + (maxSize | fileSize) +')' : \"\"}}</span>\r\n\r\n  </div>\r\n  <div *ngIf=\"!!text\" class=\"selector-text\">{{ text }}</div>\r\n  <ng-content></ng-content>\r\n  <input [disabled]=\"disabled\" [id]=\"'file-input-' + identifier\" multiple type=\"file\" [accept]=\"acceptedExtensions\"/>\r\n</label>\r\n", styles: [":host.esn-file-selector--active{opacity:.6}:host label{cursor:pointer;min-height:4rem;border-radius:8px;padding:12px;display:block;text-align:center;transition:.3s;transform:scale(1);box-sizing:border-box}:host label .esn-icon-bg{margin-bottom:1rem}:host label .placeholder,:host label .selector-text{font-size:.875rem;line-height:1.25rem;font-weight:400}:host label .subplaceholder{font-size:.75rem;line-height:1.125rem;font-weight:400}:host label input{display:none}:host label.disabled{opacity:.5;cursor:default}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EsnIcon, selector: "esn-icon", inputs: ["name", "boxed", "size"] }, { kind: "component", type: i3.EsnIconBg, selector: "esn-icon-bg", inputs: ["shape", "type", "color", "shade", "rings", "theme"] }, { kind: "pipe", type: i4.FileSizePipe, name: "fileSize" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileSelector, decorators: [{
            type: Component,
            args: [{ selector: 'esn-file-selector', host: {
                        class: 'esn-file-selector',
                    }, template: "<label [for]=\"'file-input-' + identifier\" [ngClass]=\"{'disabled': disabled}\">\r\n  <esn-icon-bg color=\"neutral\" type=\"mono\" shape=\"circle\">\r\n    <esn-icon name=\"file\"></esn-icon>\r\n  </esn-icon-bg>\r\n  <div *ngIf=\"!text\">\r\n    <span class=\"placeholder\">\r\n      Glissez et d\u00E9posez\r\n      {{ !multiple ? \"un seul fichier\" : \"vos fichiers\"}} ou\r\n      <span class=\"browse\">parcourir</span>\r\n    </span>\r\n    <br/>\r\n    <span class=\"subplaceholder\">{{!!fileTypesLabel ?  fileTypesLabel : \"\"}} {{!!maxSize ?  '(Max. ' + (maxSize | fileSize) +')' : \"\"}}</span>\r\n\r\n  </div>\r\n  <div *ngIf=\"!!text\" class=\"selector-text\">{{ text }}</div>\r\n  <ng-content></ng-content>\r\n  <input [disabled]=\"disabled\" [id]=\"'file-input-' + identifier\" multiple type=\"file\" [accept]=\"acceptedExtensions\"/>\r\n</label>\r\n", styles: [":host.esn-file-selector--active{opacity:.6}:host label{cursor:pointer;min-height:4rem;border-radius:8px;padding:12px;display:block;text-align:center;transition:.3s;transform:scale(1);box-sizing:border-box}:host label .esn-icon-bg{margin-bottom:1rem}:host label .placeholder,:host label .selector-text{font-size:.875rem;line-height:1.25rem;font-weight:400}:host label .subplaceholder{font-size:.75rem;line-height:1.125rem;font-weight:400}:host label input{display:none}:host label.disabled{opacity:.5;cursor:default}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { multiple: [{
                type: Input
            }], disabled: [{
                type: Input
            }], accept: [{
                type: Input
            }], fileTypesLabel: [{
                type: Input
            }], text: [{
                type: Input
            }], maxSize: [{
                type: Input
            }], filesAdded: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLWlucHV0L2ZpbGUtc2VsZWN0b3IvZmlsZS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLWlucHV0L2ZpbGUtc2VsZWN0b3IvZmlsZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7O0FBVXJELE1BQU0sT0FBTyxlQUFlO0lBWTFCLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFYaEMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFJcEIsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsdUJBQWtCLEdBQXVCLEdBQUcsQ0FBQztJQUVSLENBQUM7SUFFN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlO1FBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUUvQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ25ELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUNwRCxzREFBc0Q7Z0JBQ3RELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQy9CLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztpQkFDeEM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDckQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDaEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ3ZELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBMEIsQ0FBQyxDQUFDO2lCQUNyRTtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO2dCQUM5QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtvQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUY7SUFDSCxDQUFDOzs2R0ExRFUsZUFBZTtpR0FBZixlQUFlLGtUQ3BCNUIsbTJCQWtCQTs0RkRFYSxlQUFlO2tCQVIzQixTQUFTOytCQUNFLG1CQUFtQixRQUd2Qjt3QkFDSixLQUFLLEVBQUUsbUJBQW1CO3FCQUMzQjtpR0FHUSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25VdGlscyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tZmlsZS1zZWxlY3RvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1maWxlLXNlbGVjdG9yJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuRmlsZVNlbGVjdG9yIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmcgPSAnKic7XHJcbiAgQElucHV0KCkgZmlsZVR5cGVzTGFiZWw/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGV4dD86IHN0cmluZztcclxuICBASW5wdXQoKSBtYXhTaXplPzogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBmaWxlc0FkZGVkOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIGlkZW50aWZpZXI6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBhY2NlcHRlZEV4dGVuc2lvbnM6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcqJztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pZGVudGlmaWVyID0gRXNuVXRpbHMuZ2VuZXJhdGVSYW5kb21VdWlkKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ0FmdGVyVmlld0luaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmKSB7XHJcbiAgICAgIGNvbnN0IGRyb3BBcmVhID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICBkcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkcm9wQXJlYS5jbGFzc0xpc3QuYWRkKCdlc24tZmlsZS1zZWxlY3Rvci0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gU3R5bGUgdGhlIGRyYWctYW5kLWRyb3AgYXMgYSBcImNvcHkgZmlsZVwiIG9wZXJhdGlvbi5cclxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZHJvcEFyZWE/LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZXNuLWZpbGUtc2VsZWN0b3ItLWFjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRyb3BBcmVhPy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2Vzbi1maWxlLXNlbGVjdG9yLS1hY3RpdmUnKTtcclxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbGVzQWRkZWQuZW1pdChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMgYXMgdW5rbm93biBhcyBGaWxlW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAod2luZG93LkZpbGVMaXN0ICYmIHdpbmRvdy5GaWxlICYmIGRyb3BBcmVhKSB7XHJcbiAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsZXNBZGRlZC5lbWl0KGV2ZW50LnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZihjaGFuZ2VzWydmaWxlVHlwZXNMYWJlbCddKSB7XHJcbiAgICAgIHRoaXMuYWNjZXB0ZWRFeHRlbnNpb25zID0gdGhpcy5maWxlVHlwZXNMYWJlbD8uc3BsaXQoJywnKS5tYXAocyA9PiAnLicgKyBzLnRyaW0oKSkuam9pbignLCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bGFiZWwgW2Zvcl09XCInZmlsZS1pbnB1dC0nICsgaWRlbnRpZmllclwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBkaXNhYmxlZH1cIj5cclxuICA8ZXNuLWljb24tYmcgY29sb3I9XCJuZXV0cmFsXCIgdHlwZT1cIm1vbm9cIiBzaGFwZT1cImNpcmNsZVwiPlxyXG4gICAgPGVzbi1pY29uIG5hbWU9XCJmaWxlXCI+PC9lc24taWNvbj5cclxuICA8L2Vzbi1pY29uLWJnPlxyXG4gIDxkaXYgKm5nSWY9XCIhdGV4dFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJwbGFjZWhvbGRlclwiPlxyXG4gICAgICBHbGlzc2V6IGV0IGTDqXBvc2V6XHJcbiAgICAgIHt7ICFtdWx0aXBsZSA/IFwidW4gc2V1bCBmaWNoaWVyXCIgOiBcInZvcyBmaWNoaWVyc1wifX0gb3VcclxuICAgICAgPHNwYW4gY2xhc3M9XCJicm93c2VcIj5wYXJjb3VyaXI8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YnIvPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzdWJwbGFjZWhvbGRlclwiPnt7ISFmaWxlVHlwZXNMYWJlbCA/ICBmaWxlVHlwZXNMYWJlbCA6IFwiXCJ9fSB7eyEhbWF4U2l6ZSA/ICAnKE1heC4gJyArIChtYXhTaXplIHwgZmlsZVNpemUpICsnKScgOiBcIlwifX08L3NwYW4+XHJcblxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCIhIXRleHRcIiBjbGFzcz1cInNlbGVjdG9yLXRleHRcIj57eyB0ZXh0IH19PC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDxpbnB1dCBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbaWRdPVwiJ2ZpbGUtaW5wdXQtJyArIGlkZW50aWZpZXJcIiBtdWx0aXBsZSB0eXBlPVwiZmlsZVwiIFthY2NlcHRdPVwiYWNjZXB0ZWRFeHRlbnNpb25zXCIvPlxyXG48L2xhYmVsPlxyXG4iXX0=