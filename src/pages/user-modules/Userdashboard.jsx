import React, { useEffect, useState } from "react";
import Base from "../../components/base";
import { Container } from "reactstrap";
import AddPost from "../../components/AddPost";
import NewFeed from "../../components/NewFeed";
import { getCurrentUserDetail } from "../../auth";
import {
  loadPostUserWise,
  loadPostUserWiseByname,
} from "../../services/post-services";
import Post from "../../components/Post";
import { deletePostService } from "../../services/post-services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pages from "./Pages";

const Userdashboard = () => {
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
  //function to delete post
  const deletePost = (post) => {
    //going to delete post
    deletePostService(post.postId)
      .then((res) => {
        console.log(res);
        toast.success("Post is deleted...");
        //loadPostData()
        let newPosts = posts.filter((p) => p.postId != post.postId);
        setPosts([...newPosts]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in deleting post");
      });
  };
  return (
    <Base>
      <Container>
        <AddPost />
        <h1 className="my-3">Posts Count : ({posts.length})</h1>
        {currentPosts.map((post, index) => {
          return <Post post={post} key={index} deletePost={deletePost} />;
        })}
        <Pages
          TotalPages={posts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </Base>
  );
};
export default Userdashboard;
