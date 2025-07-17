  const form = document.getElementById("contact-form");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    // Captura dos elementos
    const nomeEl = document.getElementById("nome");
    const emailEl = document.getElementById("email");
    const assuntoEl = document.getElementById("assunto");
    const mensagemEl = document.getElementById("mensagem");

    let valid = true;

    // Função para checar se vazio e aplicar estilo
    [nomeEl, emailEl, assuntoEl, mensagemEl].forEach((el) => {
      if (el.value.trim() === "") {
        el.style.border = "2px solid red";
        valid = false;
      } else {
        el.style.border = "1px solid #ced4da"; // estilo padrão do bootstrap
      }
    });

    // Validação de e-mail
    if (emailEl.value.trim() !== "" && !validateEmail(emailEl.value)) {
      emailEl.style.border = "2px solid red";
      alert("Por favor, informe um e-mail válido.");
      return;
    }

    if (!valid) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Enviar com EmailJS
    emailjs
      .send("service_esobaqf", "template_shvrhmn", {
        from_name: nomeEl.value.trim(),
        from_email: emailEl.value.trim(),
        subject: assuntoEl.value.trim(),
        message: mensagemEl.value.trim(),
      })
      .then(
        function () {
          alert("Mensagem enviada com sucesso!");
          form.reset();
          resetFieldStyles();
        },
        function (error) {
          console.error("Erro no envio:", error);
          alert("Erro ao enviar. Tente novamente mais tarde.");
        }
      );
  }

  // Função para validar o formato do e-mail
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Função para resetar estilos dos campos após envio
  function resetFieldStyles() {
    ["nome", "email", "assunto", "mensagem"].forEach((id) => {
      document.getElementById(id).style.border = "1px solid #ced4da";
    });
  }
