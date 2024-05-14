import { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import BlogCard from '../blogcard/BlogCard';

const BrowseFlick = () => {
    const [flicks, setFlicks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchFlicks();
    }, []);

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

    return (
        <Container className="mt-5">
            <h1>Browse Flicks</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row className="mt-3">
                {flicks.map(movie => (
                    <Col key={movie._id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        <BlogCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BrowseFlick;
