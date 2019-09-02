const express = require('express');
const app = express();

app.get('/api/customers', (req,res) =>{
    
    const customers = [
        {id :1,firname:'Jhone', lastname:'Doe'},
        {id :2,firname:'Jhone', lastname:'Doe'},
        {id :3,firname:'Jhone', lastname:'Doe'}
    ];

})

const port = 5000;

app.listen(port, () => console.log('Server start on port ${port}'));
