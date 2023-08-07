import React, { useEffect, useState, Fragment, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Input from "../../../shared/Input/input.components";
import Button from "../../../shared/Button/button.components";
import Card from "../../../shared/Card/card-components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import ErrorModal from "../../../shared/Error-Modal/error-modal.components";

// for client-side form validator before submiting
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";

import { useForm } from "../../../shared/hooks/form-hooks";
import { useHttpClient } from "../../../shared/hooks/http-hook";
// import { AuthContext } from "../../../shared/context/auth-context";

import "./update-event.styles.css";

const UpdateEvent = () => {
  // const auth = useContext(AuthContext);
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const [loadedevent, setLoadedevent] = useState();
  const eventId = useParams().eventId;
  const navigate = useNavigate();

  // Initialized form data on mounting of the component before we fetch from db
  const [formState, inputHandler, setFormData] = useForm(
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
      province: {
        value: "",
        isValid: false,
      },
      address: {
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
    },
    false
  );

  // useEffect(() => {
  //   const fetchevent = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`
  //       );
  //       setLoadedevent(responseData.event);

  //       // setting default values on form from current events loaded from db
  //       setFormData(
  //         {
  //           title: {
  //             value: responseData.event.title,
  //             isValid: true,
  //           },
  //           description: {
  //             value: responseData.event.description,
  //             isValid: true,
  //           },
  //           address: {
  //             value: responseData.event.address,
  //             isValid: true,
  //           },
  //           date: {
  //             value: responseData.event.date,
  //             isValid: true,
  //           },
  //           price: {
  //             value: responseData.event.price,
  //             isValid: true,
  //           },
  //         },
  //         true
  //       );
  //     } catch (error) {}
  //   };
  //   fetchevent();
  // }, [sendRequest, eventId, setFormData]);

  // Function that calls to the db
  // const eventUpdateSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await sendRequest(
  //       `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`,
  //       "PATCH",
  //       JSON.stringify({
  //         title: formState.input.title.value,
  //         description: formState.input.description.value,
  //       }),
  //       {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + auth.token,
  //       }
  //     );
  //     navigate("/" + auth.userId + "/events");
  //   } catch (error) {}
  // };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedevent && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find event!</h2>
        </Card>
      </div>
    );
  }

  return (
    <Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      {!isLoading && loadedevent && (
        <form className="event-form">
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={loadedevent.title}
            initialValid={true}
          ></Input>
          <Input
            id="description"
            element="textarea"
            type="text"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min 5 characters)"
            onInput={inputHandler}
            initialValue={loadedevent.description}
            initialValid={true}
          ></Input>
          <Input
            id="organizer"
            element="input"
            type="text"
            label="Organized by"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid organizer."
            initialValue={loadedevent.organizer}
            onInput={inputHandler}
          />
          <Input
            id="province"
            element="select"
            options={loadedevent.options}
            initialValue={loadedevent.options}
            label="Province"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid Province. "
            onInput={inputHandler}
          />
          <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[VALIDATOR_MINLENGTH()]}
            errorText="Please enter a valid address"
            onInput={inputHandler}
            initialValue={loadedevent.address}
            initialValid={true}
          ></Input>
          <Input
            id="date"
            element="input"
            type="date"
            label="Date"
            validators={[VALIDATOR_MINLENGTH()]}
            errorText="Please enter a valid date"
            onInput={inputHandler}
            initialValue={loadedevent.date}
            initialValid={true}
          ></Input>
          <Input
            id="price"
            element="input"
            type="text"
            label="Price"
            validators={[VALIDATOR_MINLENGTH()]}
            errorText="Please enter a valid price"
            onInput={inputHandler}
            initialValue={loadedevent.price}
            initialValid={true}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE event
          </Button>
        </form>
      )}
    </Fragment>
  );
};

export default UpdateEvent;
