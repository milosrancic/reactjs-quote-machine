import React from 'react';
import './Quote.css';

class Quote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quoteText: '',
      quoteAuthor: '',
      error: null, 
      isLoaded: false
    }

    this.randomQuote = this.randomQuote.bind(this);
  } 

  // fetch random quote
randomQuote() {
  fetch('https://quota.glitch.me/random')
  .then(response => response.json())
  .then(data => {
      this.setState({
        quoteText: data.quoteText,
        quoteAuthor: data.quoteAuthor,
        isLoaded: true
      })
  },
  (error) => {
    this.setState({
      isLoaded: true,
      error
    });
  })
}

  componentDidMount() {
    this.randomQuote();
  }

  render() {
    const {quoteText, quoteAuthor, error, isLoaded} = this.state;
    const tweet = `${this.state.quoteText} - ${this.state.quoteAuthor} -`;

      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div className="loading">Loading...</div>
      } else {
        return (
            <div>

              <div className="buttons-container">
                <a href={`https://twitter.com/intent/tweet/?text=${tweet}`} target="_blank" id="tweet-quote">
                  <i className="fab fa-twitter"></i>
                </a>
                <a onClick={this.randomQuote} id="new-quote">
                  <i className="fas fa-sync-alt"></i>
                </a>
              </div>

              <div className="quote-container">
                  <p id="text">"{quoteText}"</p>
                  <p id="author"> - {quoteAuthor} - </p>
              </div>

              <p className="github">
                <small>by: </small>Milos Rancic 
                  <a href="https://github.com/milosrancic" target="_blank">
                     <i className="fab fa-github"></i>
                  </a>
              </p>

          </div>
        )
      }
  }
}

export default Quote;