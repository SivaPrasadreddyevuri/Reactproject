import React from 'react';
import './app.css';
const App = () => { 
  return (
      <div id="sign-up">
        <h1 id="signup-title">Seconds to sign up!</h1>
        <form action="" id="signup-form">  
            <label for ="signupFullName">Full Name:</label>
            <input type="text" id="signupFullName" required autoFocus /><br />
            <label for ="signupEmail">Email:</label>
            <input type="email"  required id="signupEmail"/><br/>
            <span id="signupEmail_err"></span>
            <label for ="signupPassword">Password:</label>
            <input type="password"  required id="signupPassword"/>
            <span id="signupPassword_err"></span><br/>
            <input type="submit" value="Sign-Up" id="s_up" />
            <h3>Already Have An Account?<a id="do_signin" href=""> Sign In</a></h3>
        
        <div id="signup-footer">
          <p>By signing up, you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</p>
          <p>© 2025 All rights reserved.</p>
          </div>
        </form>

        <form action="" id="signin-form"  style={{display: 'none'}}>
          <h1>Login !</h1>
          <label for="signinEmail">Email:</label>
          <input type="email" id="signinEmail" required />
          <span id="signinEmail_err"></span>
          <label for="signinPassword">Password:</label>
          <input type="password" id="signinPassword" required />
          <span id="signinPassword_err"></span>
          <input type="submit" value="Sign In" id="s_in" />
          <h3>Don't Have An Account?<a id="do_signup" href=""> Sign Up</a></h3>
          <div id="signin-footer">
          <p>By signing in, you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</p>
          <p>© 2025 All rights reserved.</p>
        </div>
        </form>

        </div>
      
    
  );
};
export default App;

