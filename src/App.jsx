import { useState } from "react";
export default function App() {
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            id: Math.floor(Math.random() * 1000000),
            author: author,
            content: content,
            createdAt: new Date(),
        };

        setComments((state) => [newComment, ...state]);
        setAuthor("");
        setContent("");
    };
    return (
        <div id="app">
            <div>
                <h1 style={{ textAlign: "center" }}>Seção de Comentário</h1>
            </div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
                }}
            >
                <label htmlFor="author">Email</label>
                <input
                    type="email"
                    id="author"
                    required
                    value={author}
                    style={{ padding: ".5em", fontSize: "18px" }}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="content">Comentário</label>
                <textarea
                    id="content"
                    cols="30"
                    rows="5"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ padding: "0.5rem 10px 0px", fontSize: "18px" }}
                ></textarea>
                <input
                    type="submit"
                    value="Enviar comentário"
                    style={{ padding: ".5em", fontSize: "18px" }}
                />
            </form>
            <hr style={{ marginTop: "2rem", width: "100%" }} />
            <section id="comments">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id}>
                            <h3>{comment.author}</h3>
                            <span>Em {comment.createdAt.toLocaleString()}</span>
                            <p>{comment.content}</p>
                        </div>
                    ))
                ) : (
                    <p id="p-coment">Seja o primeiro a comentar!</p>
                )}
            </section>
        </div>
    );
}
