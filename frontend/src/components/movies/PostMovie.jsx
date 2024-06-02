import { Form, Button, FloatingLabel, Toast, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const PostMovie = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastVariant, setToastVariant] = useState('success');

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        coverImage: Yup.string().url('Invalid URL').required('Cover image URL is required'),
        excerpt: Yup.string().required('Excerpt is required'),
        content: Yup.string().required('Content is required'),
        tags: Yup.string().required('Tags are required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch('https://awesome-blog-hkac.onrender.com/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values,
                    tags: values.tags.split(','),
                }),
            });

            if (!response.ok) {
                throw new Error('Movie not added');
            }

            const data = await response.json();
            console.log(data);
            setShowToast(true);
            setToastVariant('success');
            setTimeout(() => setShowToast(false), 3000);
            setAlertVariant('success');
            setAlertMessage('Movie added successfully!');
            setShowAlert(true);
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            setToastVariant('danger');
            setShowToast(true);
            setAlertVariant('danger');
            setAlertMessage('Error: Movie not added');
            setShowAlert(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='container my-4'>
            <h1 className='text-primary'>Add New Movie</h1>
            <div className='mt-4'>
                <Formik
                    initialValues={{
                        title: '',
                        coverImage: '',
                        excerpt: '',
                        content: '',
                        tags: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId='title'>
                                <FloatingLabel controlId='title' label='Title'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter title'
                                        name='title'
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.title && errors.title}
                                        maxLength={50} // Add this line to set the maximum character length
                                    />
                                    <Form.Control.Feedback type='invalid'>{errors.title}</Form.Control.Feedback>

                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='coverImage'>
                                <FloatingLabel controlId='coverImage' label='Image URL'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter image URL'
                                        name='coverImage'
                                        value={values.coverImage}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.coverImage && errors.coverImage}
                                     />
                                    <Form.Control.Feedback type='invalid'>{errors.coverImage}</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>


                            <Form.Group className='mb-3' controlId='excerpt'>
                                <FloatingLabel controlId='excerpt' label='Excerpt'>
                                    <Form.Control
                                        as='textarea'
                                        placeholder='Enter excerpt'
                                        style={{ height: '100px' }}
                                        name='excerpt'
                                        value={values.excerpt}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.excerpt && errors.excerpt}
                                    />
                                    <Form.Control.Feedback type='invalid'>{errors.excerpt}</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='content'>
                                <FloatingLabel controlId='content' label='Content'>
                                    <Form.Control
                                        as='textarea'
                                        placeholder='Enter content'
                                        style={{ height: '200px' }}
                                        name='content'
                                        value={values.content}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.content && errors.content}
                                    />
                                    <Form.Control.Feedback type='invalid'>{errors.content}</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='tags'>
                                <FloatingLabel controlId='tags' label='Tags'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter tags (comma-separated)'
                                        name='tags'
                                        value={values.tags}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.tags && errors.tags}
                                    />
                                    <Form.Control.Feedback type='invalid'>{errors.tags}</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>

                            {showAlert && (
                                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                                    {alertMessage}
                                </Alert>
                            )}

                            <Button variant='primary' type='submit' disabled={isSubmitting} style={{ width: '100%' }}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}

                            </Button>

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

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PostMovie;


// import { Form, Button, FloatingLabel, Toast, Alert  } from 'react-bootstrap'; 
// import { useState } from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const PostMovie = () => {
    // const [title, setTitle] = useState('');
    // const [coverImage, setCoverImage] = useState('');
    // const [excerpt, setExcerpt] = useState('');
    // const [content, setContent] = useState('');
    // const [tags, setTags] = useState('');
//     const [showAlert, setShowAlert] = useState(false);
//     const [alertVariant, setAlertVariant] = useState('success');
//     const [alertMessage, setAlertMessage] = useState('');
//     const [showToast, setShowToast] = useState(false); 
//     const [toastVariant, setToastVariant] = useState('success'); 

