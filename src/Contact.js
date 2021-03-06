import React from "react";
import "./styles.css";

class Contact extends React.Component {
  state = {
    inputEmail: "",
    inputMessage: "",
    messageSent: false,
    formEmail: ""
  };

  sendMessage = event => {
    var form = document.getElementsByClassName("needs-validation");

    if (form[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form[0].classList.add("was-validated");
    } else {
      form[0].classList.add("was-validated");
      const formEmail = this.state.inputEmail;
      this.setState({
        formEmail: formEmail,
        inputEmail: "",
        inputMessage: "",
        messageSent: true
      });
      //todo: send real email
    }
  };

  sendNewMessage = () => {
    this.setState({
      formEmail: "",
      messageSent: false
    });
  };

  render() {
    return (
      <div>
        {!this.state.messageSent && (
          <div className="p-3 contactSection">
            <form
              className="needs-validation contactSectionForm"
              noValidate
              onSubmit={event => this.sendMessage(event)}
            >
              <div className="form-group">
                <label htmlFor="inputEmailField" className="labelText">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmailField"
                  placeholder="Enter email"
                  onChange={event =>
                    this.setState({ inputEmail: event.target.value })
                  }
                  value={this.state.inputEmail}
                  required
                />
                <div className="errorMessage invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="messageField" className="labelText">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="messageField"
                  rows="9"
                  placeholder="Please type your message here"
                  value={this.state.inputMessage}
                  onChange={event =>
                    this.setState({ inputMessage: event.target.value })
                  }
                  required
                />
                <div className="errorMessage invalid-feedback">
                  Please type your message above.
                </div>
              </div>
              <button type="submit" className="btn btn-primaary submitButton">
                Submit
              </button>
            </form>
          </div>
        )}
        {this.state.messageSent && (
          <div className="p-3 mt-5 contactSection">
            <form className="d-flex my-2 flex-column contactSectionForm">
              <div className="mb-3 sentMessageFeedback">
                {`Thank you for your message. Your message with the contact email ${
                  this.state.formEmail
                } was sent.`}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary submitButton"
                  onClick={this.sendNewMessage}
                >
                  Send new message
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
