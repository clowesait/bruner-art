import Comments from "./comments";

export default function GalleryItem({ post }) {
  return (
    <div className="border border-green-900 p-4 rounded shadow-lg">
      <img src={post.image} alt={post.title} className="w-full h-auto mb-2" />
      <h2 className="flex justify-center text-xl font-bold">{post.title}</h2>
      <p className="flex justify-center mb-2">{post.description}</p>
      <div className="text-gray-600 mb-2">
        {post.likes} Likes
      </div>
      <Comments comments={post.comments} />
    </div>
  );
}
