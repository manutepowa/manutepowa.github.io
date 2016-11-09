import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
class App extends Component {
    
    render() {
        return ( 
            <div>
                <div>
                   Hello Word!!!
                </div>
            </div>
            
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("app"));