import React, {FC} from 'react';
import styled from "styled-components";

interface InputBlockServicesProps {
    children: React.ReactNode;
    grid?: string;
    gap?: string;
}

const InputBlockServices: FC<InputBlockServicesProps> = ({children, grid = 'grid', gap = '5px'}) => {
    const StyledInputBlockServices = styled.div`
        display: ${grid};
        align-items: start;
        justify-content: start;
        gap: ${gap};
        width: 380px;
        flex-wrap: wrap;
        @media screen and (max-width: 820px) {
            width: 300px;
        }
    `;

    return (
        <StyledInputBlockServices>{children}</StyledInputBlockServices>
    );
};

export default InputBlockServices;