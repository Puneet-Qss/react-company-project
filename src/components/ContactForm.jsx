import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../reducers/formSlice";
import Swal from "sweetalert2";

import emailjs from "emailjs-com";

emailjs.init("bd8TjEsz5isGVrsO1");

function ContactForm({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: formData.email,
    };

    emailjs
      .send("service_z5iyvyb", "template_46flytg", templateParams)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          Swal.fire(
            'Sent!',
            'Email is Sent Succesfully!',
            'success'
          )
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      );

  };

  return (
    <>
    <div
      className={`modal ${showModal ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: showModal ? "block" : "none" }}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Contact Us</h1>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Add a name input field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    );
                  }}
                />
              </div>

              {/* Existing email input field */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  placeholder="enter your email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={formData.email}
                  onChange={(e) => {
                    dispatch(
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    );
                  }}
                />
                <div id="emailHelp" className="form-text">
                  We will get in touch within 72 hrs.
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClose}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      className={`modal-backdrop fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
      onClick={handleClose}
    ></div>
  </>
  );
}

export default ContactForm;
