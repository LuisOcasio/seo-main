import React from "react"
import { Button, Menu } from "semantic-ui-react"
import { Link } from "gatsby"

const Nav = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        <Button primary>Home</Button>
      </Menu.Item>
    </Link>

    <Link to="/signup">
      <Menu.Item>
        <Button primary>Sign up</Button>
      </Menu.Item>
    </Link>

    <Link to="/login">
      <Menu.Item>
        <Button>Log-in</Button>
      </Menu.Item>
    </Link>
  </Menu>
)

export default Nav
