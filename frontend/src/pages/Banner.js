import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from '../components/Box';
import Text from '../components/Text';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Container from '../components/UI/Container';
import ParticlesComponent from '../containers/Hosting/Particle';
import BannerWrapper, {
  SearchWrapper,
  List,
  DiscountWrapper,
  DiscountLabel,
} from './banner.style';
import { Link } from 'react-router-dom';
import { search } from 'react-icons-kit/feather/search';

import { DOMAIN_NAMES, DOMAIN_PRICE } from '../data/Hosting/data';

const BannerSection = ({
  row,
  title,
  description,
  button,
  textArea,
  searchArea,
  discountAmount,
  discountText,
}) => {
  return (
    <BannerWrapper id="banner_section">
            <ParticlesComponent />

      <Container className="banner_container">
        <Box {...row}>
          <Box {...textArea}>
            <DiscountWrapper>
              <DiscountLabel>
                
                <Text
                  {...discountText}
                  content="video compression made "
                />
                <Text {...discountAmount} content="intelligent" />

              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...title}
              content="Intelligent video compression."
            />
            <Text
              {...description}
              content="Re"
            />
          </Box>
          <Box {...searchArea}>
            
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  title: {
    fontSize: ['26px', '32px', '42px', '46px', '55px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.31',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  button: {
    title: 'Search',
    type: 'button',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    iconPosition: 'left',
  },
  searchArea: {
    className: 'search_area',
    width: ['100%', '100%', '80%', '100%', '70%'],
    mt: ['45px', '50px', '60px', '60px', '60px'],
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '600',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
