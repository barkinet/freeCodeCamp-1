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

/*
 * Channels that do no exist
 * 'brunofin', 'comster404'
 */

const pageItems = []

channels.forEach((channel) => {
  const chan = `https://wind-bow.glitch.me/twitch-api//channels/${channel}`
  fetch(chan)
    .then(response => response.json())
    .then(json => buildPageItems(json))
    // .then(json => addChannel(json))
    // .then(json => console.table(json))
    // .then(json => console.log(json))
    .catch(error => console.log(error))
})

document.addEventListener('DOMContentLoaded', function () {
  console.log(document.readyState)
  // add things
})

function addChannel (json) {
  const markup = `
    <a href="${json.url}" target="_blank" class="list-group-item">
    <div class="channel-description">
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
  const stream = `https://wind-bow.glitch.me/twitch-api//streams/${channelJson.name}`
  fetch(stream)
    .then(response => response.json())
    .then(json => {
      const channel = {
        'name': (channelJson.name === undefined) ? 'Channel does not exist' : channelJson.name,
        'url': channelJson.url,
        'logo': (channelJson.logo === undefined) ? '' : channelJson.logo,
        'stream': (json.stream === null) ? 'Offline' : 'Online',
        'game': (json.stream === null) ? '' : 'Playing: ' + json.stream.game
      }
      pageItems.push(channel)
      addChannel(channel)
    })
    .catch(error => console.log(error))
}

document.getElementById('btnAll').addEventListener('click', function () {
  toggleDisplay('All')
  // document.getElementById('btnAll').classList.toggle('btn-primary')
})

document.getElementById('btnOnline').addEventListener('click', function () {
  toggleDisplay('Offline')
  // document.getElementById('btnOnline').classList.toggle('btn-primary')
})
document.getElementById('btnOffline').addEventListener('click', function () {
  toggleDisplay('Online')
  // document.getElementById('btnOffline').classList.toggle('btn-primary')
})

function toggleDisplay (word) {
  const elements = document.getElementsByClassName('list-group-item')
  for (const element of elements) {
    if (element.textContent.match(word)) {
      element.style.display = 'none' // block
    } else {
      element.style.display = 'block'
    }
  }
}
