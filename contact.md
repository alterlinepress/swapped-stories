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
  <p class="contact-card__note">Use the form below to get in touch.</p>

  <form
    id="contact-form"
    class="contact-form"
    action="https://formspree.io/f/xjgannbz"
    method="POST"
  >
    <div class="contact-form__field">
      <label for="email">Email</label>
      <input id="email" type="email" name="email" autocomplete="email" required>
    </div>

    <div class="contact-form__field">
      <label for="subject">Subject</label>
      <input id="subject" type="text" name="subject" maxlength="120">
    </div>

    <div class="contact-form__field">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="7" required></textarea>
    </div>

    <input type="hidden" name="_subject" value="New message from Swapped Stories">
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="contact-form__honeypot">

    <button class="contact-form__submit" type="submit">Send message</button>
  </form>

  <div id="contact-success" class="contact-success" hidden>
    <h3>Thanks for reaching out.</h3>
    <p>Your message was sent successfully. I usually reply within a few days.</p>
  </div>

  <div id="contact-error" class="contact-error" hidden>
    <p>Something went wrong. Please try again, or message me on Instagram instead.</p>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  const error = document.getElementById("contact-error");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    error.hidden = true;

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        form.reset();
        form.hidden = true;
        success.hidden = false;
      } else {
        error.hidden = false;
      }
    } catch (err) {
      error.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  });
});
</script>

{% include next-book-vote.html %}