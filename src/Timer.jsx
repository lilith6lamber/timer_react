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
        setInterval(() => this.setState({count: this.state.count + 1}), 1000)
    }

    reset = () => {
        this.setState({count: 0, isActive: false})
    }

    render() {
        return (
            <div className='container'>
                <div className='timer'>
                    <span className='timer_count'>{this.state.count}</span>
                    <div className="timer_controls">
                        <button onClick={this.start}>{this.state.isActive ? 'Pause' : 'Start'}</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;