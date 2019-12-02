import React, {useRef} from 'react';
import * as PIXI from 'pixi.js';
import pic from '../assets/default-slide.jpg';
import { Stage, Sprite } from '@inlet/react-pixi';


const Bunny = () => {


	return (
		<Stage>
			<Sprite
				image={pic}
				scale={{ x: 0.5, y: 0.5 }}
				anchor={{x: 0.5, y: 0.5}}
				x={0}
				y={0}
			/>        
		</Stage>
	);
};

export default Bunny;