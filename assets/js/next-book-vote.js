document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".js-next-book-vote-form");

  forms.forEach(function (form) {
    const card = form.closest(".next-book-vote");
    const success = card.querySelector(".js-vote-success");
    const error = card.querySelector(".js-vote-error");
    const otherRadio = form.querySelector(".js-other-radio");
    const allVoteRadios = form.querySelectorAll("input[name='next_book_vote']");
    const otherWrapper = form.querySelector(".js-other-wrapper");
    const otherInput = form.querySelector(".js-other-input");
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
          headers: { "Accept": "application/json" }
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
});