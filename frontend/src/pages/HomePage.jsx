import { useState, useEffect } from 'react'
// import BoxOffice from '../components/BoxOffice'
import CarouselSlide from '../components/carousel/CarouselSlide'
import NavBar from '../header/NavBar'
import BlogList from '../components/bloglist/BlogList'


// const HomePage = () => {
//     const [movies, setMovies] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:8000/api/posts')
//        .then(res => res.json())
//        .then(data => setMovies(data))
//     }, [])
//fetch all movies
    const fetchMovies = async () => {
        try {
            const res = await fetch('http://localhost:7000/api/posts')
            const data = await res.json()
            setMovies(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchMovies()
    }, [])
  return (
    <>
    <NavBar />
    <CarouselSlide />
    {/* <div className='container'>
    <BoxOffice />
    </div>     */}
    <BlogList movies={movies} />
    </>
  )
}

export default HomePage