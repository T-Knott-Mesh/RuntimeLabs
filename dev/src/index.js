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
import { __decorate } from "tslib";
import { LitElement, customElement, html, property, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { RuntimeController, ControlledRuntimeComponent } from './ComponentController';
let RuntimeLabs = class RuntimeLabs extends LitElement {
    constructor() {
        super(...arguments);
        /**
         *
         * Creating 10 Controllers at View Bootup
         */
        this.controllers = new Array(10)
            .fill(null, 0, 10)
            .map((_, _index) => new RuntimeController({ foo: `controlled item: ${_index}` }));
        /**
         * Injecting 10 Controllers into 10 Components at View Bootup
         */
        this.controlledComponents = this.controllers
            .map((controller, _index) => new ControlledRuntimeComponent({ controller }));
        /**
         *
         * Creating 10 Items in which at View Render
         * Time will be mapped into Simple Runtime Components
         */
        this.items = new Array(10)
            .fill(null, 0, 10)
            .map((_item, _index) => {
            return { foo: `simple item: ${_index}` };
        });
    }
    firstUpdated() {
        console.log("============ View First Updated =============== ");
    }
    render() {
        const { controlledComponents, items } = this;
        console.log("============ View Rendered =============== ");
        return html `
        <!-- Rendering 10 Controlled Items With Repeat -->
            ${repeat(controlledComponents, controlledComponent => controlledComponent.controller.foo, controlledComponent => html `${controlledComponent}`)}

        <!-- Rendering 10 Controlled Simple Items With Repeat -->
            ${repeat(items, item => item.foo, ({ foo }) => html `<simple-runtime-component .foo=${foo}></simple-runtime-component>`)}
        `;
    }
    updateControlledItem(index, foo) {
        this.controllers[index].foo = foo;
    }
    updateSimpleItem(index, foo) {
        const old = [...this.items];
        this.items[index].foo = foo;
        this.requestUpdate("items", old);
    }
    updateSimpleItemImmutably(index, foo) {
        const item = this.items[index];
        this.items = [
            ...this.items.slice(0, index - 1),
            { ...item, foo },
            ...this.items.slice(index, this.items.length)
        ];
    }
    // Adding to front of list for worst case performance.
    addSimpleItem() {
        console.log("============ addSimpleItem Called =============== ");
        const old = [...this.items];
        this.items.unshift({ foo: "Added Item" });
        this.requestUpdate("items", old);
    }
    // Adding to front of list for worst case performance.
    addSimpleItemImmutably() {
        console.log("============ addSimpleItemImmutably Called =============== ");
        this.items = [
            { foo: "Added Item" },
            ...this.items
        ];
    }
    // Adding to front of list for worst case performance.
    addControlledItem() {
        console.log("============ addControlledItem Called =============== ");
        const old = [...this.controlledComponents];
        this.controlledComponents.unshift(new ControlledRuntimeComponent({
            controller: new RuntimeController({ foo: `Added Item` })
        }));
        this.requestUpdate("controlledComponents", old);
    }
};
RuntimeLabs.styles = css `
        :host{
            display: block;
            overflow: scroll;
        }
    `;
__decorate([
    property({ type: Array })
], RuntimeLabs.prototype, "items", void 0);
RuntimeLabs = __decorate([
    customElement('runtime-labs')
], RuntimeLabs);
export default RuntimeLabs;
//# sourceMappingURL=index.js.map