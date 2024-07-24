//importing json-server library
const jsonServer=require('json-server')
//create Server instance
const MPserver=jsonServer.create()
//routing json resource to server
const router=jsonServer.router('db.json')
//implementing default middleware[middleware:special function that acts between server and client,it converts data into server freindly and client freindly by the basis of flow of the data]:
const middleware=jsonServer.defaults()
//define port number for server(eg:portNo:3000,3001,4000,...)
const PORT=3001||process.env.PORT
//configuring router,middleware,port into server
MPserver.use(middleware)
MPserver.use(router)

MPserver.listen(PORT,()=>{
    console.log(`ToDo server running at:${PORT}`);
})//it is for checking whether the request came or not
//the above arrow function is a callback function which works when the 'listen' method works