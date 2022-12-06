import React from "react";
import useFetch from "../../hooks/useFetch";

export const CardUnique = ({ url }) => {
  return (
    <div>
      {!url ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-header">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {url.id}
            </h5>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <img src={url.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-footer" style={{ textAlign: "center" }}>
            <p className="card-text text-capitalize">
              <b>Name:</b> {url.name}
            </p>
            <p className="card-text text-capitalize">
              <b>Type: </b>
              {url.types[0].type.name}
            </p>
            <p className="card-text text-capitalize">
              <b>Weight: </b>
              {url.weight} kg
            </p>
            <p className="card-text text-capitalize">
              <b>Height:</b> {url.height}{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
