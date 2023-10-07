import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Avatar,
  Button,
  Pagination,
} from "@mui/material";

import BookmarkIcon from "@mui/icons-material/Bookmark";

import { blogPosts } from "../blogPosts";
import { styles } from "./blog-list.styles";

const BlogList = () => {
  // Function to truncate the description to a specific length
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="App">
      <Container maxWidth="lg" sx={styles.blogsContainer}>
        <Typography variant="h4" sx={styles.blogTitle}>
          Delve into a Vast Collection of Incredible and Informative Articles
        </Typography>
        <Grid container spacing={5}>
          {/* Mapping through the blogPosts */}
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/blog/blogpost/${post.id}`}
              >
                <Card sx={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      sx={styles.media}
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={styles.cardTitle}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {truncateDescription(post.description, 80)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={styles.cardActions}>
                    <Box sx={styles.author}>
                      <Avatar src={post.avatar} />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {post.creator}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                        >
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      component={Link}
                      to={`/blog/blogpost/${post.id}`}
                      variant="outlined"
                      sx={styles.readMoreButton}
                    >
                      Read More
                    </Button>
                    <Box>
                      <BookmarkIcon />
                    </Box>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default BlogList;
