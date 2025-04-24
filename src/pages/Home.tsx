//revisar o nav se está no lugar correto
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/buttons.css";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
//import Champion from "../assets/champion.svg";
import Card from "../components/Card";
import Detergente from "../assets/detergente.svg";
import Espelho from "../assets/espelho.svg";
import Copo from "../assets/copo.svg";
import "../styles/solution.css";

import Button from "../components/Button";
import { useState } from "react";

export default function Home() {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
            

            <nav className="flex items-center justify-between">
            <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

            <div className="desktop-only">
    <ul className="flex gap-1">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#solution">Soluções</a>
        </li>
        <li>
            <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
            <a href="#pricing">Preços</a>
        </li>
        <li>
            <a href="#contact">Contato</a>
        </li>
    </ul>
</div>

<div className="desktop-only">
    <div className="flex items-center">
        <a className="reverse-color ml-lg" href="">Login</a>
        <Button text="Cadastre-se" />
    </div>
</div>

<div className="mobile-menu">
    {showMobileMenu ?
        <div className="mobile-menu-content">
            <div className="container flex">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#solution">Soluções</a>
                    </li>
                    <li>
                        <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#pricing">Preços</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                </span>
            </div>
        </div>
        :
        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
            <img src={Menu} alt="ícone menu" width={24} height={24} />
        </span>
    }
</div>

            </nav>
            </header>

            <section id="hero">
<span className="desktop-only">
    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
</span>
<img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

<div className="container content">
    <p className="desktop-only">
        Quebrou o vidro?
    </p>
    <h1>Um vidro novo direto para seu apê, é só pedir que entregamos para você!</h1>
    <p>Frete gratis para sul e sudeste.
    </p>
    <div className="flex gap-1">
        <span><Button text="Cadastre-se" /></span>
        <span className="desktop-only">
            <Button text="Veja mais" secondary />
        </span>
    </div>
</div>

</section>

<section className="container" id="solution">
{<header>
    <span>
        <h2>Vidros</h2>
        <span className="desktop-only">
            <h2>
                Sob medida para sua casa
            </h2>
        </span>
    </span>
    <p>
        Falou em vidros, é com a gente! A <strong>CACO DE VRIDO </strong>
        dês de <strong>1500</strong>, criando espelhos e trocando por terras
    </p>
    <p>Veja um pouco do que podemos oferecer</p>
</header>}

<section className="even-columns">
    <div className="Card">
        <Card
            icon={Detergente}
            title="Limpeza"
            description="Limpamos seu vidro, mesmo estando no último andar do Burj Khalifa."/>
    </div>

    <div className="Card">
        <Card
            icon={Espelho}
            title="Pacote de Vidros"
            description="Pacotes personalizados para pessoas que gostam de casas assustadoramente espelhadas."/>
    </div>

    <div className="Card">
        <Card
            icon={Copo}
            title="COPOS!"
            description="Também vendemos muitos copos... (Mais do que você imagina)."/>
    </div>
</section>

</section>




        </>
        
    )
}