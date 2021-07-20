import React from 'react'
import { HeaderContainer, HeaderH1, HeaderSubline, HeroSection } from '../HeaderElements'
import SearchBox from '../searchbox'

const Header = ({placeholder, handleChange}) => {
    return (
        <HeaderContainer>
            <HeroSection>
                <HeaderH1>Discover</HeaderH1>
                <HeaderSubline>Your Dream Job</HeaderSubline>
            </HeroSection>
            <SearchBox handleChange={handleChange} placeholder={placeholder}/>
        </HeaderContainer>
    )
}

export default Header
