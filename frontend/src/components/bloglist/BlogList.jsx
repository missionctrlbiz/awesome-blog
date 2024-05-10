/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import BlogCard from '../blogcard/BlogCard';
import './BlogList.css';

const BlogList = ({ movies }) => {
    // Sort movies by likes in descending order
    const sortedMovies = [...movies].sort((a, b) => b.likes - a.likes);
    
    // Slice the sorted movies array to get the first 9 items for the popular section
    const popularMovies = sortedMovies.slice(0, 6);

    // Filter movies for each genre tag and sort them by likes in descending order
    const genreMovies = (genre) => sortedMovies.filter(movie => movie.tags.includes(genre)).sort((a, b) => b.likes - a.likes);

    return (
            <div className="blog-list" style={{ marginTop: '20px' }}>
            <div className="section">
                <h2>Popular Movies</h2>
                <div className="popular-movies">
                    {popularMovies.map((movie) => (
                        <BlogCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="blog-list">
            <div className="section">
            <h2>{`${genreMovies('action').length > 0 ? 'Action' : 'No'} Movies`}</h2>
                <div className="action-movies">
                {genreMovies('action').map((movie) => (
                        <BlogCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
            </div>
            <div className="section">
                <h2>{`${genreMovies('comedy').length > 0 ? 'Comedy' : 'No'} Movies`}</h2>
                <div className="comedy-movies">
                    {genreMovies('comedy').map((movie) => (
                        <BlogCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="section">
                <h2>{`${genreMovies('adventure').length > 0 ? 'Adventure' : 'No'} Movies`}</h2>
                <div className="adventure-movies">
                    {genreMovies('adventure').map((movie) => (
                        <BlogCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="section">
                <h2>{`${genreMovies('thriller').length > 0 ? 'Thriller' : 'No'} Movies`}</h2>
                <div className="thriller-movies">
                    {genreMovies('thriller').map((movie) => (
                        <BlogCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="section">
                <h2>{`${genreMovies('drama').length > 0 ? 'Drama' : 'No'} Movies`}</h2>
                <div className="drama-movies">
                    {genreMovies('drama').map((movie) => (
                        <BlogCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// const BlogList = ({ movies }) => {
//     // Sort movies by likes in descending order
//     const sortedMovies = [...movies].sort((a, b) => b.likes - a.likes);
    
//     // Slice the sorted movies array to get the first 9 items
//     const slicedMovies = sortedMovies.slice(0, 9);

//     return (
//         <div className="blog-list">
//             {slicedMovies.map((movie) => (
//                 <BlogCard key={movie._id} movie={movie} />
//             ))}
//         </div>
//     );
// }

// const BlogList = ({ movies }) => {
//     const slicedMovies = movies.slice(0, 9); // Slice the movies array to get the first 7 items

//     return (
//         <div className="blog-list">
//             {slicedMovies.map((movie) => (
//                 <BlogCard key={movie._id} movie={movie} />
//             ))}
//         </div>
//     );
// }


BlogList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func
  })
}

export default BlogList;



