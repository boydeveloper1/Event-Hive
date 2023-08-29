import React, { Fragment, useState, useContext } from "react";

// Components Import
import Card from "../../../shared/Card/card-components";
import Button from "../../../shared/Button/button.components";
import Modal from "../../../shared/Modal/modal.components";
import Map from "../../../shared/Map/map.components";
import ErrorModal from "../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../shared/Loading-Spinner/loading-spinner.components";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import "./event-item.styles.css";

// Component
const EventItem = ({ event, onDelete }) => {
  const { description, id, address, image, title, location, creator } = event;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  // Some states for rendering - map && modal
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  // to show modal before deleting
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  //  to unshow modal after deleting
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  // umounts modal and also communicates delete request of an event to backend
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/events/${id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      onDelete(id);
    } catch (error) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="event-item__modal-content"
        footerClass="event-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={location} zoom={13} />
        </div>
      </Modal>
      <Modal
        header="Are you sure?"
        footerClass="event-item__modal-actions"
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        footer={
          <Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this event? Please note that it
          can't be undone thereafter
        </p>
      </Modal>
      <li className="event-item">
        <Card className="event-item__content">
          {isLoading && <LoadingSpinner />}
          <div className="event-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="event-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="event-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP!
            </Button>
            {auth.userId === creator && (
              <Button to={`/events/${id}`}>EDIT </Button>
            )}
            {auth.userId === creator && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default EventItem;
