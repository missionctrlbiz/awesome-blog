import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewFlick.css';

const ViewFlick = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://awesome-blog-hkac.onrender.com/api/post/${id}`);
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

  const handleEdit = () => {
    navigate(`/edit-flicks/${id}`);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://awesome-blog-hkac.onrender.com/api/post/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!post) {
    return <h1>Post not found</h1>;
  }

  // Convert the timestamp to a Date object
  const createdAtDate = new Date(post.createdAt);

  // Format the date to YYYY-MM-DD
  const formattedDate = `${createdAtDate.getFullYear()}-${(
    createdAtDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${createdAtDate.getDate().toString().padStart(2, '0')}`;

  // Format the time to HH:mm
  const formattedTime = `${createdAtDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${createdAtDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="image-column">
        <img
          src={post.coverImage}
          alt="Cover"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>
      <div className="content-column">
        <div>
          <p>
            <span style={{ fontWeight: '600' }}>Created At: </span>
            {formattedDate} ({formattedTime})
          </p>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="tags-container">
            {post.tags &&
              post.tags.map((tag, index) => (
                <span key={index} className="tag-pill">
                  {tag}
                </span>
              ))}
          </div>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={handleEdit}>
                Edit
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-danger btn-block" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFlick;
