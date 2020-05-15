import React, { useState } from 'react';
import StyledRegister from '../styles/StyledRegister';
import RegisterHeader from '../components/Register/RegisterHeader';
import RegisterContent from '../components/Register/RegisterContent';
import RegisterFooter from '../components/Register/RegisterFooter';
import accountTypes from '../fake/accountTypes';

const Register = () => {
  const defaultAccountType = accountTypes[0].type || '';
  const [accountType, setAccountType] = useState(defaultAccountType);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const usernameValidate = (username) => {
    if (!username) {
      return [false, '帳號不可為空'];
    }

    return [true, null];
  };

  const passwordValidate = (password) => {
    if (!password) {
      return [false, '密碼不可為空'];
    }

    for (let i = 0; i < password.length; i++) {
      let start = i;
      let end = i + 6;
      let match = password.slice(start, end);

      if (username.includes(match)) {
        return [false, '密碼不可包含帳號'];
      }

      if (end >= password.length) {
        break;
      }
    }

    return [true, null];
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    if (usernameValidate(username)[0] && passwordValidate(password)[0]) {
      alert("登入成功");
    }
  };

  return (
    <StyledRegister.Container>
      <RegisterHeader />
      <RegisterContent
        accountType={accountType}
        accountTypes={accountTypes}
        setAccountType={setAccountType}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        usernameValidate={usernameValidate}
        passwordValidate={passwordValidate}
        submitted={submitted}
        onSubmit={onSubmit}
      />
      <RegisterFooter />
    </StyledRegister.Container>
  );
};

export default Register;