import React from 'react';
import styled from "styled-components";

interface InputServiceProps {
    id: string;
    type: string;
    placeholder?: string;
}

const InputService: React.FC<InputServiceProps> = ({id, type, placeholder}) => {
    const Input = styled.input`
        border: 1px solid #eaeaf0;
        border-radius: 5px;
        padding: 10px 20px;
        width: 340px;
        //width: 100%;
        height: 48px;
        font-family: 'exo_2Regular', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #838688;

        @media screen and (max-width: 820px) {
            width: 300px;
        }
    `;

    return (
        <Input id={id} type={type} placeholder={placeholder}/>
    );
};

export default InputService;