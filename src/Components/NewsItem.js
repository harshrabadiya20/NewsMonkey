import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2021-06/qr8hr378_world-oceans-day-2021_625x300_07_June_21.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target = "blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
          </div> 
      </div>
    )
  }
}

export default NewsItem
