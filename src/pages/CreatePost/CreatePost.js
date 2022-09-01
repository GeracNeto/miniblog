// CSS
import styles from './CreatePost.module.css'

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Context
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')

    const handleSubmit = (e) => {
        e.preventdefault()
    }

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        name='title'
                        placeholder='Pense em um bom título'
                        required
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input
                        type="text"
                        name='image'
                        placeholder='Insira uma imagem que representa o seu post'
                        required
                        onChange={e => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <textarea
                        name='body'
                        placeholder='Insira o conteúdo do post'
                        required
                        onChange={e => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        name='tags'
                        placeholder='Insira as tags separadas por vírgula'
                        required
                        onChange={e => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreatePost