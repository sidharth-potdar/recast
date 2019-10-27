import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from '../components/Box';
import Fade from 'react-reveal/Fade';
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
import UploadToS3 from '../actions/UploadToS3';
import Processing from '../actions/Processing';

const UploadPage = ({
  sectionWrapper,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  col,
  row,
  title,
  imageArea,
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
      <Box {...sectionWrapper}>
        <Container>
          <Box {...sectionHeader}>
            <Text {...sectionSubTitle} content="DEMO" />
            <Heading
              {...sectionTitle}
              content="Upload a video to see how Recast works"
            />
          </Box>
          <Box {...row}>
            <Box {...col} {...imageArea}>
              <Fade bottom>
                <UploadToS3 />
              </Fade>
            </Box>
            <Box {...col} {...textArea}>
              <Processing/>
            </Box>
          </Box>
        </Container>
      </Box>
    </BannerWrapper>


  );
};

UploadPage.propTypes = {
  sectionWrapper: PropTypes.object,
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

UploadPage.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
  }, // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '45%'],
    mb: ['30px', '40px', '40px', '0', '0'],
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

export default UploadPage;
