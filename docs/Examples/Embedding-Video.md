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


<ReactPlayer controls url="https://prod-files-secure.s3.us-west-2.amazonaws.com/7f380858-a4b6-819e-9520-00035f5c6787/f6bc4746-011e-4442-86ca-ed4337d70891/people_fre_motionAsset_p3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6LF2QUL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCZpN0mn%2BuEILnapc8spK%2FaMZ7djvbD5x17uqVrcSsK0gIgN%2BMrOQlaA0%2BvFeoHdrwGxRLy6PiGe%2Fl5kmi7GtB2ZFUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEz1vN5eL%2FOA28C%2BqyrcAylF5mLrqszrTngXYXsBE5%2B06bEMulBf3d%2FXDnL83NWeLl2BKgiCq502Cs3uxH1y7hNBEGmQ0t1dAvsT%2BMlKKRElxnAnR0AULAA3KlJmI1OFjl%2Br1DzYs30RCTDS2Q7mSoUtx41d0QOTo80HW9HigZgzpUEg%2FIK88xjDti1myTYJUDDO1xzC2ni1Gnn%2BKn6qgXsoVBr7sejdhAhaRicX3p4rUaRHauXQstiUx57bkZGCDcBRfKFEmvzv73G2VqSJkGP8dowbx%2FnQ8d0SzcEt0Se%2Fca2p70H63j2hsD6648QW%2Ffh5ZGt8x9x1qctkR1ADgy7aJvYhhoc6cbEoo0iuSy3W4xKPFvxLIXkWFIS%2Bj9mygs7uN%2Fz6zjTlU9DaSXzt7NcYmHgM5%2FcrI3eIZehDnztLbE%2BR2SfDMFfjRDH%2FAclcmKxJDnfKFXJscViAdMqCjYpRtvFkIZo1tSBbuHuvgo2aEPybrIEiPbptIREWcJn81%2F8hxtcVYUPGvm3plIlCLMfNhBbYeEwPKPUMrEFvxvBLWjpvwFvaBCeXPAM5gtAwt%2BDRKe1TZaDqXGPz2aO12u7Uu7Hsm0oq%2F33ycen9hnoBPk%2FlH1IDSRYLGt0oh6RNd%2BAC71aJf2WA7tE0MJO%2FwcIGOqUBURnPuwxAZRnRml80vWjmWsnV4rVfl7DTRBkuntJX%2FTIiDhtZ%2Fsm2j3NURfY99T7dIqJBsI7p0yTTnHtJ5Mi73KhVb1PHCRVRB1bQX8ww8ccm0E58hCAbB3XtSCEG5hhJJTETSmnjHzzNSg2LbpX26jSuUNlIsI8UT%2FKgobz32ZmgYp4rH96S8SlngB1nYB1f8Y8ZSbBH6kRM9IAifJKjlyyALxqp&X-Amz-Signature=a2ee3db691f0dc270303ef7d07b3dbcd9af1f830002f58f44b0a0175123d8bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" />


A GIF:


![](/notion_imgs/21480858-a4b6-81c7-afde-ef4896d9a11e.21480858-a4b6-8167-8424-f362df9e3b1e.gif)

