import React, { useState } from 'react';

const githubLight = './images/GitHub-Mark-Light-120px-plus.png'; 
const githubDark = './images/GitHub-Mark-120px-plus.png';

const imgStyle = {
	width: 600,
}
const linkStyle ={
	width: 40,
}
const projectCard = 'flex m-2 w-1/2 p-5 transition duration-100 ease-in-out hover:bg-green-300 rounded-lg hover:shadow-2xl hover:text-white transform hover:-translate-y-1';
const heading = 'text-2xl mb-2';
const img = 'rounded-lg';
const descContainer = 'p-10 w-1/2';
const skillList = 'flex flex-wrap p-5';

function Project(props) {
	const [githubSrc, setGithubSrc] = useState(githubDark)

	function handleMouseEnter(e) {
		setGithubSrc(githubLight);
	}

	function handleMouseLeave(e) {
		setGithubSrc(githubDark);
	}

	return (
		<div className={projectCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<div>
				<img className={img} style={imgStyle} src={props.image_link} alt='This is a placeholder'/>
			</div>
			<div className={descContainer}>
				<a target="_blank" href={props.deployed_link} rel="noreferrer">
					<h3 className={heading}>{props.title}</h3>
				</a>
				<p>{props.description}</p>
				<div className={skillList}>
					{props.skills.map((skill, i) => {
						return (
							<p>
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