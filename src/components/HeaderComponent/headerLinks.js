import React from 'react';
import ROUTES from 'constants/route-constants';
import { ReactComponent as Behance } from 'assets/behance.svg';
import { ReactComponent as Github } from 'assets/github.svg';
import { ReactComponent as LinkedIn } from 'assets/linkedin.svg';

export const headerLinks = [    
	{
		name: 'About',
		route: ROUTES.PROFILE
	}, {
		name: 'Portfolio',
		route: ROUTES.PORTFOLIO
	}, {
		name: 'Contact',
		route: ROUTES.CONTACT
	},
];

export const socialLinks = [    
	{
		name: 'GitHub',
		link: 'https://github.com/ale-krecisz',
		icon: <Github />
	}, {
		name: 'Behance',
		link: 'https://www.behance.net/ale-krecisz',
		icon: <Behance />
	}, {
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/aleksandra-kr%C4%99cisz-b3205a107/',
		icon: <LinkedIn />
	},
];