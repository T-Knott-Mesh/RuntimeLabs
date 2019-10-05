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
export interface CallbackInterface {
    uid?: string;
    next?: {
        (_params: any): Promise<any>;
    };
}
export interface CallbacksManagerInterface {
    next?: {
        (_params: any): Promise<any>;
    };
    state?: any;
}
export interface CallbacksManagerNextInterface {
    key: PropertyKey;
    value?: any;
}
export default class CallbacksManager {
    private _state;
    constructor(_options?: CallbacksManagerInterface);
    private guid;
    protected _callbacks: Map<string, CallbackInterface>;
    subscribe(_options?: CallbackInterface): void;
    next(_data?: CallbacksManagerNextInterface): void;
    reset(): void;
}
