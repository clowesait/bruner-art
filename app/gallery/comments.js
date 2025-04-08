export default function Comments({ comments }) {
  
  if (comments.length === 0) {
    return (<p className="text-gray-500 italic">Be the first to comment!</p> );
  }
  else {
    return (       
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}><em className="pr-1.5 text-amber-600">{comment.user}:</em>{comment.text}</li>
      ))}
    </ul>
  );}
}
  