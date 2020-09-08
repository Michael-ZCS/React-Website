import React, { Component } from 'react';
import '../styles/Articles.css';
import {Link, Redirect} from 'react-router-dom';

class Everything extends Component {
    constructor(props){
      super(props);
      this.state = {
        articles: []
      }
    }
  
    componentDidMount(){
      fetch("https://newsapi.org/v2/everything?q=money&apiKey=214a4db7076748d182b1e0b5066b0a9a")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              articles: result.articles
            });
          }
          
        )
    }

    render(){
      return (
        <div>
            <div id="header"><h2>Everything</h2></div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {this.state.articles.map((article,index) => (
                    <div className="col-md-4">
                    <div className="card text-center">
                        <div className="overflow">
                            <img src = {article.urlToImage} className="card-img-top" alt="Not Available"/>
                        </div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text text-secondary">{article.description}</p>
                            <Link to={{pathname: '/everything-article',search: '?query=abc',state: {data: article.title}}} className="btn btn-outline-success">see more</Link>
                        </div>    
                    </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
      );
    }
  }
    
  
  export default Everything;