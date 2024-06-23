import React from 'react';


function Alert(props) {
	console.log(props)
	return (
		<div className='flex'>
			<div className='text-red-500 rounded-lg p-1 w-1/2'>
				<strong className='font-bold'>{props.inputName}</strong>
				<p className='inline'> is required!</p>
			</div>
		</div>
	)
}

export default Alert;