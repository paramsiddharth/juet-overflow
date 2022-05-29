import Footer from "./footer";
import Header from "./header";

export default function Main({ children, isLoggedIn }) {
  return <div>
    <Header isLoggedIn={isLoggedIn} />
    { children }
    <Footer />
  </div>
}