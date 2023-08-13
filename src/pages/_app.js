import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import './fashion.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  );
}
