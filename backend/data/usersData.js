import bcrpty from 'bcrpty'

const users =[
    {    id:1,
        name :"jitendra",
        email : "jitendra@gmail.com",
        password : bcrpty.hash('12345', 10)
    },
    {    id:2,
        name :"jack",
        email : "jack@gmail.com",
        password : bcrpty.hash('12345',10)
    },
    {    id:3,
        name :"nikhil",
        email : "nikhil@gmail.com",
        password : bcrpty.hash('12345',10)
    },
    {    id:4,
        name :"mayank",
        email : "mayank@gmail.com",
        password : bcrpty.hash('12345',10)
    },
]

export default users