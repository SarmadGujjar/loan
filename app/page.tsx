import Footer from "./components/Footer";
import Last from "./components/Last";
import Main from "./components/Main";
import Offer from "./components/Offer";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
          <div>
            <Main />
            <Offer />
            <Work />
            <Last />
            <Footer />
          </div>
    </div>
  );
}
