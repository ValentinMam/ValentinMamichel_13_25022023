import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 4vw;
  color: #ff0101;
  span {
    font-size: 150px;
  }
  p {
    font-size: 25px;
  }
  a {
    font-size: 18px;
    margin-top: 7vw;
    color: #ff0101;
  }
`

function Notfound() {
  return (
    <main>
      <ErrorPage className="error">
        <span>404</span>
        <p>
          <strong>Vérifier le bon fonctionnement de l’API</strong> <br></br>
          <br></br>dans le dossier sportsee-api <br></br>
          ou <br></br>dans votre console fn+f12.
        </p>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </ErrorPage>
    </main>
  )
}

export default Notfound
