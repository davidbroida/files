import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {


  const { type } = useParams();

  if (type === 'snacks') {

    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Snack Menu
            </CardTitle>
            <CardText>
              Curb you appetite with one of our {snacks.length} delicious bar snacks.
            </CardText>
            <ListGroup>
              {snacks.map(snack => (
                <Link to={`/snacks/${snack.id}`} key={snack.id}>
                  <ListGroupItem>{snack.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </section>
    );
  } else
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Drink Menu
            </CardTitle>
            <CardText>
              Treat yourself to one of our {drinks.length} delicious beverages from the bar!
            </CardText>
            <ListGroup>
              {drinks.map(drink => (
                <Link to={`/drinks/${drink.id}`} key={drink.id}>
                  <ListGroupItem>{drink.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </section>
    );
}

export default FoodMenu;
