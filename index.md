---
  layout: default
  permalink: /
---
#### This is the main page (home page) of the site.

This page also displays a link to the latest post:

{% for post in site.posts limit:1 %}
  <a class="post-title" href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">Latest post</a>
{% endfor %}
