import { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import BlogCard from '../blogcard/BlogCard';
import { useParams, Link } from 'react-router-dom'; // Import useParams



const BrowseFlick = () => {
    const [flicks, setFlicks] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams(); // Get the flick ID from the URL

    useEffect(() => {
        if (id) {
            fetchFlick(id); // Fetch flick if ID is present in the URL
        } else {
            fetchFlicks(); // Fetch all flicks if no ID is present
        }
    }, [id]); // Re-fetch flick when ID changes

    const fetchFlicks = async () => {
        try {
            const response = await fetch('http://localhost:7000/api/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch flicks');
            }
            const data = await response.json();
            setFlicks(data);
            setError('');
        } catch (error) {
            console.error('Error fetching flicks:', error);
            setError('Failed to fetch flicks');
        }
    };

    const fetchFlick = async (id) => {
        try {
            const response = await fetch(`http://localhost:7000/api/post/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch flick');
            }
            const flickData = await response.json();
            setFlicks([flickData]); // Update flicks state with the fetched flick
            setError('');
        } catch (error) {
            console.error('Error fetching flick:', error);
            setError('Failed to fetch flick');
        }
    };

    return (
        <Container className="mt-5">
            {error && <Alert variant="danger">{error}</Alert>}
            <Row className="mt-3">
                {flicks.map(movie => (
                    <Col key={movie._id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        <Link to={`/view-flicks/${movie._id}`} className="link-unstyled">
                            <BlogCard movie={movie} />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BrowseFlick;
