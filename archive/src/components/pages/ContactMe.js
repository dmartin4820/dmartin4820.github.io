import { useState } from 'react';
import Alert from '../Alert';
import React from 'react';
import validator from 'validator';

const containerStyle = 'flex justify-center'
const formContainerStyle = 'flex justify-center p-5 md:p-20 md:w-1/2';
const formStyle = 'flex flex-col w-full';
const inputStyleNoWarn = 'rounded-lg border-2 border-black p-2 mb-5';
// const inputStyleWarn = 'rounded-lg border-2 border-red-500 p-2 mb-5';
const buttonContainer = 'flex flex-col items-center' 
const buttonStyle = `${inputStyleNoWarn} p-2 w-4/12`;
const messageStyle = `${inputStyleNoWarn} h-48 px-5 py-10`;
const url = 'https://dmartin.herokuapp.com/messages';

function ContactMe() {

	const nameInput = {
		value: useState(''),
		wasClicked: useState(false),
		isActive: useState(false),
		style: useState(inputStyleNoWarn)
	}

	const emailInput = {
		value: useState(''),
		wasClicked: useState(false),
		isActive: useState(false),
		style: useState(inputStyleNoWarn)
	}

	const messageInput = {
		value: useState(''),
		wasClicked: useState(false),
		isActive: useState(false),
		style: useState(messageStyle)
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

    const fake = true //Hard coded value to disable actual sending of messages
    if (!fake) {
		  const messageInfo = {
		  	name: nameInput.value[0],
		  	email: emailInput.value[0],
		  	message: messageInput.value[0]
		  }

		  async function sendMessage() {
		  	const message = await fetch(url, {
		  		method: 'POST',
		  		body: JSON.stringify(messageInfo),
		  		headers: {
		  			'Content-Type': 'application/json'
		  		}
		  	});
		  	console.log(message);

		  	if (message.ok) {
		  		console.log(await message.json())
		  		console.log('Message sent!')
		  	} else {
		  		console.log('Message not sent!')
		  	}
		  }

		  sendMessage();
    } else {
      alert('Message sent! Thanks!')
    }

		nameInput.value[1]('');
		nameInput.wasClicked[1](false);
		emailInput.value[1]('');	
		emailInput.wasClicked[1](false);
		messageInput.value[1]('');	
		messageInput.wasClicked[1](false);
	}


	// Change active status of an input and set wasClicked to track whether error is displayed
	function handleFocus(e) {
		// const {name, value} = e.target;
		const inputHandler = getInputHandler(e);
		e.type === "focus" 
			? inputHandler.isActive[1](true)
			: inputHandler.isActive[1](false) || inputHandler.wasClicked[1](true);
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
						onFocus={handleFocus}
						onBlur={handleFocus}
						className={nameInput.style[0]}
					/>
					{
						(emailInput.wasClicked[0] && emailInput.value[0] === '') 
							|| (emailInput.wasClicked[0] && !validator.isEmail(emailInput.value[0]))
							? <Alert inputName='Valid email'/>
							: <></>
					}
					<input 
						value={emailInput.value[0]}
						name="email" 
						type="text" 
						placeholder="Email"
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleFocus} 
						className={emailInput.style[0]}
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
						onFocus={handleFocus}
						onBlur={handleFocus}
						className={messageInput.style[0]}
					/>
					<div className={buttonContainer}>
            <button type="button" onClick={handleSubmit} className={buttonStyle}>Send Message</button>
						{/* <button type="button" onClick={handleSubmit} className={buttonStyle}>Send Message</button> */}
						{/* <p>Feel free to leave a message! I'll receive the message as an entry in a database on my external server</p> */}
					</div>
					
				</form>
			</div>
		</div>
	)
}

export default ContactMe;