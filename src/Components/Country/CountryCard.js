import React from 'react';
import { StyledCountryCard } from './Countrycard.styled';

const CountryCard = ({
  Country,
  TotalConfirmed,
  TotalDeath,
  TotalRecovered,
}) => {
  return (
    <StyledCountryCard to={`/${Country}`}>
      <div>
        <h1>{Country}</h1>
        <p>
          TotalConfirmed: <span style={{color:'#b30000'}}>{TotalConfirmed}</span>
          <br></br>TotalDeath: <span style={{color:'#333333'}}>{TotalDeath}</span>
          <br></br>TotalRecovered: <span style={{color:'#006600'}}>{TotalRecovered}</span>{' '}
        </p>
        <br></br>
      </div>
    </StyledCountryCard>
  );
};

export default CountryCard;
