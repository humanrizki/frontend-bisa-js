import axios from 'axios'
import React,{useEffect} from 'react'
function App() {
  useEffect(()=>{
    axios.post('http://bisa_js.test/api/login', {email: 'kareem95@gmail.com',password:'password'}).then((response)=>{
      const token = response.data.authorization.token
      axios.get('http://bisa_js.test/api/courses', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data)
      })
    })
  },[])
  return (
    <div className="ini app">ini app</div>
  );
}

export default App;
