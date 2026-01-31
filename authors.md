---
layout: page
title: Authors
permalink: /authors/
---

Browse by original author. Each author page lists all adapted chapters/stories associated with that author.

{% assign authors_sorted = site.authors | sort: "name" %}

<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th>Author</th>
      <th>Works</th>
      <th>Entries</th>
    </tr>
  </thead>
  <tbody>
  {% for a in authors_sorted %}
    {% assign works_by_author = site.works | where: "author_id", a.slug %}
    {% assign entries_by_author = site.posts | where: "author_id", a.slug %}

    <tr>
      <td>
        <a href="{{ a.url | relative_url }}">{{ a.name | default: a.title }}</a>
      </td>
      <td>{{ works_by_author | size }}</td>
      <td>{{ entries_by_author | size }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
