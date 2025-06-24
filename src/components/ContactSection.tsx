import Button from "./Button";
import "../styles/contact.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact container">
      <header>
        <p>Envie sua dúvida</p>
        <h2>Entre em contato</h2>
      </header>
      <p className="description">
        Ficou com alguma dúvida? Envie sua mensagem que retornaremos em breve.
      </p>
      <form className="contact-form">
        <input type="email" placeholder="Seu melhor Email" />
        <input
          type="text"
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
        />
        <Button text="Enviar" />
      </form>
    </section>
  );
};

export default ContactSection;