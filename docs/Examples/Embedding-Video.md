---
title: Embedding Video
sidebar_position: 3
slug: /21480858-a4b6-81c7-afde-ef4896d9a11e
---

import ReactPlayer from "react-player";

If docu-notion notices that you have embedded a video, it should convert that to code useable in Docusaurus by using [react-player](https://www.npmjs.com/package/react-player).


YouTube example:


<ReactPlayer controls url="https://www.youtube.com/watch?v=FXIrojSK3Jo" />


docu-notion does the following when it detects an embedded link to a video:

- Adds `import ReactPlayer from "react-player";` to the markdown
- Inserts html like `<ReactPlayer controls url="https://www.youtube.com/watch?v=5M3nJrlf3p0&t=70s" />`

:::info

If your site is not based on `docu-notion-sample-site`, you may need to add ReactPlayer to your Docusaurus project:
`yarn add react-player` or `npm i react-player`

:::




If docu-notion notices that you have embed a video it should convert that to code useable in Docusaurus by using [react-player](https://www.npmjs.com/package/react-player).


Vimeo example:


<ReactPlayer controls url="https://vimeo.com/461361122" />


This one is a direct upload:


<ReactPlayer controls url="https://prod-files-secure.s3.us-west-2.amazonaws.com/7f380858-a4b6-819e-9520-00035f5c6787/f6bc4746-011e-4442-86ca-ed4337d70891/people_fre_motionAsset_p3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZZTNJR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T143156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbx5DqFeI3IsHQ31TK0iIonIryTID%2B0NDy7INfD20VYAiBadpi%2Bz1G15BOwdIpQqfc1t4FLcKVBDS9iXyDYwia1dir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMiuHWtagke1nOO5jyKtwDUrTF8G%2FfJuYhyrvxhiv%2FhSq9KS3Vm2Emz5%2FuiR9grNsZjkiIchvW8JvTcOVSNBoZD74ulZ7jGNawm9o8AL%2BDyxuRBccki5TsAeEclvIZDvzQHR%2BPkFCEUWYykR%2BnVt4PvHpJHV0%2BBHW5oFVxIbFcmfR4oLMxMSIyPdJWsXv22SNKSbFZ4S2vERCcZ8haog09nfOssfIdvnzfkwXxfcOjcKWFaVHmzAvjRVlErrKCy9yNZmvkZNf5tvDIuuEWJ5EMEhDLiRiMIErycR0%2FHOcZuQ3PXw7xqaN%2FUo2CNKPZy1wJSJBjEfbVG%2FjuC2Enq2514nwLYPZZmMZX1i3zFWkBZ9RVitxOxZacvafgBGxKQDKsgVxr0uVXWsGvrF5ex7fsN%2BJNsou8xY2bSXNCWryEtQZPsofTL%2BIFUlEq7lzjL2%2BANU9GTguVapx6Y6gXP%2FYtoO3FI7QO4siSCUV3iSrb2rKCAxuf%2BYPo%2FSqIvWDysK2LN4s9qNlc1ps6iGG7%2B55FY%2FktJmuLHaqH5GzZ%2F7BMsIQgXcD8thOMoE8pqo%2FarmdAydYvz9bZLC%2B2z%2BUI1ZnHwSfoNz5WeU7GPmD2eetSzNkvnFJ88%2FKWewlmOW2H4EtQxmsgtQ7tpeH%2BPxYwnuTFwgY6pgFl1F0gdDvKN4XA%2BKgkF%2FiCEBYsQGz9Sx0pWCwDCYhkLFPBjmh2HmT9f%2FgQgGqLyNLRwS8I7GOwqJaLmqVv6krVUlONnmoo5bTSwY1B1cDew50a6jcaJcGDLZFF0KOU5NcNCSZLaw%2FbFjsaCYysD8Xj4%2FhMiclb%2BmUGNiZktHx2AQgpTBH%2B58VZuqR3iYKTYy2D9WQsvR%2B4uDs0yjg2Up02J0MyMLHX&X-Amz-Signature=9205d2bd9a82623c4c522d3914a0b912f0b0bbaf1ac11bd61b8bee548819409d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" />


A GIF:


![](/notion_imgs/21480858-a4b6-81c7-afde-ef4896d9a11e.21480858-a4b6-8167-8424-f362df9e3b1e.gif)

