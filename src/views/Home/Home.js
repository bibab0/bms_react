import React, { Component } from 'react';
import store from '../../store/Store';
import * as Action from '../../store/Action';
export default class Home extends Component {
    state = {
        count: store.getState()
    }
    onIncrement = () => {
        store.dispatch(Action.increment());
    };
    onDecrement = () => {
        store.dispatch(Action.decrement());
    };
    render() {
        store.subscribe(() => {
            this.setState({
                count: store.getState()
            })
        })
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={this.onIncrement}>增加</button>
                <button onClick={this.onDecrement}>减少</button>
            </div>
        )
    }
}