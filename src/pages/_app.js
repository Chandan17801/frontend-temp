import "@/styles/globals.css";
import "./fashion.css";
import "./setting.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { store } from "../../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}
