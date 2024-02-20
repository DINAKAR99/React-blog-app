import React, { useEffect, useState } from "react";

import { Container } from "reactstrap";

// import Post from "../../components/Post";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Base from "./base";
import { getCurrentUserDetail } from "../auth";
import Post from "./Post";
import Pages from "../pages/user-modules/Pages";
import { loadPostUserWise } from "../services/post-services";

const AllPosts = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const lastPostIndex = postsPerPage * currentPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = posts.slice(FirstPostIndex, lastPostIndex);

  useEffect(() => {
    console.log(getCurrentUserDetail());
    setUser(getCurrentUserDetail());
    loadPostData();
  }, []);

  function loadPostData() {
    // loadPostUserWiseByname(getCurrentUserDetail().name, 1)
    loadPostUserWise(getCurrentUserDetail().id)
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading user posts");
      });
  }

  return (
    <Container>
      <h1 className="my-3">Posts Count : ({posts.length})</h1>
      {currentPosts.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
      <Pages
        TotalPages={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};
export default AllPosts;
