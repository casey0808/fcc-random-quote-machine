import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './components/QuoteMachine';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuoteIndex: null,
      quotes: []
    }
    this.nextQuoteClickHandler = this.nextQuoteClickHandler.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.nextQuoteClickHandler())
    )
  }
  get selectedQuote(){
    if(!this.state.quotes.length){
      return this.state.quotes[0];
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  getRandomIndex() {
    if(!this.state.quotes.length){
      return 0;
    }
    return Math.floor(Math.random() * Math.floor(this.state.quotes.length));
  }

  nextQuoteClickHandler() {
      this.setState({
        selectedQuoteIndex: this.getRandomIndex()
      })
  }
  

  render(){
    return (
      <div className="App" id="quote-box">
        <QuoteMachine selectedQuote={this.selectedQuote} nextQuoteClickHandler={this.nextQuoteClickHandler}/>
      </div>
    );
  }
}

export default App;
