import { LitElement } from "lit-element";
export default class SimpleButton extends LitElement {
    static styles: import("lit-element").CSSResult[];
    text: string;
    rounded: boolean;
    constructor(_args: any);
    render(): import("lit-element").TemplateResult;
}
