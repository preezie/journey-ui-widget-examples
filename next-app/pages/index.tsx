import Link from 'next/link'
import { useEffect } from 'react'

export default function IndexPage() {
  useEffect(() => {
    if (window.PREEZIE_GUIDE) {
      window.PREEZIE_GUIDE.render([
        {
          guideKey: "87fb039c-e548-41ef-966b-08daa673064e",
          version: "1.0.0",
          renderTo: "preezie-widget-div-id",
        },
      ]);
    }

    return () => {};
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <main>
        <div id="preezie-widget-div-id"></div>
      </main>
      <footer className="App-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/workflow">Widget</Link>
          </li>
          <li>
            <Link href="/cta">Cta</Link>
          </li>
          <li>
            <Link href="/popup">Popup</Link>
          </li>
          <li>
            <Link href="/exit-intent">Exit intent</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </div>
  );
};
