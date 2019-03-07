import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router} from '../routes';
import '../static/css/style.css';

class Form extends Component {
  state = {
    name: '',
    title: '',
    description: '',
    rating: 5,
    quality: 5,
    value: 5,
    joinDate: 2018
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
    const { name, title, description, rating, quality, value, joinDate } = this.state;
    var url = 'http://localhost:3001/reviews';
    var data = {
      name: name,
      title: title,
      description: description,
      rating: rating,
      quality: quality,
      value: value,
      joinDate: joinDate,
      date: new Date()
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response))
        window.location.href = '/';
      })
      .catch(error => console.error('Error:', error))
    }

  render() {
    const { name, title, description, rating, quality, value, joinDate } = this.state;
    return(
      <div>
      <form onSubmit={this.handleSubmit} className="ui-form ui-grid ui-grid--compressed is-mobile is-multiline ui-pl--1 ui-pr--1">
        <div className="ui-grid-col is-12 ui-text--center">
          <strong className="ui-text__label ui-text__label--xl ui-display--block ui-mt--2 ui-mb--0">Product Review</strong>
          <p className="ui-color--paper-medium ui-mt--0 ui-mb--1">Tell us what you think</p>
        </div>
        <div className="ui-grid-col">
          <div className="ui-input__text-wrapper">
            <input placeholder="First Name" type="text" className="ui-input__text" name="name" value={name} onChange={this.handleChange}/>
          </div>
          <div className="ui-input__text-wrapper">
            <input placeholder="Review Title" type="text" className="ui-input__text" name="title" value={title} onChange={this.handleChange}/>
          </div>
          <div className="ui-input__text-wrapper">
            <input placeholder="Your Review" type="text" className="ui-input__text" name="description" value={description} onChange={this.handleChange} size="200"/>
          </div>
          <div className="ui-input__radio-wrapper">
            <label htmlFor="rating">Overall Rating</label>
            <input className="ui-input__radio" type="radio" name="rating" value={1} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="rating" value={2} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="rating" value={3} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="rating" value={4} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="rating" value={4} onChange={this.handleChange}/>
          </div>
          <div className="ui-input__radio-wrapper">
            <label htmlFor="quality">Quality</label>
            <input className="ui-input__radio" type="radio" name="quality" value={1} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="quality" value={2} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="quality" value={3} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="quality" value={4} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="quality" value={4} onChange={this.handleChange}/>
          </div>
          <div className="ui-input__radio-wrapper">
            <label htmlFor="value">Value</label>
            <input className="ui-input__radio" type="radio" name="value" value={1} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="value" value={2} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="value" value={3} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="value" value={4} onChange={this.handleChange}/>
            <input className="ui-input__radio" type="radio" name="value" value={4} onChange={this.handleChange}/>
          </div>
          <div className="ui-input__select-wrapper">
            <label className="ui-input__select-label" htmlFor="someID" data-text="Member Since">Member Since</label>
            <select name="joinDate" onChange={this.handleChange} className="ui-input__select">
              <option className="ui-input__select-option ui-input__select-option--hidden" disabled="" value=""></option>
                <option className="ui-input__select-option" value={2012}>2012</option>
                <option className="ui-input__select-option" value={2013}>2013</option>
                <option className="ui-input__select-option" value={2014}>2014</option>
                <option className="ui-input__select-option" value={2015}>2015</option>
                <option className="ui-input__select-option" value={2016}>2016</option>
                <option className="ui-input__select-option" value={2017}>2017</option>
                <option className="ui-input__select-option" value={2018}>2018</option>
                <option className="ui-input__select-option" value={2019}>2019</option>
            </select>
          </div>
        </div>
        <div className="ui-grid-col is-12">
          <button className="ui-btn ui-btn__primary ui-btn--xl ui-btn--block" type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
  }
}

export default Form;
