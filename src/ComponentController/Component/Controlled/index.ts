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

import { LitElement, customElement, html, property, PropertyValues } from "lit-element";
import RuntimeController from '../../Controller';


@customElement('controlled-runtime-component')
export default class ControlledRuntimeComponent extends LitElement {

    private _controller!: RuntimeController;

    set controller(controller: RuntimeController) {
        if (this._controller !== controller) {
            const old = this._controller;
            this._controller?.destroy();
            this._controller = controller;
            this.requestUpdate('controller', old).then(_ => {
                this._controller?.changed$.subscribe({
                    next: async (_changed: Map<string, any>) => await this.controllerUpdated(_changed)
                });
            })
        }
    }

    @property()
    get controller(): RuntimeController {
        return this._controller;
    }

    async controllerUpdated(_changed: Map<PropertyKey, any>) {
        // console.log(_changed, "controller updated");
        this.requestUpdate("controller", _changed)
    }

    constructor(_args) {
        super();
        if (_args?.controller)
            this.controller = _args.controller;
        else console.warn("Runtime Component was constructed without a conroller.")
    }

    shouldUpdate(_changedProperties: PropertyValues){
        super.shouldUpdate(_changedProperties);
        return _changedProperties.has("controller") && this.controller ? true : (console.warn("LitElement Update Avoided. Controller was not Updated."), false);
    }

    firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        // console.log(_changedProperties, "From LitElement First Updated Lifecycle Hook");
    }


    updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        // console.log(_changedProperties, "From LitElement Updated Lifecycle Hook");
    }

    
    connectedCallback() {
        super.connectedCallback();
        // console.log("Component Connected to DOM")
    }


    render() {
        console.log("Controlled Component Rendered");
        const { controller: { foo } } = this;
        return html`
            <h1>${foo}</h1>
        `;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // console.log("Component Removed from DOM")
    }
}
