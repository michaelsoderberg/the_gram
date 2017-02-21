import React, { Component } from 'react';
import logo from './logo.svg';
import 'whatwg-fetch';
import './App.css';

const Image = ({url}) => <img src={url} />
class App extends Component {
  state = { images: [], loading: true };

  componentWillMount() {
    fetch(`http://localhost:8000/images`)
      .then(res => res.json())
      .then(images => this.setState({ images, loading: false }));
  }
  render() {
    console.log(this.state);
    const {images, loading} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lysande Sickan!</h2>
        </div>
        {loading ? <pre>laddar...</pre> : images.map(Image)}
      </div>
    );
  }
}

export default App;

