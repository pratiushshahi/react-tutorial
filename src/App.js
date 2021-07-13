import React, {Component} from "react";
import './App.css';
import {Top} from './components/Top';
import {ImageComponent} from './components/ImageComponent';
import {Todo} from './components/Todo';

class Header extends Component{

  constructor(props){
    super(props);

    this.state = {
      imageLink: [
        "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      ],
      websiteLink:[
        "https://github.com/pratiushshahi",
        "https://www.instagram.com/",
        "https://www.facebook.com/"
      ]
    }
  }


  render(){
    const random = Math.floor(Math.random() * this.state.imageLink.length)
    return (
      <header className="App-header">
        <ImageComponent sourcelink={this.state.imageLink[random]} link={this.state.websiteLink[random]} />
        <ImageComponent sourcelink={this.state.imageLink[(random+1)%3]} link={this.state.websiteLink[(random+1)%3]} />
        <ImageComponent sourcelink={this.state.imageLink[(random+2)%3]} link={this.state.websiteLink[(random+2)%3]} />
        </header>
    )
  }
}

class Footer extends Component{
  render(){
    return (
      <footer><p><a href="mailto:pratiushshahi883@gmail.com">pratiushshahi883@gmail.com</a></p></footer>
    )
  }
}

class App extends Component{
  render(){
    return (
    <div className="App">
      <Top funtitle="Pratiush Kumar Shahi"/>
      <Header />
      <Todo />
      <iframe src="https://group-chat-lobby.herokuapp.com/" style={{height:'30vh',width:'90vw',margin:'10px'}}></iframe>
      <Footer />
    </div>
  );
}
}

export default App;
