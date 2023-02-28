/* eslint-disable no-undef */
import { Service } from './services'
import { mockService } from './mockService'

const selectedService =
  process.env.REACT_APP_ACTIVE_MOCK === 'true' ? mockService : Service

export const Model = {
  /**
   * @param {Number} userId - Id of the user.
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserMainData: function (userId) {
    return selectedService.getUserMainData(userId).then((data) => {
      return {
        userInfos: data.userInfos,
        score: data.score || data.todayScore,
        keyData: data.keyData,
      }
    })
  },

  /**
   * @param {Number} userId - Id of the user.
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserActivity: function (userId) {
    return selectedService.getUserActivity(userId).then((data) => {
      return {
        userId: data.userId,
        sessions: data.sessions,
      }
    })
  },

  /**
   * @param {Number} userId - Id of the user.
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserAverage: function (userId) {
    return selectedService.getUserAverage(userId).then((data) => {
      return {
        userId: data.userId,
        sessions: data.sessions,
      }
    })
  },

  /**
   * @param {Number} userId - Id of the user.
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserPerformance: function (userId) {
    return selectedService.getUserPerformance(userId).then((data) => {
      return {
        userId: data.userId,
        kind: data.kind,
        data: data.data,
      }
    })
  },
}
