import emailjs from "emailjs-com";
import {db, storage } from "../_utils/firebase";
import { doc, updateDoc, increment, arrayUnion, collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const COLLECTION = "art";

// This function sends an email using EmailJS service with the provided name, email, and message.
export const sendContactEmail = async ({ name, email, message }) => {
  try {
    const result = await emailjs.send(SERVICE_ID,TEMPLATE_ID,{ name, email, message },PUBLIC_KEY);
    return { success: true, result };
  } catch (error) {
    console.error("Error:", error);
  }
};

// This function fetches posts from the Firestore database, orders them by likes in descending order, and returns an array of posts with their IDs and data.
// Ideally we could have some buttons to filter the posts by likes, comments, etc. but for now we will just fetch all posts and order them by likes
export const fetchPosts = async () => {
  const queryCollection = query(collection(db, COLLECTION), orderBy("likes", "desc"));
  const snapshot = await getDocs(queryCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// This function uploads an image to Firebase Storage, retrieves its download URL, and creates a new post in the Firestore database with the provided title, description, and image URL.
export const uploadPost = async (image, title, description) => {
  const storageRef = ref(storage, `images/${image.name}`);
  const snapshot = await uploadBytes(storageRef, image);
  const downloadURL = await getDownloadURL(snapshot.ref);

  const newPost = {
    title: title || "Unnamed",
    description: description || "No description provided.",
    image: downloadURL,
    createdAt: Timestamp.now(),
    likes: 0,
    comments: [],
  }

  try {
    const docRef = await addDoc(collection(db, COLLECTION), newPost);
    return { success: true, post: {id: docRef.id, ...newPost } };
  } catch (error) {
    console.error("Error uploading post:", error);
  }
}
// This function updates the likes count of a post in the Firestore database by incrementing it by 1.
export const likePost = async (postId) => {
  const postRef = doc(db, COLLECTION, postId);
  await updateDoc(postRef, {likes: increment(1),});
  return { success: true };
};
// This function adds a comment to a post in the Firestore database by updating the comments array of the post document.
export const commentOnPost = async (postId, comment) => {
  const postRef = doc(db, COLLECTION, postId);
  await updateDoc(postRef, {
    comments: arrayUnion(comment),
  });
  return { success: true, comment };
}

