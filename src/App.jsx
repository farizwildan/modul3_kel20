import React from "react";
import Form from "./components/form";
import Card from "./components/Card";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [praktikan, setPraktikan] = React.useState(null);
  const addPraktikanHandler = (data) => {
    console.log(data);
    setPraktikan(data);
  };
  const removePraktikanHandler = () => {
    setPraktikan(null);
  };

  return (
    <div className="App">
      <h1>Kartu Praktikan</h1>
      <Form onAddPraktikan={addPraktikanHandler} />

      {praktikan && (
        <>
          <button className="delete" onClick={removePraktikanHandler}>
            {" "}
            Hapus{" "}
          </button>

          <Card nama={praktikan.nama} kelompok={praktikan.kelompok} />
        </>
      )}

      <Counter />
    </div>
  );
}

export default App;
