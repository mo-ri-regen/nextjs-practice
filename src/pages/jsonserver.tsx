import React from "react";
import { useState, useCallback, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { GetStaticProps } from "next";

export default function JsonServer({ posts }) {
  // const [posts, setPosts] = useState([]);
  // const fetchData = useCallback(async () => {
  //   try {
  //     const res = await fetch("http://localhost:3004/posts");
  //     const json = await res.json();
  //     setPosts(json);
  //   } catch {
  //     alert("error");
  //   }
  // }, []);
  const handleClick = () => {
    // fetchData();
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
        // onClick={handleClick}
      >
        getdata
      </Button>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        );
      })}
    </div>
  );
}
// ビルド時 getstaticprops(SSG)
export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:3004/posts");
    const posts = await res.json();

    return {
      props: { posts },
    };
  } catch {
    alert("error");
  }
};
