import logo from "./logo.svg";
import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const secretIdentity = "Captain Janeway";
  return (
    <div className="App">
      <header className="App-header">
        <h2> Welcome to React's World!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is {secretIdentity}'s first React App
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>

        <StudentList />
        <ClassInfo />

        <p>
          <img
            src="https://fandible.com/wp-content/uploads/2016/09/janeway-750x938.jpg"
            width="200"
            height="250"
          ></img>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
