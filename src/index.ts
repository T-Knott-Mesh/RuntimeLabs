import { customElement, html, LitElement } from "lit-element";
import './SimpleButton';

@customElement("runtime-labs")
export default class RuntimeLabs extends LitElement {

    render(){
        return html`
           <simple-button>
            Hello Hon
           </simple-button>
        `;
    }
}