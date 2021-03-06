import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CartBertasbih extends Component {
    state = { cartList: [], selectedIdEdit: 0, totalPrice: 0 }

    componentDidMount() {
        this.getCartList();
    }

    getCartList = () => {
        axios.get('http://localhost:1997/cart', {
            params: {
                username: this.props.username
            }
        }).then((res) => {
            var price = 0;
            res.data.forEach(element => {
                price += (element.quantity * element.harga);
            });
            this.setState({ cartList: res.data, selectedIdEdit: 0, totalPrice: price })
        }).catch((err) => {
            console.log(err)
        })
    }

    onBtnSaveClick = (item) => {
        var quantity = parseInt(this.refs.quantityEdit.value);

        axios.put('http://localhost:1997/cart/' + item.id, {
            ...item, quantity
        }).then((res) => {
            this.getCartList();
        }).catch((err) => {
            console.log(err);
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete('http://localhost:1997/cart/' + id)
            .then((res) => {
                this.getCartList();
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    onBtnCheckoutClick = () => {
        if(window.confirm('Are you sure to Checkout?')) {
            axios.post('http://localhost:1997/transaksi', {
                username: this.props.username,
                tglTransaksi: new Date(),
                totalPrice: this.state.totalPrice,
                totalItem: this.state.cartList.length
            }).then((res) => {
                this.state.cartList.forEach((item) => {
                    axios.post('http://localhost:1997/transaksiItem', {
                        transaksiId: res.data.id,
                        popokId: item.popokId,
                        nama: item.nama,
                        harga: item.harga,
                        img: item.img,
                        quantity: item.quantity
                    }).then((res) => {
                        console.log('add success' + item.popokId)
                    }).catch((err) => {
                        console.log(err)
                    })
                    axios.delete('http://localhost:1997/cart/' + item.id)
                            .then((res) => {
                                console.log('delete success' + item.popokId)
                                this.getCartList();
                            }).catch((err) => {
                                console.log(err)
                            })
                })
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    renderBodyPopok = () => {
        var listJSXPopok = this.state.cartList.map((item) => {
            if(item.id !== this.state.selectedIdEdit) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td><img src={item.img} width="50px" alt={item.id} /></td>
                        <td>Rp. {item.harga}</td>
                        <td>{item.quantity}</td>
                        <td>Rp. {item.harga * item.quantity}</td>
                        <td><input className="btn btn-primary" type="button" value="Edit" onClick={() => this.setState({ selectedIdEdit: item.id })} /></td>
                        <td><input className="btn btn-danger" type="button" value="Remove" onClick={() => this.onBtnDeleteClick(item.id)} /></td>
                    </tr> )
            }
            
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        {item.nama}
                    </td>
                    <td><img src={item.img} width="50px" alt={item.id} /></td>
                    <td>Rp. {item.harga}</td>
                    <td>
                        <input
                            type="number"
                            ref="quantityEdit"
                            defaultValue={item.quantity}
                        />
                    </td>
                    <td>Rp. {item.harga * item.quantity}</td>
                    <td><input className="btn btn-primary" type="button" value="Save" onClick={() => this.onBtnSaveClick(item)} /></td>
                    <td><input className="btn btn-danger" type="button" value="Cancel" onClick={() => this.setState({ selectedIdEdit: 0 })} /></td>
                </tr> )
            
        })
        return listJSXPopok;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="section-heading text-uppercase">Cart</h1>
                    </div>
                </div>
                <center>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Image</th>
                                <th>Harga</th>
                                <th>Quantity</th>
                                <th>Total Harga</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderBodyPopok()}
                        </tbody>
                    </table>
                    <div>
                        <h2>Total Price : Rp. {this.state.totalPrice}</h2>
                    </div>
                    <div className="col-4">
                        <input type="button" className="btn btn-success" value="Checkout" onClick={this.onBtnCheckoutClick} />
                    </div>
                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return { username: state.auth.username };
}

export default connect(mapStateToProps)(CartBertasbih);