import React from 'react';
import ROUTES from '../../constants/route-constants';
import headerLinks from './headerLinks';

import {
	Nav, 
	NavItem
} from './styled';

const HeaderComponent = () => {

	return (
		<Nav>
			<NavItem to={ROUTES.ROOT}>
                ale.krecisz
			</NavItem>
			<div>
				{headerLinks.map((link) => (
					<NavItem 
						key={link.name}
						to={link.route}
					>
						{link.name}
					</NavItem>
				))}
			</div>    
		</Nav>
	);
};

export default HeaderComponent;