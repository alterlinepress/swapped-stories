---
layout: page
title: Authors
subtitle: Browse by original author
permalink: /authors/
noindex: true
sitemap: false
cover-img: /assets/img/handwriting.jpg
description: A complete list of authors whose works have been adapted by the Swapped Stories project, with links to gender-swapped chapters.
---

{% assign authors_sorted = site.authors | sort: "name" %}

<div class="works-list">
  {% for a in authors_sorted %}
    {% assign works_by_author = site.works | where: "author_id", a.slug %}
    {% assign work_count = works_by_author | size %}

    {% assign entry_count = 0 %}
    {% for w in works_by_author %}
      {% assign entries_for_work = site.posts | where: "work_id", w.slug %}
      {% assign entries_for_work_count = entries_for_work | size %}
      {% assign entry_count = entry_count | plus: entries_for_work_count %}
    {% endfor %}

    <div class="work-row py-3">
      <h3 class="h4 mb-0">
        <a href="{{ a.url | relative_url }}">{{ a.name | default: a.title }}</a>
      </h3>
      <p class="work-meta text-muted mb-0">
        {{ work_count }} {% if work_count == 1 %}work{% else %}works{% endif %}
        ·
        {{ entry_count }} published {% if entry_count == 1 %}adaptation{% else %}adaptations{% endif %}
      </p>
    </div>

    {% unless forloop.last %}
      <hr class="work-row-divider">
    {% endunless %}
  {% endfor %}
</div>