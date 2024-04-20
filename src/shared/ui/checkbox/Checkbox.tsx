import React from 'react';
import styled from "styled-components";

const Checkbox = ({id}: { id: string }) => {
    const Input = styled.input`
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `
    return (
        <Input id={id} type='checkbox'/>
    );
};

export default Checkbox;