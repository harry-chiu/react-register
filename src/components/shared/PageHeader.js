import React from 'react';
import Styled from '../../styles';

const PageHeader = (props) => {
  return (
    <Styled.PageHeader>{props.children}</Styled.PageHeader>
  );
};

export default PageHeader;