const express = require("express")
const cors = require("cors")
const app = express();

//configuracion
app.set("port", process.env.PORT || 4000);


//middlewires
app.use(cors())
app.use(express.json())


//rutas

app.get("/", (req, res)=>{
     res.send("Bienvenido a mi api rest full")
})


//ruta para nuestra api de usuarios
app.use("/api/usuarios", require("./routes/usuario"))
app.use("/api/productos", require("./routes/producto"))
app.use("/api/modulos", require("./routes/modulo"))
app.use("/api/cajas", require("./routes/caja"))
app.use("/api/proveedores", require("./routes/proveedor"))
app.use("/api/devoluciones", require("./routes/devolucion"))

module.exports = app;