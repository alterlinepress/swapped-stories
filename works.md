---
layout: page
title: Works
permalink: /works/
noindex: true
sitemap: false
description: A complete list of books and collections adapted by the Swapped Stories project, with links to gender-swapped chapters.
---

Browse by book or collection. Each work page contains the full set of adapted chapters/stories.

{% assign works_sorted = site.works | sort: "title" %}

<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th>Work</th>
      <th>Author</th>
      <th>Entries</th>
    </tr>
  </thead>
  <tbody>
  {% for w in works_sorted %}
    {% assign a = site.authors | where: "slug", w.author_id | first %}
    {% assign entries = site.posts | where: "work_id", w.slug %}

    <tr>
      <td>
        <a href="{{ w.url | relative_url }}">{{ w.title | default: w.name }}</a>
      </td>
      <td>
        {% if a %}
          <a href="{{ a.url | relative_url }}">{{ a.name | default: a.title }}</a>
        {% else %}
          {% if w.author_id %}{{ w.author_id }}{% endif %}
        {% endif %}
      </td>
      <td>{{ entries | size }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
