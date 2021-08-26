import React, { useEffect, useState } from 'react';
import Project from '../Project';

// const projectContainer = 'flex flex-col items-center mt-10 mb-48';
const projectContainer = 'grid grid-cols-3 p-20'
const url = 'https://dmartin.herokuapp.com/projects';
// const url = 'http://localhost:3001/projects'; 

function Projects(props) {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects();
		console.log('here')
	}, [])

	async function getProjects() {
		const results = await fetch(url);
		const data = await results.json();
		setProjects(data)
	}
	
	return (
		<div className={projectContainer}>
			{projects.map((project, i) => {
				return (
					<Project
						{...project}
						key={i}
					/>
				)
			})}
		</div>
	)
}

export default Projects;