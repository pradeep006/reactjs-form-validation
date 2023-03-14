import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError]
    = useState('');

  const handleClick = () => {
    let usernameptn = /^[a-zA-Z ]{2,30}$/.test(userName);
    let emailbtn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

    if (userName === '') {
      setUserNameError('User Name cannot be the Empty');
    } else if (!usernameptn) {
      setUserNameError('User not vaild');
      setUserName('');
    } else {
      setUserNameError('');
    }

    if (email === '') {
      setEmailError('Email cannot be the emtey');
    } else if (!emailbtn) {
      setEmailError('Email not vaild');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Please enter the password');
    } else if (!pass) {
      setPasswordError('Password not vaild');
    } else {
      setPasswordError('');
    }

    if (confirmPassword === '') {
      setConfirmPasswordError('Please enter a confirm password');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Please valid confirm password');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className="App">
      <Container>
      <Form className=' mt-5 w-50 '>
        <Form.Group className='mb-3' controlId='formBasicusername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='Username'
            placeholder='Enter email'
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <p>{userNameError}</p>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>{emailError}</p>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>{passwordError}</p>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>cofirmPassword</Form.Label>
          <Form.Control
            type='Password'
            placeholder='confirmPassword'
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <p>{confirmPasswordError}</p>
        </Form.Group>
      </Form>
      <Button onClick={handleClick}>Submit</Button>
</Container>

    </div>
  );
}

export default Login;
