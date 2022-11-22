import React, { useEffect, useState } from "react";
import { db, storage, firebase } from "../../firebase";

const FirebaseDB = () => {
  const [rest, setRest] = useState([]);

  const fetchRest = async () => {
    const response = db.collection("restaurant");
    const data = await response.get();
    data.docs.forEach((item) => {
      setRest([...rest, item.data()]);
    });
  };

  useEffect(() => {
    fetchRest();
  }, []);

  return (
    <div>
      {rest &&
        rest.map((rests) => {
          return (
            <>
              <div>{rests.name}</div>
              <div>{rests.addr}</div>
              <div>{rests.tel}</div>
              <div>{rests.parking}</div>
              <div>{rests.category}</div>

            </>
          );
        })}
    </div>
  );
};

export default FirebaseDB;
