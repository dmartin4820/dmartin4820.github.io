import React, {useState, useEffect} from 'react';
// import resumeLink_old from '../../assets/resume/denzal_m_resume_20210920_master.pdf';
import resumeLink from '../../assets/resume/denzal_m_resume_20211127_master.pdf'

const skillsTop = 'flex flex-col items-center mt-10';
const skillsContainer = ''
const skillHeading = 'text-2xl font-bold text-green-900 self-start';
const skillItem = 'list-disc pr-5';
const list = 'px-10';
const resume = 'text-2xl font-bold text-green-900 p-10';
const url = 'https://dmartin.herokuapp.com/skills';
// const url = 'http://localhost:3001/skills'
function Resume() {
	const [skillList, setSkillList] = useState([]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSkills();
	}, [])

	async function getSkills() {
		const skills = await fetch(url);
		if (skills.ok) {
      setLoading(false);
			setSkillList(await skills.json());
		} else {
			console.log('Error getting skills');
		}
	}

	return (
		<div className={skillsTop}>
			{loading 
        ? 'Loading Skills...' 
        : (<div className={skillsContainer}>
			    	<h1 className={skillHeading}>Skills</h1>
			    	<ul className={list}>
			    			{skillList.map((skill,i) => {
			    				return <li className={skillItem} key={i}>{skill.name}</li>
			    			})}
			    	</ul>
			    </div>)
      }
			<a className={resume} href={resumeLink} target="_blank" rel="noreferrer">Link to Resume</a>
      {/* <a className="hidden" href={resumeLink_old} target="_blank" rel="noreferrer">Link to Resume</a> */}
		</div>
	)
}

export default Resume;
