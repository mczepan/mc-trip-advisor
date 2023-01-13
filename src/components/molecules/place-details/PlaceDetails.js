import React from 'react';
import PropTypes from 'prop-types';

const PlaceDetails = ({ place: { name } }) => {
  return <h2>{name}</h2>;
};

export default PlaceDetails;

PlaceDetails.propTypes = {
  name: PropTypes.string.isRequired,
};
