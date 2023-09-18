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
import { AuthContext } from "../../../shared/context/auth-context";

import "./update-event.styles.css";
import HeroHeader from "../../../shared/hero-header/hero-header.components";

const UpdateEvent = () => {
  const ProvinceOptions = [
    "Ontario",
    "British Columbia",
    "New Brunswick",
    "Alberta",
    "Manitoba",
    "Saskatchewan",
    "Nova Scotia",
    "Quebec",
  ];
  const EventOptions = [
    "Health and Wellness",
    "Entertainment",
    "Fashion and Beauty",
    "Education and Training",
    "Technology and Innovation",
    "Food and Culinary",
  ];
  const auth = useContext(AuthContext);
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const [Loadedevent, setLoadedevent] = useState();
  const eventId = useParams().eventId;
  const navigate = useNavigate();

  // Initialized form data on mounting of the component before we fetch from db
  const [formState, InputHandler, setFormData] = useForm(
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

  useEffect(() => {
    const fetchevent = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`
        );
        setLoadedevent(responseData.event);

        // setting default values on form from current events loaded from db
        setFormData(
          {
            title: {
              value: responseData.event.title,
              isValid: true,
            },
            description: {
              value: responseData.event.description,
              isValid: true,
            },
            organizer: {
              value: responseData.event.organizer,
              isValid: true,
            },
            category: {
              value: responseData.event.category,
              isValid: true,
            },
            province: {
              value: responseData.event.province,
              isValid: true,
            },
            address: {
              value: responseData.event.address,
              isValid: true,
            },
            date: {
              value: responseData.event.date,
              isValid: true,
            },
            startTime: {
              value: responseData.event.startTime,
              isValid: true,
            },
            endTime: {
              value: responseData.event.endTime,
              isValid: true,
            },
            price: {
              value: responseData.event.price,
              isValid: true,
            },
          },
          true
        );
      } catch (error) {}
    };
    fetchevent();
  }, [sendRequest, eventId, setFormData]);

  // this handler is used to send the patch request of the uodated form
  const eventUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`,
        "PATCH",
        JSON.stringify({
          title: formState.input.title.value,
          description: formState.input.description.value,
          organizer: formState.input.organizer.value,
          category: formState.input.category.value,
          province: formState.input.province.value,
          address: formState.input.address.value,
          date: formState.input.date.value,
          startTime: formState.input.startTime.value,
          endTime: formState.input.endTime.value,
          price: formState.input.price.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      navigate(`/event/details/${eventId}`); //redirect to the edited event details page
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!Loadedevent && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find event!</h2>
        </Card>
      </div>
    );
  }
  console.log(Loadedevent.category);
  return (
    <Fragment>
      <HeroHeader text={"Update Event"} />
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && Loadedevent && (
        <form className="event-form" onSubmit={eventUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={InputHandler}
            initialValue={Loadedevent.title}
            initialValid={true}
          ></Input>
          <Input
            id="description"
            element="textarea"
            type="text"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min 5 characters)"
            onInput={InputHandler}
            initialValue={Loadedevent.description}
            initialValid={true}
          ></Input>
          <Input
            id="organizer"
            element="input"
            type="text"
            label="Organized by"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid organizer."
            initialValue={Loadedevent.organizer}
            onInput={InputHandler}
          />
          <Input
            id="category"
            element="select"
            options={EventOptions}
            initialValue={Loadedevent.category}
            label="Event Category"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid Province. "
            onInput={InputHandler}
          />
          <Input
            id="province"
            element="select"
            options={ProvinceOptions}
            initialValue={Loadedevent.province}
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
            validators={[VALIDATOR_MINLENGTH()]}
            errorText="Please enter a valid address"
            onInput={InputHandler}
            initialValue={Loadedevent.address}
            initialValid={true}
          ></Input>
          <Input
            id="date"
            element="input"
            type="date"
            label="Date"
            validators={[VALIDATOR_MINLENGTH()]}
            errorText="Please enter a valid date"
            onInput={InputHandler}
            initialValue={Loadedevent.date}
            initialValid={true}
          ></Input>
          <Input
            id="startTime"
            element="input"
            type="time"
            label="Start Time"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid Start Time."
            onInput={InputHandler}
            initialValue={Loadedevent.startTime}
            initialValid={true}
          />
          <Input
            id="endTime"
            element="input"
            type="time"
            label="End Time"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid End Time."
            onInput={InputHandler}
            initialValue={Loadedevent.endTime}
            initialValid={true}
          />
          <Input
            id="price"
            element="input"
            type="text"
            label="Price"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid price"
            onInput={InputHandler}
            initialValue={Loadedevent.price}
            initialValid={true}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            Update Event
          </Button>
        </form>
      )}
    </Fragment>
  );
};

export default UpdateEvent;
