// import React from "react";
// import Post from "./Post";
// import "./Posts.css";

// const postsData = [
//   {
//     username: "john_doe",
//     photoUrl: "https://example.com/photo1.jpg",
//     caption: "Enjoying the sunset!",
//   },
//   {
//     username: "jane_doe",
//     photoUrl: "https://example.com/photo2.jpg",
//     caption: "Having a great time at the beach!",
//   },
  
// ];

// function Posts() {
//   return (
//     <div className="posts-container" id="posts">
//       {postsData.map((post, index) => (
//         <Post
//           key={index}
//           username={post.username}
//           photoUrl={post.photoUrl}
//           caption={post.caption}
//         />
//       ))}
//     </div>
//   );
// }

// export default Posts;




import React from "react";
import Post from "./Post";
import "./Posts.css";
import lubogo from "../components/broo.jpg"
import chtoto from "../components/park.jpg"

const postsData = [
  {
    username: "john_doe",
    photoUrl: "park.jpg",
    caption: "Enjoying the sunset!",
  },
  {
    username: "jane_doe",
    photoUrl: "https://example.com/photo2.jpg",
    caption: "Having a great time at the beach!",
  },
];

function Posts() {
  return (
    <div className="posts-container" id="posts">
      {postsData.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          photoUrl={post.photoUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
