---
layout: page
title: Works
subtitle: Browse by book or collection
permalink: /works/
noindex: true
sitemap: false
cover-img: /assets/img/book-pen.jpg
description: A complete list of books and collections adapted by the Swapped Stories project, with links to gender-swapped chapters.
---


{% assign works_sorted = site.works | sort: "title" %}

<div class="works-list">
  {% for w in works_sorted %}
    {% assign a = site.authors | where: "slug", w.author_id | first %}
    {% assign entries = site.posts | where: "work_id", w.slug %}
    {% assign entry_count = entries | size %}

    <div class="work-row py-3">
      <h3 class="h4 mb-0">
        <a href="{{ w.url | relative_url }}">{{ w.title | default: w.name }}</a>
      </h3>
      <p class="text-muted mb-0">
        {% if a %}
          by <a href="{{ a.url | relative_url }}">{{ a.name | default: a.title }}</a>
        {% elsif w.author_id %}
          by {{ w.author_id }}
        {% endif %}
        {% if a or w.author_id %} · {% endif %}
        {% assign work_entry_type = w.entry_type | default: "entries" %}
        
        {% case work_entry_type %}
          {% when "chapters" %}
            {% assign work_entry_type_singular = "chapter" %}
          {% when "short stories" %}
            {% assign work_entry_type_singular = "short story" %}
          {% else %}
            {% assign work_entry_type_singular = "entry" %}
        {% endcase %}
        
        {{ entry_count }} adapted {% if entry_count == 1 %}{{ work_entry_type_singular }}{% else %}{{ work_entry_type }}{% endif %}
      </p>
    </div>

    {% unless forloop.last %}<hr class="work-row-divider">{% endunless %}
  {% endfor %}
</div>