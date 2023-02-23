// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
}

module.exports = withBlitz(config)
