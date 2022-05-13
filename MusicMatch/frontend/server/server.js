const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');
const lyricsFinder = require('lyrics-finder');

const app = express();
app.use(cors());
app.use(bodyParser.json());;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log(refreshToken);
  console.log("hi")
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '04306bc8614e44bbb0f6f8071bb81e01',
    clientSecret: '70b523ade19f49008e534f21fae028c8',
    refreshToken
  })

  spotifyApi
    .refreshAccessToken()
    .then(
      (data) => {
        res.json({
          accessToken: data.accessToken,
          expiresIn: data.body.expiresIn
        })
      }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
      })
})

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '04306bc8614e44bbb0f6f8071bb81e01',
    clientSecret: '70b523ade19f49008e534f21fae028c8',
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  })
    .catch(() => {
      res.sendStatus(400);
    })
});

app.get('/lyrics', async (req, res) => {
  const lyrics = (await lyricsFinder(req.query.artist, req.query.track)) || "No lyrics found."
  res.json({ lyrics })
})

app.listen(3001);