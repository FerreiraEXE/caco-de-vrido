import React from "react";


interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <section className="even-columns">
      <div className="card">
        <span>
          <img src={icon} alt={`icone ${title}`} width={64} height={64} />
        </span>

        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p></p>
          <p></p>
          <p></p>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default Card;
