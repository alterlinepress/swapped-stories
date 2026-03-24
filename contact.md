---
layout: page
title: Contact
subtitle: Get in Touch
noindex: true
sitemap: false
cover-img: /assets/img/notebook.jpg
description: Contact information and project details for Swapped Stories.
---

Have a question about the project, a correction to suggest, or an idea for a future story? Send me a message using the form below or reach out on [Instagram](https://www.instagram.com/swappedstories). I usually reply within a few days.

If you're suggesting a story, please include the title, author, and why you think it would make an interesting gender-swapped adaptation. 

<div class="contact-card">
  <h2 class="contact-card__title">Send a Message</h2>
  <p class="contact-card__note">
    Use the form below to get in touch.
  </p>

  <form
    class="contact-form"
    action="https://formspree.io/f/xjgannbz"
    method="POST"
  >
    <div class="contact-form__field">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        autocomplete="email"
        required
      >
    </div>

    <div class="contact-form__field">
      <label for="subject">Subject</label>
      <input
        id="subject"
        type="text"
        name="subject"
        maxlength="120"
      >
    </div>

    <div class="contact-form__field">
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="7"
        required
      ></textarea>
    </div>

    <input type="hidden" name="_subject" value="New message from Swapped Stories">
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="contact-form__honeypot">

    <button class="contact-form__submit" type="submit">Send message</button>
  </form>
</div>