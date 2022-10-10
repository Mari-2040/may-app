const Add = () => {
  return (
    <div className='wrapper'>
      <button
        className='Alert'
        id='myBtn'
      >
        open
      </button>

      <div
        className='modal'
        id='myModal'
      >
        <div className='modal-content'>
          <span className='close'>&times;</span>
          <h2>Alert</h2>
        </div>
      </div>
    </div>
  );
};

export default Add;
