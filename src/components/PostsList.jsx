import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () => {
    const posts = useLoaderData();

    return <>
        {!!posts.length && (
            <ul className={styles.posts}>
            {posts.map(({ author, body, }, index) => <li key={index}><Post author={author} body={body}/></li>)}
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
