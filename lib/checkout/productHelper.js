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
