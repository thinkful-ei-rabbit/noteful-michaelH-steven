import React from 'react';

export class HelloWorld extends React.Component {
     constructor(props) {
         super(props)
         this.state = { who: 'world' }
    }
    handleWorldClick = () => {
        this.setState({ who: 'world!'})
    }
    handleFriendClick = () => {
        this.setState({ who: 'friend!'})
    }
    handleReactClick = () => {
        this.setState({ who: 'react!'})
    }
    render() {
        return (
            <div>
                <p>Hi there, {this.state.who}</p>
                <button onClick={this.handleWorldClick}>World</button>
                <button onClick={this.handleFriendClick}>Friend</button>
                <button onClick={this.handleReactClick}>React</button>
            </div>
        )
    };
};

