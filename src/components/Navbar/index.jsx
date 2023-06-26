import logo from "../Navbar/img/Vector.png"
import "./styles.scss";

export default function Navbar() {
    return (
        <div>
            <section>
                <nav className="navegationItems">

                    <div className="divlogo">
                        <img src={logo} alt="" />
                        <span>Digital Store</span>
                    </div>
                    <div>INPUT</div>
                    <div>CADASTRO</div>
                    <div>ENTRAR</div>
                    <div>CARRINHO DE COMPRAS</div>
                </nav>
            </section>
        </div>
    )
}