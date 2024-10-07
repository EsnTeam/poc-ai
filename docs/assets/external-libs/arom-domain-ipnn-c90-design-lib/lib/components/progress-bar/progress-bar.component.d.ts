import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare type EsnProgressBarMode = 'determinate' | 'indeterminate' | 'buffer' | 'query';
export declare type EsnProgressBarColor = 'primary' | 'accent' | 'success' | 'error' | 'neutral' | undefined;
export interface EsnProgressAnimationEnd {
    value: number;
}
export declare class ProgressBarComponent {
    color: EsnProgressBarColor;
    mode: EsnProgressBarMode;
    bufferValue: number;
    value: number;
    animationEnd: EventEmitter<EsnProgressAnimationEnd>;
    onAnimationEnd($event: EsnProgressAnimationEnd): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "esn-progress-bar", never, { "color": "color"; "mode": "mode"; "bufferValue": "bufferValue"; "value": "value"; }, { "animationEnd": "animationEnd"; }, never, never, false, never>;
}
