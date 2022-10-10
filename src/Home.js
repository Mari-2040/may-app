import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "My new wevsite", body: "lorem ipsum...", author: "mari", id: 1 },
    {
      title: "Welcome to new wevsite",
      body: "lorem ipsum...",
      author: "mari",
      id: 2,
    },
    { title: "web defaults", body: "lorem ipsum...", author: "mari", id: 3 },
    { title: "web defaults", body: "lorem ipsum...", author: "mari", id: 4 },
  ]);

  const handleDelete = (id) => {
    const newblog = blog.filter((blog) => blog.id !== id);
    setBlog(newblog);
  };

  useEffect(() => {
    console.log("user efect run");
  }, []);

  return (
    <div className='run'>
      <Bloglist
        blog={blog}
        title='All blog!'
        handleDelete={handleDelete}
      />
      {/* <Bloglist blog = {blog.filter((blog) => blog.author === 'mari')} title = " Maris blogi " /> */}
    </div>
  );
};

export default Home;

// style = {{
//     color:"white",
//     backgroundColor:"#1f7a3d",
//     borderRadius: "10px",
//  }}

// const handleClickAgain = (name, e) =>{
//     console.log (" გამარჯობა " + name ,e.target);
//     <button onClick={(e)=> handleClickAgain('მარი', e)}>Click me again</button>
// }

// const [name, setName] = useState ('mar i');
// const [age, setAge] = useState (23);
// const handleClick = (e) =>{
//  setName ("lui");
//  setAge (25)
// }

//   <h2> Home page</h2>
/* <p> {name} is {age} years old</p>
<button onClick={handleClick}>Click me</button> */
