import React from 'react';
import StyledRegister from '../../styles/StyledRegister';
import { ReactComponent as TownSvg } from '../../images/img_town_370x170@3x.svg';

const RegisterFooter = () => {
  return (
    <StyledRegister.Footer>
      <TownSvg />
    </StyledRegister.Footer>
  );
};

export default RegisterFooter;