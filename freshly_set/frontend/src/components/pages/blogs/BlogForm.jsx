// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
const BlogForm = ({ onBlogCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const apiUrl = config.API_URL;

  useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]');
    if (token) {
      setCsrfToken(token.getAttribute('content'));
    }
    return csrfToken;
},[])


const csrfToken = getCSRFToken();

        axios.post(`${apiUrl}freshlyapp/blogs/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken
            }
        })
        .then(response => {
            navigate('/');
        })
        .catch(error => {
            console.error('There was an error creating the blog!', error);
        });
    };

//     return (
//         <div>
//             <h1>Create Blog</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={e => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Content</label>
//                     <textarea
//                         value={content}
//                         onChange={e => setContent(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Image</label>
//                     <input
//                         type="file"
//                         onChange={e => setImage(e.target.files[0])}
//                     />
//                 </div>
//                 <button type="submit">Create</button>
//             </form>
//         </div>
//     );
// }

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`${apiUrl}freshlyapp/create/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': csrfToken  // Include the CSRF token in the headers
        },
        withCredentials: true  // Include credentials in the request
      });

      // Call the callback function to update the blogs list
      onBlogCreated(response.data);

      // Reset the form
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('There was an error creating the blog!', error);
    }
  };

function BlogForm() {
  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default BlogForm