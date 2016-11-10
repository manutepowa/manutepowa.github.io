import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
class App extends Component {
    
    render() {
        return ( 
            <div>
                <div className="cole">
                   Hello Wordddss!!! 
                </div>
            </div>
            
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("app"));