import React, { Component } from 'react';
import '../styles/Articles.css';

class Source extends Component {
    constructor(props){
      super(props);
      this.state = {
        articles: []
      }
    }
  
    componentDidMount(){
      fetch("https://newsapi.org/v2/sources?language=en&country=us&apiKey=214a4db7076748d182b1e0b5066b0a9a")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              articles: result.sources
            });
          }
          
        )
    }

    render(){
      return (
        <div>
            <div id="header"><h2>Source</h2></div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {this.state.articles.map((article,index) => (
                    <div className="col-md-4" onClick={function(){window.open(article.url)}}>
                    <div className="card text-center">
                        <div className="card-body text-dark">
                            <h5 className="card-title">{article.name}</h5>
                            <p className="card-text text-secondary">{article.description}</p>
                            <a href={article.url}>{article.url}</a>    
                        </div>
                        <div id="sub-desc">
                                <p className="card-text text-secondary">Category: {article.category}</p>
                                <p className="card-text text-secondary">Language: {article.language}</p>
                                <p className="card-text text-secondary">Country: {article.country}</p>
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
    
  
  export default Source;