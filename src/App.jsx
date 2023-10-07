import Registration from "./components/Registration";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <header className="header">
        <Header/>
      </header>
      <main className="main-content">
        <Registration/>
        {/* main content */}
      </main>
      <footer className="footer">
        {/* footer content */}
      </footer>
    </>
  );
}
