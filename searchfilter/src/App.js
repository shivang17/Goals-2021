import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setData(json));
  
  }, [])
  return (
    <div className="App">
      <input type="text" placeholder = "Search Name" value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)} />
      {data.filter((val) =>{
        if(searchTerm === "") {
          return val;
        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((post,key) =>{
        return (
          <p className = "blog" key = {key}>
            {post.title}
          </p>
        )
      })
      
      }


    </div>
  );
}

export default App;
