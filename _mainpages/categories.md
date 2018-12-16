---
layout: default
permalink: /categories
---
### All categories:
<ul>
  {% for tag in site.categories %}
  <li>
    <a href="/category/{{ tag[0] }}" class="post-tag">{{ tag[0] }}</a>
  </li>
  {% endfor %}
</ul>
