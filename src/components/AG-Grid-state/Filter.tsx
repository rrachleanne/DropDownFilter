import React, { useState, useEffect } from "react";
import { Datatable } from "./Datatable";

//parent

export const Filter: React.FC = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows: any[]) {
    return rows.filter(
      (row: { firmName: string, state: string }) =>
        row.firmName.indexOf(q) > -1 ||
        row.state.indexOf(q) > -1
    );
  }

  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
};
