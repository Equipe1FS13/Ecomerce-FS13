import logo from "../Navbar/img/Vector.png"
import searc from "../Navbar/img/Search.svg"
import cart from "../Navbar/img/Group 53581.svg"
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
                    <div><a href="">Cadastre-se</a></div>
                    <div><button className="Buttonpropsnavbar">Entrar</button></div>
                    <div>
                        <img src={cart} alt="" style={{
                            cursor: "pointer"
                        }}/>
                    </div>
                </nav>
            </section>
        </div>
    )
}