import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CardActions,
  Box,
} from "@mui/material";
import { LocationOn, Event, Category, Room } from "@mui/icons-material";
import MyButton from "../../../../../shared/Button/button.components";
import Modal from "../../../../../shared/Modal/modal.components";
import Map from "../../../../../shared/Map/map.components";

import { styles } from "./dashboard-boughtEvents-item.styles";

const DashboardBoughtEventsItem = ({ event }) => {
  const { date, image, title, location, address, category, price, quantity } =
    event;

  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <Fragment>
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

      <Grid item xs={12} sm={12} md={6} mt={3}>
        <Card sx={styles.card}>
          <Link
            style={{ textDecoration: "none", display: "flex" }}
            to={`/event/details/${event.eventId}`}
          >
            <CardMedia
              component="img"
              height="200"
              image={image.url}
              alt={title}
              sx={styles.cardMedia}
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
                {address}
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
                sx={styles.date}
              >
                <Category sx={styles.category} />
                {category}
              </Typography>

              <Box sx={styles.quantityContainer}>
                <Box sx={styles.div}>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={styles.quantityLabel}
                  >
                    Qty:
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={styles.quantityText}
                  >
                    {quantity}
                  </Typography>
                </Box>
                <Box sx={styles.priceContainer}>
                  <Button sx={styles.buttonDisabled}>${price}</Button>
                </Box>
              </Box>
            </CardContent>
          </Link>
          <CardActions sx={styles.cardActions}>
            <Button
              startIcon={<LocationOn />}
              onClick={openMapHandler}
              rel="noopener noreferrer"
              sx={styles.buttonOne}
            >
              View on Map
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default DashboardBoughtEventsItem;
