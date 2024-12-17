// import React, { useState } from "react";
// function Post({ username, photoUrl, caption }) {
//   const [likes, setLikes] = useState(0);
//   const [liked, setLiked] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");

//   const handleLike = () => {
//     setLikes(likes + 1);
//     setLiked(true);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (commentText.trim()) {
//       setComments([...comments, commentText]);
//       setCommentText(""); 
//     }
//   };

//   return (
//     <div className="post" style={{margin: "0 auto"}}>
//       <img src={imagefirst} alt="Post" />
//       <div className="username">{username}</div>
//       <div className="caption">{caption}</div>
//       <button className="like-button" onClick={handleLike}>
//         {liked ? "♡" : "♡"}
//         <span className="like-text">{likes}</span>
//       </button>

//       {}
//       <form onSubmit={handleCommentSubmit} className="comment-form">
//         <input
//           type="text"
//           placeholder="Напишите комментарий..."
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//         />
//         <button type="submit">Отправить</button>
//       </form>

//       {}
//       <div className="comments">
//         {comments.length > 0 ? (
//           comments.map((comment, index) => (
//             <div key={index} className="comment">
//               {comment}
//             </div>
//           ))
//         ) : (
//           <div>Нет комментариев</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Post


import React, { useState } from "react";
import "./Post.css";

function Post({ username, photoUrl, caption }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <h3>@{username}</h3>
      </div>
      <img src={photoUrl} alt="Post" className="post-image" />
      <p className="post-caption">
        <strong>@{username}: </strong> {caption}
      </p>
      <div className="post-actions">
        <button onClick={handleLike} className="like-button">
        ♡ {likes} Лайков
        </button>
      </div>
      <div className="post-comments">
        <h4>Комментарии:</h4>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <p key={index} className="comment">
              {comment}
            </p>
          ))
        ) : (
          <p className="no-comments">Пока нет комментариев.</p>
        )}
        <div className="add-comment">
          <input
            type="text"
            placeholder="Напишите комментарий..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Post;

