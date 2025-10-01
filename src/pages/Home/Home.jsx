import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description.substring(0, 100) + "...",
          image: item.image,
        }));
        setPosts(formatted);
      });
  }, []);

  return (
    <div className={styles.home}>
      <h1>Latest Pickify Collections</h1>
      <div className={styles.cardContainer}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
