import React from "react";
import { useFormContext } from "react-hook-form";


const BodySelection = ({ bodies }) => {
  const { register, handleSubmit, setValue, getValues } = useFormContext();

  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <label>
          <input
            {...register("isPlanet")}
            type="checkbox"
            onChange={(e) => {
              setValue("isPlanet", e.target.checked);
              if (e.target.checked) {
                // Filtrer les corps célestes en fonction de isPlanet
                const filteredBodies = bodies.filter(b => b.isPlanet);
                // Définir les corps disponibles pour la sélection
                setValue("availableBodies", filteredBodies, { shouldValidate: true });
              } else {
                setValue("selectedBody", "");
                setValue("availableBodies", []);
              }
            }}
          /> Is Planet
        </label>
        <br />
        <br />

        <label>
          Gravity:
          <input
            {...register("gravity")}
            type="range"
            min={1}
            max={1000}
            step={1}
          />
        </label>

        <br />
        <br />

        <label>
          Select Body:
          <select {...register("selectedBody")}>
            {/* Map available bodies for dropdown selection */}
            {getValues("availableBodies").map((body, index) => (
              <option key={index} value={body.id}>
                {body.name}
              </option>
            ))}
          </select>
        </label>

        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default BodySelection;


