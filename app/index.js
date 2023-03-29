import app from "./app.js"
app.listen(app.get("port"), ()=>{
    console.log(`Se a conectado a ${app.get("port")} http://localhost:${app.get("port")}`);
})

