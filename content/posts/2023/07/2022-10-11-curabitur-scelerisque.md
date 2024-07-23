---
id: 5876de9a-a816-417e-9937-816a16287279
isIndex: false
draft: false
date: 2022-10-01T19:34:08.410Z
title: Curabitur scelerisque
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
  lacinia ligula non facilisis eleifend. Cras at gravida ipsum. Donec quam erat,
  fermentum nec commodo sed, tincidunt vitae nisl.
image:
  src: /images/uploads/bertrand-borie-tmlculvqha0-unsplash.jpg
  credit: Photo by [Bertrand
    Borie](https://unsplash.com/@bertrand1212?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    on
    [Unsplash](https://unsplash.com/s/photos/cap-ferret?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
authors:
  - 79f47373-bdd4-4dec-9d15-14eacffee3f6
categories: 69af4375-1e8f-442d-9e60-fbe75ca7340e
tags:
  - 1bfa0ac4-4962-4434-b328-e10f9fd2c6c2
  - 280ee3d6-42d5-455b-b0df-d46b77453638
---
## Markdown (Heading 2)

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Quisque vestibulum, mi eget semper laoreet, **odio quam ullamcorper turpis**, auctor fermentum magna leo eget nisi. Fusce *id imperdiet nunc*. Mauris tincidunt velit sed rhoncus tincidunt. Vestibulum vulputate odio eget risus lacinia, eget sollicitudin lectus dictum. Donec varius velit nisi, a accumsan odio molestie ut. Donec quis tristique elit. Nunc tempus tempor neque a fringilla.

* list
* list
* list

  * list
  * list
* list

Curabitur scelerisque sollicitudin lobortis. Sed pharetra, massa eu varius egestas, metus nulla rutrum diam, et accumsan purus lacus vel ante. Suspendisse egestas augue a egestas consectetur. Aliquam interdum hendrerit porta. Maecenas at quam vel lorem malesuada euismod nec vel nibh. Cras ac facilisis nunc.

> #### Curabitur scelerisque sollicitudin lobortis
>
> * Massa eu varius egestas
> * Suspendisse egestas augue a egestas consectetur
>
>   *Vestibulum* eget sollicitudin **dictum**.

Mauris tincidunt velit sed rhoncus tincidunt. Vestibulum vulputate odio eget risus lacinia, eget sollicitudin lectus dictum. Donec varius velit nisi, a accumsan odio molestie ut. Donec quis tristique elit. Nunc tempus tempor neque a fringilla.

> Mauris tincidunt velit sed rhoncus tincidunt. Vestibulum vulputate odio eget risus lacinia, eget sollicitudin lectus dictum.

1. First item
2. Second item
3. Third item
4. Fourth item

Code

```html
<html>
  <head>
    <title>Test</title>
  </head>
</html>
```

## Hugolify shortcodes

### Alerts

{{&lt; button text=&#34;${obj.text}&#34; url=&#34;${obj.url}&#34; blank=&#34;${obj.blank}&#34; &gt;}}

{{< alert text="Curabitur scelerisque sollicitudin lobortis" >}}
{{< alert text="Suspendisse egestas augue a egestas consectetur" state="light" >}}
{{< alert text="Sed pharetra, massa eu varius egestas" state="warning" >}}
{{< alert text="Donec varius velit nisi, a accumsan odio molestie ut" state="info" >}}
{{< alert text="Maecenas at quam vel lorem malesuada euismod nec vel nibh" state="success" >}}
{{< alert text="Cras ac facilisis nunc" state="danger" >}}

### Blockquote

{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" >}}
{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" title="Sed Pharetra" >}}
{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" title="Sed Pharetra" text="Egestas augue a egestas" >}}
{{< blockquote quote="Donec varius velit nisi, a accumsan odio molestie ut" title="Sed Pharetra" text="Egestas augue a egestas" image="/images/uploads/bernd-dittrich-tfwcwynxibw-unsplash.jpg" >}}

### Buttons

{{< button url="/" text="Back home" blank=false >}}
{{< button url="/" text="External link button" blank=true >}}
{{< button url="/" text="Secondary button" class="btn-secondary" >}}

### Details

{{< details title="Maecenas at quam" text="Maecenas at quam vel lorem malesuada euismod nec vel nibh" >}}

### Figure

{{< figure src="/images/uploads/bernd-dittrich-tfwcwynxibw-unsplash.jpg" alt="Alternative text" legend="Donec varius velit nisi, a accumsan" credit="Donec varius velit nisi, a accumsan odio molestie ut" >}}
{{< figure src="/images/uploads/bernd-dittrich-tfwcwynxibw-unsplash.jpg" alt="Alternative text" legend="Donec varius velit nisi, a accumsan"  >}}
{{< figure src="/images/uploads/bernd-dittrich-tfwcwynxibw-unsplash.jpg" alt="Alternative text" credit="Donec varius velit nisi, a accumsan odio molestie ut" >}}

### Video

{{< video mp4="/videos/lawyerify-independent.mp4" webm="/videos/lawyerify-independent.mp4" legend="Donec varius velit nisi, a accumsan" credit="Donec varius velit nisi, a accumsan odio molestie ut" controls=true screenshot=true >}}
{{< video mp4="/videos/lawyerify-independent.mp4" webm="/videos/lawyerify-independent.mp4" legend="Donec varius velit nisi, a accumsan" controls=true screenshot=true >}}
{{< video mp4="/videos/lawyerify-independent.mp4" webm="/videos/lawyerify-independent.mp4" credit="Donec varius velit nisi, a accumsan odio molestie ut" controls=true screenshot=true >}}

## Hugo shortcodes

### Highlight

{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" >}}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
switch strings.ToLower(style) {
case "go":
return strings.Title
case "chicago":
return transform.NewTitleConverter(transform.ChicagoStyle)
default:
return transform.NewTitleConverter(transform.APStyle)
}
}
{{< /highlight >}}

### Twitter

{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}

### Vimeo

{{< vimeo 146022717 vimeo "iframe title" >}}

### Youtube

{{< youtube id="t9H_Jl1rc6k" title="Proin maximus" class="youtube" >}}
