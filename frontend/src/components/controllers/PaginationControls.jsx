
import PropTypes from "prop-types"
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevClick = () => {
        onPageChange(currentPage - 1);
    };

    const handleNextClick = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <div className="pagination-controls">
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
                Prev
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNextClick} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

PaginationControls.propTypes = {
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  totalPages: PropTypes.any
}

export default PaginationControls;