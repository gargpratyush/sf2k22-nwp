import React from 'react';
import ReactDOM from 'react-dom';
import './pop.css';

export default class PopUp extends React.Component{
    constructor(){
      super();
      this.state = {
        animation_name : '',
        depth: '',
        fade: ''
      };
    }
  
    closePopUp(){
      this.setState({animation_name: 'animate-out'});
      this.setState({depth:'above'});
       this.setState({fade:'fade-out'});
    }
    openPopUp(){
      this.setState({animation_name: 'animate-in'});
      this.setState({depth:'below'});
      this.setState({fade:'fade-in'});
    }

    render(){
        return (
          <div>
            <button className="opener" id={this.state.depth} onClick={this.openPopUp.bind(this)}>Cities</button>
            <section id="pop-up" className={this.state.animation_name}>
              <div id="innerPopUp" className={this.state.fade}>
                <div className="border-overlay">
                  <div className="white"></div>
                  <div className="black"></div>
                </div>
                <div className="text">
                  <h1>Spring Fest 2022 </h1>
                  <hr/>
                  <p className="close" onClick={this.closePopUp.bind(this)}><div className="close">X</div></p>
                  <p>Cities Name

                  </p>
                  
                </div>
                <div className="photo">
                  <img className="nav__photo"  src="https://static.pexels.com/photos/57905/pexels-photo-57905.jpeg"/>
                </div>
              </div>
            </section>
          </div>
        );
    }
}


