import { Header } from "./components/header/index";
import { Profile } from "./components/profileCard/index";
import { PostCard } from "./components/postCard/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Profile
          name="Gogeta"
          profession="Fusion"
          icon="/img/gogetaIcon.jpg"
          banner="/img/gogetabanner.jpeg"
        />
        <section className="postSection">
          <PostCard
            name="Vegetto"
            profession="Fusion"
            icon="/img/vegettoIcon.jpg"
            textbox="ALRIIIIIIIIGHT"
            time="1h"
          />
        </section>
      </main>
    </>
  );
}

export default App;
