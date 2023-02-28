import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SignIn from "./signIn";
import SignUp from "./signUp";
import {
  AuthBtn,
  AuthContainer
} from "./style"
const Auth: React.FC = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const handleSignInClose = () => {
    setIsSignInOpen(false);
  };
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };
  return (
    <AuthContainer>
      <div>
        <AuthBtn onClick={() => setIsSignInOpen(!isSignInOpen)}> Sign in</AuthBtn>
        <Popup modal open={isSignInOpen} onClose={handleSignInClose}>
          <SignIn handleSignInClose={handleSignInClose} />
        </Popup>
      </div>
      <div>
        <AuthBtn onClick={() => setIsSignUpOpen(!isSignUpOpen)}> Sign Up</AuthBtn>
        <Popup modal open={isSignUpOpen} onClose={handleSignUpClose}>
          <SignUp handleSignUpClose={handleSignUpClose} />
        </Popup>
      </div>
    </AuthContainer>
  );
};

export default Auth;
