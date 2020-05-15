import styled from 'styled-components';
import palette from './palette';

const Styled = {};

Styled.PageHeader = styled.h1`
  color: #39b5ed;
  font-weight: 500;
  font-size: 18px;
  padding: 16px 0;
  margin: 0;
  letter-spacing: 1px;
`;

Styled.Container = styled.div`
  text-align: ${props => props.align || 'unset'};
`;

Styled.SelectContainer = styled.div`
  margin-top: 16px;
`;

Styled.List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

Styled.ListItem = styled.li`
  flex-grow: 1;
  margin-left: ${props => props.onlyChild ? 'auto' : 'unset'};
  margin-right: 16px;
  max-width: ${props => props.onlyChild ? '50%' : '100%'};

  &:last-child {
    margin-right: ${props => props.onlyChild ? 'auto' : '0'};
  }
`;

Styled.SelectBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  border-radius: 5px;
  padding: 16px;
  border: 2px solid ${props => props.selected ? palette.primary : palette.text.secondary}90;

  &:hover {
    border-color: ${palette.primary}90;
  }

  &::after {
    content: '';
    padding-bottom: 100%;
  }
`;

Styled.SelectBoxIcon = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  height: 80%;
`;

Styled.SelectBoxText = styled.p`
  position: absolute;
  bottom: 8px;
  margin: 0;
`;

Styled.SelectBoxSelected = styled.div`
  position: absolute;
  right: -18px;
  bottom: -18px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${palette.primary};
  box-shadow: 0 2px 5px ${palette.primary};

  & path {
    fill: #ffffff;
  }
`;

Styled.InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${props => props.error
    ? palette.error
    : props.selected
      ? palette.primary
      : palette.text.secondary
  }90;
  border-radius: 5px;
  margin-bottom: 32px;
  font-size: 16px;
`;

Styled.Input = styled.input`
  position: relative;
  z-index: 1;
  background: transparent;
  padding: 16px 16px 16px 48px;
  width: 100%;
  font-size: inherit;
  border: none;

  &:focus {
    outline: none;
  }
`;

Styled.InputIcon = styled.i`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  margin-left: 12px;

  & path {
    fill: ${palette.text.secondary};
  }
`;

Styled.InputLabel = styled.label`
  position: absolute;
  color: ${props => props.selected
    ? '#ffffff'
    : props.hasValue
      ? '#ffffff'
      : palette.text.secondary
  };
  background: ${props => props.selected || props.hasValue ? palette.primary : 'transparent'};
  padding: 4px 8px;
  border-radius: 5px;
  font-size: ${props => props.selected || props.hasValue ? '12px' : 'inherit'};
  margin-left: ${props => props.selected || props.hasValue ? '16px' : '48px'};
  top: ${props => props.selected || props.hasValue ? '-10px' : '13px'};
  transition: 0.15s ease-in-out;
`;

Styled.InputExtra = styled.div`
  padding: 0 16px;
  border-left: 1px solid ${palette.text.secondary};
`;

Styled.InputErrorMessage = styled.p`
  color: ${palette.error};
  margin: 0;
  position: absolute;
  bottom: -24px;
  left: 0;
  font-size: 12px;
`;

Styled.Link = styled.a`
  color: ${palette.primary};
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
`;

Styled.Typograph = styled.p`
  font-size: 14px;
  color: ${props => palette.text[props.color]
    ? palette.text[props.color]
    : props.color
      ? props.color
      : palette.text.primary
  };
`;

Styled.Button = styled.button`
  cursor: pointer;
  padding: 8px 24px;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  background: ${palette.primary}e0;
  border: none;
  transition: 0.15s ease-in-out;

  &:hover {
    background: ${palette.primary};
  }

  &:focus {
    outline: none;
  }
`;

export default Styled;