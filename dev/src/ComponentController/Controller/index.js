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
    constructor({ foo } = {}) {
        this.changed$ = new CallbacksManager();
        this._foo = "";
        if (foo)
            this._foo = foo;
    }
    set foo(foo) {
        if (this._foo !== foo) {
            this._foo = foo;
            this.changed$.next({ key: 'foo', value: foo });
        }
    }
    get foo() {
        return this._foo;
    }
    destroy() {
        this.changed$.reset();
    }
}
//# sourceMappingURL=index.js.map