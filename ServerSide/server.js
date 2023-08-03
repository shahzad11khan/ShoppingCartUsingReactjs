const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const multer=require('multer');
const port=8081;

const app=express();
app.use(express.json());
app.use(express.static('public'))
app.use(cors());
 
//Upload image
var storage = multer.diskStorage({   
  destination: (req, file, cb)=> { 
// destination is used to specify the path of the directory in which the files have to be stored
  cb(null, './public/images');    
}, 
filename:  (req, file, cb) =>{ 
// It is the filename that is given to the saved file.
   cb(null , file.originalname);   
}
});

const upload = multer({ storage: storage,limits : {fileSize : 1000000} })


// Connectio With database
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'mern'
})

// Check the Connection 
con.connect(function (err){
  if(err){
    console.log("Error In Connection Successfully Connected....")
  }else{
    console.log("Connection Successfully Connected....")
  }
});



//Inset Data in Database with image
app.post('/api/insert',upload.single('image'),(req,res)=>{
  const sql="INSERT INTO `crud_table`(`name`, `email`, `password`,`image`) VALUES (?)";
  // const image= req.file.filename;
  // // console.log(req.file)
  const values=[
    req.body.name,
    req.body.email,
    req.body.password,
    req.file.filename
   
  ]
  // console.log("Body: ", req.body);
  //   console.log("File: ", req.file);
  con.query(sql,[values],(err,result)=>{
    // console.log(result)
    if(err){
      // return res.json({Status:"Error"});
      console.log("Data Is`t Transfor...")
  }else{
      return res.json({Status:"Success"});
      // console.log("Data Transfor...")
  }
  })
});

//Get All The Records 
app.get('/api/',(req,res)=>{
  const sql='SELECT * FROM crud_table';
  con.query(sql,(err,result)=>{
    // console.log(result);
    if(err){
      return res.json({Message:"Error Occure In Side Server..."})
    }else{
      return res.json(result)
    }
  })
})


//get Specific user
app.get('/api/getuser/:id',(req,res)=>{
  const sql='SELECT * FROM crud_table where id=?';
  const id =req.params.id;
  con.query(sql,id,(err,result)=>{
    // console.log(result);
    if(err){
      return res.json({Message:"Error Occure In Side Server..."})
    }else{
      return res.json(result)
    }
  })
})


//Upadate Record with image
app.put('/update/:id',upload.single('image'),(req,res)=>{
  const sql="UPDATE crud_table SET `name`=? , `email`=? , `password`=? , `image`=? WHERE id=?";
  const values=[
    req.body.name,
    req.body.email,
    req.body.password,
    req.file.filename
  ]
  const id=req.params.id;
  console.log(values," ",id);
  con.query(sql,[...values,id],(err,result)=>{
    console.log(result)
    if(err){
      // console.log("Error....")
      return res.json(err)
    }else{
      // console.log("Data Updated....")
      return res.json({Status:"Success"});
      // return res.json(result)
    }
  })
})

//Delete Record
app.delete('/api/delete/:id',(req,res)=>{
  const sql="DELETE FROM crud_table WHERE id=? "
  const id=req.params.id;
  con.query(sql,[id],(err,result)=>{
    if(err){
        return res.json("Error")
    }else{
        return res.json(result)
    }
  })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
