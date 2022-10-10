import Navbar from "./Navbar";
import Home from "./Home";
import Add from "./Add";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='components'>
        <Home />
      </div>
      <div className='add'>
        <Add />
      </div>
    </div>
  );
}

export default App;
