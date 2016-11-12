import React, { Component } from 'react';
import Footer from './footer';
export default class Card extends Component {
    
    render() {
        return ( 
        	<div className="bordered">
	            <div className="card-container">
	                
                    <div>
                        <div className="panel">
                            <div className="panel-heading">
                                <div className="aboutme">
                                    <div>
                                        <img src="./img/perfil.jpg" alt="Foto"/>
                                    </div>
                                    <div className="panel-description">
                                        <div className="name">
                                            <h4><b>Manuel Tercero Soria</b></h4>
                                            <span>Software Developer</span><hr/>
                                        </div>
                                        <div>
                                            Manuel tercero Soria
                                        </div>
                                        <div>
                                            Manuel tercero Soria
                                        </div>
                                         <div>
                                            Manuel tercero Soria
                                        </div>
                                        <div>
                                            Manuel tercero Soria
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div>
                                <Footer />
                            </div>
                        </div>
                    </div>
	            </div>   
            </div>
        )
    }
}