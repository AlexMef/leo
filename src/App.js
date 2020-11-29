import React from 'react';
import './App.scss';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <div className="App">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
