import React, { useEffect, useState } from 'react';
import Project from '../Project';

const projectContainer = 'flex flex-col items-center mt-10 mb-48';


function Projects(props) {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects();
		console.log('here')
	}, [])

	async function getProjects() {
		const results = await fetch('https://dmartin.herokuapp.com/projects');
		const data = await results.json();
		setProjects(data)
	}
	
	return (
		<div className={projectContainer}>
			{projects.map(project => {
				return (
					<Project
						{...project}
					/>
				)
			})}
		</div>
	)
}

export default Projects;