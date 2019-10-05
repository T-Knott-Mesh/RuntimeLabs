import { LitElement, PropertyValues } from "lit-element";
import RuntimeController from '../Controller';
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
