import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../store/Action';
class Home extends Component {
    render() {
        const { increment, decrement } = this.props;
        return (
            <div>
                <h1>{this.props.text}{this.props.count}</h1>
                <button onClick={() => increment()}>增加</button>
                <button onClick={() => decrement()}>减少</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    count: state.count,
    text: state.hello
})
export default connect(mapStateToProps, Action)(Home);