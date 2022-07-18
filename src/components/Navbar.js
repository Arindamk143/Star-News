import React, { Component } from 'react'
import {Link} from "react-router-dom";
// import about from './about';
export class Navbar extends Component {
    
    constructor(){
        super()
        this.state={
            mode:"dark"
        }
    }
    toggle = ()=> {
        if (this.state.mode==="dark") {
            this.setState({
                mode: "light"
            })
        } 
        else {
            this.setState({
                mode: "dark"
            })
        }
    }
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode} sticky-top`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Star News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/General">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Technology">Technology</Link>
                                </li>
                            </ul>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.toggle}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode On</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar