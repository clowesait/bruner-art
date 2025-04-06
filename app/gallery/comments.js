export default function Comments({ comments }) {
  <strong>Comments:</strong>
  if (comments.length === 0) {
    return (<p className="text-gray-500 italic">Be the first to comment!</p> );
  }
  else {
    return (          
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );}
}
  