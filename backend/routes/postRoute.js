const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Middleware for parsing JSON data
router.use(express.json());

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get single post by ID
router.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create a new post
router.post('/post', async (req, res) => {
    const { title, coverImage, excerpt, content, tags } = req.body;
    try {
        const post = new Post({ title, coverImage, excerpt, content, tags });
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data provided' });
    }
});

// Update a post by ID
router.patch('/post/:id', async (req, res) => {
    const { id } = req.params;
    const { title, coverImage, excerpt, content, tags } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, { title, coverImage, excerpt, content, tags }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data provided' });
    }
});

// Delete a post by ID
router.delete('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(deletedPost);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
