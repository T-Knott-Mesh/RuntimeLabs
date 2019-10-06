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
import { LitElement } from "lit-element";
import { RuntimeController, ControlledRuntimeComponent } from './ComponentController';
export default class RuntimeLabs extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     *
     * Creating 10 Controllers at View Bootup
     */
    controllers: RuntimeController[];
    /**
     * Injecting 10 Controllers into 10 Components at View Bootup
     */
    controlledComponents: ControlledRuntimeComponent[];
    /**
     *
     * Creating 10 Items in which at View Render
     * Time will be mapped into Simple Runtime Components
     */
    items: {
        foo: string;
    }[];
    firstUpdated(): void;
    render(): import("lit-element").TemplateResult;
    updateControlledItem(index: any, foo: any): void;
    updateSimpleItem(index: any, foo: any): void;
    updateSimpleItemImmutably(index: any, foo: any): void;
    addSimpleItem(): void;
    addSimpleItemImmutably(): void;
    addControlledItem(): void;
    addSimpleItemAtIndex(index: any, foo: any): void;
    addControlledItemAtIndex(index: any, foo: any): void;
}
