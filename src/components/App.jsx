import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './form/form';
import { List } from './list/list';
import { Filter } from './filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
    number: '',
  };
  filteredList = null;

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.contacts.filter(contact => contact.name === this.state.name)
        .length !== 0
    ) {
      alert(`${this.state.name} is already in your contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
      filter: '',
      name: '',
      number: '',
    });
    e.target.reset();
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePhoneChange = e => {
    this.setState({
      number: e.target.value,
    });
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
    if (e.target.value.toLowerCase() === '') {
      this.filteredList = null;
      return;
    }
    this.renderFilter();
  };

  renderFilter = () => {
    this.filteredList = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    // console.log(this.filteredList);
    return this.filteredList;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div
        style={{
          paddingLeft: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <Form
          handleNameChange={this.handleNameChange}
          handleSubmit={this.handleSubmit}
          handlePhoneChange={this.handlePhoneChange}
        ></Form>
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter}></Filter>
        <List
          contacts={
            this.filteredList === null
              ? this.state.contacts
              : this.renderFilter()
          }
          deleteContact={this.deleteContact}
        ></List>
      </div>
    );
  }
}
