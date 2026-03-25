document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".js-engagement-toggle");

  function closeAllPanels(exceptId) {
    toggles.forEach(function (toggle) {
      const panelId = toggle.getAttribute("data-target");
      const panel = document.getElementById(panelId);

      if (!panel || panelId === exceptId) return;

      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const panelId = toggle.getAttribute("data-target");
      const panel = document.getElementById(panelId);
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      if (!panel) return;

      if (isOpen) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      } else {
        closeAllPanels(panelId);
        panel.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.querySelectorAll(".next-book-vote").forEach(function (component) {
    const form = component.querySelector(".js-next-book-vote-form");
    const success = component.querySelector(".js-vote-success");
    const error = component.querySelector(".js-vote-error");
    const otherRadio = component.querySelector(".js-other-radio");
    const allVoteRadios = component.querySelectorAll("input[name='next_book_vote']");
    const otherWrapper = component.querySelector(".js-other-wrapper");
    const otherInput = component.querySelector(".js-other-input");
    const submitButton = form.querySelector("button[type='submit']");

    function updateOtherField() {
      const showOther = otherRadio.checked;
      otherWrapper.hidden = !showOther;
      otherInput.disabled = !showOther;
      otherInput.required = showOther;

      if (!showOther) {
        otherInput.value = "";
      }
    }

    allVoteRadios.forEach(function (radio) {
      radio.addEventListener("change", updateOtherField);
    });

    updateOtherField();

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      error.hidden = true;

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          updateOtherField();
          form.hidden = true;
          success.hidden = false;
        } else {
          error.hidden = false;
        }
      } catch (err) {
        error.hidden = false;
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Submit vote";
      }
    });
  });

  document.querySelectorAll(".subscribe-inline").forEach(function (component) {
    const form = component.querySelector(".js-subscribe-form");
    const success = component.querySelector(".js-subscribe-success");
    const error = component.querySelector(".js-subscribe-error");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      error.hidden = true;

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
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
        submitButton.textContent = "Subscribe";
      }
    });
  });
});