import React from 'react'

function NewsItem() {
  return (
    <div>
          <div className="card">
           <img src={imageUrl} className="card-img-top" alt="..." />
           <span className="position-absolute d-flex badge rounded-pill bg-danger" style={{zIndex : "1", right: "2px", top: "2px"}}>{source}</span>
           <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{description}</p>
             <p className="card-text"><small className="text-muted">Article by : {!author ? "Unkown": author}</small></p>
             <p className="card-text"><small className="text-muted">Date : {new Date(publishTime).toDateString()}</small></p>
             <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
           </div>
         </div></div>
  )
}

export default NewsItem






















// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title, description, imageUrl, newsUrl, author, publishTime, source} = this.props
//     return (
//       <div>
//      <div className="card">
//       <img src={imageUrl} className="card-img-top" alt="..." />
//       <span className="position-absolute d-flex badge rounded-pill bg-danger" style={{zIndex : "1", right: "2px", top: "2px"}}>{source}</span>
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <p className="card-text"><small className="text-muted">Article by : {!author ? "Unkown": author}</small></p>
//         <p className="card-text"><small className="text-muted">Date : {new Date(publishTime).toDateString()}</small></p>
//         <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
//       </div>
//     </div></div>
//     )
//   }
// }

// export default NewsItem;