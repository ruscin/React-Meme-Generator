import React, { Component } from 'react';
import './MemeGenerator.css';

class MemeGenerator extends Component {
   constructor(props){
     super(props);
     this.state = {
       topText: "",
       botText: "",
       randomImage: "https://i.imgflip.com/2hgfw.jpg",
       allMemeImgs: []
     };
     this.handleChange = this.handleChange.bind(this);
     this.hadnleSumbit = this.hadnleSumbit.bind(this);
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
   
   handleChange(event){
     const {name, value} = event.target;
     this.setState({ [name]: value })
   }
    hadnleSumbit(event){
     event.preventDefault()
     const randNum = Math.floor(Math.random() *this.state.allMemeImgs.length)
     const newMeme = this.state.allMemeImgs[randNum].url
     this.setState({
       randomImage: newMeme
     })
   } 

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.hadnleSumbit}>
          <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="top text" />
          <input type="text" name="botText" value={this.state.botText} onChange={this.handleChange} placeholder="bottom text" />
          <button >Generate</button>
        </form>
        <div className="meme-field">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.botText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;