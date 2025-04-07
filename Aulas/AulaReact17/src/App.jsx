import { MapPin } from "lucide-react";
import { BlockCard } from "./components/blockCard";
import { Search } from "lucide-react";
import data from "../data.json";

function App() {
  return (
    <>
      <section id="header">
        <div>
          <Search />
          <input type="text" />
          <MapPin />
          <div id="selectionBox">
            <select>
              <option value="São Paulo - SP">São Paulo - SP</option>
              <option value="Florianopolis - SC">Florianopolis - SC</option>
              <option value="Curitiba - PR">Curitiba - PR</option>
              <option value="Salvador - BA">Salvador - BA</option>
              <option value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</option>
              <option value="Porto Alegre - RS">Porto Alegre - RS</option>
            </select>
          </div>
          <button type="submit">BUSCAR AGORA</button>
        </div>
      </section>
      <section>
        <div id="recommended">
          <h1>Blocos Recomendados</h1>
          <div id="sort">
            <button id="list">LISTA</button>
            <button id="map">MAPA</button>
          </div>
        </div>
        <div id="blockGrid">
          {data.blocos.map((block) => (
            <BlockCard
              key={block.id}
              img={block.img}
              title={block.title}
              desc={block.desc}
              reg={block.region}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
