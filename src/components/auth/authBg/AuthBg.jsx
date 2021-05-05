import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './AuthBg.scss';

import ellipse1 from '../../../assets/images/auth-bg/ellipse-1.svg';
import ellipse2 from '../../../assets/images/auth-bg/ellipse-2.svg';
import ellipse3 from '../../../assets/images/auth-bg/ellipse-3.svg';
import ellipse4 from '../../../assets/images/auth-bg/ellipse-4.svg';
import ellipse5 from '../../../assets/images/auth-bg/ellipse-5.svg';
import ellipse6 from '../../../assets/images/auth-bg/ellipse-6.svg';
import union_white from '../../../assets/images/auth-bg/union-white.svg';
import union_orange from '../../../assets/images/auth-bg/union-orange.svg';
import union_orange_tablet from '../../../assets/images/auth-bg/union-orange-tablet.svg';

const AuthBg = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  return (
    <>
      {!isMobile && (
        <div className="bg-wrapper">
          <img src={ellipse1} alt="white ball" className="ellipse1" />
          <img src={ellipse2} alt="orange ball" className="ellipse2" />
          <img src={ellipse3} alt="whire ball" className="ellipse3" />
          <img src={ellipse4} alt="white ball" className="ellipse4" />
          <img src={ellipse5} alt="orange ball" className="ellipse5" />
          <img src={ellipse6} alt="orange ball" className="ellipse6" />
          <img src={union_white} alt="white drop" className="union-white" />
          <img src={union_orange} alt="orange drop" className="union-orange" />
          <img
            src={union_orange_tablet}
            alt="cutted orange drop"
            className="union-orange-tablet"
          />
        </div>
      )}
    </>
  );
};

export default AuthBg;
