import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetail.module.css";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setPost({
          id: data.id,
          title: data.title,
          description: data.description,
          image: data.image,
        })
      );
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className={styles.detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </div>
  );
}

export default PostDetail;
