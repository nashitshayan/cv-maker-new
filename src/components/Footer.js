import React from 'react';

function Footer() {
	return (
		<footer>
			<div>
				Made by
				<a
					href='https://github.com/nashitshayan'
					target='_blank'
					rel='noreferrer'>
					{' '}
					Nashit Shayan Khan{' '}
				</a>
				. Click
				<a
					href='https://github.com/nashitshayan/cv-maker-new'
					target='_blank'
					rel='noreferrer'>
					{' '}
					here{' '}
				</a>
				to see the code.
			</div>
			<div>
				Design taken from{' '}
				<a
					href='https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1'
					target='_blank'
					rel='noreferrer'>
					here
				</a>
			</div>
		</footer>
	);
}

export default Footer;
