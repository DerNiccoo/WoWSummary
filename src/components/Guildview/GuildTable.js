import React, { useState, useRef } from "react";
import { useTable, useSortBy } from "react-table";
import Table from "react-bootstrap/Table";

function class_id_to_name(class_id) {
  let classes = ['warrior', 'paladin', 'hunter', 'rogue', 'prist', 'death-knight', 'shamane', 'mage', 'warlock', 'monk', 'druid', 'demon-hunter']
  return classes[--class_id];
}

function prepareData(members) {
  let result = [];
  let index = 0
  console.log(members)
  members.forEach(member => {
    let entry = {
      index: index,
      name: <span className={member.playable_class}>{member.name}</span>,
      level: member.level,
      gs: member.gear_score,
      race: member.playable_race,
      rank: member.rank
    };
    index++;
    result.push(entry);
  });
  return result;
}


const GuildTable = (props) => {
  const [data, setData] = useState(
    React.useMemo(() => JSON.parse(localStorage.getItem("GuildTable")) || prepareData(props.guildMembers), [])
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Rang",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Level",
        accessor: "level",
      },
      {
        Header: "GS",
        accessor: "gs",
      },
      {
        Header: "Index",
        accessor: "index",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: 'level',
            desc: true
          },
          {
            id: 'gs',
            desc: true
          },
        ]
      }
    },
    useSortBy
  );

  return (
    <div>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="sorted-header"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td {...cell.getCellProps()} id="table-cell">{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default GuildTable;