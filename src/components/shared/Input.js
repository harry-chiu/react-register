import React, { useState } from 'react';
import Styled from '../../styles';

const Input = ({
  icon,
  label,
  extra,
  type,
  value,
  setValue,
  validate,
  submitted,
}) => {
  const [selected, setSelected] = useState(false);
  const [validation, errorMessage] = validate(value);

  const renderErrorMessage = () => submitted && !validation
    ? <Styled.InputErrorMessage>{errorMessage}</Styled.InputErrorMessage>
    : null;

  const onFocus = () => setSelected(true);
  const onBlur = () => setSelected(false);
  const onChange = event => {
    setValue(event.target.value);
    validate(event.target.value);
  };

  return (
    <Styled.InputContainer
      selected={selected}
      error={submitted && !validation}
      hasValue={value ? true : false}
    >
      <Styled.InputIcon>
        {icon}
      </Styled.InputIcon>
      <Styled.InputLabel
        hasValue={value ? true : false}
        selected={selected}
      >
        {label}
      </Styled.InputLabel>
      <Styled.Input
        type={type}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        extraExist={extra ? true : false}
        autoCorrect="false"
      />
      <Styled.InputExtra>
        {extra}
      </Styled.InputExtra>
      {renderErrorMessage()}
    </Styled.InputContainer>
  );
};

export default Input;