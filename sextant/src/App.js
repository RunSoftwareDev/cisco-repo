import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner';
import Exhibit from './components/exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="I'm also an exhibit!"></Exhibit>
                <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
            </div>
        );
    }
}

export default App;
