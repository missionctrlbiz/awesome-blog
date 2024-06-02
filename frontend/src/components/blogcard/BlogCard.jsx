import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './BlogCard.css';


// Function to shuffle an array and return a subset
const getRandomTags = (tags, count) => {
  const shuffled = tags.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}



const BlogCard = ({ movie }) => {
    const { title, coverImage, excerpt, tags } = movie;
     // Get 2 random tags
     const randomTags = getRandomTags(tags, 2);


    return (
        <Card className="blog-card" style={{ width: '18rem' }}>
            <div className="image-container">
                <Card.Img variant="top" src={coverImage} alt={title} />
                <div className="overlay">
                    <Card.Title className="overlay-title">{title}</Card.Title>
                    <div className="overlay-tags">
                        {randomTags.map((tag, index) => (
                            <span key={index} className="tag-pill">{tag}</span>
                        ))}
                    </div>
                    <Card.Text className="overlay-excerpt">
                        {excerpt.length > 100 ? `${excerpt.slice(0, 100)}...` : excerpt}
                    </Card.Text>
                </div>
            </div>
            {/* <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{excerpt}</Card.Text>
                <Button variant="primary">Read More</Button>
            </Card.Body> */}
        </Card>
    );
}

BlogCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.any,
    coverImage: PropTypes.any,
    excerpt: PropTypes.any,
    likes: PropTypes.any,
    title: PropTypes.any,
    tags: PropTypes.arrayOf(PropTypes.string) // Assuming tags is an array of strings
  })
}

export default BlogCard;
