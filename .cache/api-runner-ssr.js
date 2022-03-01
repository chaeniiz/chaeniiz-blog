var plugins = [{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"0","head":true,"anonymize":true,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"chaeniiz.com","short_name":"chaeniiz.com","description":"채윤의 블로그","lang":"en","display":"standalone","start_url":"/","icon":"static/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"837821e27a058e793760e3ef219231d9"},
    },{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":0,"className":"anchor"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-theme-material-ui-top-layout',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-theme-material-ui-top-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-material-ui',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[],"pathToEmotionCacheProps":""},
    },{
      name: 'gatsby-plugin-webfonts',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-webfonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":{"google":[{"family":"Roboto","variants":["300","400","500"]}]}},
    },{
      name: 'gatsby-plugin-advanced-sitemap',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/Users/rainist/chaeniiz-blog/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
