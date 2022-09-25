import "./App.css";
import { Header, Form, PatientList } from "./assets/components";

function App() {
  return (
    <div className="container mx-auto m-20">
      <Header />
      <Form />
      <PatientList />
    </div>
  );
}

export default App;
