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
                    // a chave vai expirar em 1h
          "Authorization": "Bearer yJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjc3NGJkODcyOWVhMzhlOWMyZmUwYzY0ZDJjYTk0OGJmNjZmMGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTM5MzcyMDYxODYxMjIzNzgzIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnZnNhbnRvczRAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiOEZyOGUxN3A4cDg2RUVxaFdqOWRRdyIsIm5iZiI6MTc1MDc5NDM2MywiaWF0IjoxNzUwNzk0NjYzLCJleHAiOjE3NTA3OTgyNjMsImp0aSI6IjI3Y2MyNTFiNzAyNzgzMzlmMjQwYmUzMTlhYmZjMWU4ZTU0MzkxMzQifQ.aa2PuKAEq2CKbZoQVJbLy-1gg_6ah3fvZuPH6sqY5I4H1XpZuhxLcqItk2bBMfnXE9YxIWye7_dTtlbwYQEesGixfy5qAFWXdnsipPmTVsQKgO9hosIId0F6VE0BeiUZ6YOqZDSYxKMbdMPDdijnnzO6OWzWnvJPhKokpphj2FdCb0b7wVmeQmYy7-nJwEbZROdouWHZFzf9kRvJe0KiYF_qHD_L2UJXEnzps3GPh1RM3LEnvPlM7Xhco36ohhqKln8uj7Ukfz56RU-L7nrQfVBBIl5SXNo8KAoRx-6APl-0YltS824LM__UK_LeY7EyjydQk0x6Jt8PIAYFlGuyJw"
        },
        body: JSON.stringify({ toMail, content }),
      });
    } catch {
      
    }
        alert("Mensagem enviada com sucesso!");
    setEmail("");
    setMessage("");
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