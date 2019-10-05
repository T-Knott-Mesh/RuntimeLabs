/**
 * @license
 * Copyright (c) 2019 Tsavo Knott. All rights reserved.
 * This code may only be used under the BSD style license found at the
 * root of this project.
 * Tsavo Knott is the original author of this release code.
 * Code distributed by Tsavo Knott as part of the Runtime project is also
 * subject to an additional IP rights grant found at the
 * root of this project.
 *
 */
import CallbacksManager from '../Core';
export default class RuntimeController {
    constructor({ foo }?: {
        foo?: string;
    });
    changed$: CallbacksManager;
    private _foo;
    set foo(foo: string);
    get foo(): string;
    destroy(): void;
}
