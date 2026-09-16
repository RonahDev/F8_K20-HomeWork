import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OrchidCard from "./OrchidCard";
import ListOfOrchids from "../data/ListOfOrchids";

function Orchids() {
  return (
    <Container className="mt-4">
      <Row>
        {ListOfOrchids.map((orchid) => (
          <Col lg={3} md={4} sm={6} xs={12} key={orchid.id} className="mb-4">
            <OrchidCard orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Orchids;