import * as React from 'react'

export default class DashboardForm extends React.PureComponent {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.firstName && this.state.lastName &&
        this.state.emailAddress && this.state.shortBio
    ) {
      this.props.addUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.emailAddress,
        shortBio: this.state.shortBio,
        skills: [],
        rejected: [],
        accepted: []
      })
    }
  }

  render() {
    return (<div>
      <h2>Fill in your info please</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} />
        </label>
        <label>
          Email Address:
          <input type="text" name="emailAddress" onChange={this.handleChange} />
        </label>
        <label>
          Short Bio:
          <input type="text" name="shortBio" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}
