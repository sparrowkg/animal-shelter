export const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) resolve(fetch(url))
    else reject(new Error('mock fetch failed'))
  }, 1500)
})