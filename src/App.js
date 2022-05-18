import React, { useRef } from 'react';
import './App.css';
import DislikesCounter from './DislikesCounter';
import LikesCounter from './LikesCounter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.emojiRef = React.createRef();
    this.displayLike = this.displayLike.bind(this)
    this.setShouldShowLike = this.setShouldShowLike.bind(this)

    this.state = {
      shouldShowLike: false,
    }
  }

  displayLike() {
    this.emojiRef.current.style.display = 'block';
    setTimeout(() => {
      this.emojiRef.current.style.display = 'none';
    }, 3000)
  }

  setShouldShowLike(shouldShowLike) {
    this.setState({ shouldShowLike })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.displayLike} >Display Like</button>
        <LikesCounter />
        <div ref={this.emojiRef} style={{ display: 'none' }}><p>👍</p></div>
        <DislikesCounter />
      </div>
    );
  }

}

export default App;
