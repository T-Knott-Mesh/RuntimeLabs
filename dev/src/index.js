import { __decorate } from "tslib";
import { customElement, html, LitElement } from "lit-element";
import './SimpleButton';
let RuntimeLabs = class RuntimeLabs extends LitElement {
    render() {
        return html `
           <simple-button>
            Hello Hon
           </simple-button>
        `;
    }
};
RuntimeLabs = __decorate([
    customElement("runtime-labs")
], RuntimeLabs);
export default RuntimeLabs;
//# sourceMappingURL=index.js.map