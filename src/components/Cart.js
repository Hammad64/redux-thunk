import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addQuantity, removeQuantity,allItemsRemoved } from "../redux";
import Modal from "react-bootstrap/Modal";

export default function Cart() {
  const { counter, items, total } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row mx-5 justify-content-end">
          <div className="col-auto">
            <Button color="inherit" onClick={handleShow}>
              {counter}
              <ShoppingCartIcon />
            </Button>

            <Modal show={show} onHide={handleClose} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
              </Modal.Header>

              { total !==0?
              (
                <>
                <Modal.Body style={{ maxHeight: "30rem", overflow: "scroll" }}>
                {items?.map((item, index) => (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.images[0]}
                      height="200px"
                    />
                    <Card.Body>
                      <Card.Title>{item.category}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text>Price: {item.price}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="primary"
                          disabled={item.quantity==0}
                          onClick={() => dispatch(removeQuantity(item))}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="primary"
                          onClick={() => dispatch(addQuantity(item))}
                        >
                          +
                        </Button>
                        <span>{item.price*item.quantity}</span>
                        <Button
                          variant="primary"
                          className="mx-2"
                          onClick={() => dispatch(removeItem(item))}
                        >
                          Remove Item
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" 
              // onClick={handleClose}
              
              >
                Total Price: <span>{total}</span>
              </Button>
              <Button variant="primary" 
               onClick={()=>dispatch(allItemsRemoved())}
              >
                All Items Removed
              </Button>
            </Modal.Footer>
            </>
              ):(
                <Modal.Body >
                  <Card>
                    <Card.Body>
                      <Card.Text className="text-center"> EMPTY CART</Card.Text>
                    </Card.Body>
                  </Card>
              </Modal.Body>
             
              )
              }
              
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
