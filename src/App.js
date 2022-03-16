import { Banner } from "./components/Banner";
import { HeroHeader } from "./components/HeroHeader";
import { Navigation } from "./components/Navigation";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <Navigation />
      <HeroHeader />

      <ProductList />

      <Banner />
    </>
  );
}

export default App;
