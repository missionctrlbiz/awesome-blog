import PropTypes from "prop-types";

const ExampleCarouselImage = ({ imageUrl, altText }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  altText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default ExampleCarouselImage;
