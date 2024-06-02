import PropTypes from "prop-types"
import './PrevNext.css'; // Import CSS file for styling

const PrevNext = ({ prevTitle, prevImage, nextTitle, nextImage }) => {
  return (
    <div className="container">
      <div className="column" id="prev" title={prevTitle}>
        <img src={prevImage} alt={prevTitle} />
        <span className="button-text">Prev</span>
      </div>
      <div className="column" id="next" title={nextTitle}>
        <img src={nextImage} alt={nextTitle} />
        <span className="button-text">Next</span>
      </div>
    </div>
  );
};

PrevNext.propTypes = {
  nextImage: PropTypes.any,
  nextTitle: PropTypes.any,
  prevImage: PropTypes.any,
  prevTitle: PropTypes.any
}

export default PrevNext;