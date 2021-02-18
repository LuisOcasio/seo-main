import React from "react"
import { useState } from "react"
import { Form, Checkbox, Button } from "semantic-ui-react"
import bcrypt from "bcryptjs"

const SignupForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })
  const [terms, setTerms] = useState(false)

  const checked = () => {
    setTerms(true)
  }

  const handler = event =>
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })

  const submitHandler = event => {
    event.preventDefault()
    let hash = bcrypt.hashSync("bacon", 8)
    localStorage.setItem("lol", hash)
  }

  return (
    <>
      <h2>Sign Up</h2>

      <Form action="post" onSubmit={submitHandler}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handler}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Passwrord"
            value={input.password}
            onChange={handler}
          />
        </Form.Field>

        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={terms}
            onChange={checked}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default SignupForm
