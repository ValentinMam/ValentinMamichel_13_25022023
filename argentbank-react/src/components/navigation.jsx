/**
 * Rendering component Navigation
 * @returns Navigation bar with link in order to choose a user
 * @link is used to navigate between differents pages
 */

import Logo from './assets/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-self: center;
  padding-left: 32px;
`

const LogoImg = styled.img`
  width: 178px;
  height: 60px;
`

const NavUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 100%;
  padding: 0;
  list-style-type: none;
  font-size: 24px;
  font-weight: 500;
  a {
    text-decoration-line: none;
  }
`

const NavLi = styled.li`
  color: #ffffff;
`

function Navigation() {
  return (
    <header>
      <LogoContainer>
        <LogoImg src={Logo} alt="logo-sportsee" />
      </LogoContainer>
      <NavUl>
        <NavLink to="/">
          <NavLi>Accueil</NavLi>
        </NavLink>
        <NavLink to="/user/12">
          <NavLi>Profil</NavLi>
        </NavLink>
        <NavLi>Réglage</NavLi>
        <NavLi>Communauté</NavLi>
      </NavUl>
    </header>
  )
}

export default Navigation
