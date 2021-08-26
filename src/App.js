import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';


function App() {
  return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Header />
				<Switch>
					<Route exact path='/' component={AboutMe}/>
					<Route path='/contactMe' component={ContactMe}/>
					<Route path='/portfolio' component={Projects}/>
					<Route path='/resume' component={Resume}/>
					<Route path='*' component={AboutMe}/>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
