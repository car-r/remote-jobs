import React from 'react'
import { SearchBoxContainer, SearchBoxInput } from './SearchBoxElements'

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <SearchBoxContainer>
            <SearchBoxInput 
                type='search'
                onChange={handleChange}
                placeholder={placeholder}
            />
        </SearchBoxContainer>
    )
}

export default SearchBox
