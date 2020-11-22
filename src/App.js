import React from 'react';
import './App.scss';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from "./components/Header";
function App(props) {
    return (
        <div className="App-wrapper">
        <div className="App">
                    <Header />
                    <Content/>
                    <Footer/>
            </div>
        </div>
    );
}

export default App;
