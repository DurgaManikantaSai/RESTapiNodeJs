const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.send(`Hello Developers!`);
})

app.listen(9000,() => {return "Server starts..."})

const users = [
    { "username" : "Sundar Pichai", "id" : 1},
    { "username" : "Elon Musk", "id" : 2},
    { "username" : "Jeff Bezos", "id" : 3},
    { "username" : "Bill Gates", "id" : 4},
    ]

app.get('/api/users',(req,res) => {
    res.send(users);
})

app.post('/api/users/post',(req,res) => {
    username = req.body.username;
    if(username){
        res.send({msg:"Success"})
    }
    return res.send({msg:"Error"})
})
app.put("/api/user-update/:id", (req, res) => {
    const input_id = parseInt(req.params.id, 10); // Parse the ID as an integer
    const updatedUsername = req.body.username;
  
    // Find the user with the specified ID in the users array
    const userToUpdate = users.find(user => user.id === input_id);
  
    if (!userToUpdate) {
      return res.status(404).json({ msg: "User not found" });
    }
  
    // Update the username property of the found user
    userToUpdate.username = updatedUsername;
  
    res.json({ msg: "User updated successfully", user: userToUpdate });
  });

  
  app.delete("/api/delete-user/:id", (req,res) => {
    const input_id = users.find(n => n.id === parseInt(req.params.id))
    if(!input_id)
    {
    res.send("ID Invalid!")
    }
    const index = users.indexOf(users)
    users.splice(index,1)
    res.send(input_id)
    })