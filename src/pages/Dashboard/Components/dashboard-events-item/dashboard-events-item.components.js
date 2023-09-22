import React, { Fragment, useState, useContext } from "react";

import { Link } from "react-router-dom";

import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CardActions,
} from "@mui/material";

import {
  LocationOn,
  Room,
  Event,
  Category,
  Delete,
  ModeEditOutline,
  ShoppingBag,
} from "@mui/icons-material";

import MyButton from "../../../../shared/Button/button.components";
import Modal from "../../../../shared/Modal/modal.components";
import Map from ".././../../../shared/Map/map.components";
import ErrorModal from "../../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../../../shared/hooks/http-hook";
import { AuthContext } from "../../../../shared/context/auth-context";
import { CartContext } from "../../../../shared/context/cart-context";

import { styles } from "./dashboard-events-item.styles";

const DashboardEventsItem = ({ event, onDelete }) => {
  const {
    id,
    province,
    date,
    image,
    title,
    location,
    organizer,
    address,
    category,
    price,
    creator,
  } = event;

  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { isLoading, error, clearError, sendRequest } = useHttpClient();

  const auth = useContext(AuthContext);
  const cart = useContext(CartContext);

  //onClick function to add to cart
  const forwardItemsToCart = () => cart.addItemToCart(event);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  // to show modal before deleting
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  //  to unshow modal before deleting
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

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
        footer={<MyButton onClick={closeMapHandler}>Close</MyButton>}
      >
        <div style={{ height: "15rem", width: "100%" }}>
          <Map center={location} zoom={13} />
        </div>
      </Modal>
      <Modal
        header="Are you sure you want to delete this event?"
        footerClass="place-item__modal-actions"
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        footer={
          <Fragment>
            <MyButton inverse onClick={cancelDeleteHandler}>
              CANCEL
            </MyButton>
            <MyButton danger onClick={confirmDeleteHandler}>
              DELETE
            </MyButton>
          </Fragment>
        }
      ></Modal>

      <Grid item key={id} xs={12} sm={12} md={6}>
        <Card sx={styles.card}>
          {isLoading && <LoadingSpinner />}
          <Link
            style={{ textDecoration: "none", display: "flex" }}
            to={`/event/details/${event.id}`}
          >
            <CardMedia
              component="img"
              height="200"
              image={image.url}
              alt={title}
              sx={{
                width: "40%",
                height: "auto",
                objectFit: "cover",
                textAlign: "left",
              }}
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                sx={styles.title}
              >
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Room sx={styles.room} />
                {address}, {province}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={styles.date}
              >
                <Event sx={styles.event} />
                {date}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={styles.date} // Use the same styling as date
              >
                <Category sx={styles.category} />
                {category} {/* Display the category */}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={styles.organizedBy}
              >
                Organized By:
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography component="span" sx={styles.organizer}>
                  {organizer}
                </Typography>
                <Button sx={styles.buttonDisabled}>${price}</Button>
              </div>
            </CardContent>
          </Link>
          <CardActions sx={styles.cardActions}>
            <Button
              sx={styles.buttonOne}
              startIcon={<LocationOn />}
              onClick={openMapHandler}
              rel="noopener noreferrer"
            >
              View on Map
            </Button>
            <Button
              sx={styles.buttonTwo}
              startIcon={<ShoppingBag />}
              color="primary"
              onClick={forwardItemsToCart}
            >
              ADD TO CART
            </Button>
          </CardActions>
          <Box sx={styles.box}>
            {auth.userId === creator && (
              <Button
                sx={styles.buttonThree}
                startIcon={<ModeEditOutline />}
                href={`/event/${id}`}
                rel="noopener noreferrer"
              >
                Edit
              </Button>
            )}
            {auth.userId === creator && (
              <Button
                sx={styles.buttonFour}
                startIcon={<Delete />}
                color="primary"
                onClick={showDeleteWarningHandler}
              >
                Delete
              </Button>
            )}
          </Box>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default DashboardEventsItem;
