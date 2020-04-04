import React from 'react';
import ROUTES from 'constants/route-constants';
import {navigationLinks, socialLinks} from './navigationLinks';

import {
  Container,
  Links,
  Logo,
  Nav, 
  NavItem,
  Overlay,
  Socials,
  SocialLink
} from './styled';

const Navigation = () => {

  return (
    <>
      <Overlay />
      <Nav>
        <Logo to={ROUTES.ROOT}>
                    ale.krecisz
        </Logo>
        <Container>
          <Links>
            {navigationLinks.map((link) => (
              <NavItem 
                key={link.name}
                to={link.route}
              >
                {link.name}
              </NavItem>
            ))}
          </Links>
          <Socials>
            {socialLinks.map((link) => (
              <SocialLink 
                key={link.name}
                href={link.link}
                target="_blank"
              >
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