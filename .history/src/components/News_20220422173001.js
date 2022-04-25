import React, { Component } from 'react'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem';

export class News extends Component {

    constructor(props){
        super(props);
        this.state ={
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `Daily News ${this.capitalizeTitle(this.props.category === 'general'? 'home': this.props.category)}`
    }

    capitalizeTitle = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let response = await fetch(url);
      let data = await response.json();
      this.setState({articles: data.articles, totalResults: data.totalResults, loading: false});
    }

    async componentDidMount(){
    this.updateNews();
    }

    fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let response = await fetch(url);
      let data = await response.json();
      this.setState({articles: this.state.articles.concat(data.articles), totalResults: data.totalResults,page: this.state.page + 1 , loading: false});
    };
  
  render() {
    return (       
      <>
        <h1 className='text-center my-5'>DailyNews - Top Headlines Today</h1>
        {this.state.loading && <Loading/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
         <div className='row' >
         {this.state.articles.map((elem)=>{
          return <div className="col-md-4" key={elem.url}>
             <NewsItem title={elem.title} source={elem.source.name} description={elem.description} imageUrl={elem.urlToImage? elem.urlToImage : "https://picsum.photos/id/137/200/100"} newsUrl={elem.url} author={elem.author} publishTime={elem.publishedAt}/>
          </div>
     
         })}   
         </div>   
         </div> 
         </InfiniteScroll>
         
      </>
    )
  }
}

export default News;