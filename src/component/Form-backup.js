import React, { Component } from 'react';
import serializeForm from "form-serialize";

class Form extends Component {
  constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit = event => {
  event.preventDefault();
  const values = serializeForm(event.target, { hash: true });
  const  url = './api/results.json';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: values, // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
};

  render() {
    return (
      <div>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <input id="description" name="description" type="text" placeholder="Your review"></input>
          <input id="rating" name="rating" type="number" placeholder="Rating"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
