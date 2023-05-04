/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiCodechef } from 'react-icons/si';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="w-full border-b bg-light md:static md:border-none md:text-sm">
        <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link
              to={'/'}
              aria-label="Italiano Chefs Secret"
              title="Italiano Secret">
              <div className="flex items-center  justify-center gap-3">
                <SiCodechef className="text-2xl md:text-5xl text-primary"></SiCodechef>
                <span className="font-logo text-2xl text-primary md:text-4xl"> Italiano Chefs Secret</span>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray hover:text-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  className={({ isActive }) => (isActive ? 'active' : 'default')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="About Us"
                  className={({ isActive }) => (isActive ? 'active' : 'default')}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  className={({ isActive }) => (isActive ? 'active' : 'default')}>
                  Blog
                </NavLink>
              </li>
              <span className="hidden h-6 w-px bg-gray-300 md:block"></span>
              <div className="items-center gap-x-6 space-y-3 md:flex md:space-y-0">
                {/* {user && <FaUserCircle className="text-3xl"></FaUserCircle>} */}
                {user && (
                  <div className="group relative flex justify-center">
                    <button className="rounded-full shadow-sm">
                      {user.photoURL ? (
                        <img
                          className="h-12 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUserCircle className="text-3xl"></FaUserCircle>
                      )}
                    </button>
                    {user.displayName && (
                      <span className="absolute top-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
                        {user.displayName}
                      </span>
                    )}
                  </div>
                )}
                {user ? (
                  <Link
                    onClick={handleLogOut}
                    className="block rounded-lg bg-primary px-4 py-3 text-center font-medium text-white shadow hover:bg-secondary md:inline">
                    Logout
                  </Link>
                ) : (
                  <>
                    <Link
                      to={'/login'}
                      className="block rounded-lg px-4 py-3 font-medium shadow text-center  text-secondary outline outline-1 hover:text-primary  md:border-none">
                      Log in
                    </Link>

                    <Link
                      to={'/register'}
                      className="block rounded-lg bg-primary px-4 py-3 text-center font-medium text-white shadow hover:bg-secondary md:inline">
                      Register
                    </Link>
                  </>
                )}
                {/* <li>
                  <Link
                    to={'/register'}
                    className="block rounded-lg bg-primary px-4 py-3 text-center font-medium text-white shadow hover:bg-primary-light md:inline">
                    Register
                  </Link>
                </li> */}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
