import React from "react";
import HeroHeader from "../../shared/hero-header/hero-header.components";
import BlogList from "./Blog-List/blog-list.components";

const Blog = () => {
  return (
    <div>
      <HeroHeader text={"blog."} />
      <BlogList />
    </div>
  );
};

export default Blog;
