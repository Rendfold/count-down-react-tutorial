import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deadline: 'December 31, 2018',
            newDeadline: ''
        }
    }

    onDeadlineChange () {
        this.setState({deadline: this.state.newDeadline});
    }
    
    onNewDeadlineChange (event) {
        this.setState({newDeadline: event.target.value});
    }

    render () {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <div>
                    <input type="text" onChange={event => this.onNewDeadlineChange(event)}/>
                    <button onClick={() => this.onDeadlineChange()}>
                        Change
                    </button>
                </div>
            </div>
        );
    }
}

export default App;