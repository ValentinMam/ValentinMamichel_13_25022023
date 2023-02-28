import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Model } from '../../../../utils/models'
import Notfound from '../not-found/not-found'
import Welcome from '../../../../components/welcome'
import Activity from '../../../../components/activity'
import Average from '../../../../components/average'
import Performance from '../../../../components/performance'
import Score from '../../../../components/score'
import Nutrients from '../../../../components/nutrients'

function Profile() {
  const [activityData, setActivityData] = useState([])
  const [averageData, setAverageData] = useState([])
  const [performanceData, setPerformanceData] = useState([])
  const [scoreData, setScoreData] = useState()
  const [nutrientsData, setNutrientsData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const { id } = useParams()

  useEffect(() => {
    Promise.all([
      Model.getUserActivity(id).then((res) => {
        setActivityData(res.sessions)
      }),
      Model.getUserAverage(id).then((res) => {
        setAverageData(res.sessions)
      }),
      Model.getUserPerformance(id).then((res) => {
        setPerformanceData(res.data)
      }),
      Model.getUserMainData(id).then((res) => {
        setScoreData(res.score)
        setNutrientsData(res.keyData)
      }),
    ])
      .then(setIsLoading(false))
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }, [id])

  if (error) {
    return <Notfound />
  }

  return (
    <>
      {isLoading && <div>...is loading</div>}
      {!isLoading && performanceData.length > 0 && (
        <main>
          <div>
            <Welcome />
          </div>

          <section>
            <article>
              <Activity activityData={activityData} />
              <Average averageData={averageData} />
              <Performance performanceData={performanceData} />
              <Score scoreData={scoreData} />
            </article>

            <div>
              <Nutrients nutrientsData={nutrientsData} />
            </div>
          </section>
        </main>
      )}
    </>
  )
}

export default Profile
