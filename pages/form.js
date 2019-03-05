import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../static/css/style.css';

class Form extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { name } = this.state;
    var url = 'http://localhost:3001/reviews';
    var data = {name: name};

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  render() {
    const { name } = this.state;
    return(
      <div>
      <form onSubmit={this.handleSubmit} className="ui-form ui-grid ui-grid--compressed is-mobile is-multiline ui-pl--1 ui-pr--1">
        <div className="ui-grid-col is-12 ui-text--center">
          <strong className="ui-text__label ui-text__label--xl ui-display--block ui-mt--2 ui-mb--0">Form Title</strong>
          <p className="ui-color--paper-medium ui-mt--0 ui-mb--1">Form Subtitle</p>
        </div>
        <div className="ui-grid-col is-half">
          <div className="ui-input__text-wrapper">
            <label className="ui-input__text-label" for="name" data-text="First Name">First Name</label>
            <input type="text" className="ui-input__text" name="name" value={name} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="ui-grid-col is-12">
          <button className="ui-btn ui-btn__primary ui-btn--xl ui-btn--block" type="submit">Submit</button></div>
      </form>
      </div>
    )
  }
}

export default Form;
