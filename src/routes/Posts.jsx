import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';

function Posts() {


  return (
    <>
      <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const resData = await (await fetch('http://localhost:8080/posts')).json();
  return resData.posts;
}
