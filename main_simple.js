let voi_list = [
  ["B.1.1.7", "Alpha"],
  ["B.1.351", "Beta"],
  ["P.1","Gamma"],
  ["B.1.617.2","Delta"],
  ["AY", "Delta"],
  ["B.1.427","Epsilon"],
  ["B.1.429","Epsilon"],
  ["P.2","Zeta"],
  ["B.1.525","Eta"],
  ["P.3", "Theta"],
  ["B.1.526","Iota"],
  ["B.1.617.1","Kappa"],
  ["B.1.621", "Mu"],
  //["B.1.1.529", "Omicron"], // nothing can be assigned here anymore], according to pangolin], all will be BA.*
  ["BA.1", "Omicron (BA.1)"],
  ["BA.2.12", "Omicron (BA.2.12)"],
  ["BA.2.75", "Omicron (BA.2.75)"],
  ["BA.2", "Omicron (BA.2)"],
  ["BA.4.6", "Omicron (BA.4.6)"],
  ["BA.4", "Omicron (BA.4)"],
  ["BA.5", "Omicron (BA.5)"],
  ["BE", "Omicron (BA.5)"],
  ["BF.7", "Omicron (BA.5)"],
  ["BF", "Omicron (BA.5)"],
  ["BK", "Omicron (BA.5)"],
  ["BG", "Omicron (BA.2)"],
  ["BL", "Omicron (BA.2)"],
  ["BM", "Omicron (BA.2)"],
  ["BN", "Omicron (BA.2)"],
  ["BQ.1.1", "Omicron (BA.5)"],
  ["BQ", "Omicron (BA.5)"],
  ["BU", "Omicron (BA.5)"],
  ["CK", "Omicron (BA.5)"],
  ["XE", "Omicron (recombinant)"],
  ["XM", "Omicron (recombinant)"],
  ["XAZ", "Omicron (recombinant)"],
  ["XBB", "Omicron (recombinant)"]
]
let voi = new Map(voi_list);

// total VOC used to be "#00FF00",
let cl = ["#AAAAAA", "#00FFFF", "#776600", "#880000", "#FF00FF", "#FF0000", "#FF99AA", "#FFFF00", "#FF7700", "#FFDD77", "#FF3300", "#FFAA33", "#0000FF", "#00AA00", "#AA3300", "#000000"];
//        Other      Alpha      Beta       Gamma      Delta      Epsilon    Iota       Mu         Omicron    BA.2.12    BA.2.75    BA.2       BA.4.6     BA.4       BA.5       X*

function loadText(file, callback) {   
  var xobj = new XMLHttpRequest();
  //xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function loadJSON(file, callback) {   
  loadText(file, function(content) {
    callback(JSON.parse(content));
  });
}

// GLOBALS
let apex = null; // chart
let meta = null; // metadata

function init() {
  document.getElementById("report_date").innerText = "December 2, 2022";
  document.getElementById("sample_date").innerText = "November 23, 2022";
  loadText("221202.meta_simple.tsv", function(content) {
    temp = [];
    lines = content.trim().split('\n');
    header = lines[0].split('\t');
    for(var i = 1; i < lines.length; i++) {
      parts = lines[i].split('\t');
      temp[parts[0]] = [];
      for(var j = 0; j < parts.length; j++) {
        temp[parts[0]][header[j]] = parts[j];
      }
    }
    document.getElementById("sample_count").innerText = (lines.length-1).toLocaleString("en-US");
    meta = temp; // we use the temp to reduce the time that 'meta' is not null such that check_var() could come up true without meta being fully populated
    trends(meta, "variants", "voc");
    voc_table(meta, "recent_voc");
  });
}

let lineages = {}; //pango lineage
let wk_tot;
let recent_vocs = ["BA.4.6", "BA.5.2", "BF.7", "BN.1", "BQ.1", "BQ.1.1", "CK.1", "XBB"];
let is_voi;

function add_lin() {
  lin = document.getElementById("lin").value;
  if(!(lin in lineages)) {
    alert("Lineage '" + lin + "' was not found");
    return;
  }
  recent_vocs.push(lin);
  voc_table(meta, "recent_voc");
}

