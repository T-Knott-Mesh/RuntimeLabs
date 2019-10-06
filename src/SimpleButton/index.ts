import { customElement, html, LitElement, property } from "lit-element";
import {styles} from "./style";

@customElement("simple-button")
export default class SimpleButton extends LitElement {

    static styles = [styles]

    @property({ type: String }) text = "";

    @property({ type: Boolean, attribute: true }) rounded = false;

    constructor(_args) {
        super();
        _args?.text ? this.text = _args.text : null;
    }

    render() {
        return html`
            <button><slot></slot></button>
        `;
    }
}