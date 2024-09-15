/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    changefreq: 'weekly',
    generateRobotsTxt: true, // (optional)
    exclude: ['/api/email']
  }