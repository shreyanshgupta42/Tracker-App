import React from 'react'
import { StyledCountryCard } from './Countrycard.styled'

const CountryCard = ({Country,TotalConfirmed,TotalDeath,TotalRecovered}) => {
    return (
        <StyledCountryCard>
            <h1>{Country}</h1>
            <p>TotalConfirmed: {TotalConfirmed}<br></br>TotalDeath: {TotalDeath}<br></br>TotalRecovered: {TotalRecovered} </p>
            <br></br>
        </StyledCountryCard>
    )
}

export default CountryCard
