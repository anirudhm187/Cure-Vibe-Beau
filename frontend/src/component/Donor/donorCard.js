import React from "react";

const donorcard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, donorname, number, bloodgrp} = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {bloodgrp}</span>
                    <h2 className="card-title"> {donorname} </h2>
                    <span className="card-number subtle">
                      {number}
                    </span>
                  </div>
                  <span className="card-tag  subtle">Available</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default donorcard;