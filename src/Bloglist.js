const Bloglist = ({ blog, title, handleDelete }) => {
  return (
    <div className='blog-list'>
      <h2> {title} </h2>
      {blog.map((blog) => (
        <div
          className='blog-prview'
          key={blog.id}
        >
          <h2> {blog.title}</h2>
          <p>avtor {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}> წაშლა </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
