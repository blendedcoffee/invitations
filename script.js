const envelope = document.getElementById("envelope");

// Only toggle open/close when the envelope background is clicked,
// not when typing or clicking inside the letter/form.
envelope.addEventListener("click", (e) => {
  if (e.target.closest(".letter")) return; // prevent closing if clicking inside
  envelope.classList.toggle("open");
});
