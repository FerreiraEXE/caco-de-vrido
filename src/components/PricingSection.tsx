import Check from "../assets/Check.svg";
import Button from "../components/Button";

const PricingSection = () => {
  return (
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
      </header>

      <section className="even-columns gap-1.5">
        {/* Cartão Básico */}
        <div className="pricing-card">
          <span className="plan">
            <h3>Básico</h3>
            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
          </span>
          <h2>Grátis</h2>
          <Button text="Pedir agora" secondary key="free" />
          <span className="hr" />
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Retire na loja</p>
          </span>
          <ul className="features">
            <li>
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </li>
          </ul>
        </div>

        {/* Cartão Premium */}
        <div className="pricing-card premium">
          <span className="bonus">
            <p>1º MÊS COM DESCONTO</p>
          </span>
          <span className="plan">
            <h3>Premium</h3>
            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
          </span>
          <span className="price">
            <h2>R$ 89,90</h2>
            <p>/mês</p>
          </span>
          <Button text="Pedir agora" key="premium" />
          <span className="hr" />
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>2 Entregas</p>
          </span>
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>5 Refeições por semana</p>
          </span>
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>2 Sucos por semana</p>
          </span>
        </div>

        
      </section>
    </section>
  );
};

export default PricingSection;
