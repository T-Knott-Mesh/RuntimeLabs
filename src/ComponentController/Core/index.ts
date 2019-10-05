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
    next?: {(_params: any): Promise<any>};
}

export interface CallbacksManagerInterface {
    next?: {(_params: any): Promise<any>};
    state?: any;
}


export interface CallbacksManagerNextInterface{
    key: PropertyKey;
    value?: any;
}

export default class CallbacksManager {
    private _state: any;

    constructor(_options: CallbacksManagerInterface = {}){
        const {state = ''} = _options;
        this._state = state;
    }
    
    private guid() {
        const s4 = () => {
          return Math.floor((1 + Math.random() + performance.now()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return `${s4()}-${s4()}-${s4()}-${s4()}}`;
      }

    protected _callbacks: Map<string, CallbackInterface> = new Map();

    subscribe(_options: CallbackInterface = {}){
        const {uid = this.guid()} = _options;
        this._callbacks.set(uid, _options);
    }

    public next(_data?: CallbacksManagerNextInterface){
        // console.log(_data);
        this._state = _data;
        this._callbacks.forEach(({uid, next}, _uid) => {
            // console.log({uid, next});
            next?.(_data);
        })
    }


    reset(){
        this._state = '';
        this._callbacks.clear();
    }
}
