import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function RequiredInformation() {
  // const [enquiry, setEnquiry] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // // const handleShow = () => setShow(true);
  // const [contactName, setContactName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [shippingMethod, setShippingMethod] = useState("");
  // const [make, setMake] = useState("");
  // const [state, setState] = useState("");
  // const [year, setYear] = useState("");
  // const [model, setModel] = useState("")
  // const [trigger, setTrigger] = useState(false);

  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [state, setState] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // const postDetail = async () => {
  //   await axios
  //     .post(
  //       "https://workorder-server-o3fp.onrender.com/api/v1/user/enquiry/new",
  //       { contactName: contactName },
  //       { email: email },
  //       { mobileNumber: mobileNumber },
  //       { postalCode: postalCode },
  //       { shippingMethod:shippingMethod },
  //       {state:state},
  //       {make:make},
  //       {year:year},
  //       {model:model}
  //     )
  //     .then((res) => setEnquiry([...enquiry, res]))
  //     .then(() => setTrigger(!trigger));
  // };

  // const postDetail = () => axios.post("https://workorder-server-o3fp.onrender.com/api/v1/user/enquiry/new",
  //   {}
  // )

  const postDetail = () =>
    axios
      .post(
        "https://workorder-server-o3fp.onrender.com/api/v1/user/enquiry/new",
        {
          year: year,
          make: make,
          model: model,
          contactName: contactName,
          email: email,
          mobileNumber: mobileNumber,
          postalCode: postalCode,
          shippingMethod: shippingMethod,
          state: state,
          additionalNotes: additionalNotes,
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleShipment = (e) => {
    setShippingMethod(e.target.value);
  };
  return (
    <div id="main" className="main">
      <div className="pagetitle">
        <h1>Required Information</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-info-circle-fill"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Required Information</li>
          </ol>
        </nav>
      </div>

      <section className="dashboard section">
        <div className="row" style={{ marginInline: "20%" }}>
          <div className="col-lg-12 form">
            <div className="flex">
              <h3
                style={{
                  borderRadius: "5px",
                  width: "350px",
                  marginInline: "auto",
                  color: "#10375c",
                }}
              >
                Part Information
              </h3>
              <div>
                <ul>
                  <li>
                    Year{" "}
                    <span>
                      {" "}
                      <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      />{" "}
                    </span>{" "}
                  </li>
                  <li>
                    Make{" "}
                    <span>
                      <input
                        type="text"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                      />{" "}
                    </span>
                  </li>
                  <li>
                    Model{" "}
                    <span>
                      {" "}
                      <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                      />{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <form className="row g-3 border-2-solid-black flex">
              <h3
                style={{
                  borderRadius: "5px",
                  width: "350px",
                  marginInline: "auto",
                  color: "#10375c",
                }}
              >
                Required Information
              </h3>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="contactName"
                  placeholder="Contact Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  id="postalCode"
                  placeholder="Postal(Zip) Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <select
                  id="inputState"
                  className="form-select"
                  value={shippingMethod}
                  onChange={handleShipment}
                >
                  <option selected>Shipping Method...</option>
                  <option value={"option-1"}>option-1</option>
                  <option value={"option-2"}>option-2</option>
                  <option value={"option-3"}>option-3</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  id="mobileNum"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <select
                  id="inputState"
                  className="form-select"
                  value={state}
                  onChange={handleStateChange}
                >
                  <option selected>State/Province...</option>
                  <option value={"TamilNadu"}>TamilNadu</option>
                  <option value={"kerala"}>Kerala</option>
                  <option value={"karnataka"}>Karnataga</option>
                </select>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                ></textarea>
                <label for="floatingTextarea2">
                  Additional notes and Comments...
                </label>
              </div>
              <Popup
                trigger={
                  <Button
                    variant="primary"
                    style={{
                      borderRadius: "10px",
                      width: "350px",
                      marginInline: "auto",
                      color: "#fff",
                      fontWeight: "550",
                    }}
                    onClick={postDetail}
                  >
                    Submit
                  </Button>
                }
                position="top center"
              >
                <div
                  style={{
                    border: "1px solid blue",
                    padding: "10px",
                    marginBottom: "-2px",
                    background: "#ADD8E6",
                    width: "200px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                      marginBottom: "-2px",
                      fontStyle: "italic",
                    }}
                  >
                    Your Inquiery is accept Please wait for the replay... 
                  </p>
                  <button style={{ marginTop: "5px" }}>
                    <Link
                      to="/"
                      style={{ fontWeight: "bold", textDecoration: "none" }}
                    >
                      Okay
                    </Link>{" "}
                  </button>
                </div>
              </Popup>

              <Modal style={{ marginTop: "250px" }}>
                <Modal.Body>
                  <img
                    src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ="
                    alt=""
                    width="120px"
                    height="120px"
                    style={{ marginInline: "160px" }}
                  />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Email has been send
                  </h3>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    Enquiry number{" "}
                    <span style={{ color: "#10375c", fontWeight: "700" }}>
                      #256
                    </span>
                  </h4>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    style={{
                      marginInline: "200px",
                      backgroundColor: " #10375c",
                      color: "#fff",
                      fontWeight: "700",
                    }}
                  >
                    <Link style={{ color: "#fff" }} to="/user/user_enquiry">
                      Done
                    </Link>
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RequiredInformation;
