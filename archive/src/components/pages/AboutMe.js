import React from 'react';
import {self} from '../../assets/images';

const imgStyle = {
	width: 200
}
const aboutContainer = 'flex flex-col xl:flex-row items-center mt-10 p-5 sm:w-1/2';
const aboutDesc = 'mt-5 xl:mt-0 self-start';
const img = 'border-4 border-green-900 rounded-lg mr-10';

function AboutMe() {
  return (
		<div className='flex flex-col items-center h-full'>
    	<div className={aboutContainer}>
				<img className={img} src={self} alt='Denzal Martin' style={imgStyle}/>
    	  <p className={aboutDesc}>
    	    Full-stack software developer with interest in working on finding solutions to a variety of software problems, easy or challenging. Recently obtained a Physics M.S. at Stanford where I performed two years of data analysis, automation of instrumentation, and experimentation in Python and LabView. My interests are in solving hard and novel problems, specifically with programming. Currently, I’m hoping to apply my problem-solving skills to software/web development. In two recent projects (Jam Map and Event Architect), I worked with four different people, two on each project, and we built simple web apps using JavaScript, HTML, CSS, Node.js, and MySQL. During these two projects, I enjoyed tackling problems in JavaScript, Node.js, and models for the MVC paradigm of the second project.<br/><br/> 
          Please visit <a className="font-bold" href="https://github.com/dmartin4820/dmartin4820.github.io" target="_blank" alt="Denzal's Portfolio Github Repo" rel="noreferrer">this link</a> to see some details on Github for how I implemented certain features to make this portfolio. 
    	  </p>
    	</div>
		</div>
  )
}

export default AboutMe;