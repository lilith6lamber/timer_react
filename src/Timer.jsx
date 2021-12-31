/*
ТЗ:

1) Таймер с кнопками старт/стоп и сброс
2) Надписи на кнопке старт/стоп меняются
3) Сохранять состояние counter в localStorage
*/

import {Component} from "react";

class Timer extends Component {
    state = {
        count: 0,
        isActive: false
    }

    start = () => {
        this.setState({isActive: true})
        this.counterId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    pause = () => {
        this.setState({isActive: false})
        clearInterval(this.counterId)
    }

    reset = () => {
        this.setState({count: 0, isActive: false})
        clearInterval(this.counterId)
    }

    componentDidMount() {
        const userData = localStorage.getItem('count');
        if (userData) {
            this.setState({count: +userData})
        }
    }

    componentDidUpdate() {
        localStorage.setItem('count', this.state.count)
    }

    componentWillUnmount() {
        clearInterval(this.counterId)
    }

    render() {
        return (
            <div className='container'>
                <div className='timer'>
                    <span className='timer_count'>{this.state.count}</span>
                    <div className="timer_controls">
                        {this.state.isActive ? <button className='pause' onClick={this.pause}>Pause</button> : <button className='start' onClick={this.start}>Start</button>}
                        <button className='reset' onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;