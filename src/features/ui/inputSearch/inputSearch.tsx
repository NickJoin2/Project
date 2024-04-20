import React from 'react'
import styled from 'styled-components'
import search from '@/shared/image/search/search-header.svg'

const InputBlock = styled.div`
  background: #000;
  border: 2px solid #f9322c;
  max-width: 536px;
  padding: 5px;
`

const Input = styled.input`
  background: transparent;
  border: none;
  padding-left: 5px;
  width: 100%;
`

const InputSearch = () => {
    return (
        <InputBlock>
            <img src={search} alt="search"/>
            <Input type="text" placeholder="Search docs"/>
        </InputBlock>
    )
}

export default InputSearch
