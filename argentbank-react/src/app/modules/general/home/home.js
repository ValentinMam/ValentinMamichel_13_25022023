/**
 * @function creating home page with 2 links for User 12 and User 18
 */

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  width: 200px;
  height: 100px;
  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
  background-size: 300% 100%;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 5vw 0 0 10vw;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all .4s ease-in-out;
  &:hover {
    background-position: 100% 0;
    transition: all .4s ease-in-out;
  }
}
`

function Home() {
  return (
    <main>
      <NavLink to={`user/12`}>
        <Button>USER 12</Button>
      </NavLink>
      <NavLink to={`user/18`}>
        <Button>USER 18</Button>
      </NavLink>
    </main>
  )
}

export default Home
