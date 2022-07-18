import React, { Component } from 'react'
import NewsList from './NewsList'
// import load from './Book.gif'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 0
        }
        document.title = this.capitalizeFirstLetter(this.props.category)
    }
    async componentDidMount() {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=0`;
        // this.setState({load:true})
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.props.setProgress(100)
    }

    // nextBtn = async () => {

    //     console.log("Next")
    //     let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=859bf4e1f122491c9b460b405d612d48&page=${this.state.page + 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData)
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles
    //     })
    // }

    // prevBtn = async () => {
    //     console.log("Previous")
    //     let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=859bf4e1f122491c9b460b405d612d48&page=${this.state.page - 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData)
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })
    // }
    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }
    render() {
        return (
            <>
                <div className="img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* <img src={load} alt="loading"/> */}
                    {/* <spinner/> */}
                </div>
                <h1 style={{ backgroundColor: "red", textAlign: "center", fontSize: "3rem" }}>{`Welcome To Star News - Top ${this.capitalizeFirstLetter(this.props.category)} Headlines`}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <h4 style={{color:"greenyellow"}}>Loading...</h4>
                    </div>}
                >
                    <div className="container">
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsList title={element.title} description={element.description} imageNews={element.urlToImage} newsURL={element.url} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container" style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <button disabled={this.state.page < 1} type="button" className="btn btn-primary" onClick={this.prevBtn}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.nextBtn}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News