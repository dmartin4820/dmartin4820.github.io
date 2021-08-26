import React from 'react';
import { linkedInImage, githubDark, emailImage } from '../assets/images';

const footerContainer = "w-100% mt-auto flex justify-center items-center bg-green-300 p-10 mt-20"; 
const link = "mx-5"
const linkStyle = {
	width: '80px'
}

function Footer() {
	return (
		<div className={footerContainer}>
			<a className={link} href="mailto:dom4822@yahoo.com"><img src={emailImage} style={linkStyle} alt='email Denzal Martin'/></a>
			<a className={link} target="_blank" href="https://www.linkedin.com/in/denzal-martin-a7ab63104/" rel="noreferrer"><img src={linkedInImage} style={linkStyle} alt='Link to Denzal Martin LinkedIn'/></a>
			<a className={link} href="https://github.com/dmartin4820" target="_blank" rel="noreferrer"><img src={githubDark} style={linkStyle} alt="Denzal Martin's GitHub"/></a>
		</div>
	)
}

export default Footer;