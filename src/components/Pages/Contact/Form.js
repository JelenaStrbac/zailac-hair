import React from "react"
import Button from "../../UI/Button/Button"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xvownkjl"
        method="POST"
      >
        <h4>Pošaljite nam poruku</h4>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ime i prezime"
          aria-label="name"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          name="email"
          aria-label="email"
        />
        <textarea
          name="message"
          placeholder="Vaša poruka"
          aria-label="message"
          required
        ></textarea>
        {status === "SUCCESS" ? (
          <p style={{ color: "green" }}>
            Hvala! Vaša poruka je uspešno poslata.
          </p>
        ) : (
          <Button type="submit">Pošaljite</Button>
        )}
        {status === "ERROR" && (
          <p style={{ color: "red" }}>
            Ups, dogodila se greška! Pokušajte ponovo.
          </p>
        )}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
