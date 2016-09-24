import { shell } from 'electron'

export default robot => {
  /**
   * Search Engines
   */
  robot.listen(/^google (.*)$/, {
    description: "search something on Google",
    usage: 'google <query>'
  }, ({ matches }) => {
    shell.openExternal(`https://www.google.be/search?q=${matches.query.split(' ').join('+')}`)
  })

  robot.listen(/^duckduckgo (.*)$/, {
    description: "search something on DuckDuckGo",
    usage: 'duckduckgo <query>'
  }, ({ matches }) => {
    shell.openExternal(`https://duckduckgo.com/?q=${matches.query.split(' ').join('+')}`)
  })

  /**
   * Multi Media
   */
  robot.listen(/^youtube (.*)$/, {
    description: "search something on YouTube",
    usage: 'youtube <query>'
  }, ({ matches }) => {
    shell.openExternal(`https://www.youtube.com/results?search_query=${matches.query.split(' ').join('+')}`)
  })

  robot.listen(/^github (.*)$/, {
    description: "search something on GitHub",
    usage: 'github <query>'
  }, ({ matches }) => {
    shell.openExternal(`https://github.com/search?q=${matches.query.split(' ').join('+')}&ref=opensearch`)
  })

  robot.listen(/^facebook (.*)$/, {
    description: "search something on Facebook",
    usage: 'facebook <query>'
  }, ({ matches }) => {
    shell.openExternal(`https://www.facebook.com/search/top/?q=${matches.query.split(' ').join('%20')}`)
  })

  robot.listen(/^wikipedia (.*)$/, {
    description: "search something on Wikipedia",
    usage: 'wikipedia <query>'
  }, ({ matches }) => {
    shell.openExternal(`https://wikipedia.org/wiki/Special:Search/${matches.query.split(' ').join('%20')}`)
  })
}
