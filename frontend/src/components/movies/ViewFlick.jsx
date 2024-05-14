import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewFlick = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/post/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className='container' style={{ marginTop: '20px'}}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {/* Render other details of the post as needed */}
    </div>
  );
};

export default ViewFlick;
