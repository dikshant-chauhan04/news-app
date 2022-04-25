import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem';

const News = (props)=> {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  

  const updateNews = async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
      settotalResults(data.totalResults);
      setLoading(false);
    }
    
    useEffect(() => {
      updateNews();
    }, [])
    
 

    const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
     setArticles(articles.concat(data.articles));
     settotalResults(data.totalResults);
     setPage(page + 1)
      setLoading(false);
    };
  
  
    return (       
      <>
        <h1 className='text-center my-5'>DailyNews - Top Headlines Today</h1>
        {loading && <Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
         <div className='row' >
         {articles.map((elem)=>{
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