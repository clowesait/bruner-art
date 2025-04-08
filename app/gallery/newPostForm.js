import { useState } from "react";

export default function NewPostForm({ onSubmit }) {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // on change event for the file input
  // this will set the image file to the state when a file is selected
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }
    await onSubmit({ imageFile, title, description });
    
    // Reset the form fields after submission
    setImageFile(null);
    setTitle("");
    setDescription("");
  };

  return (
    // This is the form for creating a new post
    <form onSubmit={handleSubmit} className="mb-8 border bg-amber-200 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>

      {/* This is the file input for uploading an image will probably change this to a button later cause it looks stupid*/}
      <div className="mb-4">
        <label className="">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-fit bg-blue-500 text-white font-bold px-4 py-2"
        />
      </div>
      {/* This is the title input for the post */}
      {/* The title is optional, but if not provided, it will default to "Unnamed" */}
      <div className="mb-2">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter title"
          className="w-full border p-2 rounded"
        />
      </div>
      {/* This is the description input for the post */}
      {/* The description is optional, but if not provided, it will default to "No description provided." */}
      <div className="mb-2">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter description"
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-amber-400 hover:bg-amber-600 font-bold"
      >
        Post
      </button>
    </form>
  );
}
