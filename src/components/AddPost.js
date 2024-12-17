import React, { useState } from "react";

function AddPost({ onAddPost }) {
  const [username, setUsername] = useState(""); // Хранит имя пользователя
  const [photoUrl, setPhotoUrl] = useState(""); // Хранит URL фотографии
  const [caption, setCaption] = useState(""); // Хранит подпись

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && photoUrl && caption) {
      // Если все поля заполнены, передаем данные в родительский компонент
      onAddPost({ username, photoUrl, caption });
      setUsername(""); // Очистка полей после отправки
      setPhotoUrl("");
      setCaption("");
    } else {
      // Если поля не заполнены, выводим предупреждение
      alert("Заполните все поля!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <input
        type="text"
        placeholder="Ваше имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Обновление имени пользователя
      />
      <input
        type="text"
        placeholder="URL фотографии"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)} // Обновление URL фотографии
      />
      <textarea
        placeholder="Подпись"
        value={caption}
        onChange={(e) => setCaption(e.target.value)} // Обновление подписи
      ></textarea>
      <button type="submit">Добавить пост</button>
    </form>
  );
}

export default AddPost;