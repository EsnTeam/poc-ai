/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
export interface MatInkBarItem extends OnInit, OnDestroy {
    elementRef: ElementRef<HTMLElement>;
    activateInkBar(previousIndicatorClientRect?: ClientRect): void;
    deactivateInkBar(): void;
    fitInkBarToContent: boolean;
}
export declare function mixinInkBarItem<T extends new (...args: any[]) => {
    elementRef: ElementRef<HTMLElement>;
}>(base: T): T & (new (...args: any[]) => MatInkBarItem);
