import { useState, useEffect } from 'react'
import BoxOffice from '../components/BoxOffice'
import CarouselSlide from '../components/carousel/CarouselSlide'
import BlogList from '../components/bloglist/BlogList'


const HomePage = () => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    try {
      const res = await fetch('https://awesome-blog-hkac.onrender.com/api/posts')
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
      <CarouselSlide />
      <BlogList movies={movies} />
      <div className='container'>
        <BoxOffice />
      </div>
    </>
  )
}

export default HomePage