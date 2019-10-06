import { css } from 'lit-element';


export const internal = css`
    :host {
        --button-style: green;
    }
`;


export const square = (size, rounded) =>  css`
    :host {
        width: ${size}px;
        height: ${size}px;
        ${rounded ? css`border-radius:${size/2}px;` : css``}
    }


`;



export const styles = css`
    ${square(100, true)}

    :host{
        display: block;
        background: lightblue;
    }

    :host([rounded]) button{
        background-color: black;
    }

    button{

        
    }

`;

