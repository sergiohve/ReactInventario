import axios from "axios";
import { useEffect, useState } from "react";

import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";




const Alerts = () => {
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
          <CardTitle tag="h5">Lista de empleados</CardTitle>
        

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
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
                        src="data:image/jpeg;base64,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"
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

export default Alerts;