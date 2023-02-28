export const Service = {
  /**
   * @param {Number} userId - Id of the user
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserMainData: function (userId) {
    return fetch(`http://localhost:3000/user/${userId}`)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        return result.data
      })
      .catch((error) => {
        console.log('There was an error', error)
      })
  },

  /**
   * @param {Number} userId - Id of the user
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserActivity: function (userId) {
    return fetch(`http://localhost:3000/user/${userId}/activity`)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        return result.data
      })
      .catch((error) => {
        console.log('There was an error', error)
      })
  },

  /**
   * @param {Number} userId - Id of the user
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserAverage: function (userId) {
    return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        return result.data
      })
      .catch((error) => {
        console.log('There was an error', error)
      })
  },

  /**
   * @param {Number} userId - Id of the user
   * @return {Promise} - Using promise returning data in JSON formated Object
   */
  getUserPerformance: function (userId) {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        return result.data
      })
      .catch((error) => {
        console.log('There was an error', error)
      })
  },
}
