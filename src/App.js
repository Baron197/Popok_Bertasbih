import React, { Component } from 'react';
import HeaderBertasbih from './components/HeaderBertasbih';
import ContentBertasbih from './components/ContentBertasbih';
import LoginBertasbih from './components/LoginBertasbih';
import HomeBertasbih from './components/HomeBertasbih';
import { Route } from 'react-router-dom';
import RegisterBertasbih from './components/RegisterBertasbih';
// import FooterBertasbih from './components/FooterBertasbih';
// import InputBertasbih from './components/InputBertasbih';

class App extends Component {
  state = { content: 'Ini Content' }

  onBtnOKClick = () => {
    this.setState({ content: 'Ini Comberan' })
  }

  render() {
    return (
      <div>
        <HeaderBertasbih navBrand={"Kacrut"} />
        <div className={'container-fluid'}>
          <Route exact path="/" component={HomeBertasbih} />
          <Route path="/login" component={LoginBertasbih} />
          <Route path="/register" component={RegisterBertasbih} />
        </div>
      </div>
    );
  }
}

export default App;

// class Manusia {
//   constructor(bertasbih, kucing) {
//     this.nama = bertasbih
//     this.umur = kucing
//   }
// }

// var Andi = new Manusia('Andi', 25);
// var Budi = new Manusia('Budi', 27);