import { useState } from 'react';
import Alert from '../Alert';
import React from 'react'

const containerStyle = ''
const formContainerStyle = 'flex justify-center p-20';
const formStyle = 'flex flex-col w-full';
const inputStyle = 'rounded-lg border-2 border-black p-2 mb-5';
const buttonStyle = `${inputStyle} p-2`;
const messageStyle = `${inputStyle} h-48 px-5 py-10`;


function ContactMe() {

	const nameInput = {
		value: useState(''),
		wasClicked: useState(false),
		isActive: useState(false)
	}

	const emailInput = {
		value: useState(''),
		wasClicked: useState(false),
		isActive: useState(false)
	}

	const messageInput = {
		value: useState(''),
		wasClicked: useState(false),
		isActive: useState(false)
	}

	// Get the appropriate input and it's states
	function getInputHandler(e) {
		const {name} = e.target;
		let input = {};	
		name === "fullName" 
			? input = nameInput
			: name === "email" 
				? input = emailInput
				: input = messageInput
		return input;	
	}

	// Changes value state 
	function handleChange(e) {
		const inputHandler = getInputHandler(e);
		inputHandler.value[1](e.target.value)
	}

	// Handle submit resets inputs and sends data to the server
	function handleSubmit(e) {
		e.preventDefault();
		nameInput.value[1]('');
		emailInput.value[1]('');	
		messageInput.value[1]('');	
	}

	// Change wasClicked status of input for displaying error message
	function handleClick(e) {
		const inputHandler = getInputHandler(e);
		inputHandler.wasClicked[1](true);
	}

	// Change active status of an input
	function handleFocus(e) {
		const inputHandler = getInputHandler(e);
		e.type === "focus" 
			? inputHandler.isActive[1](true)
			: inputHandler.isActive[1](false);
	}

	return (
		<div className={containerStyle}>
			<div className={formContainerStyle}>
				<form className={formStyle}>
					{
						nameInput.wasClicked[0] && nameInput.value[0] === ''
							? <Alert inputName='Full Name'/>
							: <></>
					}
					<input 
						value={nameInput.value[0]} 
						name="fullName" 
						type="text" 
						placeholder="Name" 
						onChange={handleChange} 
						onClick={handleClick} 
						onFocus={handleFocus}
						onBlur={handleFocus} 
						className={inputStyle}
					/>
					{
						emailInput.wasClicked[0] && emailInput.value[0] === ''
							? <Alert inputName='Email'/>
							: <></>
					}
					<input 
						value={emailInput.value[0]}
						name="email" 
						type="text" 
						placeholder="Email"
						onChange={handleChange}
						onClick={handleClick}
						onFocus={handleFocus}
						onBlur={handleFocus} 
						className={inputStyle}
					/>
					{
						messageInput.wasClicked[0] && messageInput.value[0] === ''
							? <Alert inputName='Message'/>
							: <></>
					}
					<textarea 
						value={messageInput.value[0]} 
						name="message" 
						placeholder="Message" 
						onChange={handleChange} 
						onClick={handleClick}
						onFocus={handleFocus}
						onBlur={handleFocus}
						className={messageStyle}
					/>
					<button type="button" onClick={handleSubmit} className={buttonStyle}>Send Message</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe;