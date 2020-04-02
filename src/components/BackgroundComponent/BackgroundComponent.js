import React from 'react';
import defaultSlide from 'assets/default-slide.jpg';
import PropTypes from 'prop-types';

import {
	Container,
	BackgroundContainer,
	Image,
	Overlay,
} from './styled';

const BackgroundComponent = ({images}) => {


	const renderDiv = (src, alt) => {
		let item = [];
		for (let i = 0; i < 4; i++) {
			item.push(
				<BackgroundContainer 
					key={ i }
				>
					<Image 
						src={src} 
						alt={alt}
					/>
				</BackgroundContainer> 
			);
		}
		return item;
	};
        
	return (
		<Container>
			{images !== undefined ? ( 
				renderDiv(
					images.urls.regular, 
					images.alt_description
				)) : (
				renderDiv(
					defaultSlide,
					'underground image'
				)
			)}
			<Overlay />
		</Container>
	);
};


BackgroundComponent.propTypes = {
	images: PropTypes.object
};

export default BackgroundComponent;