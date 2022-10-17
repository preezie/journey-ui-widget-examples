import '../App.css'

import { useEffect } from 'react'

function Popup() {
  useEffect(() => {
    window.PREEZIE_GUIDE.render([
      {
        guideKey: "EPO-2cca5322-e24d-455d-2e8b-08daa6730d52",
        version: "1.0.0",
        renderTo: "preezie-widget-div-id-popup",
      },
    ]);

    window.PREEZIE_GUIDE.render([
      {
        guideKey: "87fb039c-e548-41ef-966b-08daa673064e",
        version: "1.0.0",
        renderTo: "preezie-widget-div-id",
      },
    ]);

    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <main>
        <div>
          <h3>please scroll down to trigger the popup</h3>
        </div>
        <div id="preezie-widget-div-id-popup"></div>
        <div id="preezie-widget-div-id"></div>
      </main>
      <footer className="App-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default Popup;
