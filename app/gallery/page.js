"use client";
import { useState } from "react";
import GalleryItem from "./galleryItem";
import NewPostForm from "./newPostForm";

export default function Gallery() {
  // Placeholder data for posts, when we implement the firestore db I will change this
  const [posts, setPosts] = useState([
    {
      id: "1",
      image: "../assets/home_page.jpg",
      title: "placeholder title",
      description: "placeholder description",
      likes: 0,
      comments: [],
    },
  ]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <NewPostForm onSubmit={handleNewPost} />
      <div className="space-y-10">
        {posts.map((post) => (
          <GalleryItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
