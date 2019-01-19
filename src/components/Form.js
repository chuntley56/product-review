import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form className="review-form" method="post" action="action.php">
          <input id="description" name="description" type="text" placeholder="Your review"></input>
          <input id="rating" name="rating" type="number" placeholder="Rating"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
