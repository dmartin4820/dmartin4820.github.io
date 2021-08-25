import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
		<Router>
			<div className="flex flex-col">
				<Header />
				<Route exact path='/' component={AboutMe}/>
				<Route exact path='/contactMe' component={ContactMe}/>
				<Route exact path='/portfolio' component={Projects}/>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
