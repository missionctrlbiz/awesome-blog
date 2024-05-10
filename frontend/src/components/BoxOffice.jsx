import { Row } from 'react-bootstrap'

const BoxOffice = () => {
  return (
    <Row className="featurette" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <div className="col-md-7">
        <h2 className="featurette-heading">Abigail <span className="text-muted">Action / Horror / Thriller</span></h2>
        <p className="lead">After a group of would-be criminals kidnap the 12 year old ballerina daughter of a powerful underworld figure, all they have to do to collect a $50 million ransom is watch the girl overnight. In an isolated mansion, the captors start to dwindle, one by one, and they discover, to their mounting horror, that theyre locked inside with no normal little girl.</p>
      </div>
      <div className="col-md-5">
        <img src="/ab.jpg" alt="Abigail" />
      </div>
    </Row>
  )
}

export default BoxOffice