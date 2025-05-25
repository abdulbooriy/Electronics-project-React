import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainRouters from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <main className="h-[90vh]">
        <MainRouters />
      </main>
      <Footer />
    </>
  );
}

export default React.memo(App);
