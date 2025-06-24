import Button from "./Button";
import "../styles/contact.css";
import { useState } from "react";

const ContactSection = () => {
  const [ toMail, setEmail] = useState("");
  const [content , setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ toMail, content }),
      });
    } catch {
      // ignore errors for now
    }
  };

  return (
    <section id="contact" className="contact container">
      <header>
        <p>Envie sua dúvida</p>
        <h2>Entre em contato</h2>
      </header>
      <p className="description">
        Ficou com alguma dúvida? Envie sua mensagem que retornaremos em breve.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor Email"
          value={ toMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
          value={ content }
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button text="Enviar" />
      </form>
    </section>
  );
};

export default ContactSection;