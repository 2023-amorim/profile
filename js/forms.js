const form = document.getElementById("contact-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  emailjs
    .send("service_esobaqf", "template_shvrhmn", {
      from_name: document.getElementById("nome").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("assunto").value,
      message: document.getElementById("mensagem").value,
    })
    .then(
      function () {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      },
      function (error) {
        console.error("Erro no envio:", error);
        alert("Erro ao enviar. Tente novamente mais tarde.");
      }
    );
}
