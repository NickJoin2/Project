import React, {ReactNode} from 'react'
import styled from 'styled-components'

const ButtonHeader = ({children}: { children: ReactNode }) => {
    const StyledButton = styled.button`
    font-family: 'exo_2Medium', sans-serif;
    border-radius: 4px;
    padding: 10px;
    width: 99px;
    height: 48px;
    background: #2a5275;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #fff;

    &:hover {
      background: #2e6494;
    }
  `
    return <StyledButton>{children}</StyledButton>
}

export default ButtonHeader