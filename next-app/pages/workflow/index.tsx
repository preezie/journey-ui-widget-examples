import Head from 'next/head'
import { useEffect } from 'react'

import { Navbar } from '..'

import type { NextPage } from "next";
const Workflow: NextPage = () => {
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
};

export default Workflow;
