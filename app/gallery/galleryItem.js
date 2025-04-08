import Comments from "./comments";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { likePost, commentOnPost } from "../_services/bruner_art_services";

export default function GalleryItem({ post, onLike, onCommentAdded }) {
  const { user } = useUserAuth();
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  // This function handles the like button click event
  // It checks if the user is logged in and if they have already liked the post
  // If not, it calls the likePost function from bruner_art_services.js to update the like count
  const handleLike = async () => {
    if (!user) {
      alert("You must be logged in to like a post.");
      return;
    }
    if (isLiked) {
      alert("You have already liked this post.");
      return;
    }
    // What actually adds the post to the database
    const result = await likePost(post.id);
    if (result.success) {
      setIsLiked(true);
      //Updates post like count on the page
      onLike(post.id);
    }
  }
  // This function handles the comment submission event
  // It checks if the user is logged in and if the comment is not empty
  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const newComment = {
      id: Date.now().toString(),
      text: comment,
      user: user.displayName || user.email
    }
    //What actually writes the comment to the data base using the post id and the comment
    const result = await commentOnPost(post.id, newComment);
    if (result.success) {
      onCommentAdded(post.id, newComment);
      setComment("");
    }
  }
  // renders the gallery item with the image, title, description, likes, and comments
  // It also includes a form for adding comments if the user is logged in
  return (
    <div className="border border-green-900 p-4 rounded">
      <img src={post.image} alt={post.title} className="w-full h-auto mb-2" />
      <h2 className="flex justify-center text-xl font-bold">{post.title}</h2>
      <p className="flex justify-center mb-2">{post.description}</p>
      <div className="mb-2">
        {post.likes} Likes
        <button onClick={handleLike} className="bg-green-600 hover:bg-green-400 rounded m-2 p-2">👍</button>
      </div>
{/*Only shows the comment form if user is logged in. Calls handleCommentSubmit . On change sets comment*/}
      <Comments comments={post.comments} />
      { user && (
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border border-green-900 rounded p-2 w-full mb-2"
          />
          <button type="submit" className="bg-amber-400 hover:bg-amber-600 px-4 py-2 rounded">Comment</button>
        </form>
      )}
    </div>
  );
}
