/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './CarouselSlide.css'
import { useEffect } from 'react';


const CarouselSlide = () => {
  // Function to initialize the Bootstrap Carousel
  const initializeCarousel = () => {
    // Get the carousel element by its ID
    const myCarouselElement = document.getElementById('myCarousel');

    // Create a new Carousel instance
    const myCarousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 3000, // Adjust interval as needed
      // Other options...
      wrap: true, // Set to false to disable wrapping of slides
      keyboard: true, // Set to false to disable keyboard navigation
      pauseOnFocus: true, // Set to true to pause the carousel when it gains focus
      pauseOnHover: true, // Set to true to pause the carousel on mouse hover
      // Add more options as needed
    });
    
  };

  // Call the initializeCarousel function when the component mounts
  useEffect(() => {
    initializeCarousel();
  }, []); // Empty dependency array to ensure it runs only once after mounting

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        
      <img src="/Monkey.jpg" alt="" />

        <div className="container">
          <div className="carousel-caption text-start" style={{ paddingLeft : '150px', paddingBottom : '150px' }}>
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Watch Trailer</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        
      <img src="/abigail-p.jpg" alt="" style={{ width: '100%' }} />

        <div className="container">
          <div className="carousel-caption text-start" style={{ paddingLeft : '150px', paddingBottom : '150px' }}>
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Watch Trailer</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/GvK.jpg" alt="" />

        <div className="container">
          <div className="carousel-caption text-start" style={{ paddingLeft : '150px', paddingBottom : '150px' }}>
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Watch Trailer</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    // <div classNameName="px-4 py-5 my-5 text-center">
    //   <img classNameName="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    //   <h1 classNameName="display-5 fw-bold">Centered hero</h1>
    //   <div classNameName="col-lg-6 mx-auto">
    //     <p classNameName="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    //     <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
    //       <button type="button" classNameName="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
    //       <button type="button" classNameName="btn btn-outline-secondary btn-lg px-4">Secondary</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CarouselSlide;
