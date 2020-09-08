import React, { Component } from 'react';
import '../styles/ArticleDetail.css';


class HeadlineArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
          articles: [],
          title: this.props.location.state.data
        }
      }

    componentDidMount(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=214a4db7076748d182b1e0b5066b0a9a")
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
    const article = this.state.articles.filter((e) => e.title === this.state.title)
    return(
        <div>
            {article.map((data,index) => (
                <div>
                    <div class="container">
                            <div>
                                <h1 class="mt-4">{data.title}</h1>
                                <h5 class="sub-title">by {data.author}</h5>
                                <h5 class="sub-title">Source {data.source.name}</h5>
                                <h6>Published at {data.publishedAt}</h6>
                                <hr></hr>
                                <img class="img-fluid rounded" src={data.urlToImage} alt="Not Available"/>
                                <hr></hr>
                                <p class="lead">{data.description}</p>

                                <blockquote class="blockquote">
                                <p class="mb-0">{data.content}</p>
                                
                                <footer class="blockquote-footer">Original url: 
                                <cite title="Source Title"> {data.url}</cite>
                                </footer>
                                </blockquote>
                                <hr></hr>
                            </div>
                        
                    </div>
                </div>
            ))}
        </div>


    )
}

}

export default HeadlineArticle;