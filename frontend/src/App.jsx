import './App.css';
import BlogList from './components/bloglist/BlogList';
import NotFound from './components/errorPages/NotFound';
import PostMovie from './components/movies/PostMovie';
import FreeTickets from './components/tickets/FreeTickets';
import NavBar from './header/NavBar';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'; // Import BrowserRouter or HashRouter
import BrowseFlick from './components/movies/BrowseFlick';
import ViewFlick from './components/movies/ViewFlick';
// import EditFlick from './components/movies/EditFlick';
import UpdateFlick from './components/movies/UpdateFlick';

function App() {
  return (
     <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flicks" element={<BlogList />} />
        <Route path="/post-flick" element={<PostMovie />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/browse-flicks" element={<BrowseFlick />} />
        <Route path="/free-tickets" element={<FreeTickets />} />
        <Route path="/view-flicks/:id" element={<ViewFlick />} />
        <Route path="/update-flicks" element={<UpdateFlick />} />
        {/* <Route path="/edit-flicks" element={<EditFlick />} /> */}
      </Routes>
     </>
  );
}

export default App;
