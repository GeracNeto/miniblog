// CSS
import styles from './Post.module.css'

// Hooks
import { useFetchDocument } from '../../hooks/useFetchDocument'

// Libs
import { useParams } from 'react-router-dom'

const Post = () => {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument("posts", id)

    return (
        <div>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                </>
            )}
        </div>
    )
}

export default Post