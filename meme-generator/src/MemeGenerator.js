import React, { Component } from 'react';
import './MemeGenerator.css';

class MemeGenerator extends Component {
   constructor(props){
     super(props);
     this.state = {
       topText: "",
       botText: "",
       randomImage: "https://i.imgflip.com/47r22c.jpg",
       allMemeImgs: []
     };
     this.handleChange = this.handleChange.bind(this);
   }

  // componentWillMount(){}
   componentDidMount(){
    fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => {
      const {memes} = response.data
      this.setState({
        allMemeImgs: memes
    })
  });
   }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

   handleChange(event){
     const {name, value} = event.target;
     this.setState(
       {
         [name]: value
       }
     )
   }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="top text" />
          <input type="text" name="botText" value={this.state.botText} onChange={this.handleChange} placeholder="bottom text" />
          <button>Generate</button>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;