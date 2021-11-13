const env = require('../../main/config/env')
const axios = require('axios')

module.exports = class RequestHelper {
  static async post (url, data, config = {}) {
    let result = {}
    try {
      const response = await axios.post(url, data, config)
      if (response.data) {
        result = response.data
      }
    } catch (err) {
      console.error(err.stack)
    }
    return result
  }

  static async get (url, config = {}) {
    let result = {}
    try {
      const response = await axios.get(url, config)
      if (response.data) {
        result = response.data
      }
    } catch (err) {
      console.error(err.stack)
    }
    return result
  }

  static async put (url, data, config = {}) {
    let result = {}
    try {
      const response = await axios.put(url, data, config)
      if (response.data) {
        result = response.data
      }
    } catch (err) {
      console.error(err.stack)
    }
    return result
  }

  static async patch (url, data, config = {}) {
    let result = {}
    try {
      const response = await axios.patch(url, data, config)
      if (response.data) {
        result = response.data
      }
    } catch (err) {
      console.error(err.stack)
    }
    return result
  }

  static async delete (url, config = {}) {
    let result = {}
    try {
      const response = await axios.delete(url, config)
      if (response.data) {
        result = response.data
      }
    } catch (err) {
      console.error(err.stack)
    }
    return result
  }
}
