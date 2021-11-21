export const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('sleep done')
    }, 1000)
  })
};

export const error = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject('sleep error!!!')
    }, 1000)
  })
};

