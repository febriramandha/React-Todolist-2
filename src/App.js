// import logo from './logo.svg';
// import './App.css';

import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      {/* Disini kita membuat ToDo lagi */}
      {/* ToDoForm dan ToDoList (ul li) */}

      {/* 2 buah component hari ini */}
      {/* ToDoForm dan ToDoTable */}
      {/* 
        App
          ToDoForm
          ToDoTable
        */}

        <ToDo />

        <footer style={{marginTop:"2em"}}>
          <h3>CopyRight &copy; 2022 by Febri Ramandha</h3>
        </footer>
    </div>
  );
}

export default App;
