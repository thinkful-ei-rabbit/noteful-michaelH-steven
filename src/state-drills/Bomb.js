import React from 'react';

class Bombs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })



            console.log(this.state.count);

        }, 1000)
        //increase interval with count
        //count + 1
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    bombCount() {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval);
            return 'BOOM!!!';

        } else if (count % 2 === 0) {
            return 'tick';
        } else if (count % 2 === 1) {
            return 'tock';
        }
    }

    render() {
        return (
            <div>{this.bombCount()}</div>
            
        )
    }
}

export default Bombs;