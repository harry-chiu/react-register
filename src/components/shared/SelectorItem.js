import React from 'react';
import Styled from '../../styles';
import { ReactComponent as CheckSvg } from '../../images/check.svg';
import { toTitleCase } from '../../utils';

const SelectorItem = ({
  icon,
  value,
  selected,
  onSelect,
  count,
}) => {
  const onClick = () => onSelect(value);

  const renderSeleced = () => selected ? (
    <Styled.SelectBoxSelected>
      <CheckSvg />
    </Styled.SelectBoxSelected>
  ) : null;

  return (
    <Styled.ListItem
      onClick={onClick}
      onlyChild={count === 1}
    >
      <Styled.SelectBox selected={selected}>
        <Styled.SelectBoxIcon>
          {icon}
        </Styled.SelectBoxIcon>
        <Styled.SelectBoxText>
          {toTitleCase(value)}
        </Styled.SelectBoxText>
        {renderSeleced()}
      </Styled.SelectBox>
    </Styled.ListItem>
  );
};

export default SelectorItem;