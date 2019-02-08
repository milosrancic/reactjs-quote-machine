import React from 'react';
import Quote from './Quote';

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Random Quote Machine</h1>
          <div id="quote-box">
            <Quote />
          </div>
      </div>
    )
  }
}

export default App;