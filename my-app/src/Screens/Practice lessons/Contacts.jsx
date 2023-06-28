import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacts.css";
import contactsLogic from "./Contacts";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const userContacts = [
  { id: 1, name: "Alice", phone: "(816)-403-5456" },
  { id: 2, name: "Bob", phone: "(572)-566-2397" },
  { id: 3, name: "Cris", phone: "(864)-309-6154" },
  { id: 4, name: "Daniel", phone: "(816)-403-5456" },
];

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const randomId = uuidv4();
  const handleAddContact = () => {
    const newContact = {
      id: randomId,
      name: name,
      phone: phone,
    };

    setContacts([...contacts, newContact]);
    setName("");
    setPhone("");
  };
  return (
    <div className="container">
      <div className="header1">
        <input type="text" placeholder="Name" onChange={handleNameChange} />
        <input
          type="text"
          placeholder="Phone number"
          onChange={handlePhoneChange}
        />
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "blue" }}
          onClick={handleAddContact}
        >
          ADD
        </button>
      </div>
      <br />
      <hr />
      <br />
      <div className="header2">
        <input type="text" placeholder="Search" />
        <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>
          SEARCH
        </button>
        <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>
          REMOVE DUPLICATION
        </button>
      </div>
      <div>
        {userContacts.map((contact, index) => (
          <input
            id="details"
            key={index}
            type="text"
            value={`${contact.name} - ${contact.phone}`}
            readOnly
          />
        ))}
      </div>
      <div>
        {contacts.map((contact, index) => (
          <input
            id="details"
            key={index}
            type="text"
            value={`${contact.name} - ${contact.phone}`}
            readOnly
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
