require('match-media')

export function matchMedia (mediaQueryString) {
  return window.matchMedia(mediaQueryString)
}

export function getMedia (options) {
  const queries = options.media

  const media = Object.keys(queries)
    .map((name) => {
      return { name, queryString: queries[name] }
    })
    .reduce((result, media) => {
      result[media.name] = matchMedia(media.queryString).matches
      return result
    }, {})

  return media
}

export default {
  matchMedia,
  getMedia
}
