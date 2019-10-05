/**
 * @license
 * Copyright (c) 2019 Tsavo Knott. All rights reserved.
 * This code may only be used under the BSD style license found at
 * root of the project.
 * Tsavo Knott is the original author of this release code.
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import { __decorate } from "tslib";
import { LitElement, customElement, html, property } from "lit-element";
let ControlledRuntimeComponent = class ControlledRuntimeComponent extends LitElement {
    constructor(_args) {
        super();
        if (_args?.controller)
            this.controller = _args.controller;
        else
            console.warn("Runtime Component was constructed without a conroller.");
    }
    set controller(controller) {
        if (this._controller !== controller) {
            const old = this._controller;
            this._controller?.destroy();
            this._controller = controller;
            this.requestUpdate('controller', old).then(_ => {
                this._controller?.changed$.subscribe({
                    next: async (_changed) => await this.controllerUpdated(_changed)
                });
            });
        }
    }
    get controller() {
        return this._controller;
    }
    async controllerUpdated(_changed) {
        // console.log(_changed, "controller updated");
        this.requestUpdate("controller", _changed);
    }
    shouldUpdate(_changedProperties) {
        super.shouldUpdate(_changedProperties);
        return _changedProperties.has("controller") && this.controller ? true : (console.warn("LitElement Update Avoided. Controller was not Updated."), false);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        // console.log(_changedProperties, "From LitElement First Updated Lifecycle Hook");
    }
    updated(_changedProperties) {
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
        return html `
            <h1>${foo}</h1>
        `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // console.log("Component Removed from DOM")
    }
};
__decorate([
    property()
], ControlledRuntimeComponent.prototype, "controller", null);
ControlledRuntimeComponent = __decorate([
    customElement('controlled-runtime-component')
], ControlledRuntimeComponent);
export default ControlledRuntimeComponent;
//# sourceMappingURL=index.js.map