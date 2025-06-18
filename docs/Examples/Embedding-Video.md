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


<ReactPlayer controls url="https://prod-files-secure.s3.us-west-2.amazonaws.com/7f380858-a4b6-819e-9520-00035f5c6787/f6bc4746-011e-4442-86ca-ed4337d70891/people_fre_motionAsset_p3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O3RZWLJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T182335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKfUzrfBQ9%2F2PCwJTqyDg4vwd6iq3Iq%2BvLb1ctXuHpogIhAOEKsk3iuIsmoshF7YOC6CqvP7IjyZ9rk45CDobMfHtQKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiQJ5Dk1RP7K06hEq3AP95lforoTAzKA7rA1xPxkZVH7r3USoLG2YsdDuU8uvsHbG954KllxfQM8q43jt%2FDjCgg9jzcZ7QIbmb%2B7%2FW379sLFArXPPe1Sh0pfBwDfmQcMXaPCsvgxbCJigO9QzZ5T2dpjBBiPMmnHLbE4yg1IyCOhhtPPhqNqtqVf0j3n7h7wpYJvGTamFKNJrCJJaK4prVhZ887liidS62jEZ4WLLZeYTMbTvabcQrTBM7nBnklPbDQLy5jd0mtn7UBox4S7ldqEARSJUX9PYDKEsAhCR%2Fd24ZKWvJgJ7iXZqoMz%2BftymF6InBqQ09WOD9t%2BRf5SxMsy4CnPClhdbPrFWUX1t17q7KaZJtXF8VQtnvK9blVT70YmNPx5LOHlT44PbsEpUmeqJFF6bvGp62%2BRB4t%2F0T6PntEtZNVKczc3j%2FOwju%2FyMuR2dsS61%2BuoDlOZyk0sl%2BWgb4bIkRgD9yj4fT18IE67wyoMVAW8sZg0xtWhS4ofsx7%2BUHDqIquLlS3XBInw7yNxyuFADrVlFHnEjkFPmiIWwsTQU4S%2BXuM27RRwLa2AHcs60YmDDPHdPaDFRGgaoIJ0O%2B74fFMTiG26DJQKv31RTT6eF06jGr6jPLjI8%2FvLmcRtffoJYiy6K1jC83MvCBjqkARJCAfN%2BUbyqkwFFglMr%2B5SVSb7WWwi400%2BxBO%2FVuKy2Z87I0JnJolTw3b5qrPHu9xuOBMI7OZNtfEDcGrZEn%2FGscOEDD1jwHDC2f7vFC1sZH8%2F2qG6%2FOABla%2BAGjuAzV1FlSv%2FX8mHUTniFpwdUv0IZ7kVdY7MfH1J9Q6vqEe%2F5OX2ue2mQoz8MHeclQzOrdqp9TLa8KYMzfSMFPsmVrjgmDwyz&X-Amz-Signature=f9ccaddb1b3d736c73182acba776f2e70d5139093d84442107050f66ecd6440a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" />


A GIF:


![](/notion_imgs/21480858-a4b6-81c7-afde-ef4896d9a11e.21480858-a4b6-8167-8424-f362df9e3b1e.gif)

