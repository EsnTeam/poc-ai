/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { animate, state, style, transition, trigger, } from '@angular/animations';
export const DEFAULT_HORIZONTAL_ANIMATION_DURATION = '500ms';
export const DEFAULT_VERTICAL_ANIMATION_DURATION = '225ms';
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
export const esnStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: trigger('horizontalStepTransition', [
        state('previous', style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        state('current', style({ transform: 'none', visibility: 'inherit' })),
        state('next', style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        transition('* => *', animate('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)'), {
            params: { 'animationDuration': DEFAULT_HORIZONTAL_ANIMATION_DURATION },
        }),
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: trigger('verticalStepTransition', [
        state('previous', style({ height: '0px', visibility: 'hidden' })),
        state('next', style({ height: '0px', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        state('current', style({ height: '*', visibility: 'inherit' })),
        transition('* <=> current', animate('{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)'), {
            params: { 'animationDuration': DEFAULT_VERTICAL_ANIMATION_DURATION },
        }),
    ]),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLWFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEdBRVIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FBRyxPQUFPLENBQUM7QUFDN0QsTUFBTSxDQUFDLE1BQU0sbUNBQW1DLEdBQUcsT0FBTyxDQUFDO0FBRTNEOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUc3QjtJQUNGLG9GQUFvRjtJQUNwRix3QkFBd0IsRUFBRSxPQUFPLENBQUMsMEJBQTBCLEVBQUU7UUFDNUQsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDdkYsa0RBQWtEO1FBQ2xELGlFQUFpRTtRQUNqRSw4REFBOEQ7UUFDOUQsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLHNEQUFzRCxDQUFDLEVBQUU7WUFDcEYsTUFBTSxFQUFFLEVBQUMsbUJBQW1CLEVBQUUscUNBQXFDLEVBQUM7U0FDckUsQ0FBQztLQUNILENBQUM7SUFFRixrRkFBa0Y7SUFDbEYsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixFQUFFO1FBQ3hELEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDM0Qsa0RBQWtEO1FBQ2xELGlFQUFpRTtRQUNqRSw4REFBOEQ7UUFDOUQsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQzdELFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLHNEQUFzRCxDQUFDLEVBQUU7WUFDM0YsTUFBTSxFQUFFLEVBQUMsbUJBQW1CLEVBQUUsbUNBQW1DLEVBQUM7U0FDbkUsQ0FBQztLQUNILENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcbmltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9BTklNQVRJT05fRFVSQVRJT04gPSAnNTAwbXMnO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9WRVJUSUNBTF9BTklNQVRJT05fRFVSQVRJT04gPSAnMjI1bXMnO1xyXG5cclxuLyoqXHJcbiAqIEFuaW1hdGlvbnMgdXNlZCBieSB0aGUgTWF0ZXJpYWwgc3RlcHBlcnMuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBlc25TdGVwcGVyQW5pbWF0aW9uczoge1xyXG4gIHJlYWRvbmx5IGhvcml6b250YWxTdGVwVHJhbnNpdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xyXG4gIHJlYWRvbmx5IHZlcnRpY2FsU3RlcFRyYW5zaXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YTtcclxufSA9IHtcclxuICAvKiogQW5pbWF0aW9uIHRoYXQgdHJhbnNpdGlvbnMgdGhlIHN0ZXAgYWxvbmcgdGhlIFggYXhpcyBpbiBhIGhvcml6b250YWwgc3RlcHBlci4gKi9cclxuICBob3Jpem9udGFsU3RlcFRyYW5zaXRpb246IHRyaWdnZXIoJ2hvcml6b250YWxTdGVwVHJhbnNpdGlvbicsIFtcclxuICAgIHN0YXRlKCdwcmV2aW91cycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ30pKSxcclxuICAgIC8vIFRyYW5zaXRpb24gdG8gYGluaGVyaXRgLCByYXRoZXIgdGhhbiBgdmlzaWJsZWAsXHJcbiAgICAvLyBiZWNhdXNlIHZpc2liaWxpdHkgb24gYSBjaGlsZCBlbGVtZW50IHRoZSBvbmUgZnJvbSB0aGUgcGFyZW50LFxyXG4gICAgLy8gbWFraW5nIHRoaXMgZWxlbWVudCBmb2N1c2FibGUgaW5zaWRlIG9mIGEgYGhpZGRlbmAgZWxlbWVudC5cclxuICAgIHN0YXRlKCdjdXJyZW50Jywgc3R5bGUoe3RyYW5zZm9ybTogJ25vbmUnLCB2aXNpYmlsaXR5OiAnaW5oZXJpdCd9KSksXHJcbiAgICBzdGF0ZSgnbmV4dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKScsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxyXG4gICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgne3thbmltYXRpb25EdXJhdGlvbn19IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKScpLCB7XHJcbiAgICAgIHBhcmFtczogeydhbmltYXRpb25EdXJhdGlvbic6IERFRkFVTFRfSE9SSVpPTlRBTF9BTklNQVRJT05fRFVSQVRJT059LFxyXG4gICAgfSksXHJcbiAgXSksXHJcblxyXG4gIC8qKiBBbmltYXRpb24gdGhhdCB0cmFuc2l0aW9ucyB0aGUgc3RlcCBhbG9uZyB0aGUgWSBheGlzIGluIGEgdmVydGljYWwgc3RlcHBlci4gKi9cclxuICB2ZXJ0aWNhbFN0ZXBUcmFuc2l0aW9uOiB0cmlnZ2VyKCd2ZXJ0aWNhbFN0ZXBUcmFuc2l0aW9uJywgW1xyXG4gICAgc3RhdGUoJ3ByZXZpb3VzJywgc3R5bGUoe2hlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxyXG4gICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXHJcbiAgICAvLyBUcmFuc2l0aW9uIHRvIGBpbmhlcml0YCwgcmF0aGVyIHRoYW4gYHZpc2libGVgLFxyXG4gICAgLy8gYmVjYXVzZSB2aXNpYmlsaXR5IG9uIGEgY2hpbGQgZWxlbWVudCB0aGUgb25lIGZyb20gdGhlIHBhcmVudCxcclxuICAgIC8vIG1ha2luZyB0aGlzIGVsZW1lbnQgZm9jdXNhYmxlIGluc2lkZSBvZiBhIGBoaWRkZW5gIGVsZW1lbnQuXHJcbiAgICBzdGF0ZSgnY3VycmVudCcsIHN0eWxlKHtoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ2luaGVyaXQnfSkpLFxyXG4gICAgdHJhbnNpdGlvbignKiA8PT4gY3VycmVudCcsIGFuaW1hdGUoJ3t7YW5pbWF0aW9uRHVyYXRpb259fSBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSwge1xyXG4gICAgICBwYXJhbXM6IHsnYW5pbWF0aW9uRHVyYXRpb24nOiBERUZBVUxUX1ZFUlRJQ0FMX0FOSU1BVElPTl9EVVJBVElPTn0sXHJcbiAgICB9KSxcclxuICBdKSxcclxufTtcclxuIl19