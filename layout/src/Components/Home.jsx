import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from '../images/crud.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navi = useNavigate();
  const Inputs = {
    name: '',
    email: '',
    password: ''
  }

  const [values, setVelues] = useState(Inputs);
  const [file, setfile] = useState();
  const handler = (e) => {
    e.preventDefault();
    if (values.name === "" || values.email === "" || values.password === "") {
      // console.log("fill all the feilds...")
      alert('Fill All The Feilds...')
    } else {
      console.log(values);
      const formdata = new FormData();
      formdata.append('image', file);
      formdata.append('name', values.name);
      formdata.append('email', values.email);
      formdata.append('password', values.password);

      axios.post('http://localhost:8081/api/insert', formdata)
        .then(res => {
          if (res.data.Status === "Success") {
           toast.success("Your Data Send Successfully...")
            console.log("data submited")
            setTimeout(() => navi('/read'), 400);
          } else {
            console.log("data isnt submited")
          }}
        )
        .catch(err => console.log("Error"))
    }


  }
 
  return (
    <div>
      <div className="card" style={{ borderRadius: '10px', border: 'solid green 2px', backgroundColor: 'gray', width: '40%', margin: 'auto', marginTop: '10px' }}>

        <div className="card-body">
          <div>
            <img src={pic} alt="" style={{ width: '50%', height: '200px' }} roundedCircle />
          </div>
          <h3 className="card-title">User Register</h3>
          <div className="card-text">
            <form enctype="multipart/form-data">
              <div class="form-floating mb-3">
                <input type="text" onChange={e => setVelues({ ...values, name: e.target.value })} class="form-control" name='name' placeholder="name@example.com" />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" onChange={e => setVelues({ ...values, email: e.target.value })} class="form-control" name='email' placeholder="email@example.com" />
                <label for="floatingInput">Email Address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" onChange={e => setVelues({ ...values, password: e.target.value })} class="form-control" name='password' placeholder="password@example.com" />
                <label for="floatingInput">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="file" class="form-control" name='image' placeholder="image@example.com" onChange={e => setfile(e.target.files[0])} />
                <label for="floatingInput">File</label>
              </div>
              <Button variant="primary" onClick={handler}>Insert Std Record</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
