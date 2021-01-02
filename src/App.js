import React from "react";

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>;
}

const foodILike = [
  {
   id:1,
    name: "ramen",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.naver.com%2Fnaverschool%2F221980209665&psig=AOvVaw3LWan1l5FChK7C47yqYck8&ust=1609675946412000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjI_6mc_e0CFQAAAAAdAAAAABAO"
  },
  {
    id:2,
    name: "chicken",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpelicana.co.kr%2F&psig=AOvVaw10AziBT2048WyU5lTMY-xC&ust=1609675992614000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCB6cCc_e0CFQAAAAAdAAAAABAD"
  },
  {
    id:3,
    name: "kimbob",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6851844&psig=AOvVaw06TzkJawzKzTIuiQ1_68Lo&ust=1609676011446000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCfkMmc_e0CFQAAAAAdAAAAABAD"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => {
        return <Food key={dish.id} name={dish.name} picture={dish.image}/>;
      })}
    </div>
  );
}

export default App;
