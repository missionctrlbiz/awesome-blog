/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './BlogCard.css'

const BlogCard = ({ movie }) => {
    const { _id, title, coverImage, excerpt, likes } = movie;

    return (
        <Card className="blog-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={coverImage} alt={title} />
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
    title: PropTypes.any
  })
}

export default BlogCard;
