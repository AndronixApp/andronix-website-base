export const state = () => ({
  moddedDebianXfceImagesUrlArray: [],
  moddedUbuntuXfceImagesUrlArray: [],
  moddedDUbuntuKdeImagesUrlArray: [],
  moddedManjaroXfceImagesUrlArray: [],
})

export const mutation = {
  updateImageArray (state, imagesArray, os) {
    if (os === MODDED_UBUNTU_XFCE) {
      state['modded-os'].moddedUbuntuXfceImagesUrlArray = imagesArray
    } else if (os === MODDED_DEBIAN_XFCE) {
      state['modded-os'].moddedDebianXfceImagesUrlArray = imagesArray
    } else if (os === MODDED_MANJARO_XFCE) {
      state['modded-os'].moddedManjaroXfceImagesUrlArray = imagesArray
    } else if (os === MODDED_UBUNTU_KDE) {
      state['modded-os'].moddedDUbuntuKdeImagesUrlArray = imagesArray
    }
  }
}

export const action = {
}

export const MODDED_UBUNTU_XFCE = 0
export const MODDED_DEBIAN_XFCE = 1
export const MODDED_MANJARO_XFCE = 2
export const MODDED_UBUNTU_KDE = 3



