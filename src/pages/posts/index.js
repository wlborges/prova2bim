import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import './styles.css'

export default function Posts(){
    const [posts, setPosts] = useState([]);
    const [verComentarios, setVerComentarios] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentAberto, setCommentAberto] = useState('');

    async function getPosts(){
        try {
            const response = await api.get('posts');
            setPosts(response.data);

        } catch (error) {
            alert("Erro de conexão com o servidor!")
        }
    };

    async function getComments(id){
        console.log(verComentarios);
        await setVerComentarios(!verComentarios);
        console.log(verComentarios);
        setCommentAberto(id);
        if(!verComentarios){
            try {
                const response = await api.get('comments?postId='+id);
                setComments(response.data);
    
            } catch (error) {
                alert("Erro de conexão com o servidor!")
            }
        }
        else{
            setComments([])
        }
    }
    useEffect(() =>{
        getPosts();

    }, []);

    return(
        <div className="container">
            <ul>
                <li className="post">
                    <h1 className="title">blog do H1</h1>
                </li>
                {posts.map((post, i) =>
                    <li className="post" key={i}>
                        <h1 className="title">{post.title}</h1>
                        <p className="post-body">
                            {post.body}
                        </p>
                        <p className="ver-comentario" onClick={() => getComments(post.id)}>{verComentarios && (commentAberto === post.id) ? "Ocultar Comentários" : "Ver Comentarios"}</p>
                        {verComentarios && (commentAberto === post.id) &&
                            <div>{comments.map((comment, j) =>
                                <p key={j}>
                                    <strong ><a href={"mailto:" + comment.email}>{comment.name}:</a></strong> {comment.body}
                                </p>
                                )}</div>
                        }
                    </li>
                )}
            </ul>
            

        </div>
    );
}