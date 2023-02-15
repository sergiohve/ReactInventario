import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

const Breadcrumbs = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-3">
           
            Nombre de producto
          </CardTitle>
          <CardBody className="">
          Descripcion de producto
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Breadcrumbs;
