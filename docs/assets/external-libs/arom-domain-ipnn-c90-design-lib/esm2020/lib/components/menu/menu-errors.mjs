/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
export function throwEsnMenuInvalidPositionX() {
    throw Error(`xPosition value must be either 'before' or after'.
      Example: <esn-menu xPosition="before" #menu="esnMenu"></esn-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
export function throwEsnMenuInvalidPositionY() {
    throw Error(`yPosition value must be either 'above' or below'.
      Example: <esn-menu yPosition="above" #menu="esnMenu"></esn-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
export function throwEsnMenuRecursiveError() {
    throw Error(`esnMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` +
        `not a parent of the trigger or move the trigger outside of the menu.`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1lcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9tZW51L21lbnUtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsNEJBQTRCO0lBQzFDLE1BQU0sS0FBSyxDQUFDO3dFQUMwRCxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsNEJBQTRCO0lBQzFDLE1BQU0sS0FBSyxDQUFDO3VFQUN5RCxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLE1BQU0sS0FBSyxDQUNULGdGQUFnRjtRQUM5RSxzRUFBc0UsQ0FDekUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIGZvciB0aGUgY2FzZSB3aGVuIG1lbnUncyB4LXBvc2l0aW9uIHZhbHVlIGlzbid0IHZhbGlkLlxyXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgZG9lc24ndCBtYXRjaCAnYmVmb3JlJyBvciAnYWZ0ZXInLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFc25NZW51SW52YWxpZFBvc2l0aW9uWCgpIHtcclxuICB0aHJvdyBFcnJvcihgeFBvc2l0aW9uIHZhbHVlIG11c3QgYmUgZWl0aGVyICdiZWZvcmUnIG9yIGFmdGVyJy5cclxuICAgICAgRXhhbXBsZTogPGVzbi1tZW51IHhQb3NpdGlvbj1cImJlZm9yZVwiICNtZW51PVwiZXNuTWVudVwiPjwvZXNuLW1lbnU+YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIGZvciB0aGUgY2FzZSB3aGVuIG1lbnUncyB5LXBvc2l0aW9uIHZhbHVlIGlzbid0IHZhbGlkLlxyXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgZG9lc24ndCBtYXRjaCAnYWJvdmUnIG9yICdiZWxvdycuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vzbk1lbnVJbnZhbGlkUG9zaXRpb25ZKCkge1xyXG4gIHRocm93IEVycm9yKGB5UG9zaXRpb24gdmFsdWUgbXVzdCBiZSBlaXRoZXIgJ2Fib3ZlJyBvciBiZWxvdycuXHJcbiAgICAgIEV4YW1wbGU6IDxlc24tbWVudSB5UG9zaXRpb249XCJhYm92ZVwiICNtZW51PVwiZXNuTWVudVwiPjwvZXNuLW1lbnU+YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGEgbWVudSBpcyBhc3NpZ25lZFxyXG4gKiB0byBhIHRyaWdnZXIgdGhhdCBpcyBwbGFjZWQgaW5zaWRlIHRoZSBzYW1lIG1lbnUuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vzbk1lbnVSZWN1cnNpdmVFcnJvcigpIHtcclxuICB0aHJvdyBFcnJvcihcclxuICAgIGBlc25NZW51VHJpZ2dlckZvcjogbWVudSBjYW5ub3QgY29udGFpbiBpdHMgb3duIHRyaWdnZXIuIEFzc2lnbiBhIG1lbnUgdGhhdCBpcyBgICtcclxuICAgICAgYG5vdCBhIHBhcmVudCBvZiB0aGUgdHJpZ2dlciBvciBtb3ZlIHRoZSB0cmlnZ2VyIG91dHNpZGUgb2YgdGhlIG1lbnUuYCxcclxuICApO1xyXG59XHJcbiJdfQ==