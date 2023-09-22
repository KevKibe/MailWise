import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

function Signup() {
  const responseGoogle = (response) => {
    // Handle the user data received from Google OAuth
    const data = response.profileObj

    console.log('Google user token:', response.accessToken);
    console.log('Google user email:', data);

    axios.post('http://localhost:8000/updatedatabase', {
      accessToken: response.accessToken,
    email: data.email
    });
    // You can send this user data to your server for registration/authentication.
  };

  return (
    <main>
      <div className="form-container shadowed">
        <h2 className="txt-gradient">Welcome on board</h2>

        <div className="google-btn">
          <GoogleLogin
            clientId="965274681666-p08jm4et6g955b9fmm0jeirg410qcug4.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
