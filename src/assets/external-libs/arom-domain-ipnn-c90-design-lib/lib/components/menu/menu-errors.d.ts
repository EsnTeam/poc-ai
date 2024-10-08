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
export declare function throwEsnMenuInvalidPositionX(): void;
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
export declare function throwEsnMenuInvalidPositionY(): void;
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
export declare function throwEsnMenuRecursiveError(): void;
