import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class HomeBertasbih extends Component {
    state = { listPopok: [] }

    componentDidMount() {
        axios.get('http://localhost:1997/popok')
            .then((res) => {
                console.log(res.data)
                this.setState({ listPopok: res.data })
            })
    }

    renderListPopok = () => {
        var listJSXPopok = this.state.listPopok.map((item) => {
            return (
                <div>
                    <h3>{item.nama}</h3>
                    <p>{item.description}</p>
                </div>
            )
        })
        return listJSXPopok;
    }

    render() {
        return(
            <div>
                <h1>Ini Home</h1>
                {this.renderListPopok()}
                <h2>{this.props.pikachu}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { pikachu: state.pikachu };
}

export default connect(mapStateToProps)(HomeBertasbih);
