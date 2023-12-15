import Post from './Post';
import styles from './PostsList.module.css';
import { useState, useEffect } from 'react';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const resData = await (await fetch('http://localhost:8080/posts')).json();
            setPosts(resData?.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json', },
        });
        setPosts(existingPosts => [postData, ...existingPosts]);
    }

    return <>
        {!isFetching && !!posts.length && (
            <ul className={styles.posts}>
            {posts.map(({ author, body, }, index) => <li key={index}><Post author={author} body={body}/></li>)}
        </ul>
        )}
        {!isFetching && !posts.length && (
            <div style={{ textAlign: 'center', color: 'white', }}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}
        {isFetching && <div style={{ textAlign: 'center', color: 'white', }}><p>Loading posts...</p></div>}
    </>;
};

export default PostsList;
