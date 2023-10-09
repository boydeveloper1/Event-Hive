import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../blogPosts";
import HeroHeader from "../../../shared/hero-header/hero-header.components";
import Card from "../../../shared/Card/card-components";

import {
  Container,
  Paper,
  Typography,
  Avatar,
  Divider,
  Box,
  CardMedia,
  IconButton,
} from "@mui/material";

import { Favorite, Share, Bookmark } from "@mui/icons-material";

import { styles } from "./blog-post.styles";

const BlogPost = () => {
  const { blogId } = useParams();
  const post = blogPosts.find((post) => post.id === blogId);

  return (
    <>
      {!post ? (
        <>
          <HeroHeader
            text={"No post To display"}
            src={
              "https://images.unsplash.com/photo-1495423204732-e41dd10e53a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
            }
          />
          <div
            style={{ marginBottom: "5%", marginTop: "-3%" }}
            className="center"
          >
            <Card>
              <h2>Could not find post!</h2>
            </Card>
          </div>
        </>
      ) : (
        <>
          <HeroHeader
            text={post.title}
            src={
              "https://images.unsplash.com/photo-1495423204732-e41dd10e53a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
            }
          />
          <Container sx={styles.container}>
            <Paper elevation={3} sx={styles.paper}>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <Box sx={styles.box1}>
                <Avatar sx={styles.avatar}>{post.creator.charAt(0)}</Avatar>
                <Typography variant="body2" color="textSecondary">
                  {post.creator}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={styles.typography1}
                >
                  {post.date}
                </Typography>
              </Box>
              <Divider sx={styles.divider} />
              <CardMedia
                component="img"
                alt="Blog Post"
                image={post.image}
                sx={styles.cardMedia}
              />
              <Typography variant="body1" sx={styles.typography2}>
                {post.description}
              </Typography>
              <Box sx={styles.box2}>
                <Box sx={styles.box3}>
                  <IconButton>
                    <Favorite color="primary" />
                  </IconButton>
                  <Typography variant="body2">123 Likes</Typography>
                </Box>
                <Box sx={styles.box4}>
                  <IconButton>
                    <Share color="primary" />
                  </IconButton>
                  <IconButton>
                    <Bookmark color="primary" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Container>
        </>
      )}
    </>
  );
};

export default BlogPost;
