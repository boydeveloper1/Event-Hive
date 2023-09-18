import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CardActions,
} from "@mui/material";
import {
  LocationOn,
  ShoppingBasket,
  Room,
  Event,
  Person,
  Category, // Import the category icon
} from "@mui/icons-material";

import MyButton from "../../../../../shared/Button/button.components";
import Modal from "../../../../../shared/Modal/modal.components";
import Map from "../../../../../shared/Map/map.components";
import ErrorModal from "../../../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../../../../shared/hooks/http-hook";
import { styles } from "./featured-events-item.styles";

const FeaturedEventsItem = ({ event }) => {
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
  } = event;

  const { isLoading, error, clearError } = useHttpClient();
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

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

      <Grid item key={id} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card sx={styles.card}>
          {isLoading && <LoadingSpinner />}
          <Link
            style={{ textDecoration: "none" }}
            to={`/event/details/${event.id}`}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={image.url}
                alt={title}
              />
              <CardContent sx={styles.cardContent}>
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
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component="span" sx={styles.organizer}>
                    {organizer}
                  </Typography>
                  <Button sx={styles.buttonDisabled}>${price}</Button>
                </div>
              </CardContent>
            </CardActionArea>
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
              startIcon={<ShoppingBasket />}
              color="primary"
            >
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default FeaturedEventsItem;
