import { useState } from 'react'
import Alert from './Alert';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import CheckboxField from './ChechboxField';

export default function AddPostForm({ posts, setPosts }) {
    const addPostEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

    const [alert, setAlert] = useState(null);

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
        } else {
            setAlert({ type: "error", content: "Alcuni campi sono vuoti" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {alert && <Alert alert={alert} />}

            <InputField
                label="Autore"
                name="author"
                type="text"
                placeholder="Dante Alighieri"
                value={newPostData.author}
                handleField={handleField}
            />

            <InputField
                label="Titolo"
                name="title"
                type="text"
                placeholder="La Divina Commedia"
                value={newPostData.title}
                handleField={handleField}
            />

            <TextAreaField
                label="Contenuto"
                name="body"
                type="text"
                placeholder="Nel bel mezzo del..."
                value={newPostData.body}
                handleField={handleField}
            />

            <CheckboxField
                label="Pubblica il post immediatamente"
                name="public"
                checked={newPostData.public}
                handleField={handleField}
            />

            <button type="submit">Salva</button>
        </form>
    );
}