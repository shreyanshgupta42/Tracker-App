import styled from 'styled-components';
import { SearchCard } from '../Styled';

export const StyledCountryCard = styled(SearchCard)`
  box-shadow: 0px 0px 50px 0px rgba(219, 219, 219, 5);
  margin-top: 10px;
  border-radius: 15px;
  padding: 5px 20px;
  &:hover {
    cursor: pointer;
    text-decoration-color: blue;
    color: blue;
  }
  h1 {
  }
  p {
  }
`;
