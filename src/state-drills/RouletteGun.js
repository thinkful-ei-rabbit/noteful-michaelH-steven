import React from 'react';


class Gun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    triggerPull = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false 
            })
        }, 2000)
    }

    result() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...';
        } else if(chamber === bulletInChamber) {
            return 'BANG!!!'
        } else {
            return "you're safe!"
        }  
    }

    render() {
        return (
            <div>
                <button onClick={this.triggerPull}>
                    Pull the trigger!
                </button> 
                <p>{this.result()}</p>
            </div>
            
        )
    }
}

export default Gun;