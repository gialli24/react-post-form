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
      .then(data => {
        setPosts([data, ...posts])
        setAlert({ type: "success", content: "Il post è stato inviato con successo" });
      })
      .catch(error => {
        console.error(error)
        setAlert({ type: "error", content: "Si è verificato un errore" });
      });
  }

  const [alert, setAlert] = useState(null);

  const [posts, setPosts] = useState([{
    title: "Post di esempio",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum earum corporis saepe cumque commodi nisi veritatis officiis excepturi laudantium quam, consequatur tempora ipsum quisquam mollitia architecto magni doloribus quos!",
    author: "Lorem Ipsum",
    public: true
  }, {
    title: "Post di esempio",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum earum corporis saepe cumque commodi nisi veritatis officiis excepturi laudantium quam, consequatur tempora ipsum quisquam mollitia architecto magni doloribus quos!",
    author: "Lorem Ipsum",
    public: false
  }])

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
        <div className="container centered">
          <form onSubmit={handleSubmit}>
            {alert && <div className={alert.type === "success" ? "alert success" : "alert error"}>{alert.content}</div>}

            <div className='field'>
              <label htmlFor="author">Autore</label>
              <input
                type="text"
                name="author"
                placeholder='Autore'
                value={newPostData.author}
                onChange={handleField}
              />
            </div>

            <div className='field'>
              <label htmlFor="title">Titolo</label>
              <input
                type="text"
                name="title"
                placeholder='Titolo'
                value={newPostData.title}
                onChange={handleField}
              />
            </div>

            <div className='field'>
              <label htmlFor="body">Contenuto</label>
              <textarea
                type="text"
                name="body"
                placeholder='Contenuto'
                value={newPostData.body}
                onChange={handleField}
              ></textarea>
            </div>

            <div className="inline-field">
              <input
                type="checkbox"
                name="public"
                checked={newPostData.public}
                onChange={handleField}
              />
              <label htmlFor="public">Pubblica il post immediatamente</label>
            </div>

            <button type="submit">Salva</button>
          </form>
        </div>

        <hr />

        <section id="posts">
          <div className="container centered">

            <h2>Post salvati</h2>

            <div className='row'>
              {posts.map((post, i) => (
                <div className='col' key={i}>
                  <div className="post-card">

                    <h3>{post.title}</h3>

                    <p>
                      {post.body}
                    </p>

                    <span>{post.author}</span>

                    {
                      !post.public && <span className='not-published'>Salvato come bozza</span>
                    }

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
