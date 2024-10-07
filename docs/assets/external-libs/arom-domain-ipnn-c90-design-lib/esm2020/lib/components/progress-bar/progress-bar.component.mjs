import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
const DEFAULT_COLOR = 'primary';
const DEFAULT_MODE = 'indeterminate';
export class ProgressBarComponent {
    constructor() {
        this.color = DEFAULT_COLOR;
        this.mode = DEFAULT_MODE;
        this.bufferValue = 0;
        this.animationEnd = new EventEmitter();
    }
    onAnimationEnd($event) {
        this.animationEnd?.emit($event);
    }
}
ProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ProgressBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ProgressBarComponent, selector: "esn-progress-bar", inputs: { color: "color", mode: "mode", bufferValue: "bufferValue", value: "value" }, outputs: { animationEnd: "animationEnd" }, host: { properties: { "class.esn-progressbar-primary": "color === 'primary'", "class.esn-progressbar-accent": "color === 'accent'", "class.esn-progressbar-success": "color === 'success'", "class.esn-progressbar-error": "color === 'error'", "class.esn-progressbar-neutral": "color === 'neutral'" }, classAttribute: "esn-progressbar" }, ngImport: i0, template: "<mat-progress-bar\r\n  [mode]=\"mode\"\r\n  [bufferValue]=\"bufferValue\"\r\n  [value]=\"value\"\r\n  (animationEnd)=\"onAnimationEnd($event)\"\r\n></mat-progress-bar>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'esn-progress-bar', host: {
                        class: 'esn-progressbar',
                        '[class.esn-progressbar-primary]': `color === 'primary'`,
                        '[class.esn-progressbar-accent]': `color === 'accent'`,
                        '[class.esn-progressbar-success]': `color === 'success'`,
                        '[class.esn-progressbar-error]': `color === 'error'`,
                        '[class.esn-progressbar-neutral]': `color === 'neutral'`,
                    }, template: "<mat-progress-bar\r\n  [mode]=\"mode\"\r\n  [bufferValue]=\"bufferValue\"\r\n  [value]=\"value\"\r\n  (animationEnd)=\"onAnimationEnd($event)\"\r\n></mat-progress-bar>\r\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], mode: [{
                type: Input
            }], bufferValue: [{
                type: Input
            }], value: [{
                type: Input
            }], animationEnd: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFRckUsTUFBTSxhQUFhLEdBQXdCLFNBQVMsQ0FBQztBQUNyRCxNQUFNLFlBQVksR0FBdUIsZUFBZSxDQUFDO0FBZ0J6RCxNQUFNLE9BQU8sb0JBQW9CO0lBZGpDO1FBZVcsVUFBSyxHQUF3QixhQUFhLENBQUM7UUFDM0MsU0FBSSxHQUF1QixZQUFZLENBQUU7UUFDekMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFHZixpQkFBWSxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQTtLQU01RztJQUpDLGNBQWMsQ0FBQyxNQUErQjtRQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwQyxDQUFDOztrSEFYVSxvQkFBb0I7c0dBQXBCLG9CQUFvQix3Z0JDekJqQyw2S0FNQTs0RkRtQmEsb0JBQW9CO2tCQWRoQyxTQUFTOytCQUNFLGtCQUFrQixRQUd0Qjt3QkFDSixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixpQ0FBaUMsRUFBRSxxQkFBcUI7d0JBQ3hELGdDQUFnQyxFQUFFLG9CQUFvQjt3QkFDdEQsaUNBQWlDLEVBQUUscUJBQXFCO3dCQUN4RCwrQkFBK0IsRUFBRSxtQkFBbUI7d0JBQ3BELGlDQUFpQyxFQUFFLHFCQUFxQjtxQkFDekQ7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFSSxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBFc25Qcm9ncmVzc0Jhck1vZGUgPSAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnIHwgJ2J1ZmZlcicgfCAncXVlcnknO1xyXG5leHBvcnQgdHlwZSBFc25Qcm9ncmVzc0JhckNvbG9yID0gJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ25ldXRyYWwnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgaW50ZXJmYWNlIEVzblByb2dyZXNzQW5pbWF0aW9uRW5kIHtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0NPTE9SOiBFc25Qcm9ncmVzc0JhckNvbG9yID0gJ3ByaW1hcnknO1xyXG5jb25zdCBERUZBVUxUX01PREU6IEVzblByb2dyZXNzQmFyTW9kZSA9ICdpbmRldGVybWluYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLXByb2dyZXNzLWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24tcHJvZ3Jlc3NiYXInLFxyXG4gICAgJ1tjbGFzcy5lc24tcHJvZ3Jlc3NiYXItcHJpbWFyeV0nOiBgY29sb3IgPT09ICdwcmltYXJ5J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1wcm9ncmVzc2Jhci1hY2NlbnRdJzogYGNvbG9yID09PSAnYWNjZW50J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1wcm9ncmVzc2Jhci1zdWNjZXNzXSc6IGBjb2xvciA9PT0gJ3N1Y2Nlc3MnYCxcclxuICAgICdbY2xhc3MuZXNuLXByb2dyZXNzYmFyLWVycm9yXSc6IGBjb2xvciA9PT0gJ2Vycm9yJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1wcm9ncmVzc2Jhci1uZXV0cmFsXSc6IGBjb2xvciA9PT0gJ25ldXRyYWwnYCxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb2xvcjogRXNuUHJvZ3Jlc3NCYXJDb2xvciA9IERFRkFVTFRfQ09MT1I7XHJcbiAgQElucHV0KCkgbW9kZTogRXNuUHJvZ3Jlc3NCYXJNb2RlID0gREVGQVVMVF9NT0RFIDtcclxuICBASW5wdXQoKSBidWZmZXJWYWx1ZSA9IDA7XHJcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkVuZDogRXZlbnRFbWl0dGVyPEVzblByb2dyZXNzQW5pbWF0aW9uRW5kPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXNuUHJvZ3Jlc3NBbmltYXRpb25FbmQ+KClcclxuXHJcbiAgb25BbmltYXRpb25FbmQoJGV2ZW50OiBFc25Qcm9ncmVzc0FuaW1hdGlvbkVuZCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZD8uZW1pdCgkZXZlbnQpO1xyXG4gICAgXHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtcHJvZ3Jlc3MtYmFyXHJcbiAgW21vZGVdPVwibW9kZVwiXHJcbiAgW2J1ZmZlclZhbHVlXT1cImJ1ZmZlclZhbHVlXCJcclxuICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gIChhbmltYXRpb25FbmQpPVwib25BbmltYXRpb25FbmQoJGV2ZW50KVwiXHJcbj48L21hdC1wcm9ncmVzcy1iYXI+XHJcbiJdfQ==