//     const validationSchema = Yup.object().shape({
//         title: Yup.string().required('Title is required'),
//         coverImage: Yup.string().url('Invalid URL').required('Cover image URL is required'),
//         excerpt: Yup.string().required('Excerpt is required'),
//         content: Yup.string().required('Content is required'),
//         tags: Yup.string().required('Tags are required'),
//     });

    
//     const Movies = {
//         title: title || '', 
//         coverImage: coverImage || '', 
//         excerpt: excerpt || '', 
//         content: content || '', 
//         tags: tags ? tags.split(',') : [] 
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('https://awesome-blog-hkac.onrender.com/api/post', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(Movies) 
//             });

//             if (!response.ok) {
//                 throw new Error('Movie not added');
//             }
            
//             const data = await response.json();
//             console.log(data);
//             setShowToast(true);
//             clearFields();
//             // Clear the toast after a delay
//             setTimeout(() => setShowToast(false), 3000);
//             setAlertVariant('success');
//             setAlertMessage('Movie added successfully!');
//             setShowAlert(true);
//         } catch (error) {
//             console.error('Error:', error);
//             setToastVariant('danger');
//             setShowToast(true);
//             setAlertVariant('danger');
//             setAlertMessage('Error: Movie not added');
//             setShowAlert(true);
//         }
//     }
    
//     const clearFields = () => {
//         setTitle('');
//         setCoverImage('');
//         setExcerpt('');
//         setContent('');
//         setTags('');
//     }

//     return (
//         <div className='container my-4'>
//             <h1 className='text-primary'>Add New Movie</h1>
//             <div className='mt-4'>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                     <Form.Group className='mb-3' controlId='title'>
//                         <FloatingLabel controlId='title' label='Title'>
//                             <Form.Control 
//                                 type='text' 
//                                 placeholder='Enter title' 
//                                 value={title} 
//                                 onChange={(e) => setTitle(e.target.value)} 
//                             />
//                         </FloatingLabel>
//                     </Form.Group>

//                     <Form.Group className='mb-3' controlId='image'>
//                         <FloatingLabel controlId='image' label='Image URL'>
//                             <Form.Control 
//                                 type='text' 
//                                 placeholder='Enter image URL' 
//                                 value={coverImage} 
//                                 onChange={(e) => setCoverImage(e.target.value)} 
//                             />
//                         </FloatingLabel>
//                     </Form.Group>

//                     <Form.Group className='mb-3' controlId='excerpt'>
//                         <FloatingLabel controlId='excerpt' label='Excerpt'>
//                             <Form.Control 
//                                 as='textarea' 
//                                 placeholder='Enter excerpt' 
//                                 style={{ height: '100px' }} 
//                                 value={excerpt} 
//                                 onChange={(e) => setExcerpt(e.target.value)} 
//                             />
//                         </FloatingLabel>
//                     </Form.Group>

//                     <Form.Group className='mb-3' controlId='content'>
//                         <FloatingLabel controlId='content' label='Content'>
//                             <Form.Control 
//                                 as='textarea' 
//                                 placeholder='Enter content' 
//                                 style={{ height: '200px' }} 
//                                 value={content} 
//                                 onChange={(e) => setContent(e.target.value)} 
//                             />
//                         </FloatingLabel>
//                     </Form.Group>

//                     <Form.Group className='mb-3' controlId='tags'>
//                         <FloatingLabel controlId='tags' label='Tags'>
//                             <Form.Control 
//                                 type='text' 
//                                 placeholder='Enter tags (comma-separated)' 
//                                 value={tags} 
//                                 onChange={(e) => setTags(e.target.value)} 
//                             />
//                         </FloatingLabel>
//                     </Form.Group>
//                     {showAlert && (
//                 <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
//                     {alertMessage}
//                 </Alert>
//             )}
//                     <Button variant='primary' type='submit' style={{ width: '100%' }}>
//                         Submit
//                     </Button>
//                 </form>
//             </div>
//             <Toast
//                 show={showToast}
//                 onClose={() => setShowToast(false)}
//                 style={{ position: 'absolute', top: 200, right: 20 }}
//                 delay={3000}
//                 autohide
//                 bg={toastVariant}
//             >
//                 <Toast.Body>{toastVariant === 'success' ? 'Movie added' : 'Error: Movie not added'}</Toast.Body>
//             </Toast>
//         </div>
//     );
// }

// export default PostMovie;