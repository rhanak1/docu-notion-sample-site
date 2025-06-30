const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Your baseUrl in docusaurus.config.js, e.g. '/docu-notion-sample-site/'
const baseUrl = '/docu-notion-sample-site';

const buildDir = path.join(__dirname, 'build');

// Serve static files under the base URL
app.use(baseUrl, express.static(buildDir));

// Fallback: for SPA routing, serve index.html for all subroutes under baseUrl
app.get(`${baseUrl}/*`, (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Docusaurus site available at http://localhost:${port}${baseUrl}`);
});
