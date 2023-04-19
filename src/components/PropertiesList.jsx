import React from "react";
import PropertiesCard from "./PropertiesCard";
import PropertiesCount from "./PropertiesCount";
//------------------------------------------------------------------------------------------

const PropertiesList = ({ name, universities, student_life, filteredHomes,}) =>
{
  return (
    <>
      <PropertiesCount name={name} />
      <div className="city-list-container properties-container">
        {filteredHomes.map((property) => (
          <PropertiesCard property={property} key={property._id} />
        ))}
      </div>
      <section className="section-compare-box students">
        <div>
          <h3>Being a student in {name}</h3>
          <p>
            {student_life}
            <br />
            <br />
            {universities}
          </p>
        </div>
        <div>
          <img
            src="../public/students.png"
            alt="happy young students laugting"
          />
        </div>
      </section>
    </>
  );
};

export default PropertiesList;
