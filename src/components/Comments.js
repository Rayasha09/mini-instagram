// Comments.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { auth } from '../firebase';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const getComments = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts', postId, 'comments'));
      setComments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    getComments();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment) {
      const commentRef = await addDoc(collection(db, 'posts', postId, 'comments'), {
        text: newComment,
        createdAt: new Date(),
        author: auth.currentUser.displayName, // Имя пользователя
        likes: [] // Массив пользователей, которые лайкнули
      });
      setNewComment('');
    }
  };

  const handleLike = async (commentId) => {
    const commentRef = doc(db, 'posts', postId, 'comments', commentId);
    const comment = comments.find(comment => comment.id === commentId);
    const updatedLikes = comment.likes.includes(auth.currentUser.uid) 
      ? arrayRemove(auth.currentUser.uid) 
      : arrayUnion(auth.currentUser.uid);

    await updateDoc(commentRef, {
      likes: updatedLikes
    });
  };

  return (
    <div>
      <h3>Комментарии</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Добавьте комментарий..."
        />
        <button type="submit">Отправить</button>
      </form>

      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.author}: {comment.text}</p>
          <div>
            <button onClick={() => handleLike(comment.id)}>
              {comment.likes.includes(auth.currentUser.uid) ? '❤️' : '👍'} {comment.likes.length} лайков
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
