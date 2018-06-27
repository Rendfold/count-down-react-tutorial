import React, { Component } from 'react'
import './App.css';

class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount () {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil (deadline) {
        let time = Date.parse(deadline) - Date.parse(new Date());
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 / 60)) % 60);
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        let days = Math.floor(time/(1000 * 60 * 60 * 24));

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }

    render () {
        return (
            <div>
                <div className="clock clock-days">{this.state.days} days</div>
                <div className="clock clock-hours">{this.state.hours} hours</div>
                <div className="clock clock-minutes">{this.state.minutes} minutes</div>
                <div className="clock clock-seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}

export default Clock;