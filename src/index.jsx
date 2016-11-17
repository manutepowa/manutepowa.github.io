import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card';
import './styles/style.scss';
class App extends Component {
    
    render() {
        return ( 
            <div className="image">
	            <div className="flex-container bordered">
	            	<Card />
	            </div>
            </div>
            
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("app"));