import logo from "../Navbar/img/Vector.png"
import searc from "../Navbar/img/Search.svg"
import "./styles.scss";

export default function Navbar() {
    return (
        <div style={{backgroundColor:"#FFFFFF"}}>
            <section>
                <nav className="navegationItems">

                    <div className="divlogo">
                        <img src={logo} alt="" />
                        <span>Digital Store</span>
                    </div>
                    <div>
                        <div className="inputsearch">
                            <input type="text" placeholder="Procure seu produto ..." />
                            <img src={searc} alt="" />
                        </div>
                    </div>
                    <div>CADASTRO</div>
                    <div>ENTRAR</div>
                    <div>CARRINHO</div>
                </nav>
            </section>
        </div>
    )
}