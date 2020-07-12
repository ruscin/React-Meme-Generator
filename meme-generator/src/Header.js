import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
     <header className="header">
       <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="huh?"/>
       <p>
         Meme Generator
       </p>
     </header>
    );
  }
}

export default Header;