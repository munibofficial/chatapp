import Registration from "./components/Registration";

export default function App() {
  return (
    <>
      <header className="header">
        <p>Header</p>
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
