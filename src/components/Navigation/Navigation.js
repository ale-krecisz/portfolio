import React, { useState, useEffect } from 'react';
import ROUTES from 'constants/route-constants';
import Button from 'components/Button';
import { useLocation } from 'react-router';

import { navigationLinks, socialLinks } from './navigationLinks';

import {
  Container,
  Links,
  Logo,
  MenuButton,
  Nav,
  NavItem,
  Overlay,
  Socials,
  SocialLink,
} from './styled';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { pathname } = useLocation();

  const handleDarkNav = () => {
    const location = pathname === '/about';
    setIsDark(location);
  };

  useEffect(() => {
    const disableBodyScroll = () => {
      isMenuOpen
        ? document.body.classList.add('body-scroll')
        : document.body.classList.remove('body-scroll');
    };

    disableBodyScroll();
    handleDarkNav();

    return () => disableBodyScroll(false);
  }, [isMenuOpen, pathname]);

  const handleOpen = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };

  console.log(isDark);

  return (
    <>
      <Overlay isMenuOpen={isMenuOpen} onClick={handleOpen} />
      <Nav>
        <MenuButton onClick={handleOpen} isMenuOpen={isMenuOpen} />
        <Logo to={ROUTES.ROOT} isDark={isDark}>
          <Button to={ROUTES.ROOT}>ale.krecisz</Button>
        </Logo>
        <Container isMenuOpen={isMenuOpen}>
          <Links>
            {navigationLinks.map(link => (
              <NavItem key={link.name} to={link.route} isDark={isDark}>
                {link.name}
              </NavItem>
            ))}
          </Links>
          <Socials>
            {socialLinks.map(link => (
              <SocialLink key={link.name} href={link.link} target="_blank">
                {link.icon}
              </SocialLink>
            ))}
          </Socials>
        </Container>
      </Nav>
    </>
  );
};

export default Navigation;
