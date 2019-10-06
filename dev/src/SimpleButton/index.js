import { __decorate } from "tslib";
import { customElement, html, LitElement, property } from "lit-element";
import { styles } from "./style";
let SimpleButton = class SimpleButton extends LitElement {
    constructor(_args) {
        super();
        this.text = "";
        this.rounded = false;
        _args?.text ? this.text = _args.text : null;
    }
    render() {
        return html `
            <button><slot></slot></button>
        `;
    }
};
SimpleButton.styles = [styles];
__decorate([
    property({ type: String })
], SimpleButton.prototype, "text", void 0);
__decorate([
    property({ type: Boolean, attribute: true })
], SimpleButton.prototype, "rounded", void 0);
SimpleButton = __decorate([
    customElement("simple-button")
], SimpleButton);
export default SimpleButton;
//# sourceMappingURL=index.js.map