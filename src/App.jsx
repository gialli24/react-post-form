import { useState } from 'react'
import './App.css'

function App() {

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [isNewPublic, setIsNewPublic] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted !");
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="author"
            placeholder='Autore'
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />

          <input
            type="text"
            name="title"
            placeholder='Titolo'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <input
            type="text"
            name="body"
            placeholder='Contenuto'
            value={newTitle}
            onChange={(e) => setNewBody(e.target.value)}
          />

          <input
            type="checkbox"
            name="isPublic"
            checked={isNewPublic}
            onChange={(e) => setIsNewPublic(e.target.checked)}
          />

          <button type="submit">Salva</button>
        </form>
      </main >
    </>
  )
}

export default App
