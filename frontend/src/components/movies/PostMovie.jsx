import { Form, Button, FloatingLabel, Toast, Alert  } from 'react-bootstrap'; 
import { useState } from 'react';

const PostMovie = () => {
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
    const [showToast, setShowToast] = useState(false); 
    const [toastVariant, setToastVariant] = useState('success'); 

    const Movies = {
        title: title || '', 
        coverImage: coverImage || '', 
        excerpt: excerpt || '', 
        content: content || '', 
        tags: tags ? tags.split(',') : [] 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:7000/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Movies) 
            });

            if (!response.ok) {
                throw new Error('Movie not added');
            }
            
            const data = await response.json();
            console.log(data);
            setShowToast(true);
            clearFields();
            // Clear the toast after a delay
            setTimeout(() => setShowToast(false), 3000);
            setAlertVariant('success');
            setAlertMessage('Movie added successfully!');
            setShowAlert(true);
        } catch (error) {
            console.error('Error:', error);
            setToastVariant('danger');
            setShowToast(true);
            setAlertVariant('danger');
            setAlertMessage('Error: Movie not added');
            setShowAlert(true);
        }
    }
    
    const clearFields = () => {
        setTitle('');
        setCoverImage('');
        setExcerpt('');
        setContent('');
        setTags('');
    }

    return (
        <div className='container my-4'>
            <h1 className='text-primary'>Add New Movie</h1>
            <div className='mt-4'>
            <form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className='mb-3' controlId='title'>
                        <FloatingLabel controlId='title' label='Title'>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter title' 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='image'>
                        <FloatingLabel controlId='image' label='Image URL'>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter image URL' 
                                value={coverImage} 
                                onChange={(e) => setCoverImage(e.target.value)} 
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='excerpt'>
                        <FloatingLabel controlId='excerpt' label='Excerpt'>
                            <Form.Control 
                                as='textarea' 
                                placeholder='Enter excerpt' 
                                style={{ height: '100px' }} 
                                value={excerpt} 
                                onChange={(e) => setExcerpt(e.target.value)} 
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='content'>
                        <FloatingLabel controlId='content' label='Content'>
                            <Form.Control 
                                as='textarea' 
                                placeholder='Enter content' 
                                style={{ height: '200px' }} 
                                value={content} 
                                onChange={(e) => setContent(e.target.value)} 
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='tags'>
                        <FloatingLabel controlId='tags' label='Tags'>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter tags (comma-separated)' 
                                value={tags} 
                                onChange={(e) => setTags(e.target.value)} 
                            />
                        </FloatingLabel>
                    </Form.Group>
                    {showAlert && (
                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                </Alert>
            )}
                    <Button variant='primary' type='submit' style={{ width: '100%' }}>
                        Submit
                    </Button>
                </form>
            </div>
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                style={{ position: 'absolute', top: 200, right: 20 }}
                delay={3000}
                autohide
                bg={toastVariant}
            >
                <Toast.Body>{toastVariant === 'success' ? 'Movie added' : 'Error: Movie not added'}</Toast.Body>
            </Toast>
        </div>
    );
}

export default PostMovie;