import React, { useState, useRef } from "react";
import { useTable, useSortBy } from "react-table";
import Table from "react-bootstrap/Table";

function resolve_rarity(type) {
  if (type === 'UNCOMMON') {
    return 'q2';
  } else if (type === 'RARE') {
    return 'q3';
  } else if (type === 'EPIC') {
    return 'q4';
  } else if (type === 'LEGENDARY') {
    return 'q5';
  }
}

function prepareData(members) {
  let result = [];
  let index = 0

  members.forEach(member => {
    let entry = {
      index: index,
      name: <span>{member.name}</span>,
      gs: member.gear_score
    };

    member.items.forEach(gear => {
      let rarity = resolve_rarity(gear.quality)
      let href = "https://de.wowhead.com/item=" + gear.item_id + '&ilvl=' + gear.level;
      let label = "(" + gear.level + ") " + gear.name;
      entry[gear.slot] = <a href={href} className={rarity}>{label}</a>
    });

    index++;
    result.push(entry);
  });

  return result;
}


const GearTable = (props) => {
  const [data, setData] = useState(
    React.useMemo(() => JSON.parse(localStorage.getItem("GearTable")) || prepareData(props.data), [])
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "GS",
        accessor: "gs",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Waffe",
        accessor: "MAIN_HAND",
      },
      {
        Header: "Schildhand",
        accessor: "OFF_HAND",
      },
      {
        Header: "Kopf",
        accessor: "HEAD",
      },
      {
        Header: "Halskette",
        accessor: "NECK",
      },
      {
        Header: "Schultern",
        accessor: "SHOULDER",
      },
      {
        Header: "Rücken",
        accessor: "BACK",
      },
      {
        Header: "Brust",
        accessor: "CHEST",
      },
      {
        Header: "Handgelenke",
        accessor: "WRIST",
      },
      {
        Header: "Hände",
        accessor: "HANDS",
      },
      {
        Header: "Taile",
        accessor: "WAIST",
      },
      {
        Header: "Hosen",
        accessor: "LEGS",
      },
      {
        Header: "Schuhe",
        accessor: "FEET",
      },
      {
        Header: "Ring",
        accessor: "FINGER_1",
      },
      {
        Header: "Ring",
        accessor: "FINGER_2",
      },
      {
        Header: "Trinket",
        accessor: "TRINKET_1",
      },
      {
        Header: "Trinket",
        accessor: "TRINKET_2",
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
            id: 'rank',
            desc: false
          }
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

export default GearTable;