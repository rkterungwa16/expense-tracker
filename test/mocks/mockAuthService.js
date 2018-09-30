const mockAuthService = {
  createUser (username, password) {
    return new Promise((resolve, reject) => {
      if (username === 'terungwa') {
        return resolve({ username, password })
      }

      reject(new Error('User does not exist'))
    })
  }
}

export default mockAuthService
