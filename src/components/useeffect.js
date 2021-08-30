import axios from "axios";
import React, { useEffect, useState } from "react";

const UseeffectHook = () => {
  const [datas, setaData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setaData(response.data.slice(0, 5));
      });
  }, []);

  return (
    <div>
      Hello world
      <table>
        <tbody>
          <tr>
            {datas.map((data) => {
              return (
                <td style={{ border: "2px solid #ccc" }} key={data.id}>
                  {data.name}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UseeffectHook;
