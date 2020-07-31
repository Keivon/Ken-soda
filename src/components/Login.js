import React from 'react';
import { Button } from 'react-bootstrap';
import { signInWithGoogle } from '../firebase/utils';


function Login() {

 const handleSubmit = async e => {
    e.preventDefault();
  }
    
  return (
    <div className="signin">
      <h2>
        LogIn
      </h2>

      <div className="signin-form">
        <form onSubmit={handleSubmit}>
            <Button variant="light" onClick={signInWithGoogle}>
              Sign in with Google
              </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;