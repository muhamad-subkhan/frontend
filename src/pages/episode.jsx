import React, { useState } from "react";
import "./add-epidose.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdAttach } from "react-icons/io";

// function MydModalWithGrid(props) {
//   return (
//     <Modal {...props}>
//       <Modal.Body>
//           <Row>
//             <Col xs={12} md={8}>
//                 <Form.Control placeholder="Title Episode" style={{ background: "#343434" }} />
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//           </Row>

//           <Row>
//             <Col xs={12} md={1}>
//               .col-xs-6 .col-md-4
//             </Col>
//           </Row>

//           <>
//             <Button onClick={props.onHide}>Close</Button>
//           </>

//       </Modal.Body>
//     </Modal>
//   );
// }

function ModalAdd(props) {
  console.log("ini datanya", props);
  return (
    <Modal
    
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ background: "#343434", borderRadius: "5px" }}>
        <form>
          <Row className="mb-3">
            <Col xs={12} sm={9}>
              <Form.Control
                placeholder="Title Episode"
                style={{ background: "#343434" }}
              />
            </Col>
            <Col xs={6} sm={3}>
              <>
                <label
                  htmlFor="thumbnail"
                  className="px-2 pt-2 pb-1 attachFile"
                  style={{ background: "#343434", border: "1px solid white" }}
                >
                  Attach Thumbnail
                  <IoMdAttach style={{ color: "red", fontSize: "22px" }} />
                </label>
                <input id="thumbnail" type="file" hidden></input>
              </>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12}>
              <Form.Control
                placeholder="link Film"
                style={{ background: "#343434" }}
                className="mb-3"
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              style={{
                border: "none",
                background: "red",
                border: "1px solid red",
                padding: " 5px 75px",
              }}
            >
              Add
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

function Episode(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        style={{ background: "red", border: "1px solid red" }}
        onClick={() => setModalShow(true)}
      >
        Tambah episode
      </Button>

      <ModalAdd show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Episode;
