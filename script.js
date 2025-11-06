const envelope = document.getElementById("envelope");

// Prevent closing envelope when interacting with the letter/form
envelope.addEventListener("click", (e) => {
  if (e.target.closest(".letter")) return;
  envelope.classList.toggle("open");
});
