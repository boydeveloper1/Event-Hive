// Basic react library
import React, { Fragment, useState, useContext } from "react";

// material Ui
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
} from "@mui/icons-material";

// Components Import
import MyButton from "../../../../../shared/Button/button.components";
import Modal from "../../../../../shared/Modal/modal.components";
import Map from "../../../../../shared/Map/map.components";
import ErrorModal from "../../../../../shared/Error-Modal/error-modal.components";
import LoadingSpinner from "../../../../../shared/Loading-Spinner/loading-spinner.components";
import { useHttpClient } from "../../../../../shared/hooks/http-hook";

import { styles } from "./featured-events-item.styles";

const FeaturedEventsItem = ({ event }) => {
  const { id, province, date, url, title, location, organizer, address } =
    event;

  const { isLoading, error, clearError } = useHttpClient();

  // Some states for rendering - map && Errormodal
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
        <div className="map-container">
          <Map center={location} zoom={13} />
        </div>
      </Modal>

      <Grid item key={id} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card sx={styles.card}>
          {isLoading && <LoadingSpinner />}

          <CardActionArea>
            <CardMedia component="img" height="200" image={url} alt={title} />
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
                sx={styles.organizedBy}
              >
                Organized By:
              </Typography>
              <Typography component="span" sx={styles.organizer}>
                {organizer}
              </Typography>
            </CardContent>
          </CardActionArea>
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
