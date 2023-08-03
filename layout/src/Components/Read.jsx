import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Read = () => {
  const [dataa, setData] = useState([]);
  const [query,Setquery]=useState('');
  useEffect(() => {
    axios.get('http://localhost:8081/api/')
      .then(res =>
        // console.log(res.data)
        setData(res.data)
      )
      .catch(err => console.log(err));
  }, [])

  const handler = async (id) => {
    try {
      await axios.delete('http://localhost:8081/api/delete/'+id)
      toast.error('Delete Record..');
      setTimeout(() => {
        
        window.location.reload();
      }, 800);
    } catch (err) {
      console.log(err);

    }

  
  }
  var getspil='';
  const search=(e)=>{
     getspil=e.target.value;
    // console.log(getspil);
    Setquery(getspil);
    if(getspil.length > 0 ){
      const searchdata=dataa.filter((item)=>item.name.toLowerCase().includes(getspil));
      setData(searchdata);
    }else{
      const timeout=10;
      setTimeout(() => {
        window.location.reload();
      }, timeout);
    }

  }
  return (
    <div>
      <div>
    <input class="form-control input-sm" id="inputsm" type="text" placeholder='EnterName For Searching' style={{backgroundColor:'white',paddingBottom:'10px',height:'70px',border:'2px solid black',width:'50%',margin:'auto',marginTop:'10px',backgroundColor:'lightgrey'}} onChange={search} value={query}/>

      </div>
      <Table striped bordered hover variant="dark" style={{ marginTop: '10px' }}>
        <thead>
          <tr>
          </tr>
          <tr>
              {/* <th>S.</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          dataa.map((i, index) => {
            return (
              <tbody>
                <tr style={{ padding: '10px' }} >
                  {/* <td>{index}</td> */}
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <td><img src={`http://localhost:8081/images/`+i.image} style={{width:'50px',height:'50px'}} /></td>

                  {/* <td>{i.image ? 'image' : 'null'}</td> */}
                  <td>
                    <Link to={`update/${i.id}`} className='btn btn-primary'>Update Record</Link>
                    <button className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={e => handler(i.id)} >Delete Record</button>
                  </td>
                </tr>
              </tbody>

            );
          })
        }
      </Table>
    </div>
  )
}

export default Read
