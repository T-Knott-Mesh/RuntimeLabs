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
export default class CallbacksManager {
    constructor(_options = {}) {
        this._callbacks = new Map();
        const { state = '' } = _options;
        this._state = state;
    }
    guid() {
        const s4 = () => {
            return Math.floor((1 + Math.random() + performance.now()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return `${s4()}-${s4()}-${s4()}-${s4()}}`;
    }
    subscribe(_options = {}) {
        const { uid = this.guid() } = _options;
        this._callbacks.set(uid, _options);
    }
    next(_data) {
        // console.log(_data);
        this._state = _data;
        this._callbacks.forEach(({ uid, next }, _uid) => {
            // console.log({uid, next});
            next?.(_data);
        });
    }
    reset() {
        this._state = '';
        this._callbacks.clear();
    }
}
//# sourceMappingURL=index.js.map