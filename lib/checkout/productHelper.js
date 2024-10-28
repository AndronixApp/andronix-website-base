export const getProductNameWithId = (id) => {
  switch (id) {
    case 'premium':
      return 'Andronix Premium'
    case 'ubuntu_xfce':
      return 'Ubuntu XFCE'
    case 'ubuntu_kde':
      return 'Ubuntu KDE'
    case 'manjaro_xfce':
      return 'Manjaro XFCE'
    case 'debian_xfce':
      return 'Debian XFCE'
  }
}

export const getBetterStatus = async (axios) => {
  try {
    const result = await axios.get('/better-status')
    console.log({status_data: result.data.response})
    return result.data.response
  } catch (e) {
    console.log(e)
    return false
  }
}
