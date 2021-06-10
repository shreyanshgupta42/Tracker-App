import React from 'react';
import { FlexGrid } from '../Styled';
import CountryCard from './CountryCard';

const CountryGrid = ({ data }) => {
  const { Countries } = data;
  return (
    <FlexGrid className="mt-2">
      {Countries.map(v => {
        return (
          <div>
            <CountryCard
              key={v.Country}
              Country={v.Country}
              TotalConfirmed={v.TotalConfirmed}
              TotalDeath={v.TotalDeaths}
              TotalRecovered={v.TotalRecovered}
            />
          </div>
        );
      })}
    </FlexGrid>
  );
};

export default CountryGrid;
