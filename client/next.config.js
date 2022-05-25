module.exports = {
  images: {
    domains: [
	  process.env.IMAGE_DOMAIN,
      'secure.gravatar.com',
    ],
  },
  generateBuildId: async () => {
    return process.env.PLATFORM_TREE_ID
  }
}
