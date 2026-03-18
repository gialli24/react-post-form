import { useState } from 'react'
import './App.css'

function App() {

  const addPostEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  function addPost(endpoint, data) {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  const [newPostData, setNewPostData] = useState({
    title: "",
    body: "",
    author: "",
    public: true
  });

  function handleField(e) {

    const { type, name } = e.target;
    let value;

    switch (type) {
      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
        break;
    }

    setNewPostData({ ...newPostData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();

    let areFieldsValid = true;
    for (const key in newPostData) {
      const field = newPostData[key];

      if (field.length < 3) {
        areFieldsValid = false;
      }
    }

    if (areFieldsValid) {
      addPost(addPostEndpoint, newPostData);
    }
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="author"
            placeholder='Autore'
            value={newPostData.author}
            onChange={handleField}
          />

          <input
            type="text"
            name="title"
            placeholder='Titolo'
            value={newPostData.title}
            onChange={handleField}
          />

          <input
            type="text"
            name="body"
            placeholder='Contenuto'
            value={newPostData.body}
            onChange={handleField}
          />

          <input
            type="checkbox"
            name="public"
            checked={newPostData.public}
            onChange={handleField}
          />

          <button type="submit">Salva</button>
        </form>
      </main >
    </>
  )
}

export default App
