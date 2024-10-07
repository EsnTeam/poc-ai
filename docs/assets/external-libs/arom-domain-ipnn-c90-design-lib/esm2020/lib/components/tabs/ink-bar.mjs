/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/** Class that is applied when a tab indicator is active. */
const ACTIVE_CLASS = 'mdc-tab-indicator--active';
/** Class that is applied when the tab indicator should not transition. */
const NO_TRANSITION_CLASS = 'mdc-tab-indicator--no-transition';
export function mixinInkBarItem(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._fitToContent = false;
        }
        /** Whether the ink bar should fit to the entire tab or just its content. */
        get fitInkBarToContent() {
            return this._fitToContent;
        }
        set fitInkBarToContent(v) {
            const newValue = coerceBooleanProperty(v);
            if (this._fitToContent !== newValue) {
                this._fitToContent = newValue;
                if (this._inkBarElement) {
                    this._appendInkBarElement();
                }
            }
        }
        /** Aligns the ink bar to the current item. */
        activateInkBar(previousIndicatorClientRect) {
            const element = this.elementRef.nativeElement;
            // Early exit if no indicator is present to handle cases where an indicator
            // may be activated without a prior indicator state
            if (!previousIndicatorClientRect ||
                !element.getBoundingClientRect ||
                !this._inkBarContentElement) {
                element.classList.add(ACTIVE_CLASS);
                return;
            }
            // This animation uses the FLIP approach. You can read more about it at the link below:
            // https://aerotwist.com/blog/flip-your-animations/
            // Calculate the dimensions based on the dimensions of the previous indicator
            const currentClientRect = element.getBoundingClientRect();
            const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
            const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
            element.classList.add(NO_TRANSITION_CLASS);
            this._inkBarContentElement.style.setProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);
            // Force repaint before updating classes and transform to ensure the transform properly takes effect
            element.getBoundingClientRect();
            element.classList.remove(NO_TRANSITION_CLASS);
            element.classList.add(ACTIVE_CLASS);
            this._inkBarContentElement.style.setProperty('transform', '');
        }
        /** Removes the ink bar from the current item. */
        deactivateInkBar() {
            this.elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
        }
        /** Initializes the foundation. */
        ngOnInit() {
            this._createInkBarElement();
        }
        /** Destroys the foundation. */
        ngOnDestroy() {
            this._inkBarElement?.remove();
            this._inkBarElement = this._inkBarContentElement = null;
        }
        /** Creates and appends the ink bar element. */
        _createInkBarElement() {
            const documentNode = this.elementRef.nativeElement.ownerDocument || document;
            this._inkBarElement = documentNode.createElement('span');
            this._inkBarContentElement = documentNode.createElement('span');
            this._inkBarElement.className = 'mdc-tab-indicator';
            this._inkBarContentElement.className =
                'mdc-tab-indicator__content mdc-tab-indicator__content--underline';
            this._inkBarElement.appendChild(this._inkBarContentElement);
            this._appendInkBarElement();
        }
        /**
         * Appends the ink bar to the tab host element or content, depending on whether
         * the ink bar should fit to content.
         */
        _appendInkBarElement() {
            // if (!this._inkBarElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            //   throw Error('Ink bar element has not been created and cannot be appended');
            // }
            const parentElement = this._fitToContent
                ? this.elementRef.nativeElement.querySelector('.mdc-tab__content')
                : this.elementRef.nativeElement;
            // if (!parentElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            //   throw Error('Missing element to host the ink bar');
            // }
            parentElement.appendChild(this._inkBarElement);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5rLWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhYnMvaW5rLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFVNUUsNERBQTREO0FBQzVELE1BQU0sWUFBWSxHQUFHLDJCQUEyQixDQUFDO0FBRWpELDBFQUEwRTtBQUMxRSxNQUFNLG1CQUFtQixHQUFHLGtDQUFrQyxDQUFDO0FBRy9ELE1BQU0sVUFBVSxlQUFlLENBRTdCLElBQU87SUFDUCxPQUFPLEtBQU0sU0FBUSxJQUFJO1FBQ3ZCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBS1Qsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFKOUIsQ0FBQztRQU1ELDRFQUE0RTtRQUM1RSxJQUFJLGtCQUFrQjtZQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksa0JBQWtCLENBQUMsQ0FBZTtZQUNwQyxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztnQkFFOUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztpQkFDN0I7YUFDRjtRQUNILENBQUM7UUFFRCw4Q0FBOEM7UUFDOUMsY0FBYyxDQUFDLDJCQUF3QztZQUNyRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUU5QywyRUFBMkU7WUFD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Q0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWF0SW5rQmFySXRlbSBleHRlbmRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBhY3RpdmF0ZUlua0JhcihwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3Q/OiBDbGllbnRSZWN0KTogdm9pZDtcclxuICBkZWFjdGl2YXRlSW5rQmFyKCk6IHZvaWQ7XHJcbiAgZml0SW5rQmFyVG9Db250ZW50OiBib29sZWFuO1xyXG59XHJcblxyXG4vKiogQ2xhc3MgdGhhdCBpcyBhcHBsaWVkIHdoZW4gYSB0YWIgaW5kaWNhdG9yIGlzIGFjdGl2ZS4gKi9cclxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ21kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUnO1xyXG5cclxuLyoqIENsYXNzIHRoYXQgaXMgYXBwbGllZCB3aGVuIHRoZSB0YWIgaW5kaWNhdG9yIHNob3VsZCBub3QgdHJhbnNpdGlvbi4gKi9cclxuY29uc3QgTk9fVFJBTlNJVElPTl9DTEFTUyA9ICdtZGMtdGFiLWluZGljYXRvci0tbm8tdHJhbnNpdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1peGluSW5rQmFySXRlbTxcclxuICBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4ge2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+fSxcclxuPihiYXNlOiBUKTogVCAmIChuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBNYXRJbmtCYXJJdGVtKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbmtCYXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pbmtCYXJDb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZml0VG9Db250ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIFdoZXRoZXIgdGhlIGluayBiYXIgc2hvdWxkIGZpdCB0byB0aGUgZW50aXJlIHRhYiBvciBqdXN0IGl0cyBjb250ZW50LiAqL1xyXG4gICAgZ2V0IGZpdElua0JhclRvQ29udGVudCgpOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2ZpdFRvQ29udGVudDtcclxuICAgIH1cclxuICAgIHNldCBmaXRJbmtCYXJUb0NvbnRlbnQodjogQm9vbGVhbklucHV0KSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2ZpdFRvQ29udGVudCAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9maXRUb0NvbnRlbnQgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lua0JhckVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMuX2FwcGVuZElua0JhckVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQWxpZ25zIHRoZSBpbmsgYmFyIHRvIHRoZSBjdXJyZW50IGl0ZW0uICovXHJcbiAgICBhY3RpdmF0ZUlua0JhcihwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3Q/OiBDbGllbnRSZWN0KSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxyXG4gICAgICAvLyBtYXkgYmUgYWN0aXZhdGVkIHdpdGhvdXQgYSBwcmlvciBpbmRpY2F0b3Igc3RhdGVcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgfHxcclxuICAgICAgICAhZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgfHxcclxuICAgICAgICAhdGhpcy5faW5rQmFyQ29udGVudEVsZW1lbnRcclxuICAgICAgKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKEFDVElWRV9DTEFTUyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGlzIGFuaW1hdGlvbiB1c2VzIHRoZSBGTElQIGFwcHJvYWNoLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBhdCB0aGUgbGluayBiZWxvdzpcclxuICAgICAgLy8gaHR0cHM6Ly9hZXJvdHdpc3QuY29tL2Jsb2cvZmxpcC15b3VyLWFuaW1hdGlvbnMvXHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHByZXZpb3VzIGluZGljYXRvclxyXG4gICAgICBjb25zdCBjdXJyZW50Q2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHdpZHRoRGVsdGEgPSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3Qud2lkdGggLyBjdXJyZW50Q2xpZW50UmVjdC53aWR0aDtcclxuICAgICAgY29uc3QgeFBvc2l0aW9uID0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0LmxlZnQgLSBjdXJyZW50Q2xpZW50UmVjdC5sZWZ0O1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoTk9fVFJBTlNJVElPTl9DTEFTUyk7XHJcbiAgICAgIHRoaXMuX2lua0JhckNvbnRlbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGVYKCR7eFBvc2l0aW9ufXB4KSBzY2FsZVgoJHt3aWR0aERlbHRhfSlgLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gRm9yY2UgcmVwYWludCBiZWZvcmUgdXBkYXRpbmcgY2xhc3NlcyBhbmQgdHJhbnNmb3JtIHRvIGVuc3VyZSB0aGUgdHJhbnNmb3JtIHByb3Blcmx5IHRha2VzIGVmZmVjdFxyXG4gICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE5PX1RSQU5TSVRJT05fQ0xBU1MpO1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcclxuICAgICAgdGhpcy5faW5rQmFyQ29udGVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmVtb3ZlcyB0aGUgaW5rIGJhciBmcm9tIHRoZSBjdXJyZW50IGl0ZW0uICovXHJcbiAgICBkZWFjdGl2YXRlSW5rQmFyKCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTUyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEluaXRpYWxpemVzIHRoZSBmb3VuZGF0aW9uLiAqL1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZUlua0JhckVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGVzdHJveXMgdGhlIGZvdW5kYXRpb24uICovXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgdGhpcy5faW5rQmFyRWxlbWVudD8ucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuX2lua0JhckVsZW1lbnQgPSB0aGlzLl9pbmtCYXJDb250ZW50RWxlbWVudCA9IG51bGwhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZCBhcHBlbmRzIHRoZSBpbmsgYmFyIGVsZW1lbnQuICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVJbmtCYXJFbGVtZW50KCkge1xyXG4gICAgICBjb25zdCBkb2N1bWVudE5vZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xyXG4gICAgICB0aGlzLl9pbmtCYXJFbGVtZW50ID0gZG9jdW1lbnROb2RlLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5faW5rQmFyQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudE5vZGUuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgICAgdGhpcy5faW5rQmFyRWxlbWVudC5jbGFzc05hbWUgPSAnbWRjLXRhYi1pbmRpY2F0b3InO1xyXG4gICAgICB0aGlzLl9pbmtCYXJDb250ZW50RWxlbWVudC5jbGFzc05hbWUgPVxyXG4gICAgICAgICdtZGMtdGFiLWluZGljYXRvcl9fY29udGVudCBtZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lJztcclxuXHJcbiAgICAgIHRoaXMuX2lua0JhckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5faW5rQmFyQ29udGVudEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl9hcHBlbmRJbmtCYXJFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmRzIHRoZSBpbmsgYmFyIHRvIHRoZSB0YWIgaG9zdCBlbGVtZW50IG9yIGNvbnRlbnQsIGRlcGVuZGluZyBvbiB3aGV0aGVyXHJcbiAgICAgKiB0aGUgaW5rIGJhciBzaG91bGQgZml0IHRvIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2FwcGVuZElua0JhckVsZW1lbnQoKSB7XHJcbiAgICAgIC8vIGlmICghdGhpcy5faW5rQmFyRWxlbWVudCAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xyXG4gICAgICAvLyAgIHRocm93IEVycm9yKCdJbmsgYmFyIGVsZW1lbnQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQgYW5kIGNhbm5vdCBiZSBhcHBlbmRlZCcpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5fZml0VG9Db250ZW50XHJcbiAgICAgICAgPyB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXRhYl9fY29udGVudCcpXHJcbiAgICAgICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIC8vIGlmICghcGFyZW50RWxlbWVudCAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xyXG4gICAgICAvLyAgIHRocm93IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgdG8gaG9zdCB0aGUgaW5rIGJhcicpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBwYXJlbnRFbGVtZW50IS5hcHBlbmRDaGlsZCh0aGlzLl9pbmtCYXJFbGVtZW50ISk7XHJcbiAgICB9XHJcbiAgfTtcclxufSJdfQ==