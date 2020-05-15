import styled from 'styled-components';
import palette from './palette';

const StyledRegister = {};

StyledRegister.Container = styled.div`
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    max-height: 768px;
    box-shadow: 0 0 10px ${palette.text.secondary};
  }
`;

StyledRegister.Content = styled.div`
  position: relative;
  padding: 0 32px;
  z-index: 1;
`;

StyledRegister.SelectorContainer = styled.div`
  max-height: 240px;
  padding: 24px 0;
`;

StyledRegister.Greeting = styled.p`
  color: ${palette.text.secondary};
  text-align: center;
  line-height: 24px;
  margin: 0;
`;

StyledRegister.Form = styled.form`
  width: 100%;
  padding-top: 24px;
`;

StyledRegister.FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

StyledRegister.Footer = styled.div`
  margin-top: auto;
  width: 100%;
  overflow: hidden;
  z-index: 0;

  & svg {
    position: relative;
    top: 32px;
    width: 100%;
    height: 100%;
  }
`;

export default StyledRegister;