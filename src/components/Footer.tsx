import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container columns">
        <div className="column">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Faça parte do time</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Funcionalidades</h4>
          <ul>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Análise de dados</a></li>
            <li><a href="#">Bot discord</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Teste a Demo</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>
      <p className="bottom-text">Feito com bastante ódio na aula de Programação Web☠️ ©2024 Gabriel Ferreira - Todos os direitos reservados.</p>
    </footer>
  );
}