export default function PostCard({ title, body, author, published }) {
    return (
        <div className="post-card">

            <h3>{title}</h3>

            <p>
                {body}
            </p>

            <span>{author}</span>

            {
                !published && <span className='not-published'>Salvato come bozza</span>
            }

        </div>
    );
}