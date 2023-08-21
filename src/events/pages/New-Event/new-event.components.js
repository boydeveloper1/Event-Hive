import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import Input from "../../../shared/Input/input.components";
import Button from "../../../shared/Button/button.components";
import ErrorModal from "../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import ImageUpload from "../../../shared/Image-Upload/image-upload.components";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators.js";
import "./new-event.styles.css";

import { useForm } from "../../../shared/hooks/form-hooks";
// import { useHttpClient } from "../../../shared/hooks/http-hook";
// import { AuthContext } from "../../../shared/context/auth-context";
import { Fragment } from "react";
import HeroHeader from "../../../shared/hero-header/hero-header.components";

const NewEvent = () => {
  const ProvinceOptions = [
    "Ontario",
    "British Columbia",
    "New Brunswick",
    "Alberta",
    "Manitoba",
    "Prince Edward Island",
    "Saskatchewan",
    "Nova Scotia",
    "Quebec",
  ];
  const EventOptions = [
    "Health and Wellness",
    "Entertainment",
    "Fashion and Beauty",
    "Education and Training",
    "Business and Strategy",
    "Sports and Travel",
  ];
  // const auth = useContext(AuthContext);
  // const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const [formState, InputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      organizer: {
        value: "",
        isValid: false,
      },
      category: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      province: {
        value: "",
        isValid: false,
      },
      date: {
        value: "",
        isValid: false,
      },
      price: {
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

  // const navigate = useNavigate();

  const eventSubmitHandler = async (event) => {
    event.preventDefault();
    // try {
    //   const formData = new FormData();
    //   formData.append("title", formState.input.title.value);
    //   formData.append("description", formState.input.description.value);
    //   formData.append("address", formState.input.address.value);
    //   formData.append("image", formState.input.image.value);
    //   await sendRequest(
    //     process.env.REACT_APP_BACKEND_URL + "/events",
    //     "POST",
    //     formData,
    //     {
    //       Authorization: "Bearer " + auth.token,
    //     }
    //   );
    //   navigate("/" + auth.userId + "/events");
    // } catch (error) {}
  };

  return (
    <Fragment>
      <HeroHeader text={"add event."} />
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <form className="event-form" onSubmit={eventSubmitHandler}>
        {/* {isLoading && <LoadingSpinner asOverlay />} */}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={InputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters) "
          onInput={InputHandler}
        />
        <Input
          id="organizer"
          element="input"
          type="text"
          label="Organized by"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a valid organizer. "
          onInput={InputHandler}
        />
        <Input
          id="category"
          element="select"
          options={EventOptions}
          label="Event Category"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a valid Category. "
          onInput={InputHandler}
        />
        <Input
          id="province"
          element="select"
          options={ProvinceOptions}
          label="Province"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a valid Province. "
          onInput={InputHandler}
        />
        <Input
          id="address"
          element="input"
          type="text"
          label="Address"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a valid address. "
          onInput={InputHandler}
        />
        <Input
          id="date"
          element="input"
          type="date"
          label="Date"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a valid date"
          onInput={InputHandler}
        />
        <Input
          id="price"
          element="input"
          type="text"
          placeholder="$"
          label="Price"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a valid price"
          onInput={InputHandler}
        />
        <ImageUpload
          id="image"
          onInput={InputHandler}
          errorText="Please provide an image"
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD EVENT
        </Button>
      </form>
    </Fragment>
  );
};

export default NewEvent;
