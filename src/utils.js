export const handleAPIRequest = async (method, route, data, additionalHeaders) => {
  try {
    route = /^((http|https):\/\/)/.test(route) ? route : `/{route}`
    let response = await fetch(`${route}`, {
      method: `${method}`,
      body: JSON.stringify(data),
      headers: {
        ...additionalHeaders,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let responseData = response.json()
    return responseData
  } catch (err) {
    console.warn(err)
    return { apiError: 'Connection failed, please try again later' }
  }
}

export const camelToTitle = str => str.replace(/([A-Z])/g, ' $1')
  .replace(/^./, firstLetter => firstLetter.toUpperCase())