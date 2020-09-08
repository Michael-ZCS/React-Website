import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Headlines from './components/Headlines';
import HeadlineArticle from './components/HeadlineArticle';
import Everything from './components/Everything';
import EverythingArticle from './components/EverythingArticle';
import Sources from './components/Source';



class App extends Component {

  render(){
    return (
      <Router>
        <div id="navbar-container">
          <div id="title">
                <h2 >News Media</h2>
          </div>
          <div id="navbar">
            <p>
              <Link to="/top-headlines" class="link"  style={{ textDecoration: 'none', color:'black' }}>Top Headlines</Link>
              <Link to="/everything" class="link"  style={{ textDecoration: 'none', color:'black' }}>Everything</Link>
              <Link to="/sources" class="link"  style={{ textDecoration: 'none', color:'black' }}>Sources</Link>
            </p>
          </div>
        </div>

        
        <Switch>
          <Route exact path="/">
            <Redirect to="/top-headlines" />
          </Route>
          <Route path="/top-headlines">
            <Headlines />
          </Route>
          <Route exact path="/top-headline-article" component={HeadlineArticle}/>
          <Route path="/everything">
            <Everything />
          </Route>
          <Route exact path="/everything-article" component={EverythingArticle}/>
          <Route path="/sources">
            <Sources />
          </Route>
        </Switch> 

        <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; Michael Jihanda 2020</p>
        </div>
        
      </footer>
      </Router>
    );
  }
}
  

export default App;
