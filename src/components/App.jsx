import React, { Component } from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { Filter } from "./filter/Filter";
export class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts")),
    // contacts: [
    //   // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: "",
    name: "",
    number: "",
  };

  componentDidUpdate = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  changeValue = (value, inputName) => {
    let key;
    this.setState(() => {
      if (inputName === "name") {
        key = "name";
      } else {
        key = "number";
      }

      return {
        [key]: value,
      };
    });
  };

  addContact = (name, number, id) => {
    for (const contact of this.state.contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        return alert(contact.name + " is already in contacts.");
      }
      break;
    }

    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, { name, number, id }],
        name: "",
        number: "",
      };
    });
  };

  setFilter = (value) => {
    this.setState(() => {
      return {
        filter: value,
      };
    });
  };

  deleteContact = (contactId) => {
    this.setState((prev) => {
      const index = prev.contacts.findIndex((item) => item.id === contactId);
      if (index >= 0) {
        prev.contacts.splice(index, 1);
      }
      return {
        contacts: prev.contacts,
      };
    });
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          fontSize: 40,
          color: "#010101",
          margin: 40,
          paddingLeft: 40,
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          contactName={name}
          contactNumber={number}
          change={this.changeValue}
          add={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filterValue={this.setFilter} />
        <ContactList list={contacts} filter={filter} del={this.deleteContact} />
      </div>
    );
  }
}
