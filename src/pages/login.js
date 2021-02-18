import React from "react"
import { graphql } from "gatsby"

const login = ({ data }) => {
  return (
    <>
      <h2>Welcome</h2>
      <p>{JSON.stringify(data, null, 4)}</p>
    </>
  )
}

export default login
