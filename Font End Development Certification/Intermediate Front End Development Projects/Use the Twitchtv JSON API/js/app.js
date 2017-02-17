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

const pageItems = []

channels.forEach((channel) => {
  const chan = `https://wind-bow.gomix.me/twitch-api//channels/${channel}`
  fetch(chan)
    .then(response => response.json())
    .then(json => buildPageItems(json))
    // .then(json => addChannel(json))
    // .then(json => console.table(json))
    // .then(json => console.log(json))
    .catch(error => console.log(error))
})

console.log(document.readyState)

document.addEventListener('DOMContentLoaded', function () {
  console.log(document.readyState)
  // add things
})


function addChannel (json) {
  const markup = `
    <a href="${json.url}" target="_blank" class="list-group-item" tag="${(json.stream === 'Offline') ? '_0' : '_1'}">
    <div class="av_des">
      <img class="logo" src="${json.logo}">
      <div class="description">
        <h2>${json.name}</h2>
        <h3>${json.stream}</h3>
        <h3>${json.game}</h3>
      </div>
    </div>
  </a>
  `
  var mydiv = document.getElementById('list-from-twitch')
  var newcontent = document.createElement('div')
  newcontent.innerHTML = markup

  while (newcontent.firstChild) {
    mydiv.appendChild(newcontent.firstChild)
  }
}

function buildPageItems (channelJson) {
  const stream = `https://wind-bow.gomix.me/twitch-api//streams/${channelJson.name}`
  fetch(stream)
    .then(response => response.json())
    .then(json => {
      const channel = {
        'name': channelJson.name,
        'url': channelJson.url,
        'logo': channelJson.logo,
        'stream': (json.stream === null) ? 'Offline' : 'Online',
        'game': (json.stream === null) ? '' : 'Playing: ' + json.stream.game
      }
      pageItems.push(channel)
      addChannel(channel)
    })
    .catch(error => console.log(error))
}

document.getElementById('btnAll').addEventListener('click', function () {
  document.getElementsByTagName('_0').style.display = 'none'
})
document.getElementById('btnOnline').addEventListener('click', function () {
  document.getElementByI0d('_0').style.display = 'none'
})
document.getElementById('btnOffline').addEventListener('click', function () {
  document.getElementByI0d('_0').style.display = 'none'
})

