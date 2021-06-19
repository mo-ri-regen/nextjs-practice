import React from "react";
import { useState, useCallback, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function JsonServer() {
  const [posts, setPosts] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3004/posts");
      const json = await res.json();
      setPosts(json);
    } catch {
      alert("error");
    }
  }, []);
  const handleClick = () => {
    fetchData();
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleClick}
      >
        getdata
      </Button>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}
