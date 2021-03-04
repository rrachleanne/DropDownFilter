import React from "react";

//child

interface Props {
  data?: any
  children?: any; 
  column?: string
}

export const Datatable: React.FC<Props> = ({ data }) => {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading: React.ReactNode) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row: { [x: string]: React.ReactNode }) => (
          <tr>
            {columns.map((column: React.ReactText) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
