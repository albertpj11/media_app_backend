//import json server

const jsonServer=require('json-server')


// create a server application using  json server

const mediaServer = jsonServer.create()

//create a middleware used  by  json server
const middleware = jsonServer.defaults()



// set up route for  db.json

const router = jsonServer.router('db.json')


// applying middlewre to the server
mediaServer.use(middleware)


//applying router to the server

mediaServer.use(router)


//setting the port
const PORT = 3000

//starting the server
mediaServer.listen(PORT,()=>{
    console.log("Media server started....listening on "+PORT);

})

