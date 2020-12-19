import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";
import Table from "react-bootstrap/Table";


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
      rank: member.rank,
      covenant_level: member.renown_level,
      dungeon_rio: member.mythic_rio,
      covenant_name: <span className={member.covenant.toLowerCase().replace(/\s/g, '')}>{member.covenant}</span>,
      collectable_av: member.achievement_points,
      raid_progress: member.raid_summary,
    };

    if (member.normal_bosses !== null) {
      entry.raid_kills = member.normal_bosses + '/' + member.heroic_bosses + '/' + member.mythic_bosses;
    }
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

        let primary = false;
        gear.enchantments.forEach(enchant => {
          if ('ench_' + enchant.slot in result[i] && primary) {
            return;
          }
          if (enchant.enchant === null) {
            result[i]['ench_' + enchant.slot] = <span style={{ color: "red" }}>Nein</span>
          } else {
            if (enchant.slot === 'PRIMARY') {
              primary = true;
            }
            result[i]['ench_' + enchant.slot] = <span style={{ color: "green" }}>Ja</span>
          }
        });

        if (gear.socket_curr === gear.socket_total) {
          result[i].eq_sockets = <span style={{ color: "green" }}>{gear.socket_curr + '/' + gear.socket_total}</span>
        } else {
          result[i].eq_sockets = <span style={{ color: "red" }}>{gear.socket_curr + '/' + gear.socket_total}</span>
        }
        break;
      }
    }
  });

  props.dungeon.forEach(dungeon => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === dungeon.char_id) {
        result[i].dungeon_currently = dungeon.best;
        result[i].dungeon_best_mythic = dungeon.total;
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

  props.pvp.forEach(pvp => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === pvp.char_id) {
        pvp.pvp.forEach(pvp_col => {
          let pvp_type = '';
          if (pvp_col.pvp_type === 'ARENA_2v2') {
            pvp_type = '2v2';
          } else if (pvp_col.pvp_type === 'ARENA_3v3') {
            pvp_type = '3v3';
          }
          result[i]['pvp_rating_' + pvp_type] = pvp_col.rating;
          result[i]['pvp_games_' + pvp_type] = pvp_col.season_won + '/' + (pvp_col.season_won + pvp_col.season_lost);
        });
      }
    }

  });

  //color_ranking(result, ['dungeon_rio', 'covenant_level', 'collectable_av', 'eq_gs', 'pvp_rating_2v2', 'pvp_rating_3v3'])
  return result;
}

const GuildTable = (props) => {
  const [data, setData] = useState(
    React.useMemo(() => JSON.parse(localStorage.getItem("GuildTable")) || prepareData(props), [])
  );

  const [oldProps, setOldProps] = useState(0);

  if (oldProps === 0) {
    setOldProps(props);
  }

  Object.keys(props).some(propKey => {
    if (props[propKey] !== oldProps[propKey]) {
      setOldProps(props);
      setData(prepareData(props));
      return true;
    }
  });

  function convert_cell_type(cell_value) {
    let result = cell_value;
    if (typeof cell_value === 'string' || cell_value instanceof String) {
      result = parseInt(cell_value.split('/')[0]);
    }
    return result;
  }

  function get_color_for_cell(cell_value, field) {
    if (cell_value === undefined)
      return 'rank_noob';

    let player_value = convert_cell_type(cell_value);

    let values = []
    data.forEach(player => {
      values.push(convert_cell_type(player[field]))
    });

    const sorted_values = values.sort(function (a, b) {
      return convert_cell_type(b) - convert_cell_type(a);
    });

    let place = sorted_values.findIndex(element => element === player_value);
    if (place === 0) {
      return "rank_legendary";
    }
    else if (place > 0 && place <= 5) {
      return "rank_epic";
    }
    else if (place > 5 && place <= 10) {
      return "rank_rare";
    }
    else if (place > 10 && place <= 20) {
      return "rank_uncommon";
    }
    return "rank_noob";

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
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
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
      Header: "Höchsten Mythic +",
      columns: [
        {
          Header: "Total",
          accessor: "dungeon_best_mythic",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
        {
          Header: "Weekly",
          accessor: "dungeon_currently",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
        {
          Header: "RIO",
          accessor: "dungeon_rio",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
      ]
    },
    {
      Header: "Paktsanktum",
      columns: [
        {
          Header: "Name",
          accessor: "covenant_name",
          width: 30
        },
        {
          Header: "Level",
          accessor: "covenant_level",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
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
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
        {
          Header: "Mounts",
          accessor: "collectable_mounts",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
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
          Header: "Wertung (2v2)",
          accessor: "pvp_rating_2v2",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
        {
          Header: "Wertung (3v3)",
          accessor: "pvp_rating_3v3",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
        {
          Header: "Arenas (2v2)",
          accessor: "pvp_games_2v2",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
        },
        {
          Header: "Arenas (3v3)",
          accessor: "pvp_games_3v3",
          Cell: (props) => {
            let rank_color = get_color_for_cell(props.cell.value, props.column.id)
            return (
              <span className={rank_color}>
                {String(props.cell.value || '')}
              </span>
            );
          },
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