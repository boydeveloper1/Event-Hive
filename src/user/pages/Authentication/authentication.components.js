import React, { useState, useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";

// Importing Shared Components
import Card from "../../../shared/Card/card-components";
import Input from "../../../shared/Input/input.components";
import Button from "../../../shared/Button/button.components";
import ErrorModal from "../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import ImageUpload from "../../../shared/Image-Upload/image-upload.components";
import HeroHeader from "../../../shared/hero-header/hero-header.components";

// importing validator
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators.js";

// useForm hook for overall form validity
import { useForm } from "../../../shared/hooks/form-hooks.js";

// custom hook for server requests
import { useHttpClient } from "../../../shared/hooks/http-hook";

import { AuthContext } from "../../../shared/context/auth-context";

import "./authentication.styles.css";

const Authentication = () => {
  const auth = useContext(AuthContext);

  // state to control the sign up form and login form field and buttons
  const [isLoginMode, setIsLoginMode] = useState(true);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, InputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // this switches the login mode to true or false depending on prev state
  const switchModeHandler = () => {
    // switching to login mode, currently in register. Therefore we drop the name and image = undefined to prev validation issue
    if (!isLoginMode) {
      setFormData(
        { ...formState.input, name: undefined, image: undefined },
        formState.input.email.isValid && formState.input.password.isValid
      );
      // switching to signup mode
    } else {
      setFormData(
        {
          ...formState.input,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    // inverting mode based on previous
    setIsLoginMode((prevMode) => !prevMode);
  };

  const navigate = useNavigate();

  // to submit the form to db
  const authSubmitHanlder = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.input.email.value,
            password: formState.input.password.value,
          }),
          { "Content-Type": "application/json" }
        );
        // once the user hit the (signup), then the login state changes to true
        auth.login(
          responseData.userId,
          responseData.image,
          responseData.name,
          responseData.token
        );

        navigate("/");
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.input.email.value);
        formData.append("name", formState.input.name.value);
        formData.append("password", formState.input.password.value);
        formData.append("image", formState.input.image.value);
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          formData
        );

        // once the user hit the (login), then the login state changes to true
        auth.login(
          responseData.userId,
          responseData.image,
          responseData.name,
          responseData.token
        );

        navigate("/");
      } catch (error) {}
    }
  };

  return (
    <Fragment>
      <HeroHeader text={"Login / Register"} />

      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay={true} />}
        {isLoginMode ? <h2>Login Required</h2> : <h2>Register Required</h2>}
        <hr />
        <form onSubmit={authSubmitHanlder}>
          {/* This input shows up to sign in  */}
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={InputHandler}
            />
          )}
          {!isLoginMode && (
            <ImageUpload
              center
              id="image"
              onInput={InputHandler}
              errorText="Please provide an image"
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address"
            onInput={InputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Please enter a valid password,at least 8 characters "
            onInput={InputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </Fragment>
  );
};

export default Authentication;
