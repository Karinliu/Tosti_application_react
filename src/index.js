import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './sass/base.scss';
import App from './pages/App';
import Start from './pages/Start';
import NotFound from './pages/NotFound'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
	    <nav>
	    	<ul>
		    	<li>
		    		<Link to="/">My To Do List</Link>
		      	</li>		    	
		      	<li>
		    		<Link to="/start">Start</Link>
		      	</li>
	    	</ul>
	    </nav>
		<Switch>
        	<Route exact path="/" component={App} />
        	<Route exact path="/start" component={Start} />
        	<Route component={NotFound} />
      </Switch>
  </Router>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
