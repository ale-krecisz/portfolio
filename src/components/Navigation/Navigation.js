import React from 'react';
import ROUTES from 'constants/route-constants';
import {navigationLinks, socialLinks} from './navigationLinks';

import {
	LinksContainer,
	Logo, 
	Nav, 
	NavItem,
	SocialContainer,
	SocialLink
} from './styled';

const Navigation = () => {

	return (
		<Nav>
			<Logo to={ROUTES.ROOT}>
                ale.krecisz
			</Logo>
			<LinksContainer>
				{navigationLinks.map((link) => (
					<NavItem 
						key={link.name}
						to={link.route}
					>
						{link.name}
					</NavItem>
				))}
			</LinksContainer>
			<SocialContainer>
				{socialLinks.map((link) => (
					<SocialLink 
						key={link.name}
						href={link.link}
						target="_blank"
					>
						{link.icon}
					</SocialLink>
				))}
			</SocialContainer>
		</Nav>
	);
};

export default Navigation;