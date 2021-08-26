import React, { useState } from 'react';
import {githubDark, githubLight} from '../assets/images';

const imgStyle = {
	width: 600,
}
const linkStyle ={
	width: 40,
}
const projectCard = 'flex flex-col m-2 p-5 transition duration-100 ease-in-out hover:bg-green-300 rounded-lg hover:shadow-2xl hover:text-white transform hover:-translate-y-1';
const heading = 'text-2xl mb-2 inline';
const img = 'rounded-lg';
const descContainer = 'p-2';
const skillList = 'flex flex-wrap p-5';

function Project(props) {
	const [githubSrc, setGithubSrc] = useState(githubDark)
	const [visible, setVisible] = useState('hidden');

	function handleMouseEnter(e) {
		setGithubSrc(githubLight);
		setVisible('')
	}

	function handleMouseLeave(e) {
		setGithubSrc(githubDark);
		setVisible('hidden')
	}

	return (
		<div className={projectCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div>
				<img className={img} style={imgStyle} src={props.image_link} alt='This is a placeholder'/>
			</div>
			<div className={descContainer}>

				{props.deployed_link !== '' 
					? <a target="_blank" href={props.deployed_link} rel="noreferrer">
							<h3 className={heading}>{props.title}</h3>
							<span className={`${visible} p-2 font-bold text-green-900`}>&larr; Visit Site</span>
						</a>
					: <h3 className={heading}>{props.title} (No deployed link)</h3>
				}

				<p>{props.description}</p>
				<div className={skillList}>
					{props.skills.map((skill, i) => {
						return (
							<p key={i}>
								{skill.name}
								{i !== props.skills.length - 1 
									? <span className='mx-1'>&bull;</span>
									: <span></span>}
							</p>
					)})}
				</div>
				<a href={props.github_link} target="_blank" rel="noreferrer">
					<img src={githubSrc} style={linkStyle} alt="Denzal Martin's GitHub"/>
				</a>
			</div>
		</div>
	)
}

export default Project;