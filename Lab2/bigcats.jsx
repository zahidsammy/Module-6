import React from 'react';

const cats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { name: 'Cougar', latinName: 'Puma concolor' },
  { name: 'Jaguar', latinName: 'Panthera onca' },
  { name: 'Leopard', latinName: 'Panthera pardus' },
  { name: 'Lion', latinName: 'Panthera leo' },
  { name: 'Snow leopard', latinName: 'Panthera uncia' },
  { name: 'Tiger', latinName: 'Panthera tigris' },
];

function SingleCat({ name, latinName }) {
  return (
    <li>
      {name} ({latinName})
    </li>
  );
}

function BigCats() {
  const catList = cats.map((cat, index) => (
    <SingleCat key={index} name={cat.name} latinName={cat.latinName} />
  ));

  return (
    <div className="BigCats componentBox">
      <ul>{catList}</ul>
    </div>
  );
}

export default BigCats;
