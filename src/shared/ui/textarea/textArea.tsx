import React from 'react';
import styled from "styled-components";

const TextArea = ({rows = 4, cols = 50, placeholder, id}: {
    rows?: number,
    cols?: number,
    placeholder: string,
    id: string
}) => {
    const StyledTextArea = styled.textarea`
        font-family: 'exo_2Regular', sans-serif;
        //width: 350px;
        width: 100%;
        padding: 10px;
        font-size: 16px;
        color: #838688;
        height: 105px;
        border: 1px solid #eaeaf0;
        font-weight: 400;
        line-height: 100%;
        border-radius: 5px;
        outline: none;
        margin-top: 10px;

        @media screen and (max-width: 820px) {
            width: 300px;
        }
    `;

    return (
        <StyledTextArea id={id} rows={rows} cols={cols} placeholder={placeholder}/>
    );
};


export default TextArea;