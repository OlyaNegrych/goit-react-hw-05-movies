import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, Box } from '../SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Box>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </nav>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;


// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }

//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: orange;
//   }
// `;

