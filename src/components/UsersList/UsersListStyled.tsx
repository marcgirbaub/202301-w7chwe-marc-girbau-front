import styled from "styled-components";

const UsersListStyled = styled.ul`
  display: grid;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 2rem;
`;

export default UsersListStyled;
