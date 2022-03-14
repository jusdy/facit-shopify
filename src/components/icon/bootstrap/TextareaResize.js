import * as React from 'react';

function SvgTextareaResize(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M0 4.5A2.5 2.5 0 012.5 2h11A2.5 2.5 0 0116 4.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 010 11.5v-7zM2.5 3A1.5 1.5 0 001 4.5v7A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0013.5 3h-11zm10.854 4.646a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708l3-3a.5.5 0 01.708 0zm0 2.5a.5.5 0 010 .708l-.5.5a.5.5 0 01-.708-.708l.5-.5a.5.5 0 01.708 0z' />
		</svg>
	);
}

export default SvgTextareaResize;