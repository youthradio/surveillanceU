/* eslint-disable no-console */
import ArticleData from './data/data.json'
const content = ArticleData.content[0]

const BASEURL = process.env.BASE_URL_PRODUCTION || '/surveillanceU'
const CAN_URL =
  process.env.BASE_URL_PRODUCTION === ''
    ? `https://youthradio.github.io${BASEURL}`
    : `https://interactive.yr.media${BASEURL}`

console.log(`BASEURL ${BASEURL}`)
console.log(`CAN_URL ${CAN_URL}`)

const POSTCONFIG = {
  baseURL: BASEURL,
  title: `${content.headline}: ${content.subheadline}`,
  subheadline: content.subheadline,
  author: content.author,
  publishDate: content.date,
  location: content.location,
  description: content.seo_description || '',
  tweetMessage: '@itsyrmedia',
  url: CAN_URL,
  featureImage: `${CAN_URL}/${content.seo_image}`,
  featureImageDescription: content.featureImageDescription,

  wpPostSlug: 'north-carolina-vs-vaping-companies',
  wpPostID: '60986',
  // you might not need to change
  fbAppID: '73080818131',
  twitterHandler: '@itsyrmedia',
  docs: [
    {
      name: 'surveillanceU',
      id: '1s0g1EpMZwVpCMEeXXi5DD7HZ_F_w8GU70iDPAzz1MUw',
    },
  ],
  dataPath: '../data/data.json',
  POLLSERVER: 'https://ee51aej7u4.execute-api.us-west-2.amazonaws.com/latest',
  POLLID: '6ac25af7-19bf-4888-a068-9be292bd37fa',
}

export default POSTCONFIG
