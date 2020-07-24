import React, { Component } from 'react';
import './MemeGenerator.css';

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      botText: "",
      randomImage: "https://i.imgflip.com/gk5el.jpg",
      allMemeImgs: [],
      currentID: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillMount(){}
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => {
      const { memes } = response.data
      console.log(memes);
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

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value
      }
    )
  }
  changeMeme = (e) => {
    e.preventDefault();
    this.setState({
      randomImage: this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length - 1)].url,
    })
  }

 // getH = () => this.state.allMemeImgs.filter(_url => _url === this.state.randomImage)[0].height;
 // getW = () => this.state.allMemeImgs.filter(_url => _url === this.state.randomImage)[0].width; zostawiam na pamiątkę to prawdziwe dzieło



  render() {

    const mystyle= {
      height: this.state.getH,
    }
    return (
      <div>
        <form className="meme-form" onSubmit={(e) => this.changeMeme(e)}>
          <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="top text" />
          <input type="text" name="botText" value={this.state.botText} onChange={this.handleChange} placeholder="bottom text" />
          <button className="btn">Generate</button>
          <div className="meme">
            <p className="top">{this.state.topText}</p>
            <img src={this.state.randomImage}></img>
            <p className="bottom">{this.state.botText}</p>
          </div>
        </form>
      </div>
    );
  }


}



export default MemeGenerator;