import React, { Component } from "react";
import WrappedComponent from './ReactCounter';

class LikesCounter extends Component {
    render() {
        const { count, incrementCount, displayLike } = this.props
        return <button onClick={() => {
            console.log('%cLikesCounter.js line:8 displayLike', 'color: #007acc;', this.props);
            incrementCount();
            displayLike && displayLike()
        }
        }>{count} likes</button>
    }
}
export default WrappedComponent(LikesCounter);