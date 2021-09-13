import './App.css';
import {useEffect, useState} from 'react'
import moment from 'moment';


function App() {
  const [image, setImage] = useState([])
  const [imageName, setImageName] = useState([])
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState("")
  
  const  date = moment().format("DD/MM/YYYY-kk:mm");

  useEffect(()=>{

    const getUsers = async() =>{
      const res = await fetch("http://localhost:8000/");
      const data = await res.json();
      data &&
      console.log("res", res)
      console.log("data", data)
      setUsers(data.data) 
      // setUsers(await res.json()) 
    }
    getUsers()
  },[])



  const getUsername = (e) =>{setUsername(e.target.value)}
  const getImage = (e) =>{
    setImage(e.target.files[0])
    setImageName(e.target.value)
  }

  const uploadImg = () =>{
    const formData = new FormData();
    formData.append(":image", image);
    fetch(`http://localhost:8000/user?name=${username}&date=${date}`,{
      method: "POST",
      body: formData,
    });
    // console.log(imageName)
    setUsers([...users,{name: username}])
  };

  
  return (
    <div>
        <p>Multer</p>
        {users && users.map((user, index) => <li key={index}>{user.name}</li>)}
        <input type="text"  onChange={getUsername}/>
        <input type="file" onChange={getImage}></input>
        <button onClick={uploadImg}>SEND</button>
    </div>
  );
}

export default App;
