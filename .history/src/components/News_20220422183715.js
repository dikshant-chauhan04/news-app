import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem';

function News(props) {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  


    // constructor(props){
    //     super(props);
    //     this.state ={
    //         articles: [],
    //         loading: false,
    //         page: 1,
    //         totalResults: 0
    //     }
    //     document.title = `Daily News ${this.capitalizeTitle(props.category === 'general'? 'home': props.category)}`
    // }

    const capitalizeTitle = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

  const updateNews = async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
      settotalResults(data.totalResults);
      setLoading(false);
    }
    
    useEffect(async () => {
      this.updateNews();
    }, [])
    
 

    const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
      this.setState({loading: true});
      let response = await fetch(url);
      let data = await response.json();
      this.setState({articles: this.state.articles.concat(data.articles), totalResults: data.totalResults,page: this.state.page + 1 , loading: false});
    };
  
  
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


export default News;