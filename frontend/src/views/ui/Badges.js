import axios from "axios";
import { useEffect, useState } from "react";

import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";




const Productos = () => {
  const [productos, setProductos] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/api/productos");
    console.log(response.data);
    setProductos(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Lista de productos</CardTitle>
        

          <Table className="no-wrap align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio($)</th>
                
                <th>Cantidad(UNIDADES)</th>
               
              </tr>
            </thead>
            <tbody>
              {productos.map((pro, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={user1}
                        className="rounded-circle"
                        alt={user1}
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{pro.nombre}</h6>
                       
                      </div>
                    </div>
                  </td>
                  <td>{pro.precio}</td>
                  <td>{pro.cantidad}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Productos;
