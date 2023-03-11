import {useEffect, useState} from "react";

function App() {
  const [lists, setLists] = useState(['Арген', 'Максат', 'Жанылай'])
  return (
    <div className="App">
      <ul>
        {
          lists.map((i, k) => <li key={k}>{i}</li>)
        }
      </ul>
    </div>
  );
}

export default App;