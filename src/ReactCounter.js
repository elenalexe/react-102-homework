import React from "react";

const reactCounter = WrapperdComponent => {
    class ReactCounter extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        render() {
            return <WrapperdComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
            />
        }
    }

    return ReactCounter;
}
export default reactCounter;