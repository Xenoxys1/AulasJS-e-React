import { CardBolado } from "./components/CardCafe/cardcafe";

export function App() {
  return (
    <>
      <div className="grid-container">
        <CardBolado
          id="Tradicional"
          img="/img/Tradicional.png"
          type="TRADICIONAL"
          title="Expresso Tradicional"
          desc="O tradicional café feito com água quente e grãos moídos"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Com_leite"
          img="/img/Café com Leite.png"
          type="COM LEITE"
          title="café com Leite"
          desc="Meio a meio de expresso tradicional com leite vaporizado"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Mochaccino"
          img="/img/Mochaccino.png"
          type="TRADICIONAL"
          title="Mochaccino"
          desc="Café expresso com calda de chocolate, pouco leite e espuma"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Americano"
          img="/img/Americano.png"
          type="TRADICIONAL"
          title="Expresso Americano"
          desc="Expresso diluído, menos intenso que o tradicional"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Latte"
          img="/img/Latte.png"
          type="TRADICIONAL"
          title="Latte"
          desc="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Chocolate_quente"
          img="/img/Chocolate Quente.png"
          type="TRADICIONAL"
          title="Chocolate Quente"
          desc="Bebida feita com chocolate dissolvido no leite quente e café"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Capuccino"
          img="/img/Capuccino.png"
          type="TRADICIONAL"
          title="Capuccino"
          desc="Bebida com canela feita de doses iguais de café, leite e espumas"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Cubano"
          img="/img/Cubano.png"
          type="TRADICIONAL"
          title="Cubano"
          desc="Drink gelado de café expresso com rum, creme de leite e hortelã"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Expresso_gelado"
          img="/img/Café Gelado.png"
          type="TRADICIONAL"
          title="Expresso Gelado"
          desc="Bebida preparada com café expresso e cubos de gelo"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Macchiato"
          img="/img/Macchiato.png"
          type="TRADICIONAL"
          title="Macchiato"
          desc="Café expresso misturado com um pouco de leite quente e espuma"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Havaiano"
          img="/img/Havaiano.png"
          type="TRADICIONAL"
          title="Havaiano"
          desc="Bebida adocicada preparada com café e leite de coco"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Arabe"
          img="/img/Árabe.png"
          type="TRADICIONAL"
          title="Árabe"
          desc="Bebida preparada com grãos de café árabe e especiarias"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Irlandes"
          img="/img/Irlandês.png"
          type="TRADICIONAL"
          title="Irlandês"
          desc="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          price="9,90"
        ></CardBolado>
        <CardBolado
          id="Expresso_cremoso"
          img="/img/Expresso Cremoso.png"
          type="TRADICIONAL"
          title="Expresso Cremoso"
          desc="Café expresso tradicional com espuma cremosa"
          price="9,90"
        ></CardBolado>
      </div>
    </>
  );
}
