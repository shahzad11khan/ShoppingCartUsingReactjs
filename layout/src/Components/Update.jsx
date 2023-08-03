import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import pic from '../images/crud.png'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Update = () => {
  const navi = useNavigate();
  const {id}=useParams();
  const Inputs = {
    name: '',
    email: '',
    password: ''
  }

  const [values, setVelues] = useState(Inputs);
  const [file, setfile] = useState();
  const handler = (e) => {
    e.preventDefault();
      console.log(values);
      console.log(file)
      const formdata = new FormData();
      formdata.append('image', file);
      formdata.append('name', values.name);
      formdata.append('email', values.email);
      formdata.append('password', values.password);

      axios.put('http://localhost:8081/update/'+id, formdata)
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

  return (
    <div>
      <div className="card" style={{ borderRadius: '10px', border: 'solid green 2px', backgroundColor: 'gray', width: '40%', margin: 'auto', marginTop: '10px' }}>
        {
          <div>
            {/* <div><h5>Name:    {namee}</h5></div>
            <div><h5>Email:    {emaill}</h5></div>
            <div><h5>Password:  {passwordd}</h5></div>
            <div><h5>file name:  {file}</h5></div> */}


          </div>

        }
        <div className="card-body">
          <div>
            <img src alt="" style={{ width: '50%', height: '200px' }} roundedCircle />
          </div>
          <h3 className="card-title">User Record Update</h3>
          <div className="card-text">
            <form >
              <div class="form-floating mb-3">
                <input type="text" class="form-control"  name='name' placeholder="name@example.com" onChange={e => setVelues({ ...values, name: e.target.value })} />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control"  placeholder="email@example.com" onChange={e => setVelues({ ...values, email: e.target.value })} />
                <label for="floatingInput">Email Address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control"  placeholder="password@example.com" onChange={e => setVelues({ ...values, password: e.target.value })} />
                <label for="floatingInput">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="file" class="form-control"  placeholder="password@example.com" onChange={e => setfile(e.target.files[0])} />
                <label for="floatingInput">File</label>
              </div>
              <div>

              </div>
              <Button variant="primary" onClick={handler} >Update User Record</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