function voc_table(meta, eid) {
  let max_week = 0;
  for(sample in meta) {
    if(parseInt(meta[sample]["isoweek"]) > max_week) {
      max_week = parseInt(meta[sample]["isoweek"]);
    }
  }
  let dates = [];
  let st = new Date(2021, 0, 4, 12); // Jan 4 at 12pm
  for(var w = 0; w < max_week; w++) {
    let en = new Date(st.getTime());;
    en.setDate(en.getDate() + 6);
    //dates.push("Week of " + st.toLocaleString('default', { month: 'long' }) + " " + st.getDate() + ", " + (1900+st.getYear()));
    dates.push(st.getTime());
    st.setDate(st.getDate() + 7);
  }

  let table = document.createElement("table");
  document.getElementById(eid).innerHTML = "";
  document.getElementById(eid).appendChild(table);
  let tr = document.createElement("tr");
  table.appendChild(tr);
  col = document.createElement("th");
  col.innerText = "Pango lineage";
  tr.appendChild(col);
  for(var wk = max_week-8; wk < max_week; wk++) {
    col = document.createElement("th");
    let d = (new Date(dates[wk])).toLocaleDateString("en-US");
    col.innerText = d.substring(0,d.length-5) + "-";// + (new Date(dates[wk]).getDate()+6).toLocaleDateString("en-US");
    tr.appendChild(col);
  }
  for(let i = 0; i < recent_vocs.length; i++) {
    let v = recent_vocs[i];
    tr = document.createElement("tr");
    table.appendChild(tr);
    col = document.createElement("td");
    col.innerText = v;
    tr.appendChild(col);
    for(j = max_week-8; j < max_week; j++) {
      let ct = 0;
      for(l in lineages) {
        if(l == v || l.substr(0, v.length+1) == v+".") {
          ct = ct + lineages[l][j];
        }
      }
      col = document.createElement("td");
      //ct = (j in lineages[l] ? lineages[l][j] : 0);
      col.innerText = ct + " (" + (ct/wk_tot[j]*100).toFixed(2) + "%)";
      tr.appendChild(col);
    }
  }
}

