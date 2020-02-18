import React, {Fragment} from 'react';
import defaultSlide from 'assets/default-slide.jpg';

import {
	Container,
	BackgroundContainer,
	Image,
	Overlay,
	Warning
} from './styled';

const BackgroundComponent = (props) => {
	const { images } = props;
      
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
				)) : ((
				<Fragment>
					{renderDiv(
						defaultSlide,
						'underground image'
					)}

					<Warning>We can't find what You're looking for. 
						<br/>Please try again.
					</Warning>
				</Fragment>
			))
			}
			<Overlay />
		</Container>
	);
};


export default BackgroundComponent;