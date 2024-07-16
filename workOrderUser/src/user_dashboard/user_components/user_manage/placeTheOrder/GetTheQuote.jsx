import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function GetTheQuote() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return (
    <div id="main" className="main">
      <div className="pagetitle">
        <h1>Place the Order</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
              <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Get the Quote</li>
          </ol>
        </nav>
      </div>
      <section className="dashboard section" style={{marginTop:'80px', marginBottom:'80px'}}>
        <div className="row" style={{marginInline:'20%'}}>
          <div className="col-lg-12 form">
           <h3 style={{fontWeight:'700', textDecoration:'underline'}}>Enter the Quote No</h3>

            <div style={{display:'flex', gap:'20px', justifyContent:'center', marginTop:'40px'}}>
              <input type="text" style={{borderRadius:'10px', width:'200px', fontSize:'18px'}} placeholder=' #1234' />
              <button onClick={handleShow}>
                <Link to="" style={{color:"#fff"}}>Search</Link>
              </button>
              
              <Modal show={show} onHide={handleClose} style={{marginTop:'250px'}} >
                <Modal.Body>
                <h5 style={{textAlign:'center', fontSize:'20px', fontWeight:'700', textDecoration:'underline'}}>Quote Information</h5>
                  <div>
                    <ul style={{display:'flex', flexDirection:'column', listStyle:'none', gap:'10px', fontWeight:'550'}}>
                      <li>Invoice Number  <span style={{fontWeight:'650', color:'#10375c'}}>: Inv-123 </span> </li>
                      <li>Make / Model / Part <span style={{fontWeight:'650', color:'#10375c'}}>: Toyota </span> <span style={{fontWeight:'650', color:'#10375c'}}> Carmy </span> <span style={{fontWeight:'650', color:'#10375c'}}> A/C Compressor Clutch Only</span> </li>
                      <li>Year <span style={{fontWeight:'650', color:'#10375c'}}>: 2009 </span> </li>
                      <li>Price <span style={{fontWeight:'650', color:'#10375c'}}>: ₹ 450</span> </li>
                    </ul> 
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    style={{
                      marginInline: "150px",
                      backgroundColor: " #10375c",
                      color: "#fff",
                      fontWeight: "700",
                    }}
                    onClick={handleClose}
                  >
                    <Link style={{color:'#fff', }} to="/user/user_invoice">Get the Invoice</Link>
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetTheQuote