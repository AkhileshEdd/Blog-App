import { format, formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'

function Post({_id, title, summary, content, cover, createdAt, author}){


    return(
        <div className="post">
          <div className="image">
            <Link to={`/post/${_id}`}>

            <img
              src={"http://localhost:4000/"+cover}
              alt="post-image"
              />
              </Link>
          </div>
          <div className="post-content">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
            </Link>
            <p className="post-info">
              <a href="" className="author"> {author.username} </a>
              <time>{format(new Date(createdAt), 'MMM d,yyyy | HH:mm')}</time>
            </p>
            <p className="post-summary">
              {summary}
            </p>
          </div>
        </div>
    )
}

export default Post