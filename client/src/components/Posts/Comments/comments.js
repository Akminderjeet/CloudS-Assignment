import React, { useState ,useEffect} from 'react';
import './styles.css'
import { updatePost } from '../../../api';
const Comments = ({comments,setComments,newComment,setNewComment,post}) => {
    const [isCommentAdded, setIsCommentAdded] = useState(false); 
    //updatePost(currentId, postData)

  const handleAddComment =async  () => {
    if (newComment.trim()) {
      await setComments([...comments, newComment]);
      setNewComment('');
      setIsCommentAdded(true);
    }

  };

  useEffect(() => {
    if (isCommentAdded) {
        setIsCommentAdded(false);
        post.selectedComment=comments;
        updatePost(post._id, post)
      // Update your database here
      
    }
  }, [comments, isCommentAdded]);

  return (
    <div style={{background:"rgb(216,211,211)"}}>
      <h4>Comments</h4>
      <div style={{background:"rgb(216,211,211)",display:"flex",alignItems:'center',justifyContent:'space-evenly',flexDirection:'column'}}>
        <textarea 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <div style={{margin:'10px'}}>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
