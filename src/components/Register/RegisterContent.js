import React from 'react';
import Input from '../shared/Input';
import Selector from '../shared/Selector';
import SelectorItem from '../shared/SelectorItem';
import Styled from '../../styles';
import StyledRegister from '../../styles/StyledRegister';
import {
  EnvelopeSvg,
  PadlockSvg,
} from '../../images';

const RegisterContent = ({
  accountType,
  accountTypes,
  setAccountType,
  username,
  password,
  setUsername,
  setPassword,
  usernameValidate,
  passwordValidate,
  submitted,
  onSubmit,
}) => {
  return (
    <StyledRegister.Content>
      <StyledRegister.SelectorContainer>
        <Selector
          onSelect={setAccountType}
          selectedValue={accountType}
        >
          {accountTypes.map(({ id, type, icon }) => (
            <SelectorItem
              key={id}
              icon={icon}
              value={type}
              selected={type === accountType}
            />
          ))}
        </Selector>
      </StyledRegister.SelectorContainer>
      
      <StyledRegister.Greeting>
        Hello {accountType}!
        <br />
        Please fill out the form below to get started
      </StyledRegister.Greeting>

      <StyledRegister.Form onSubmit={onSubmit}>
        <Input
          icon={<EnvelopeSvg />}
          label="Email"
          value={username}
          setValue={setUsername}
          validate={usernameValidate}
          submitted={submitted}
        />
        <Input
          icon={<PadlockSvg />}
          label="Password"
          extra={<Styled.Link href="#forgot">Forgot ?</Styled.Link>}
          type="password"
          value={password}
          setValue={setPassword}
          validate={passwordValidate}
          submitted={submitted}
        />
        <StyledRegister.FormActions>
          <Styled.Typograph color="secondary">
            No account? <Styled.Link href="#signup">Signup</Styled.Link>
          </Styled.Typograph>
          <Styled.Button type="submit">
            Login
          </Styled.Button>
        </StyledRegister.FormActions>
      </StyledRegister.Form>
    </StyledRegister.Content>
  );
};

export default RegisterContent;