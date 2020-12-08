import React from 'react'
import { quoteDatabase } from './quoteDatabase'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote:
        quoteDatabase[Math.floor(Math.random() * quoteDatabase.length - 1)]
          .quote,
      author:
        quoteDatabase[Math.floor(Math.random() * quoteDatabase.length - 1)]
          .author
    };
    this.quoteAuthorChange = this.quoteAuthorChange.bind(this);
  }

  quoteAuthorChange() {
    let randomQ =
      quoteDatabase[Math.floor(Math.random() * quoteDatabase.length)];
    this.setState({
      quote: randomQ.quote,
      author: randomQ.author
    });
  }

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left" />
            <span className="text"> {this.state.quote} </span>
            <i className="fa fa-quote-left" />
          </div>
          <div class="quote-author">
            <span id="author">{this.state.author}</span>
          </div>

          <p className="Stoic-Quotes">Roman Emperor Quotes</p>

          <div className="buttons">
            <a
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= You have power over your mind - not outside events. Realize this, and you will find strength ~ Marcus Aurelius"
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com/intent/post?hashtags=quotes&related=freecodecamp&text= You have power over your mind - not outside events. Realize this, and you will find strength ~ Marcus Aurelius"
              className="button"
              id="facebook-quote"
              title="Post this quote on facebook!"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/intent/post?hashtags=quotes&related=freecodecamp&text= You have power over your mind - not outside events. Realize this, and you will find strength ~ Marcus Aurelius"
              className="button"
              id="instagram-quote"
              title="Post this quote on instagram story!"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <button
              className="button"
              id="new-quote"
              title="Generate new quote!"
              onClick={this.quoteAuthorChange}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className="footer">
          by{" "}
          <a href="https://www.linkedin.com/in/zurab-zaridze/">Zurab Zaridze</a>
          <br />
          <br />
          <a
            style={{ color: "red" }}
            href="https://www.behance.net/gallery/11729143/Dark-forest"
            target="_blank"
          >
            Image Source
          </a>
        </div>
      </div>
    );
  }
}
  


export default App;
