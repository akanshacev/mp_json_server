// import json-sever package
const JSONserver = require('json-server')


// create server using create() method from json-server
const MPserver=JSONserver.create()


// Generating path/route to server resource
const router=JSONserver.router('db.json')


// initiating json-server middleware
const middleware=JSONserver.defaults()


// creating PORT number for server
const PORT=3000 | process.env.PORT


// Implimenting route to resoures to server
MPserver.use(middleware)


// Implimenting middleware to serer
MPserver.use(router)



// run comand for server
MPserver.listen(PORT,()=>{
    console.log(`server is runing at:${PORT}`);
})