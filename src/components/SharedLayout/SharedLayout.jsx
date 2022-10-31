import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import {
  NavItem,
  Box,
  StyledOutlet,
} from '../SharedLayout/SharedLayout.styled';

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
      <StyledOutlet>
        <Suspense
          fallback={
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          }
        >
          <Outlet />
        </Suspense>
      </StyledOutlet>
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

