import React, { useContext, useEffect, useMemo } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { Input } from "reactstrap";
import debounce from "lodash/debounce";

const PostList = () => {
  const { posts, getAllPosts, searchPosts } = useContext(PostContext);

  const search = (q) => {
    searchPosts(q);
  };

  const handler = useMemo(() => debounce(search, 300), []);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <div className="p-4">
            <Input
              bsSize="lg"
              placeholder="Search Posts..."
              onChange={(e) => handler(e.target.value)}
            />
          </div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
