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
import { LitElement, PropertyValues } from "lit-element";
import RuntimeController from '../../Controller';
export default class ControlledRuntimeComponent extends LitElement {
    private _controller;
    set controller(controller: RuntimeController);
    get controller(): RuntimeController;
    controllerUpdated(_changed: Map<PropertyKey, any>): Promise<void>;
    constructor(_args: any);
    shouldUpdate(_changedProperties: PropertyValues): boolean;
    firstUpdated(_changedProperties: PropertyValues): void;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    disconnectedCallback(): void;
}
