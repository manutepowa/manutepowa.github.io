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
                                        <img className="img-rounded" src="./build/img/perfil.jpg" alt="Foto"/>
                                    </div>
                                    <div className="panel-description">
                                        <div className="name">
                                            <h4><b>Manuel Tercero Soria</b></h4>
                                            <span>Computer Science and Engineering</span><hr/>
                                        </div>
                                        <div className="details-me">
                                            <div>Edad: </div>
                                            <div>29 años</div>
                                        </div>
                                        <div className="details-me">
                                            <div>Población: </div>
                                            <div>ELDA (Alicante)</div>
                                        </div>
                                        <div className="details-me">
                                            FullStack Developer
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