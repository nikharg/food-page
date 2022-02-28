import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuItem = ({counter, setCounter}) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("/data/feeds.json")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCounter = (click) => {
    if (counter === 0) {
      if (click === "plus") {
        setCounter(counter + 1);
      }
    } else {
      click === "plus" ? setCounter(counter + 1) : setCounter(counter - 1);
    }
  };

  return (
    <>
      {data.map((item) => (
        <div className="menu-item" key={item.id}>
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="details">
            <div className="name">{item.name}</div>
            <div className="price">Price: {item.price}</div>
            <div className="quantity">Total: {counter}</div>
            <div className="cost">Cost(INR): {counter * item.price} </div>
            <div className="btn">
              <button onClick={() => handleCounter("plus")}>+</button>
              <button onClick={() => handleCounter("minus")}>-</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
