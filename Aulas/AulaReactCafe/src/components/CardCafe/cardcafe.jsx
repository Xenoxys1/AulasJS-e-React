import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import "./cardcafe.css";

export function CardBolado({ id, img, type, title, desc, price }) {
  const [qtd, setQtd] = useState(1);

  return (
    <section id={id}>
      <article>
        <img src={img} alt="Cafe" />
        <h3>{type}</h3>
        <h2>{title}</h2>
        <p>{desc}</p>

        <div className="wannaBuy">
          <h4>
            R$
            <span>{price}</span>
          </h4>
          <div className="howMany">
            <button className="changeQtd" onClick={() => setQtd(qtd - 1)}>
              -
            </button>
            <p>{qtd}</p>
            <button className="changeQtd" onClick={() => setQtd(qtd + 1)}>
              +
            </button>
          </div>
          <button className="buy">
            <ShoppingCart size={32} />
          </button>
        </div>
      </article>
    </section>
  );
}
