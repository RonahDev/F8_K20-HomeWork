import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function OrchidCard({ orchid }) {
  return (
    <Card style={{ width: "18rem" }} className="h-100 shadow">
      <Card.Img
        variant="top"
        src={orchid.image}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>

        <Card.Text>
          <strong>ID:</strong> {orchid.id}
          <br />
          <strong>Origin:</strong> {orchid.origin}
          <br />
          <strong>Category:</strong> {orchid.category}
          <br />
          <strong>Color:</strong> {orchid.color}
          <br />
          <strong>Rating:</strong> ⭐ {orchid.rating}
          <br />
          <strong>Likes:</strong> ❤️ {orchid.numberOfLike}
        </Card.Text>

        <div className="mb-3">
          {orchid.isSpecial ? (
            <Badge bg="danger" className="me-2">
              Special
            </Badge>
          ) : (
            <Badge bg="secondary" className="me-2">
              Normal
            </Badge>
          )}

          {orchid.isNatural ? (
            <Badge bg="success">Natural</Badge>
          ) : (
            <Badge bg="warning" text="dark">
              Hybrid
            </Badge>
          )}
        </div>

        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default OrchidCard;