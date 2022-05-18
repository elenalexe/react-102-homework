import React, { Component } from "react";
import WrappedComponent from './ReactCounter';

class DislikesCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return <button onClick={incrementCount}>{count} dislikes</button>
    }
}
export default WrappedComponent(DislikesCounter);