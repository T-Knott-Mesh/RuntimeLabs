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

import { LitElement, customElement, html, property } from "lit-element";


@customElement('simple-runtime-component')
export default class SimpleRuntimeComponent extends LitElement {

    @property({type: String}) foo;

    render() {
        const {  foo  } = this;
        console.log("Simple Component Rendered");
        return html`
            <h1>${foo}</h1>
        `;
    }

}
