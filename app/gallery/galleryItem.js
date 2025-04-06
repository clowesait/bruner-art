import Comments from "./comments";

export default function GalleryItem({ post }) {
  return (
    <div className="border border-amber-600 p-4 rounded shadow-sm">
      <img src={post.image} alt={post.title} className="w-full h-auto mb-2" />
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mb-2">{post.description}</p>
      <div className="text-gray-600 mb-2">
        {post.likes} Likes
      </div>

      <Comments comments={post.comments} />
    </div>
  );
}
