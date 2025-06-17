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


<ReactPlayer controls url="https://prod-files-secure.s3.us-west-2.amazonaws.com/7f380858-a4b6-819e-9520-00035f5c6787/f6bc4746-011e-4442-86ca-ed4337d70891/people_fre_motionAsset_p3.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK7FUFWF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T144130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkXRstkGn7H3f9mgb2epDETMjAoHC1zfS%2BbN5IFPKUXAiAfB2yO7RuBkqJlWwqDf1YsEEfQEFnxhPn32YO1VFWuySr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMyPykLxVh2fvSRjdpKtwDlK3rot7x%2BC8F0enlX2rqKeBcKwyznGCmp2UNDtVQ1u6ya3onWcpD6rkW5WPcaSYx5K%2BBuazROCHowCrxC2SfnDLbWvvG7q1OXMEtpaj2KE%2BvhZVrKw78bgXMK8zRCUJm7mAdiwYwGfxlxGhWsHfDs6dJGCh7rWT82d%2FEOfh2HG9uc5%2BtVt2H6hFeQORP7XHKSH10xwtc4SMSLACqT03Q5sVZdmez8liZ68zJkV5xqTJvj8nC6kmb9Oro6EMcgaTKFkkDUcgfbSp51dXt9t3uog7DnVqf9ZhCsCxPoRwt%2Bmvp4OvfCIKYlL0SQhzpgeOaHK5M2g6zbojocouJ6tDAktuHYqZ2HMS3XqJ6mV6zDwgPQrYxGnXHcJZuF7DH%2BKMd54Vw3JXMkXayuyL2rmmjbezcKmGOSn1ktpumkOJK5BcqDC%2BuH%2BZ10uPd0r2p%2By8KaEmzOcl6%2BdajwzRiurDxdaJK13%2BVHIWlYHpyQk%2BD1IhazBcAECpnaMEkMqCFqJyGJrEaTfHfOKAa1AjJ6LrFFK8cdEQqbbUWq5DfZrzlGxIMLavAb2JJgpcRasEgbA4VZ9pE95IiHZVEorfTm%2BWcL03C7j1pXUv28ymgq0NMmWyLMOBRhJljuiioL%2BMw2%2BPFwgY6pgG251rB%2B7uOLaPQxjwIm7ckButU9bpnyTw1qvVsew6gsjtfReRe9TXuQ9aUaieM87MCV%2FtdANVvWHWewJNWedKK2RMcAATpqgfvkqDgBALgtLmODA4joNG5o5n1C1DsqORgVGK9Xh9tM2JQMV988OpkzBT0ZX1%2FTA7Q5Z3XwK%2FwODPTqAsuGw7rmVvup4lwl0iNT2jBZ03s8G%2F6dtC%2BsRhTq0nb01Rp&X-Amz-Signature=116cb178ff5fb3ced09efef58a65f2e17c36b9ac636fc3e3f9b717bf5ddcc45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" />


A GIF:


![](/notion_imgs/21480858-a4b6-81c7-afde-ef4896d9a11e.21480858-a4b6-8167-8424-f362df9e3b1e.gif)

