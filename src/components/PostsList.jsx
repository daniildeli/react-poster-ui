import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () => {
    const posts = useLoaderData();

    return <>
        {!!posts.length && (
            <ul className={styles.posts}>
            {posts.map(({ author, body, id, }) => <Post key={id} id={id} author={author} body={body}/>)}
        </ul>
        )}
        {!posts.length && (
            <div style={{ textAlign: 'center', color: 'white', }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}
    </>;
};

export default PostsList;
