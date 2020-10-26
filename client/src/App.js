import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Project Name:</label>
        <input type="text" name="projectName"></input>

        <label>Project Year:</label>
        <input type="text" name="projectYear"></input>

        <label>Project Url:</label>
        <input type="text" name="projectUrl"></input>

        <label>Project Type:</label>
        <input type="text" name="projectType"></input>

        <label>Project Image:</label>
        <input type="text" name="projectImage"></input>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
