import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const movies = [
	{
		title: "SPACE MOVIE",
		description: "This is the first movie.",
		img: "/spacemovie.jpg"
	},
	{
		title: "WOOD",
		description: "This is the second movie.",
		img: "wood.jpg"
	},
	{
		title: "MYSTERY",
		description: "This is the third movie.",
		img: "mystery.jpg"
	}
];

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Home = () => {
	return (
		<Box sx={{ width: '100%',height:'0.5%', margin: 'auto', mt: 5 }}>
			<Slider {...settings}>
				{movies.map((movie, index) => (
					<Paper key={index} sx={{ position: 'relative',
					margin: 'auto',
					borderRadius: '20px',  // Add border-radius to Paper
					overflow: 'hidden'
					 }}>
						<img src={movie.img} alt={movie.title} style={{ width: '100%', height: '200px' }} />
						<Box sx={{ position: 'absolute', bottom: 20, left: 20, color: '#fff' }}>
							<Typography variant="h4" component="h2">
								{movie.title}
							</Typography>
							<Typography variant="body1">
								{movie.description}
							</Typography>
						</Box>
					</Paper>
				))}
			</Slider>
		</Box>
	);
};

export default Home;
