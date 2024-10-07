/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { trigger, state, style, animate, transition, } from '@angular/animations';
/**
 * Animations used by the esn-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 */
export const esnMenuAnimations = {
    /**
     * This animation controls the menu panel's entry and exit from the page.
     *
     * When the menu panel is added to the DOM, it scales in and fades in its border.
     *
     * When the menu panel is removed from the DOM, it simply fades out after a brief
     * delay to display the ripple.
     */
    transformMenu: trigger('transformMenu', [
        state('void', style({
            opacity: 0,
            transform: 'scale(0.8)',
        })),
        transition('void => enter', animate('120ms cubic-bezier(0, 0, 0.2, 1)', style({
            opacity: 1,
            transform: 'scale(1)',
        }))),
        transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 }))),
    ]),
    /**
     * This animation fades in the background color and content of the menu panel
     * after its containing element is scaled in.
     */
    fadeInItems: trigger('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        state('showing', style({ opacity: 1 })),
        transition('void => *', [
            style({ opacity: 0 }),
            animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
        ]),
    ]),
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
export const fadeInItems = esnMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
export const transformMenu = esnMenuAnimations.transformMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVudS9tZW51LWFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEdBRVgsTUFBTSxxQkFBcUIsQ0FBQztBQUU3Qjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUcxQjtJQUNGOzs7Ozs7O09BT0c7SUFDSCxhQUFhLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRTtRQUN0QyxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQyxDQUNIO1FBQ0QsVUFBVSxDQUNSLGVBQWUsRUFDZixPQUFPLENBQ0wsa0NBQWtDLEVBQ2xDLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQyxDQUNILENBQ0Y7UUFDRCxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNFLENBQUM7SUFFRjs7O09BR0c7SUFDSCxXQUFXLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRTtRQUNsQyxxREFBcUQ7UUFDckQsZ0RBQWdEO1FBQ2hELEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUN0QixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO1NBQ3hELENBQUM7S0FDSCxDQUFDO0NBQ0gsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDO0FBRXpEOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgc3RhdGUsXHJcbiAgc3R5bGUsXHJcbiAgYW5pbWF0ZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBBbmltYXRpb25zIHVzZWQgYnkgdGhlIGVzbi1tZW51IGNvbXBvbmVudC5cclxuICogQW5pbWF0aW9uIGR1cmF0aW9uIGFuZCB0aW1pbmcgdmFsdWVzIGFyZSBiYXNlZCBvbjpcclxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL2NvbXBvbmVudHMvbWVudXMuaHRtbCNtZW51cy11c2FnZVxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXNuTWVudUFuaW1hdGlvbnM6IHtcclxuICByZWFkb25seSB0cmFuc2Zvcm1NZW51OiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGE7XHJcbiAgcmVhZG9ubHkgZmFkZUluSXRlbXM6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YTtcclxufSA9IHtcclxuICAvKipcclxuICAgKiBUaGlzIGFuaW1hdGlvbiBjb250cm9scyB0aGUgbWVudSBwYW5lbCdzIGVudHJ5IGFuZCBleGl0IGZyb20gdGhlIHBhZ2UuXHJcbiAgICpcclxuICAgKiBXaGVuIHRoZSBtZW51IHBhbmVsIGlzIGFkZGVkIHRvIHRoZSBET00sIGl0IHNjYWxlcyBpbiBhbmQgZmFkZXMgaW4gaXRzIGJvcmRlci5cclxuICAgKlxyXG4gICAqIFdoZW4gdGhlIG1lbnUgcGFuZWwgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00sIGl0IHNpbXBseSBmYWRlcyBvdXQgYWZ0ZXIgYSBicmllZlxyXG4gICAqIGRlbGF5IHRvIGRpc3BsYXkgdGhlIHJpcHBsZS5cclxuICAgKi9cclxuICB0cmFuc2Zvcm1NZW51OiB0cmlnZ2VyKCd0cmFuc2Zvcm1NZW51JywgW1xyXG4gICAgc3RhdGUoXHJcbiAgICAgICd2b2lkJyxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbiAgICAgIH0pLFxyXG4gICAgKSxcclxuICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICd2b2lkID0+IGVudGVyJyxcclxuICAgICAgYW5pbWF0ZShcclxuICAgICAgICAnMTIwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApLFxyXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSksXHJcbiAgXSksXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYW5pbWF0aW9uIGZhZGVzIGluIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBjb250ZW50IG9mIHRoZSBtZW51IHBhbmVsXHJcbiAgICogYWZ0ZXIgaXRzIGNvbnRhaW5pbmcgZWxlbWVudCBpcyBzY2FsZWQgaW4uXHJcbiAgICovXHJcbiAgZmFkZUluSXRlbXM6IHRyaWdnZXIoJ2ZhZGVJbkl0ZW1zJywgW1xyXG4gICAgLy8gVE9ETyhjcmlzYmV0byk6IHRoaXMgaXMgaW5zaWRlIHRoZSBgdHJhbnNmb3JtTWVudWBcclxuICAgIC8vIG5vdy4gUmVtb3ZlIG5leHQgdGltZSB3ZSBkbyBicmVha2luZyBjaGFuZ2VzLlxyXG4gICAgc3RhdGUoJ3Nob3dpbmcnLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcclxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgc3R5bGUoe29wYWNpdHk6IDB9KSxcclxuICAgICAgYW5pbWF0ZSgnNDAwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMiknKSxcclxuICAgIF0pLFxyXG4gIF0pLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkl0ZW1zID0gZXNuTWVudUFuaW1hdGlvbnMuZmFkZUluSXRlbXM7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWRcclxuICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtTWVudSA9IGVzbk1lbnVBbmltYXRpb25zLnRyYW5zZm9ybU1lbnU7XHJcbiJdfQ==