import styled from 'styled-components';

export const StyledCountryCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;
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
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;
