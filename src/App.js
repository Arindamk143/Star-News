import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/about';
import LoadingBar from 'react-top-loading-bar'
// import Science from './components/Science';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export class App extends Component {
  apiKey = "859bf4e1f122491c9b460b405d612d48"
  state= {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <LoadingBar
          color='yellow'
          progress={this.state.progress}
          height={2}
        />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div style={{ backgroundColor: "black" }}>
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" />
            </div>
          </Route>
          <Route exact path="/about"><About key='about' /></Route>
          <Route exact path="/Science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" /></Route>
          <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" /></Route>
          <Route exact path="/Entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" /></Route>
          <Route exact path="/General"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" /></Route>
          <Route exact path="/Health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" /></Route>
          <Route exact path="/Sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" /></Route>
          <Route exact path="/Technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" /></Route>
          <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" /></Route>
        </Switch>
      </Router>

    )
  }
}
export default App