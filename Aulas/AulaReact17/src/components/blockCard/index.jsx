import { MapPin } from "lucide-react";

export function BlockCard({ img, title, desc, reg }) {
  return (
    <section className="blockCard">
      <div id="imageBg">
        <img src={img} alt="image" />
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div id="region">
        <MapPin />
        <p>{reg}</p>
      </div>
    </section>
  );
}
