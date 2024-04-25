import React from 'react';
import styled from "styled-components";

const LabelServices = ({id, text}: { id: string, text: string }) => {
    const Label = styled.label`
        font-family: 'exo_2Regular', sans-serif;
        font-weight: 400;
        font-size: 16px;
        height: auto;
        color: #070c11;
        min-width: 260px;

        @media screen and (max-width: 820px) {
            min-width: 260px;
        }
    `
    return (
        <Label htmlFor={id}>{text}</Label>
    );
};

export default LabelServices;