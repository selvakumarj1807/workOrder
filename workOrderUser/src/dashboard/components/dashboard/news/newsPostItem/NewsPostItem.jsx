import React from 'react'
import { Link } from 'react-router-dom'
import '../news.css'
function NewsPostItem({item}) {
  return (
    <div className="post-item clearfix">
        <img src={item.img} alt="" />
        <h4>
            <Link className='a' to="#">{item.title} </Link>
        </h4>
        <p>{item.subtitle}... </p>
    </div>
  )
}

export default NewsPostItem