---
  layout: default
  permalink: /
---
#### This is the main page of the site.

This page also displays the latest post:

{% for post in site.posts limit:1 %}
  <a class="post-title" href="{{ post.url }}">Latest post</a>
{% endfor %}
