/**
 * The way this should work is that the `channels` array is used to 
 * build up a json object to add all the parts to it to be used
 * before building the page
 */

const channels = [
  'Joltzdude139',
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas'
]

const page = []

channels.forEach((channel) => {
  const chan = `https://wind-bow.gomix.me/twitch-api//channels/${channel}`
  fetch(chan)
    .then(response => response.json())
    .then(json => buildPageHtml(json))
    // .then(json => addChannel(json))
    // .then(json => console.table(json))
    // .then(json => console.log(json))
    .catch(error => console.log(error))
  const stream = `https://wind-bow.gomix.me/twitch-api//streams/${channel}`
  fetch(stream)
    .then(response => response.json())
    .then(json => buildPageHtml(json))
    .catch(error => console.log(error))
})

console.log(document.readyState)

document.addEventListener('DOMContentLoaded', function () {
  console.log(document.readyState)
  // add things
})

function addChannel (json) {
  const markup = `
    <a href="${json.url}" target="_blank" class="list-group-item" id="_0">
    <div class="av_des">
      <img class="logo" src="${json.logo}">
      <div class="description">
        <h4>${json.name}</h4>
        <p>${isStreaming(json.url)}</p>
      </div>
    </div>
  </a>
  `
  // const el = document.getElementById('list-from-twitch')
  // el.innerHTML = markup

  var mydiv = document.getElementById('list-from-twitch')
  var newcontent = document.createElement('div')
  newcontent.innerHTML = markup

  while (newcontent.firstChild) {
    mydiv.appendChild(newcontent.firstChild)
  }
}

function isStreaming (channelName) {
  const url = ''
  channels.forEach((channel) => {
    const chan = `https://wind-bow.gomix.me/twitch-api//streams/${channel}`
    fetch(chan)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  })
}

function buildPageHtml (fetchJson) {
  const channelName = ''
  const channelUrl = ''
  const channelLogo = ''

  console.log(`fetchJson:`, console.log(fetchJson))

  const channel = {
    'channelName': channelName,
    'channelUrl': channelUrl,
    'channelLogo': channelLogo
  }

  page.push(channel)

  console.log(page)
}
