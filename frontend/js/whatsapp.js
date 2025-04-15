document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const waBtn = document.getElementById("whatsapp-btn");
  const myNumber = "5549988478484"; // seu número no formato internacional sem '+'

  waBtn.addEventListener("click", () => {
    // pega valores do form
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="_replyto"]').value.trim();
    const subject = form.querySelector('input[name="subject"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert(
        "Por favor, preencha todos os campos antes de enviar via WhatsApp."
      );
      return;
    }

    // monta o texto com quebras de linha
    const text =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}`;

    // codifica e abre o WhatsApp
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
});
