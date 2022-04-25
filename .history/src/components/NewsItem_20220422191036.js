import React from 'react'

function NewsItem(props) {
  return (
    <div>
          <div className="card">
           <img src={props.imageUrl} className="card-img-top" alt="article picture" />
           <span className="position-absolute d-flex badge rounded-pill bg-danger" style={{zIndex : "1", right: "2px", top: "2px"}}>{props.source}</span>
           <div className="card-body">
             <h5 className="card-title">{props.title}</h5>
             <p className="card-text">{props.description}</p>
             <p className="card-text"><small className="text-muted">Article by : {!props.author ? "Unkown": props.author}</small></p>
             <p className="card-text"><small className="text-muted">Date : {new Date(props.publishTime).toDateString()}</small></p>
             <a href={props.newsUrl} className="btn btn-sm btn-dark">Read More</a>
           </div>
         </div></div>
  )
}

export default NewsItem