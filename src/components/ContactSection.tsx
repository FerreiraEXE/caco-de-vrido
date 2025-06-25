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
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4MjUwM2E1ZmQ1NmU5ZjczNGRmYmE1YzUwZDdiZjQ4ZGIyODRhZTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTM5MzcyMDYxODYxMjIzNzgzIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnZnNhbnRvczRAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiazVENGhrTkR5YVhvOHowR0hrbVZWdyIsImlhdCI6MTc1MDg2MDQyNSwiZXhwIjoxNzUwODY0MDI1fQ.YJixasXUsM_vs9gZDwT-Bdi8DlJnmnqvi4bAOcbZVex8ZvaThGvhAwFZ2IZgRobxBa3-2u8Jej3O3zSmbf6D771aPvoBaM-f5YGjmqjswZNfUknofa97QlmaxEkA0u8EehzFcvtISTQG1LI_WGcESEtNTV7Ixn_CQPFsknZlqSZAPFSsa8LEH1kSqvBAS5VaJm1XTh3kF6bk0z8iM5QbrIBrneEJtULvjn8db3k6nVWPlZyw52xSakvMpTlT4MMqSnxKzDTK_M2lhyGhA1UkXQEkzXyCF0DkiFetA6CbDlBIVHaeSrtbS5j-3EGWktYrfb7kjyYlYsMW3pJMuIpN5Q"
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