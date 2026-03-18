import { useState } from 'react'
import './App.css'
import AddPostForm from './components/AddPostForm'
import PostCard from './components/PostCard'

function App() {
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

  return (
    <>
      <main>
        <div className="container centered">
          <AddPostForm posts={posts} setPosts={setPosts} />
        </div>

        <hr />

        <section id="posts">
          <div className="container centered">

            <h2>Post salvati</h2>

            <div className='row'>
              {posts.map((post, i) => (
                <div className='col' key={i}>
                  <PostCard title={post.title} body={post.body} author={post.author} published={post.public} />
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
