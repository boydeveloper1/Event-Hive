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

const BlogPost = () => {
  const navigate = useNavigate();
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
          <Container sx={{ marginBottom: "5%" }}>
            <Paper
              elevation={3}
              sx={{
                padding: "24px",
                marginTop: "24px",
              }}
            >
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    marginRight: "8px",
                  }}
                >
                  {post.creator.charAt(0)}
                </Avatar>
                <Typography variant="body2" color="textSecondary">
                  {post.creator}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginLeft: "8px" }}
                >
                  {post.date}
                </Typography>
              </Box>
              <Divider sx={{ marginBottom: "16px" }} />
              <CardMedia
                component="img"
                alt="Blog Post"
                image={post.image}
                sx={{ maxWidth: "100%", marginBottom: "16px" }}
              />
              <Typography variant="body1" sx={{ marginTop: "16px" }}>
                {post.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton>
                    <Favorite color="primary" />
                  </IconButton>
                  <Typography variant="body2">123 Likes</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
