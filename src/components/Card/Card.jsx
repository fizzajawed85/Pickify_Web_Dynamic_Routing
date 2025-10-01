import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ post }) {
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link to={`/post/${post.id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}

export default Card;
