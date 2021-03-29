import {css} from "@emotion/react";

const GlobalStyle = css`
    * {
        margin : 0;
        font-family : "NanumBarunGothic"
    }
    button {
        outline: none;
        cursor: pointer;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }

`;

export default GlobalStyle;