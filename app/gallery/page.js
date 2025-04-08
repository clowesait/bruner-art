"use client";
import { useEffect, useState } from "react";
import GalleryItem from "./galleryItem";
import NewPostForm from "./newPostForm";
import { fetchPosts, uploadPost } from "../_services/bruner_art_services";
import { useUserAuth } from "../_utils/auth-context";

export default function Gallery() {
  const [posts, setPosts] = useState([]);
  const { user } = useUserAuth();

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    }
    loadPosts();
  }, [])


const handleNewPost = async (data) => {
  const result = await uploadPost(data.imageFile, data.title, data.description);
  if (result.success) {
    setPosts(prev => [result.post, ...prev]);
  }
};
// This function handles the update of likes for a post
// It updates the posts state by mapping through the previous posts and incrementing the likes count for the respective post
const handleLikeUpdate = (postId) => {
  setPosts((prevPosts) =>
    prevPosts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post))
  );
}
// This function handles the addition of a new comment to a post
// It updates the posts state by mapping through the previous posts and adding the new comment to the respective post's comments array
const handleCommentAdded = (postId, comment) => {
  setPosts((prevPosts) =>
    prevPosts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post))
  );
}

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      {user && <NewPostForm onSubmit={handleNewPost} />}
      <div className="space-y-10">
        {posts.map((post) => (
          <GalleryItem key={post.id} post={post} onLike={handleLikeUpdate} onCommentAdded={handleCommentAdded} />
        ))}
      </div>
    </div>
  );
}
