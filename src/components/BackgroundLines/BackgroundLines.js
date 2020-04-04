import React from 'react';

import {
	Container,
	HorizontalContainer, 
	Line,
	TopContainer,
	VerticalContainer
} from './styled';

const BackgroundLines = () => {   

	const renderLines = (number) => {
		let item = [];
		for (let i = 0; i < number; i++) {
			item.push(
				<Line 
					key={ i }
				/>
			);
		}
		return item;
	};
        
	return (
		<Container>
			<HorizontalContainer>
				{renderLines(8)}
			</HorizontalContainer>
			<VerticalContainer>
				{renderLines(8)}
			</VerticalContainer>

			<TopContainer>
				<HorizontalContainer>
					{renderLines(3)}
				</HorizontalContainer>
				<VerticalContainer>
					{renderLines(4)}
				</VerticalContainer>
			</TopContainer>
		</Container>
	);
};


export default BackgroundLines;