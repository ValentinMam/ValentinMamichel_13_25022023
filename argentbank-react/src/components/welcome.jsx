/**
 * Welcoming users with greetings and congratulations
 * Rendering component of welcome message
 * @param {object} welcomeData - User's data fetched from Model
 * @param {number} id - User id given by the URL
 * @returns Bonjour firstName
 */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Model } from '../utils/models'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Greetings = styled.h2`
  font-weight: 500;
  font-size: 48px;
  color: #000000;
  margin: 0;
`

const FirstName = styled.span`
  color: #ff0101;
`

const Congratulations = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 70px;
`

Welcome.propTypes = {
  welcomeData: PropTypes.object,
  isLoading: PropTypes.bool,
}

function Welcome() {
  const [welcomeData, setWelcomeData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    Model.getUserMainData(id).then((res) => {
      setWelcomeData(res.userInfos)
      setIsLoading(false)
    })
  }, [id])

  return (
    <>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
        <div className="welcome">
          <Greetings>
            Bonjour <FirstName>{welcomeData.firstName}</FirstName>
          </Greetings>
          <Congratulations>
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </Congratulations>
        </div>
      )}
    </>
  )
}

export default Welcome
