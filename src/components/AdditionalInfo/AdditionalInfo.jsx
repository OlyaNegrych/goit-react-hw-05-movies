import { AddInfoList } from '../AdditionalInfo/AdditionalInfo.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AdditionalInfo = () => {
  const location = useLocation();
  const backLink = location.state?.from;

  return (
    <>
      <h3>Additional information</h3>
      <AddInfoList>
        <li>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }}>
            Review
          </Link>
        </li>
      </AddInfoList>
      <hr />
    </>
  );
};

export default AdditionalInfo;
