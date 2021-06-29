import styled from 'styled-components';

export const StyledCountryMain = styled.div`
    color: ${({ theme }) => theme.mainColors.blue};;
  text-align: center;
  div {
    width: 300px;
    height: 20px;
    margin: auto;
    box-shadow: 0px 0px 50px 0px rgba(219, 219, 219, 5);
    margin-top: 1px;
    border-radius: 8px;
    padding: 5px 20px;
  }

`;
