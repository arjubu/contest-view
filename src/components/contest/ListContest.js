import React, { useState, useEffect } from "react";
import ContestService from "../../service/contest.service";

export default function ListContest() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await ContestService.listContest();
    setData(data);
    setLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loaded)
    return (
      <div>
        <h3> Read Contest Table</h3>
        <table>
                <tr>
                  <th>Contest ID</th>
                  <th>Contest Name</th>
                  <th>Capacity</th>
                  <th>Registration Allowed</th>
                </tr>
                {data.map((val, key)=>{
                return (
                <tr key={key}>
                      <td>{val.id}</td>
                                  <td>{val.name}</td>
                                  <td>{val.capacity}</td>
                                  <td>{String(val.registrationAllowed)}</td>

                </tr>
                )
                })
                }
              </table>
      </div>
    );
}
