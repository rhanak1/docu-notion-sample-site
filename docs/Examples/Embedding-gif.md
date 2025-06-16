---
title: Embedding gif
sidebar_position: 4
slug: /21480858-a4b6-816f-b549-ce01afc24cf4
---



If you embed a gif in notion, it should be embedded in Docusaurus


## Imgur {#21480858a4b68175aca6fe2ddddac345}


![](/notion_imgs/21480858-a4b6-816f-b549-ce01afc24cf4.21480858-a4b6-81aa-b42a-f502f7c164d6.gif)


## Giffy,  {#21480858a4b6812fa1e8c0534a4159dc}


![](/notion_imgs/21480858-a4b6-816f-b549-ce01afc24cf4.21480858-a4b6-81f9-945a-fed092403728.gif)


When it detects an embedded gif, docu-notion does the following:

- Adds a `import GifPlayer from "react-gif-player";` to the markdown.
- Inserts html like `<GifPlayer gif="https://media.giphy.com/media/VhiAuDYHkNPydiNnOs/giphy.gif" />`

:::info

If your site is not based on `docu-notion-sample-site`, you may need to add react-gif-player to your Docusaurus project:
`yarn add react-gif-player` or `npm i react-gif-player`

:::



