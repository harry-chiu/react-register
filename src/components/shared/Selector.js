import React from 'react';
import Styled from '../../styles';

const Selector = ({
  children,
  onSelect,
  selectedValue,
}) => {
  const childrenCount = Array.from(children).length;

  if (childrenCount > 2) {
    const selectedElement = children.filter(child => child.props.value === selectedValue)[0];

    return (
      <Styled.Container align="center">
        <Styled.List>
          {selectedElement && React.cloneElement(selectedElement, {
            onSelect,
            count: 1,
          })}
        </Styled.List>

        <Styled.SelectContainer>
          <select onChange={event => onSelect(event.target.value)}>
            {children.map((child, index) => (
              <option
                key={index}
                value={child.props.value}
              >
                {child.props.value}
              </option>
            ))}
          </select>
        </Styled.SelectContainer>
      </Styled.Container>
    );
  }

  return (
    <Styled.List>
      {children && children.map(child => (
        React.cloneElement(child, {
          count: childrenCount,
          onSelect,
        })
      ))}
    </Styled.List>
  );
};

export default Selector;