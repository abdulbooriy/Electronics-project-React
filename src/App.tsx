import React from "react";
import Header from "./components/header/Header";
import MainRouters from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <main className="h-[90vh]">
        <MainRouters />
      </main>
    </>
  );
}

export default React.memo(App);
