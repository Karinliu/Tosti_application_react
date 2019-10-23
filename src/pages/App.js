import React, { Component } from 'react';
import Header from '../components/Header';
import '../sass/bread.scss';
import '../sass/app.scss';
import { Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="container">
              <Header text="Maak jouw boodschappenlijstje voor de ultieme tosti!"/>
              <div className="bread-container">
                <div className="bread"></div>
	          </div>
              <Link className="btn" to={`/start`} >Start</Link>
            </div>
        )
    }
}

export default App