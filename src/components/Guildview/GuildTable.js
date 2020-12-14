import React, { useState, useRef } from "react";
import { useTable, useSortBy } from "react-table";
import Table from "react-bootstrap/Table";

function class_id_to_name(class_id) {
  let classes = ['warrior', 'paladin', 'hunter', 'rogue', 'prist', 'death-knight', 'shamane', 'mage', 'warlock', 'monk', 'druid', 'demon-hunter']
  return classes[--class_id];
}

function prepareData(props) {
  let result = [];
  let index = 0

  props.guildMembers.forEach(member => {
    let entry = {
      id: member.player_id,
      index: index,
      name: <span className={member.playable_class}>{member.name}</span>,
      level: member.level,
      race: member.playable_race,
      rank: member.rank
    };
    index++;
    result.push(entry);
  });

  let href = '';
  props.gear.forEach(gear => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === gear.char_id) {
        result[i].eq_gs = gear.gs;

        if ('legy_level' in gear) {
          href = "https://de.wowhead.com/spell=" + gear.legy_spell;
          result[i].eq_legy = <a href={href} className='q5'>{gear.legy_level}</a>
        }

        gear.enchantments.forEach(enchant => {
          if (enchant.enchant === null) {
            result[i]['ench_' + enchant.slot] = <a style={{ color: "red" }}>Nein</a>
          } else {
            result[i]['ench_' + enchant.slot] = <a style={{ color: "green" }}>Ja</a>
          }
        });

        result[i].eq_sockets = gear.socket_curr + '/' + gear.socket_total;
        break;
      }
    }
  });

  props.dungeon.forEach(dungeon => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === dungeon.char_id) {
        result[i].dungeon_currently = dungeon.best;
      }
    }
  });


  props.mount.forEach(mount => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === mount.char_id) {
        result[i].collectable_mounts = mount.usable + '/' + mount.total;
      }
    }
  });

  return result;
}

const GuildTable = (props) => {
  const [data, setData] = useState(
    React.useMemo(() => JSON.parse(localStorage.getItem("GuildTable")) || prepareData(props), [])
  );

  let new_data = prepareData(props);
  if (Object.keys(data[0]).length < Object.keys(new_data[0]).length) {
    setData(new_data);
  }

  const columns = React.useMemo(
    () => [{
      Header: "Spieler",
      columns: [
        {
          Header: "Name",
          accessor: "name",
          width: 50
        },
        {
          Header: "Level",
          accessor: "level",
          width: 30
        },
      ]
    },
    {
      Header: "Equipment",
      columns: [
        {
          Header: "GS",
          accessor: "eq_gs",
          width: 30
        },
        {
          Header: "Legy",
          accessor: "eq_legy",
          width: 30
        },
        {
          Header: "Sockel",
          accessor: "eq_sockets",
          width: 30
        },
      ]
    },
    {
      Header: "Enchants",
      columns: [
        {
          Header: "Main",
          accessor: "ench_MAIN_HAND",
          width: 30
        },
        {
          Header: "Off",
          accessor: "ench_OFF_HAND",
          width: 30
        },
        {
          Header: "Umhang",
          accessor: "ench_BACK",
          width: 30
        },
        {
          Header: "Brust",
          accessor: "ench_CHEST",
          width: 30
        },
        {
          Header: "Primär",
          accessor: "ench_PRIMARY",
          width: 30
        },
        {
          Header: "Ring1",
          accessor: "ench_FINGER_1",
          width: 30
        },
        {
          Header: "Ring2",
          accessor: "ench_FINGER_2",
          width: 30
        },
      ]
    },
    {
      Header: "Mythic +",
      columns: [
        {
          Header: "Bester",
          accessor: "dungeon_best_mythic",
          width: 30
        },
        {
          Header: "Gesamt",
          accessor: "dungeon_overall",
          width: 30
        },
        {
          Header: "Weekly",
          accessor: "dungeon_currently",
          width: 30
        },
        {
          Header: "RIO",
          accessor: "dungeon_rio",
          width: 30
        },
      ]
    },
    {
      Header: "Aktueller Raid Fortschritt",
      columns: [
        {
          Header: "Fortschritt",
          accessor: "raid_progress",
          width: 30
        },
        {
          Header: "Clears",
          accessor: "raid_clears",
          width: 30
        },
        {
          Header: "Kills",
          accessor: "raid_kills",
          width: 30
        },
      ]
    },
    {
      Header: "Sammelbares",
      columns: [
        {
          Header: "Erfolge",
          accessor: "collectable_av",
          width: 30
        },
        {
          Header: "Titel",
          accessor: "collectable_title",
          width: 30
        },
        {
          Header: "Mounts",
          accessor: "collectable_mounts",
          width: 30
        },
        {
          Header: "Pets",
          accessor: "collectable_pets",
          width: 30
        },
      ]
    },
    {
      Header: "Spieler gegen Spieler",
      columns: [
        {
          Header: "Ehre Stufe",
          accessor: "pvp_honor",
          width: 30
        },
        {
          Header: "Wertung (2v2)",
          accessor: "pvp_rating_2v2",
          width: 30
        },
        {
          Header: "Wertung (3v3)",
          accessor: "pvp_rating_3v3",
          width: 30
        },
        {
          Header: "Arenas (2v2)",
          accessor: "pvp_games_2v2",
          width: 30
        },
        {
          Header: "Arenas (3v3)",
          accessor: "pvp_games_3v3",
          width: 30
        },
      ]
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
            id: 'eq_gs',
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