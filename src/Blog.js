import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = ({ blog}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };


  return (
    <div className="blog">
      <h3 onClick={toggleExpand}>{blog.title}</h3>
      {expanded && (
        <p>
          {blog.content}
          <br />
          by 
        </p>
      )}
    </div>
  );
};

export default Blog;


//   useEffect(() => {
//     // Make a GET request to fetch blog data from the API
//     fetch(`http://localhost:3000/blogs/${blog.id}`)
//       .then((response) => {
//         setBlogData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching blog data:', error);
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           console.error('Status:', error.response.status);
//           console.error('Data:', error.response.data);
//         } else if (error.request) {
//           // The request was made but no response was received
//           console.error('Request:', error.request);
//         } else {
//           // Something happened in setting up the request that triggered an error
//           console.error('Error:', error.message);
//         }
//       });
//   }, [blog.id]);