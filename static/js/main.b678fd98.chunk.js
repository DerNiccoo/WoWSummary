(this["webpackJsonpwow-summary"]=this["webpackJsonpwow-summary"]||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){},39:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t(1),s=t.n(r),n=t(27),l=t.n(n),o=(t(34),t(9)),i=(t(35),t(16)),d=t(4),h=t(17),u=t(18),j=t(21),b=t(20),m=t(10),g=t(11),O=t(3),f=t(14),v=t(19);function p(e){var a=[],t=0;e.guildMembers.forEach((function(e){var r={id:e.player_id,index:t,name:Object(c.jsx)("span",{className:e.playable_class,children:e.name}),level:e.level,race:e.playable_race,rank:e.rank,covenant_level:e.renown_level,dungeon_rio:e.mythic_rio,covenant_name:e.covenant,collectable_av:e.achievement_points};t++,a.push(r)}));var r="";return e.gear.forEach((function(e){for(var t=function(t){if(a[t].id===e.char_id){a[t].eq_gs=e.gs,"legy_level"in e&&(r="https://de.wowhead.com/spell="+e.legy_spell,a[t].eq_legy=Object(c.jsx)("a",{href:r,className:"q5",children:e.legy_level}));var s=!1;return e.enchantments.forEach((function(e){"ench_"+e.slot in a[t]&&s||(null===e.enchant?a[t]["ench_"+e.slot]=Object(c.jsx)("a",{style:{color:"red"},children:"Nein"}):("PRIMARY"===e.slot&&(s=!0),a[t]["ench_"+e.slot]=Object(c.jsx)("a",{style:{color:"green"},children:"Ja"})))})),a[t].eq_sockets=e.socket_curr+"/"+e.socket_total,"break"}},s=0;s<a.length;s++){if("break"===t(s))break}})),e.dungeon.forEach((function(e){for(var t=0;t<a.length;t++)a[t].id===e.char_id&&(a[t].dungeon_currently=e.best,a[t].dungeon_best_mythic=e.total)})),e.mount.forEach((function(e){for(var t=0;t<a.length;t++)a[t].id===e.char_id&&(a[t].collectable_mounts=e.usable+"/"+e.total)})),a}var x=function(e){var a=Object(r.useState)(s.a.useMemo((function(){return JSON.parse(localStorage.getItem("GuildTable"))||p(e)}),[])),t=Object(o.a)(a,2),n=t[0],l=t[1],i=Object(r.useState)(0),d=Object(o.a)(i,2),h=d[0],u=d[1];0===h&&u(e),Object.keys(e).some((function(a){if(e[a]!==h[a])return u(e),l(p(e)),!0}));var j=s.a.useMemo((function(){return[{Header:"Spieler",columns:[{Header:"Name",accessor:"name",width:50},{Header:"Level",accessor:"level",width:30}]},{Header:"Equipment",columns:[{Header:"GS",accessor:"eq_gs",width:30},{Header:"Legy",accessor:"eq_legy",width:30},{Header:"Sockel",accessor:"eq_sockets",width:30}]},{Header:"Enchants",columns:[{Header:"Main",accessor:"ench_MAIN_HAND",width:30},{Header:"Off",accessor:"ench_OFF_HAND",width:30},{Header:"Umhang",accessor:"ench_BACK",width:30},{Header:"Brust",accessor:"ench_CHEST",width:30},{Header:"Prim\xe4r",accessor:"ench_PRIMARY",width:30},{Header:"Ring1",accessor:"ench_FINGER_1",width:30},{Header:"Ring2",accessor:"ench_FINGER_2",width:30}]},{Header:"H\xf6chsten Mythic +",columns:[{Header:"Total",accessor:"dungeon_best_mythic",width:30},{Header:"Weekly",accessor:"dungeon_currently",width:30},{Header:"RIO",accessor:"dungeon_rio",width:30}]},{Header:"Paktsanktum",columns:[{Header:"Name",accessor:"covenant_name",width:30},{Header:"Level",accessor:"covenant_level",width:30}]},{Header:"Aktueller Raid Fortschritt",columns:[{Header:"Fortschritt",accessor:"raid_progress",width:30},{Header:"Clears",accessor:"raid_clears",width:30},{Header:"Kills",accessor:"raid_kills",width:30}]},{Header:"Sammelbares",columns:[{Header:"Erfolge",accessor:"collectable_av",width:30},{Header:"Titel",accessor:"collectable_title",width:30},{Header:"Mounts",accessor:"collectable_mounts",width:30},{Header:"Pets",accessor:"collectable_pets",width:30}]},{Header:"Spieler gegen Spieler",columns:[{Header:"Ehre Stufe",accessor:"pvp_honor",width:30},{Header:"Wertung (2v2)",accessor:"pvp_rating_2v2",width:30},{Header:"Wertung (3v3)",accessor:"pvp_rating_3v3",width:30},{Header:"Arenas (2v2)",accessor:"pvp_games_2v2",width:30},{Header:"Arenas (3v3)",accessor:"pvp_games_3v3",width:30}]}]}),[]),b=Object(f.useTable)({columns:j,data:n,initialState:{sortBy:[{id:"level",desc:!0},{id:"eq_gs",desc:!0}]}},f.useSortBy),m=b.getTableProps,g=b.getTableBodyProps,x=b.headerGroups,w=b.rows,_=b.prepareRow;return Object(c.jsx)("div",{children:Object(c.jsxs)(v.a,Object(O.a)(Object(O.a)({striped:!0,bordered:!0,hover:!0},m()),{},{children:[Object(c.jsx)("thead",{children:x.map((function(e){return Object(c.jsx)("tr",Object(O.a)(Object(O.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(O.a)(Object(O.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"sorted-header",children:[e.render("Header"),Object(c.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(c.jsx)("tbody",Object(O.a)(Object(O.a)({},g()),{},{children:w.map((function(e,a){return _(e),Object(c.jsx)("tr",Object(O.a)(Object(O.a)({},e.getRowProps()),{},{children:e.cells.map((function(e,a){return Object(c.jsx)("td",Object(O.a)(Object(O.a)({},e.getCellProps()),{},{id:"table-cell",children:e.render("Cell")}))}))}))}))}))]}))})},w=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(e){var c;return Object(h.a)(this,t),(c=a.call(this,e)).state={error:null,isLoaded:!1,last_updated:0,show_last_updated:"",guild:[],gear:[],dungeon:[],mount:[]},c}return Object(u.a)(t,[{key:"updateData",value:function(){var e=this;fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/roster").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,guild:a})}),(function(a){e.setState({isLoaded:!0,error:a})})),fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/gear/overview").then((function(e){return e.json()})).then((function(a){console.log({new_gear:a}),e.setState({gear:a})})),fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/dungeons/overview").then((function(e){return e.json()})).then((function(a){e.setState({dungeon:a})})),fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/collection/mounts/overview").then((function(e){return e.json()})).then((function(a){e.setState({mount:a})}))}},{key:"getLastUpdated",value:function(){var e=this;0!==this.state.last_updated&&fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave").then((function(e){return e.json()})).then((function(a){a.last_modified>e.state.last_updated&&(e.setState({last_updated:a.last_modified}),e.updateData())}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID),clearInterval(this.timerLastUpdated)}},{key:"componentDidMount",value:function(){var e=this;fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave").then((function(e){return e.json()})).then((function(a){e.setState({last_updated:a.last_modified})})),this.updateData(),this.timerID=setInterval((function(){return e.getLastUpdated()}),6e4),this.timerLastUpdated=setInterval((function(){return e.calculateLastRefreshTime()}),1e3)}},{key:"calculateLastRefreshTime",value:function(){var e=(new Date).getTime()/1e3-this.state.last_updated,a="";e<60?a=e.toFixed()+" Sekunden":(a="einer Minute",(e/=60)>2&&(a=Math.floor(e)+" Minuten")),this.setState({show_last_updated:a})}},{key:"render",value:function(){var e,a=this.state,t=a.error,r=a.isLoaded,s=a.guild,n=a.gear,l=a.dungeon,o=a.mount;return e=t?Object(c.jsxs)("div",{children:["Error: ",t.message]}):r?Object(c.jsx)(x,{guildMembers:s,gear:n,dungeon:l,mount:o}):Object(c.jsx)("div",{children:"Loading..."}),Object(c.jsxs)("div",{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(g.a,{children:Object(c.jsx)("h2",{children:"Schmockwave"})})}),Object(c.jsx)(m.a,{children:Object(c.jsx)(g.a,{children:Object(c.jsxs)("a",{children:["Zuletzt aktualisiert vor ",this.state.show_last_updated]})})}),Object(c.jsx)("hr",{}),Object(c.jsx)(m.a,{children:Object(c.jsx)(g.a,{children:e})})]})}}]),t}(s.a.Component);var _=function(e){var a=Object(r.useState)(s.a.useMemo((function(){return JSON.parse(localStorage.getItem("GearTable"))||function(e){var a=[],t=0;return e.forEach((function(e){var r={index:t,name:Object(c.jsx)("span",{children:e.name}),gs:e.gear_score};e.items.forEach((function(e){var a,t="UNCOMMON"===(a=e.quality)?"q2":"RARE"===a?"q3":"EPIC"===a?"q4":"LEGENDARY"===a?"q5":void 0,s="https://de.wowhead.com/item="+e.item_id+"&ilvl="+e.level;null!=e.legy_spell&&(s="https://de.wowhead.com/spell="+e.legy_spell);var n="("+e.level+") "+e.name;r[e.slot]=Object(c.jsx)("a",{href:s,className:t,children:n})})),t++,a.push(r)})),a}(e.data)}),[e.data])),t=Object(o.a)(a,2),n=t[0],l=(t[1],s.a.useMemo((function(){return[{Header:"GS",accessor:"gs"},{Header:"Name",accessor:"name"},{Header:"Waffe",accessor:"MAIN_HAND"},{Header:"Schildhand",accessor:"OFF_HAND"},{Header:"Kopf",accessor:"HEAD"},{Header:"Halskette",accessor:"NECK"},{Header:"Schultern",accessor:"SHOULDER"},{Header:"R\xfccken",accessor:"BACK"},{Header:"Brust",accessor:"CHEST"},{Header:"Handgelenke",accessor:"WRIST"},{Header:"H\xe4nde",accessor:"HANDS"},{Header:"Taile",accessor:"WAIST"},{Header:"Hosen",accessor:"LEGS"},{Header:"Schuhe",accessor:"FEET"},{Header:"Ring",accessor:"FINGER_1"},{Header:"Ring",accessor:"FINGER_2"},{Header:"Trinket",accessor:"TRINKET_1"},{Header:"Trinket",accessor:"TRINKET_2"}]}),[])),i=Object(f.useTable)({columns:l,data:n,initialState:{sortBy:[{id:"rank",desc:!1}]}},f.useSortBy),d=i.getTableProps,h=i.getTableBodyProps,u=i.headerGroups,j=i.rows,b=i.prepareRow;return Object(c.jsx)("div",{children:Object(c.jsxs)(v.a,Object(O.a)(Object(O.a)({striped:!0,bordered:!0,hover:!0},d()),{},{children:[Object(c.jsx)("thead",{children:u.map((function(e){return Object(c.jsx)("tr",Object(O.a)(Object(O.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(O.a)(Object(O.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"sorted-header",children:[e.render("Header"),Object(c.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(c.jsx)("tbody",Object(O.a)(Object(O.a)({},h()),{},{children:j.map((function(e,a){return b(e),Object(c.jsx)("tr",Object(O.a)(Object(O.a)({},e.getRowProps()),{},{children:e.cells.map((function(e,a){return Object(c.jsx)("td",Object(O.a)(Object(O.a)({},e.getCellProps()),{},{id:"table-cell",children:e.render("Cell")}))}))}))}))}))]}))})},H=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(e){var c;return Object(h.a)(this,t),(c=a.call(this,e)).state={error:null,isLoaded:!1,items:[]},c}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/gear").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e,a=this.state,t=a.error,r=a.isLoaded,s=a.items;return e=t?Object(c.jsxs)("div",{children:["Error: ",t.message]}):r?Object(c.jsx)(_,{data:s}):Object(c.jsx)("div",{children:"Loading..."}),Object(c.jsxs)("div",{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(g.a,{children:Object(c.jsx)("h2",{children:"Schmockwave"})})}),Object(c.jsx)("hr",{}),Object(c.jsx)(m.a,{children:Object(c.jsx)(g.a,{children:e})})]})}}]),t}(s.a.Component);t(39);function k(e){return Object(c.jsx)("div",{children:Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"lightbulb",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M319.45 0C217.44.31 144 83 144 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 319.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 320 64a16 16 0 0 1 0 32z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M112.81 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h101.78a209.51 209.51 0 0 1-4.97-64zM40.73 67.71l80.88 46.69a203.27 203.27 0 0 1 28.12-57.66l-77-44.46a16 16 0 0 0-21.86 5.86l-16 27.71a16 16 0 0 0 5.86 21.86zm91 196l-91 52.55a16 16 0 0 0-5.86 21.86l16 27.71a16 16 0 0 0 21.86 5.86l94.42-54.51c-.88-1.06-1.83-2.27-2.64-3.18a207.68 207.68 0 0 1-32.76-50.26zm467.52 52.55l-91.49-52.82c-8.24 17.65-18.23 34.52-31.28 49.4-1.1 1.26-2.36 2.85-3.59 4.37l94.36 54.48a16 16 0 0 0 21.86-5.86l16-27.71a16 16 0 0 0-5.84-21.83zm0-248.58a16 16 0 0 0 5.86-21.86l-16-27.71a16 16 0 0 0-21.86-5.86l-77.08 44.5a207.31 207.31 0 0 1 28.46 57.47zM240.06 454.35a32 32 0 0 0 5.36 17.65l17.09 25.69A32 32 0 0 0 289.15 512h61.71a32 32 0 0 0 26.64-14.28L394.59 472a32 32 0 0 0 5.41-17.65V416H240zM624 160h-96.81c1.12 14.55 2.18 31.7-5.53 64H624a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",className:"fa-primary"})]})})})}function y(e){return Object(c.jsx)("div",{children:Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"lightbulb",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M175.45 0C73.44.31 0 83 0 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.22 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 175.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 176 64a16 16 0 0 1 0 32z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M96.06 454.35L96 416h160v38.35a32 32 0 0 1-5.41 17.65l-17.09 25.73A32 32 0 0 1 206.86 512h-61.71a32 32 0 0 1-26.64-14.28L101.42 472a32 32 0 0 1-5.36-17.65z",className:"fa-primary"})]})})})}function S(e){var a;return a="hell"===localStorage.getItem("theme")?Object(c.jsx)(y,{}):Object(c.jsx)(k,{}),Object(c.jsx)("nav",{className:"sidebar",children:Object(c.jsxs)("ul",{className:"sidebar-nav",children:[Object(c.jsx)("li",{className:"logo",children:Object(c.jsxs)(i.b,{to:"/",className:"nav-link",children:[Object(c.jsx)("span",{className:"link-text logo-text",children:"\xdcbersicht"}),Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"})]})})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)(i.b,{to:"/gearview",className:"nav-link",children:[Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"cat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-cat fa-w-16 fa-9x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M512 400v32a16 16 0 0 1-16 16H32a32 32 0 0 1-32-32V80a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v304h432a16 16 0 0 1 16 16z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M464 320H346c-21.38 0-32.09-25.85-17-41l32.4-32.4-73.4-73.35-73.37 73.38a32 32 0 0 1-45.25 0l-68.69-68.69a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L192 178.75l73.38-73.38a32 32 0 0 1 45.25 0l96 96L439 169c15.12-15.12 41-4.41 41 17v118a16 16 0 0 1-16 16z",className:"fa-primary"})]})}),Object(c.jsx)("span",{className:"link-text",children:"Gear"})]})}),Object(c.jsx)("li",{className:"nav-item",onClick:function(a){return e.onClick(a)},children:Object(c.jsxs)("div",{className:"nav-link",children:[a,Object(c.jsx)("span",{className:"link-text",children:"Farbschema"})]})})]})})}function N(){var e=document.documentElement.style,a=getComputedStyle(document.body),t=localStorage.getItem("theme");e.setProperty("--theme-bg",a.getPropertyValue("--theme-"+t+"-bg")),e.setProperty("--theme-color",a.getPropertyValue("--theme-"+t+"-color"))}var L=function(){var e=Object(r.useState)(0),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(r.useEffect)((function(){document.title="WoW Summary"}),[]),N(),Object(c.jsx)(i.a,{basename:"/WoWSummary",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("main",{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/gearview",children:Object(c.jsx)(H,{})}),Object(c.jsx)(d.a,{path:"/buy",children:Object(c.jsx)(H,{})}),Object(c.jsx)(d.a,{path:"/analysis",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"/calculator",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"/",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"*",children:"404"})]})}),Object(c.jsx)(S,{onClick:function(e){"hell"===localStorage.getItem("theme")?localStorage.setItem("theme","dunkel"):localStorage.setItem("theme","hell"),N();var a=t;s(++a)}},t)]})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,s=a.getLCP,n=a.getTTFB;t(e),c(e),r(e),s(e),n(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),E()}},[[45,1,2]]]);
//# sourceMappingURL=main.b678fd98.chunk.js.map