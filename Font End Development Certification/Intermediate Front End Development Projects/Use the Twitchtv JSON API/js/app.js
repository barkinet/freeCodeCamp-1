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

channels.forEach((channel) => {
  const chan = `https://wind-bow.gomix.me/twitch-api//channels/${channel}`
  fetch(chan)
    .then(response => response.json())
    .then(json => addChannel(json))
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
      .then(json => urlMatch 
      .catch(error => console.log(error))
  })
}

function urlMatch (url, match) {
  if (url === match) {
    return true
  }
}
