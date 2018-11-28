import React, { Component } from 'react';
import axios from 'axios';

class PopokListBertasbih extends Component {
    state = { listPopok: [] }

    componentDidMount() {
        axios.get('http://localhost:1997/popok')
            .then((res) => {
                this.setState({ listPopok: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    renderListPopok = () => {
        var listJSXPopok = this.state.listPopok.map((item) => {
            return (
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fas fa-plus fa-3x" />
                            </div>
                        </div>
                        <img className="img-fluid" src={item.img} alt="ferguso" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>{item.nama}</h4>
                        <p className="text-muted">{item.description}</p>
                    </div>
                </div>  
            )
        })
        return listJSXPopok;
    }

    render() {
        return (
            <div>
                <section className="bg-light" id="portfolio">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">List Popok</h2>
                            <h3 className="section-subheading text-muted">Best popok in town.</h3>
                        </div>
                        </div>
                        <div className="row">
                               {this.renderListPopok()}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PopokListBertasbih;