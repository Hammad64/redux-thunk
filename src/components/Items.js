import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";
import { buyItem } from "../redux";

export default function Items() {
  const { loading, data, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log("data", data);
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center gap-5">
        {data?.map((item, index) => (
          <>
            <Card style={{ width: "18rem", justifyContent: "space-between" }}>
              <Card.Img variant="top" src={item.images[0]} height="200px" />
              <Card.Body>
                    <Card.Title>{item.category}</Card.Title>
                    <div style={{height:"120px"}}>
                    <Card.Text>{item.description}</Card.Text>
                    </div>
                    <Card.Title>Price: {item.price}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => dispatch(buyItem(item))}
                    >
                      ADD TO CART
                    </Button>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
