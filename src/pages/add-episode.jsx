import React from 'react'
import './add-epidose.css'
import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMdAttach } from "react-icons/io";

function ModalAdd(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ background: "#343434", borderRadius: '5px'}} >
      <form>
      <Row className="mb-3">
        <Col sm={8}>
          <Form.Control placeholder="Title Episode" style={{ background: "#343434" }} />
        </Col>
        <Col sm={4} className=''>

          <>
            <label
              htmlFor="thumbnail"
              className="px-2 pt-2 pb-1 attachFile"
              style={{ background: "#343434", border: "1px solid white" }}
            >
              Attach Thumbnail
              <IoMdAttach style={{color: "red", fontSize: "22px"}} />
            </label>
            <input id="thumbnail" type="file" hidden></input>
          </>

        </Col>
      </Row>

      <Form.Control
        
        placeholder="link Film"
        style={{ background: "#343434", width: '90%' }}
        className="mb-3"
      />

      <div className='d-flex justify-content-end'>
        <Button
          type="submit"
          className="py-1 px-5"
          style={{ border: "none", background: "red", border: "1px solid red"}}>
          Add
        </Button>
      </div>
      </form>
    
      </Modal.Body>
    </Modal>
  );
}

function AddEpisode() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button style={{background: 'red', border:'1px solid red'}} onClick={() => setModalShow(true)}>
        Tambahkan episode
      </Button>

      <ModalAdd
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

    

export default AddEpisode
