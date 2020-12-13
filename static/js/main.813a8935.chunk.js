(this["webpackJsonpwow-summary"]=this["webpackJsonpwow-summary"]||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){},39:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t(1),s=t.n(r),l=t(27),n=t.n(l),i=(t(34),t(12)),o=(t(35),t(9)),d=t(4),j=t(17),h=t(18),b=t(21),u=t(20),m=t(14),O=t(15);var g=t(3),f=t(13),x=t(19);function p(e){var a=[],t=0;return e.guildMembers.forEach((function(e){var r={id:e.player_id,index:t,name:Object(c.jsx)("span",{className:e.playable_class,children:e.name}),level:e.level,race:e.playable_race,rank:e.rank};t++,a.push(r)})),e.gear.forEach((function(e){for(var t=0;t<a.length;t++)if(a[t].id===e.char_id){if(a[t].eq_gs=e.gs,"legy_level"in e){var r="https://de.wowhead.com/spell="+e.legy_spell;a[t].eq_legy=Object(c.jsx)("a",{href:r,className:"q5",children:e.legy_level})}break}})),a}var v=function(e){var a=Object(r.useState)(s.a.useMemo((function(){return JSON.parse(localStorage.getItem("GuildTable"))||p(e)}),[])),t=Object(i.a)(a,2),l=t[0],n=t[1],o=p(e);Object.keys(l[0]).length<Object.keys(o[0]).length&&n(o);var d=s.a.useMemo((function(){return[{Header:"Spieler",columns:[{Header:"Name",accessor:"name",width:50},{Header:"Level",accessor:"level",width:30}]},{Header:"Equipment",columns:[{Header:"GS",accessor:"eq_gs",width:30},{Header:"Legy",accessor:"eq_legy",width:30},{Header:"Sockel",accessor:"eq_sockets",width:30}]},{Header:"Enchants",columns:[{Header:"Main",accessor:"main_hand",width:30},{Header:"Off",accessor:"off_hand",width:30},{Header:"Umhang",accessor:"cloak",width:30},{Header:"Brust",accessor:"chest",width:30},{Header:"Prim\xe4r",accessor:"primary",width:30},{Header:"Ring1",accessor:"ring1",width:30},{Header:"Ring2",accessor:"ring2",width:30},{Header:"Sockel",accessor:"full_socketed",width:30}]},{Header:"Mythic +",columns:[{Header:"Bester",accessor:"best_mythic",width:30},{Header:"Gesamt",accessor:"overall",width:30},{Header:"Weekly",accessor:"currently",width:30},{Header:"RIO",accessor:"rio",width:30}]},{Header:"Aktueller Raid Fortschritt",columns:[{Header:"Fortschritt",accessor:"raid_progress",width:30},{Header:"Clears",accessor:"raid_clears",width:30},{Header:"Kills",accessor:"raid_kills",width:30}]},{Header:"Sammelbares",columns:[{Header:"Erfolge",accessor:"collectable_av",width:30},{Header:"Titel",accessor:"collectable_title",width:30},{Header:"Mounts",accessor:"collectable_mounts",width:30},{Header:"Pets",accessor:"collectable_pets",width:30}]},{Header:"Spieler gegen Spieler",columns:[{Header:"Ehre Stufe",accessor:"pvp_honor",width:30},{Header:"Wertung (2v2)",accessor:"pvp_rating_2v2",width:30},{Header:"Wertung (3v3)",accessor:"pvp_rating_3v3",width:30},{Header:"Arenas (2v2)",accessor:"pvp_games_2v2",width:30},{Header:"Arenas (3v3)",accessor:"pvp_games_3v3",width:30}]}]}),[]),j=Object(f.useTable)({columns:d,data:l,initialState:{sortBy:[{id:"level",desc:!0},{id:"eq_gs",desc:!0}]}},f.useSortBy),h=j.getTableProps,b=j.getTableBodyProps,u=j.headerGroups,m=j.rows,O=j.prepareRow;return Object(c.jsx)("div",{children:Object(c.jsxs)(x.a,Object(g.a)(Object(g.a)({striped:!0,bordered:!0,hover:!0},h()),{},{children:[Object(c.jsx)("thead",{children:u.map((function(e){return Object(c.jsx)("tr",Object(g.a)(Object(g.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(g.a)(Object(g.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"sorted-header",children:[e.render("Header"),Object(c.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(c.jsx)("tbody",Object(g.a)(Object(g.a)({},b()),{},{children:m.map((function(e,a){return O(e),Object(c.jsx)("tr",Object(g.a)(Object(g.a)({},e.getRowProps()),{},{children:e.cells.map((function(e,a){return Object(c.jsx)("td",Object(g.a)(Object(g.a)({},e.getCellProps()),{},{id:"table-cell",children:e.render("Cell")}))}))}))}))}))]}))})},w=function(e){Object(b.a)(t,e);var a=Object(u.a)(t);function t(e){var c;return Object(j.a)(this,t),(c=a.call(this,e)).state={error:null,isLoaded:!1,guild:[],gear:[]},c}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/roster").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,guild:a})}),(function(a){e.setState({isLoaded:!0,error:a})})).then(fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/gear/overview").then((function(e){return e.json()})).then((function(a){e.setState({gear:a})})))}},{key:"render",value:function(){var e,a=this.state,t=a.error,r=a.isLoaded,s=a.guild,l=a.gear;return e=t?Object(c.jsxs)("div",{children:["Error: ",t.message]}):r?Object(c.jsx)(v,{guildMembers:s,gear:l}):Object(c.jsx)("div",{children:"Loading..."}),Object(c.jsxs)("div",{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("h2",{children:"Schmockwave"})})}),Object(c.jsx)("hr",{}),Object(c.jsx)(m.a,{children:Object(c.jsx)(O.a,{children:e})})]})}}]),t}(s.a.Component);var H=function(e){var a=Object(r.useState)(s.a.useMemo((function(){return JSON.parse(localStorage.getItem("GearTable"))||function(e){var a=[],t=0;return console.log(e),e.forEach((function(e){var r={index:t,name:Object(c.jsx)("span",{children:e.name}),gs:e.gear_score};e.items.forEach((function(e){var a,t="UNCOMMON"===(a=e.quality)?"q2":"RARE"===a?"q3":"EPIC"===a?"q4":"LEGENDARY"===a?"q5":void 0,s="https://de.wowhead.com/item="+e.item_id+"&ilvl="+e.level;null!=e.legy_spell&&(s="https://de.wowhead.com/spell="+e.legy_spell);var l="("+e.level+") "+e.name;r[e.slot]=Object(c.jsx)("a",{href:s,className:t,children:l})})),t++,a.push(r)})),a}(e.data)}),[])),t=Object(i.a)(a,2),l=t[0],n=(t[1],s.a.useMemo((function(){return[{Header:"GS",accessor:"gs"},{Header:"Name",accessor:"name"},{Header:"Waffe",accessor:"MAIN_HAND"},{Header:"Schildhand",accessor:"OFF_HAND"},{Header:"Kopf",accessor:"HEAD"},{Header:"Halskette",accessor:"NECK"},{Header:"Schultern",accessor:"SHOULDER"},{Header:"R\xfccken",accessor:"BACK"},{Header:"Brust",accessor:"CHEST"},{Header:"Handgelenke",accessor:"WRIST"},{Header:"H\xe4nde",accessor:"HANDS"},{Header:"Taile",accessor:"WAIST"},{Header:"Hosen",accessor:"LEGS"},{Header:"Schuhe",accessor:"FEET"},{Header:"Ring",accessor:"FINGER_1"},{Header:"Ring",accessor:"FINGER_2"},{Header:"Trinket",accessor:"TRINKET_1"},{Header:"Trinket",accessor:"TRINKET_2"}]}),[])),o=Object(f.useTable)({columns:n,data:l,initialState:{sortBy:[{id:"rank",desc:!1}]}},f.useSortBy),d=o.getTableProps,j=o.getTableBodyProps,h=o.headerGroups,b=o.rows,u=o.prepareRow;return Object(c.jsx)("div",{children:Object(c.jsxs)(x.a,Object(g.a)(Object(g.a)({striped:!0,bordered:!0,hover:!0},d()),{},{children:[Object(c.jsx)("thead",{children:h.map((function(e){return Object(c.jsx)("tr",Object(g.a)(Object(g.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(g.a)(Object(g.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"sorted-header",children:[e.render("Header"),Object(c.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(c.jsx)("tbody",Object(g.a)(Object(g.a)({},j()),{},{children:b.map((function(e,a){return u(e),Object(c.jsx)("tr",Object(g.a)(Object(g.a)({},e.getRowProps()),{},{children:e.cells.map((function(e,a){return Object(c.jsx)("td",Object(g.a)(Object(g.a)({},e.getCellProps()),{},{id:"table-cell",children:e.render("Cell")}))}))}))}))}))]}))})},N=function(e){Object(b.a)(t,e);var a=Object(u.a)(t);function t(e){var c;return Object(j.a)(this,t),(c=a.call(this,e)).state={error:null,isLoaded:!1,items:[]},c}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild/blackrock/shockwave/gear").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e,a=this.state,t=a.error,r=a.isLoaded,s=a.items;return e=t?Object(c.jsxs)("div",{children:["Error: ",t.message]}):r?Object(c.jsx)(H,{data:s}):Object(c.jsx)("div",{children:"Loading..."}),Object(c.jsxs)("div",{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("h2",{children:"Schmockwave"})})}),Object(c.jsx)("hr",{}),Object(c.jsx)(m.a,{children:Object(c.jsx)(O.a,{children:e})})]})}}]),t}(s.a.Component);t(39);function y(e){return Object(c.jsx)("div",{children:Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"lightbulb",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M319.45 0C217.44.31 144 83 144 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 319.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 320 64a16 16 0 0 1 0 32z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M112.81 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h101.78a209.51 209.51 0 0 1-4.97-64zM40.73 67.71l80.88 46.69a203.27 203.27 0 0 1 28.12-57.66l-77-44.46a16 16 0 0 0-21.86 5.86l-16 27.71a16 16 0 0 0 5.86 21.86zm91 196l-91 52.55a16 16 0 0 0-5.86 21.86l16 27.71a16 16 0 0 0 21.86 5.86l94.42-54.51c-.88-1.06-1.83-2.27-2.64-3.18a207.68 207.68 0 0 1-32.76-50.26zm467.52 52.55l-91.49-52.82c-8.24 17.65-18.23 34.52-31.28 49.4-1.1 1.26-2.36 2.85-3.59 4.37l94.36 54.48a16 16 0 0 0 21.86-5.86l16-27.71a16 16 0 0 0-5.84-21.83zm0-248.58a16 16 0 0 0 5.86-21.86l-16-27.71a16 16 0 0 0-21.86-5.86l-77.08 44.5a207.31 207.31 0 0 1 28.46 57.47zM240.06 454.35a32 32 0 0 0 5.36 17.65l17.09 25.69A32 32 0 0 0 289.15 512h61.71a32 32 0 0 0 26.64-14.28L394.59 472a32 32 0 0 0 5.41-17.65V416H240zM624 160h-96.81c1.12 14.55 2.18 31.7-5.53 64H624a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",className:"fa-primary"})]})})})}function k(e){return Object(c.jsx)("div",{children:Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"lightbulb",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M175.45 0C73.44.31 0 83 0 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.22 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 175.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 176 64a16 16 0 0 1 0 32z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M96.06 454.35L96 416h160v38.35a32 32 0 0 1-5.41 17.65l-17.09 25.73A32 32 0 0 1 206.86 512h-61.71a32 32 0 0 1-26.64-14.28L101.42 472a32 32 0 0 1-5.36-17.65z",className:"fa-primary"})]})})})}function S(e){var a;return a="hell"===localStorage.getItem("theme")?Object(c.jsx)(k,{}):Object(c.jsx)(y,{}),Object(c.jsx)("nav",{className:"sidebar",children:Object(c.jsxs)("ul",{className:"sidebar-nav",children:[Object(c.jsx)("li",{className:"logo",children:Object(c.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(c.jsx)("span",{className:"link-text logo-text",children:"\xdcbersicht"}),Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"})]})})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)(o.b,{to:"/gearview",className:"nav-link",children:[Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"cat",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-cat fa-w-16 fa-9x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M512 400v32a16 16 0 0 1-16 16H32a32 32 0 0 1-32-32V80a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v304h432a16 16 0 0 1 16 16z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M464 320H346c-21.38 0-32.09-25.85-17-41l32.4-32.4-73.4-73.35-73.37 73.38a32 32 0 0 1-45.25 0l-68.69-68.69a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L192 178.75l73.38-73.38a32 32 0 0 1 45.25 0l96 96L439 169c15.12-15.12 41-4.41 41 17v118a16 16 0 0 1-16 16z",className:"fa-primary"})]})}),Object(c.jsx)("span",{className:"link-text",children:"Gear"})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)(o.b,{to:"/buy",className:"nav-link",children:[Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"alien-monster",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"svg-inline--fa fa-alien-monster fa-w-18 fa-9x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M552 64H159.21l52.36 256h293.15a24 24 0 0 0 23.4-18.68l47.27-208a24 24 0 0 0-18.08-28.72A23.69 23.69 0 0 0 552 64zM444.42 196.48l-67.83 72a12.27 12.27 0 0 1-17.18 0l-67.83-72c-7.65-7.55-2.23-20.48 8.59-20.48h43.54v-52a12.07 12.07 0 0 1 12.14-12h24.29a12.07 12.07 0 0 1 12.15 12v52h43.54c10.82 0 16.24 12.93 8.59 20.48z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M504.42 405.6l5.52-24.28a24 24 0 0 0-23.4-29.32H218.12L150 19.19A24 24 0 0 0 126.53 0H24A24 24 0 0 0 0 24v16a24 24 0 0 0 24 24h69.88l70.25 343.43a56 56 0 1 0 67.05 8.57h209.64a56 56 0 1 0 63.6-10.4zm-145-137.12a12.27 12.27 0 0 0 17.18 0l67.83-72c7.65-7.55 2.23-20.48-8.59-20.48h-43.55v-52a12.07 12.07 0 0 0-12.15-12h-24.29a12.07 12.07 0 0 0-12.14 12v52h-43.54c-10.82 0-16.24 12.93-8.59 20.48z",className:"fa-primary"})]})}),Object(c.jsx)("span",{className:"link-text",children:"Weekly"})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)(o.b,{to:"/analysis",className:"nav-link",children:[Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"space-station-moon-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M461.29 288c9.54 0 17.39 8.39 16.06 17.84C460.53 424.92 356.57 516 231.93 511.87 107.91 507.8 4.2 404.1.13 280.07c-4.09-124.64 87-228.6 206-245.42 9.48-1.33 17.87 6.51 17.87 16.06V288z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M512 223.2c.62 9.11-7 16.8-16.19 16.8H272V16.24C272 7.1 279.68-.59 288.8 0 408.26 8.28 503.72 103.74 512 223.2z",className:"fa-primary"})]})}),Object(c.jsx)("span",{className:"link-text",children:"Collection"})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsxs)(o.b,{to:"/calculator",className:"nav-link",children:[Object(c.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"space-shuttle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-space-shuttle fa-w-20 fa-5x",children:Object(c.jsxs)("g",{className:"fa-group",children:[Object(c.jsx)("path",{fill:"currentColor",d:"M249.46 272H12a12 12 0 0 0-12 12v28.37a12 12 0 0 0 12 12h231.08a12 12 0 0 0 11.71-9.37l6.37-28.37a12.16 12.16 0 0 0 .29-2.62A12 12 0 0 0 249.46 272zm19-96H12a12 12 0 0 0-12 12v29.76a12 12 0 0 0 12 12h250a12 12 0 0 0 11.67-9.44l6.51-29.75a12.26 12.26 0 0 0 .28-2.57 12 12 0 0 0-12-12z",className:"fa-secondary"}),Object(c.jsx)("path",{fill:"currentColor",d:"M310.74 472.22a249.39 249.39 0 0 1-61.1 7.79c-287.91 0-290.74-448 0-448a290.17 290.17 0 0 1 52.68 5.21 12 12 0 0 1 9.53 14c-.06.29-.12.58-.2.87l-12 44.37a12 12 0 0 1-14 8.62c-234.25-48.79-225.48 354 10.63 299.3a12 12 0 0 1 14.36 9c0 .11.05.22.07.33l8.81 44.49a12 12 0 0 1-8.78 14.02z",className:"fa-primary"})]})}),Object(c.jsx)("span",{className:"link-text",children:"PvP"})]})}),Object(c.jsx)("li",{className:"nav-item",onClick:function(a){return e.onClick(a)},children:Object(c.jsxs)("div",{className:"nav-link",children:[a,Object(c.jsx)("span",{className:"link-text",children:"Farbschema"})]})})]})})}function _(){var e=document.documentElement.style,a=getComputedStyle(document.body),t=localStorage.getItem("theme");e.setProperty("--theme-bg",a.getPropertyValue("--theme-"+t+"-bg")),e.setProperty("--theme-color",a.getPropertyValue("--theme-"+t+"-color"))}var C=function(){var e=Object(r.useState)(0),a=Object(i.a)(e,2),t=a[0],s=a[1];return Object(r.useEffect)((function(){document.title="WoW Summary"}),[]),_(),Object(c.jsx)(o.a,{basename:"/WoWSummary",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("main",{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/gearview",children:Object(c.jsx)(N,{})}),Object(c.jsx)(d.a,{path:"/buy",children:Object(c.jsx)(N,{})}),Object(c.jsx)(d.a,{path:"/analysis",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"/calculator",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"/",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"*",children:"404"})]})}),Object(c.jsx)(S,{onClick:function(e){"hell"===localStorage.getItem("theme")?localStorage.setItem("theme","dunkel"):localStorage.setItem("theme","hell"),_();var a=t;s(++a)}},t)]})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),c(e),r(e),s(e),l(e)}))};n.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),M()}},[[45,1,2]]]);
//# sourceMappingURL=main.813a8935.chunk.js.map