function trends(meta, eid2, eid) {

  // parse weeks, find maximum week
  // 2021 week 1 start with Jan 4 (Monday)
  let max_week = 0;
  for(sample in meta) {
    if(parseInt(meta[sample]["isoweek"]) > max_week) {
      max_week = parseInt(meta[sample]["isoweek"]);
    }
  }
  let dates = [];
  let st = new Date(2021, 0, 4, 12); // Jan 4 at 12pm
  for(var w = 0; w < max_week; w++) {
    let en = new Date(st.getTime());;
    en.setDate(en.getDate() + 6);
    //dates.push("Week of " + st.toLocaleString('default', { month: 'long' }) + " " + st.getDate() + ", " + (1900+st.getYear()));
    dates.push(st.getTime());
    st.setDate(st.getDate() + 7);
  }

  cts = new Array(dates.length).fill(0);
  for(id in meta) {
    let l = meta[id]["lineage"];
    if(!(l in lineages)) {
      lineages[l] = new Array(dates.length);
      for(i = 0; i < lineages[l].length; i++) {
        lineages[l][i] = 0;
      }
    }

    let w = parseInt(meta[id]["isoweek"]) - 1; // offset by 1 to make it 0-indexed
    cts[w]++;
    if(isNaN(w)) {console.log(id, w, l, "MISSING WEEK!"); continue;} // it didn't have a week for some reason (ex. 1466)

    lineages[l][w]++;
  }

  is_voi = new Map();
  for(l in lineages) {
    if(voi.has(l)) is_voi.set(l, l);
    else {
      for(const v of voi.keys()) {
        if(l.substr(0, v.length+1) == v+".") {
          is_voi.set(l, v); // collect all sublineages thereof
          break;
        }
      }
    }
  }

  let table = document.createElement("table");
  document.getElementById(eid).appendChild(table);
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let col = document.createElement("th");
  col.innerText = "WHO";
  tr.appendChild(col);
  col = document.createElement("th");
  col.innerText = "Pango lineage";
  tr.appendChild(col);
  col = document.createElement("th");
  col.innerText = "# Samples";
  tr.appendChild(col);

  let tot_voi = 0;
  for(const v of voi.keys()) {
    tr = document.createElement("tr");
    table.appendChild(tr);
    col = document.createElement("td");
    col.innerText = voi.get(v);
    tr.appendChild(col);
    col = document.createElement("td");
    col.innerText = v;
    tr.appendChild(col);
    col = document.createElement("td");
    let tot = 0;
    if(v in lineages) {
      for(j = 0; j < lineages[v].length; j++)
        tot += lineages[v][j];
    }
    // collect all sublineages thereof
    for(l in lineages) {
      if(l != v && is_voi.has(l) && is_voi.get(l) == v) {
        for(j = 0; j < lineages[l].length; j++)
          tot += lineages[l][j];
      }
    }
    tot_voi += tot;
    col.innerText = tot;
    tr.appendChild(col);
  }

  let tot_all = 0;
  for(l in lineages) {
    for(j = 0; j < lineages[l].length; j++) {
      tot_all += lineages[l][j];
    }
  }
  let non_voi = tot_all - tot_voi;

  tr = document.createElement("tr");
  table.appendChild(tr);
  tr.appendChild(document.createElement("th"));
  col = document.createElement("th");
  col.innerText = "Other (non-VOI/VOC)";
  tr.appendChild(col);
  col = document.createElement("td");
  col.innerText = non_voi;
  tr.appendChild(col);

  tr = document.createElement("tr");
  table.appendChild(tr);
  tr.appendChild(document.createElement("th"));
  col = document.createElement("th");
  col.innerText = "Total samples";
  tr.appendChild(col);
  col = document.createElement("td");
  col.innerText = tot_all;
  tr.appendChild(col);

  document.getElementById(eid).appendChild(document.createElement("br"));
  document.getElementById(eid).appendChild(document.createElement("br"));

  // VOC % by week
  table = document.createElement("table");
  document.getElementById(eid).appendChild(table);
  tr = document.createElement("tr");
  table.appendChild(tr);
  col = document.createElement("th");
  col.innerText = "Week";
  tr.appendChild(col);
  col = document.createElement("th");
  col.innerText = "# Samples";
  tr.appendChild(col);

  let wk_voc = new Array(dates.length).fill(0);
  wk_tot = new Array(dates.length).fill(0);
  for(l in lineages) {
    for(j = 0; j < lineages[l].length; j++) {
      wk_tot[j] += lineages[l][j];
      if(is_voi.has(l)) {
        wk_voc[j] += lineages[l][j];
      }
    }
  }
  for(i = 0; i < dates.length; i++) {
    tr = document.createElement("tr");
    table.appendChild(tr);
    col = document.createElement("th");
    let d = new Date(dates[i]);
    col.innerText = d.toLocaleString('default', { month: 'short' }) + " " + d.getDate() + ", " + (1900+d.getYear());
    tr.appendChild(col);
    col = document.createElement("td");
    col.innerText = wk_tot[i];
    tr.appendChild(col);
  }

  apex = []

  // total VOI/C
  y = new Array(dates.length);
  for(var i = 0; i < dates.length; i++) {
    y[i] = [dates[i], 0];
  }
	for(l in lineages) {
    if(!is_voi.has(l)) {
      for(i = 0; i < lineages[l].length; i++) {
        y[i][1] += lineages[l][i];
      }
    }
  }
  for(var j = 0; j < y.length; j++) {
    y[j][1] = y[j][1] / cts[j] * 100;
  }
  apex.push({"name":"Other", "data":y});

  variants = new Map(); // a dictionary of <variant> : [list of <pango lineage>]
  for(const pango of voi.keys()) {
    if(!variants.has(voi.get(pango))) {
      variants.set(voi.get(pango), []);
    }
    variants.get(voi.get(pango)).push(pango); // get() returns a reference to the array object
  }

  for(const v of variants.keys()) {
    if(["-", "Zeta", "Theta", "Kappa", "Eta"].indexOf(v) != -1) continue;
    y = new Array(dates.length);
    for(var i = 0; i < dates.length; i++) {
      y[i] = [dates[i], 0];
    }
    for(l in lineages) {
      if(is_voi.has(l) && variants.get(v).indexOf(is_voi.get(l)) != -1) {
        for(i = 0; i < lineages[l].length; i++) {
          y[i][1] += lineages[l][i];
        }
      }
    }
    for(var j = 0; j < y.length; j++) {
      y[j][1] = y[j][1] / cts[j] * 100;
    }
    apex.push({"name":v, "data":y});
  }

  var options = {
    colors: cl,
    chart: {
      type: 'line',
      width: "100%",
      height: "400px",
      events : {
        beforeZoom : (e, {xaxis}) => {
          return {xaxis: {min:(xaxis.min < dates[0] ? dates[0] : xaxis.min), max:(xaxis.max > dates[dates.length-1] ? dates[dates.length-1] : xaxis.max)}};
        }
      }
    },
    stroke: {
      curve: 'smooth'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return parseInt(value);
        }
      },
      min: 0,
      max: 100,
      title: {
        text: "% incidence"
      }
    },
    series: apex,
    xaxis: {
      type: "datetime",
      min: dates[0],
      max: dates[dates.length-1],
    },
    tooltip: {
      y: {
        formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
          return value.toFixed(1)+" %";
        }
      }
    }
  }

  document.getElementById(eid2).innerHTML = '';
  var chart = new ApexCharts(document.querySelector('#'+eid2), options);
  chart.render();
  //setTimeout(function() {
  chart.zoomX(dates[dates.length-15], dates[dates.length-1]);
  //}, 2000);
}


// fire init() when page is loaded (i.e. body.onload...)
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

