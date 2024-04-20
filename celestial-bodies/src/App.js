import React, { useState, useEffect } from "react";
import axios from "axios";
import ControlPanel from "./Components/ControlPanel";
import { useForm } from "react-hook-form"; // Importer useForm

function App() {
  const [bodies, setBodies] = useState([]);
  const { register } = useForm(); // Utiliser useForm pour obtenir register

  useEffect(() => {
    async function fetchBodies() {
      const response = await axios.get(
        "https://api.le-systeme-solaire.net/rest"
      );
      setBodies(response.data);
    }
    fetchBodies();
  }, []);

  return (
    
    <div>
      
      <ControlPanel bodies={bodies} register={register} /> {/* Passer register à ControlPanel */}
    </div>
  );
}

export default App;
