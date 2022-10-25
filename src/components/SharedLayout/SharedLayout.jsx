import { Outlet, NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

