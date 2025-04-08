/*Primary page for the gallery. Posts are displayed and integrates newpostform and fuction to update
the gallery */
"use client";
import { useEffect, useState } from "react";
import GalleryItem from "./galleryItem";
import NewPostForm from "./newPostForm";
import { fetchPosts, uploadPost } from "../_services/bruner_art_services";
import { useUserAuth } from "../_utils/auth-context";

export default function Gallery() {
  //Original states for posts and user
  const [posts, setPosts] = useState([]);
  const { user } = useUserAuth();

  // This effect fetches posts from the server when the component mounts
  // and sets the posts state with the fetched data
  // It uses the fetchPosts function from bruner_art_services.js which returns a promise
  // that resolves to an array of posts
  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    }
    loadPosts();
  }, [])


  //When a user submits a new post this function is called which uploads the image and data to firebase then updates
  //the previous posts state with the new post so it's displayed
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
//uses a ternary operator to check if post id matches the one passed in and if so adds the comment to the comments array
// Otherwise it returns the post as is
const handleCommentAdded = (postId, comment) => {
  setPosts((prevPosts) =>
    prevPosts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post))
  );
}
  //renders the gallery page
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
