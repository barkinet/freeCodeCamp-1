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
  const endpoint = `https://wind-bow.gomix.me/twitch-api//channels/${channel}`
  fetch(endpoint)
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
        <p>Currently not streaming</p>
      </div>
    </div>
    <div class="state" id="state0">
      <h1 style="color:#d9534f; font-weight:Arial">Offline</h1>
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
