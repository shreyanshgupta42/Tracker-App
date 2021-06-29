import React from 'react';
import { StyledCountryMain } from './countrymain.styled';

const CountryMain = ({ Country, match, confirmed, death, recovered }) => {
//   console.log(Country + ' ' + match);
    return (
      <StyledCountryMain>
        <h1>{Country}</h1>
        <br></br>
        <div style={{color:'#b30000' ,background:'#ff9999' ,fontWeight:'bold'}}>{confirmed}</div>
        <br></br>
        <div style={{color:'#006600',background:'#99ff99' ,fontWeight:'bold'}}>{recovered}</div>
        <br></br>
        <div style={{color:'#333333',background:'#cccccc' ,fontWeight:'bold'}}>{death}</div>
      </StyledCountryMain>
    );
};

export default CountryMain;
