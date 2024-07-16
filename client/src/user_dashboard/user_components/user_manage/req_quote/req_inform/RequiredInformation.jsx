import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function CreateUser() {
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [contactName, setContactName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');
    const [state, setState] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);

    const navigate = useNavigate(); // Hook to manage navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            year,
            make,
            model,
            contactName,
            emailId,
            mobileNumber,
            postalCode,
            shippingMethod,
            state,
            additionalNotes,
        };

        axios
            .post('http://localhost:3002/createUser', formData)
            .then((response) => {
                console.log(response.data);
                setPopupOpen(true); // Open the popup after successful submission
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div id="main" className="main">
            <div className="pagetitle">
                <h1>Required Information</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-info-circle-fill"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Required Information</li>
                    </ol>
                </nav>
            </div>

            <section className="dashboard section">
                <div className="row" style={{ marginInline: '20%' }}>
                    <div className="col-lg-12 form">
                        <form className="row g-3 border-2-solid-black flex" onSubmit={handleSubmit}>
                            <div className="flex">
                                <h3
                                    style={{
                                        borderRadius: '5px',
                                        width: '350px',
                                        marginInline: 'auto',
                                        color: '#10375c',
                                    }}
                                >
                                    Part Information
                                </h3>
                                <div>
                                    <ul>
                                        <li>
                                            Year{' '}
                                            <span>
                                                {' '}
                                                <input
                                                    type="text"
                                                    value={year}
                                                    onChange={(e) => setYear(e.target.value)}
                                                />{' '}
                                            </span>{' '}
                                        </li>
                                        <li>
                                            Make{' '}
                                            <span>
                                                <input
                                                    type="text"
                                                    value={make}
                                                    onChange={(e) => setMake(e.target.value)}
                                                />{' '}
                                            </span>
                                        </li>
                                        <li>
                                            Model{' '}
                                            <span>
                                                {' '}
                                                <input
                                                    type="text"
                                                    value={model}
                                                    onChange={(e) => setModel(e.target.value)}
                                                />{' '}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h3
                                style={{
                                    borderRadius: '5px',
                                    width: '350px',
                                    marginInline: 'auto',
                                    color: '#10375c',
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
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <select
                                    id="inputState"
                                    className="form-select"
                                    value={shippingMethod}
                                    onChange={(e) => setShippingMethod(e.target.value)}
                                >
                                    <option selected>Shipping Method...</option>
                                    <option value="option-1">Option 1</option>
                                    <option value="option-2">Option 2</option>
                                    <option value="option-3">Option 3</option>
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
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option selected>State/Province...</option>
                                    <option value="TamilNadu">TamilNadu</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Karnataka">Karnataka</option>
                                </select>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Additional notes and Comments..."
                                    id="floatingTextarea2"
                                    style={{ height: '100px' }}
                                    value={additionalNotes}
                                    onChange={(e) => setAdditionalNotes(e.target.value)}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">
                                    Additional notes and Comments...
                                </label>
                            </div>

                            <Button
                                variant="primary"
                                style={{
                                    borderRadius: '10px',
                                    width: '350px',
                                    marginInline: 'auto',
                                    color: '#fff',
                                    fontWeight: '550',
                                }}
                                type="submit"
                            >
                                Submit
                            </Button>

                            <Popup
                                open={popupOpen}
                                position="top center"
                                closeOnDocumentClick={false} // Prevent closing on clicking outside
                                contentStyle={{
                                    background: '#ADD8E6',
                                    border: '1px solid blue',
                                    padding: '10px',
                                    width: '200px',
                                    textAlign: 'center',
                                    fontSize: '18px',
                                    fontFamily: 'sans-serif',
                                }}
                                onClose={() => {
                                    setPopupOpen(false); // Close the popup
                                    navigate('/'); // Navigate to homepage
                                }}
                            >
                                <div>
                                    <p style={{ marginBottom: '-2px', fontStyle: 'italic' }}>
                                        Your inquiry has been accepted. Please wait for the reply...
                                    </p>
                                    <button style={{ marginTop: '5px' }}>
                                        <Link
                                            to="/"
                                            style={{ fontWeight: 'bold', textDecoration: 'none' }}
                                        >
                                            Okay
                                        </Link>{' '}
                                    </button>
                                </div>
                            </Popup>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CreateUser;
