import styled from "styled-components";

const LayoutStyled = styled.div`
  position: relative;

  .main-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
  }

  .nav {
    a {
      padding: 0.25rem 0.5rem;

      &:hover {
        opacity: 0.5;
      }
    }

    &__signup {
      border: 1px solid black;
      border-radius: 5px 15px;
    }
  }
`;

export default LayoutStyled;
