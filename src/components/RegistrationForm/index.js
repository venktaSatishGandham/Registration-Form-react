import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

/* Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    nameErrorMsg: '',
    passwordErrorMsg: '',
    isSuccess: false,
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {firstName, lastName} = this.state
    console.log(firstName, lastName)
    if (firstName === '') {
      this.setState({nameErrorMsg: 'Required'})
    }
    if (lastName === '') {
      this.setState({passwordErrorMsg: 'Required'})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isSuccess: true})
    }
    this.setState({firstName: '', lastName: ''})
  }

  onChangeFirstNameInputField = e => {
    this.setState({firstName: e.target.value})
  }

  onChangeLastNameInputField = e => {
    this.setState({lastName: e.target.value})
  }

  onSubmitAnotherResponse = () => {
    this.setState({isSuccess: false})
  }

  eventHandler = () => {
    console.log('this is blurred')
  }

  render() {
    const {
      firstName,
      lastName,
      nameErrorMsg,
      passwordErrorMsg,
      isSuccess,
    } = this.state
    return (
      <div className="registration-container">
        <h1>Registration</h1>
        {isSuccess ? (
          <div>
            <img
              alt="success"
              className="success"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            />
            <p>submitted successfully</p>
            <button type="button" onClick={this.onSubmitAnotherResponse}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="registration-form" onSubmit={this.onSubmitForm}>
            <div>
              <label htmlFor="firstName">FIRST NAME</label>
              <input
                type="text"
                className="input"
                id="firstName"
                value={firstName}
                onBlur={this.eventHandler}
                placeholder="First name"
                onChange={this.onChangeFirstNameInputField}
              />
              {nameErrorMsg && <p>{nameErrorMsg}</p>}
            </div>
            <div>
              <label htmlFor="lastName">LAST NAME</label>
              <input
                type="text"
                className="input"
                id="lastName"
                value={lastName}
                onBlur={this.eventHandler}
                placeholder="Last name"
                onChange={this.onChangeLastNameInputField}
              />
              {passwordErrorMsg && <p>{passwordErrorMsg}</p>}
            </div>
            <button type="submit" className="button">
              submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
*/
