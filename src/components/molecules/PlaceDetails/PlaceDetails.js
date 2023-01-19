import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material';

import PriceLevel from 'components/atoms/PriceLevel/PriceLevel';
import Ranking from 'components/atoms/Ranking/Ranking';
import Address from 'components/atoms/Address/Address';
import Phone from 'components/atoms/Phone/Phone';
import CustomRating from 'components/atoms/Rating/Rating';

import { useStyles } from './styles';

const PlaceDetails = ({
  place: {
    name,
    photo,
    price_level,
    ranking,
    cuisine,
    address,
    phone,
    web_url,
    website,
    rating,
    num_reviews,
  },
}) => {
  const classes = useStyles();

  const DEFAULT_IMAGE =
    'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1380&t=st=1673979253~exp=1673979853~hmac=4bfdf5ad84eaca6e5d81cd46498cf5710552a3d5e4a7ea23a0f2ee849787e1b3';

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 300 }}
        image={photo ? photo.images.large.url : DEFAULT_IMAGE}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {name}
        </Typography>
        <CustomRating rating={rating} numReviews={num_reviews} />
        <PriceLevel priceLevel={price_level} />
        <Ranking ranking={ranking} />
        {cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {address ? <Address address={address} /> : null}{' '}
        {phone ? <Phone phone={phone} /> : null}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(web_url, '_blank')}
          >
            Trip Advisor
          </Button>
          {website ? (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(website, '_blank')}
            >
              Website
            </Button>
          ) : null}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;

PlaceDetails.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    price_level: PropTypes.string,
    ranking: PropTypes.string,
    cuisine: PropTypes.array,
    address: PropTypes.string,
    phone: PropTypes.string,
    web_url: PropTypes.string,
    website: PropTypes.string,
    rating: PropTypes.string,
    num_reviews: PropTypes.string,
  }).isRequired,
};
