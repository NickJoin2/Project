import React from 'react';
import styled from "styled-components";

const ServicesButton = ({children}: { children: string }) => {
    const StyleButton = styled.button`
        font-family: 'exo_2Medium', sans-serif;
        border-radius: 5px;
        padding: 13px 113px;
        background-color: #2a5275;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        color: #fff;
        cursor: pointer;
        width: 310px;
        transition: background-color .4s ease;
        margin-top: 8px;

        &:hover {
            background-color: #306998;
        }

        @media screen and (max-width: 820px) {
            width: 291px;
        }
    `;
    return (
        <StyleButton>{children}</StyleButton>
    );
};

export default ServicesButton;