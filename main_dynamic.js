let aliases = {
    "root": "", // root
    "A": "A",
    "B": "B",
    "C": "B.1.1.1",
    "D": "B.1.1.25",
    "G": "B.1.258.2",
    "K": "B.1.1.277",
    "L": "B.1.1.10",
    "M": "B.1.1.294",
    "N": "B.1.1.33",
    "P": "B.1.1.28",
    "Q": "B.1.1.7",
    "R": "B.1.1.316",
    "S": "B.1.1.217",
    "U": "B.1.177.60",
    "V": "B.1.177.54",
    "W": "B.1.177.53",
    "Y": "B.1.177.52",
    "Z": "B.1.177.50",
    "AA": "B.1.177.15",
    "AB": "B.1.160.16",
    "AC": "B.1.1.405",
    "AD": "B.1.1.315",
    "AE": "B.1.1.306",
    "AF": "B.1.1.305",
    "AG": "B.1.1.297",
    "AH": "B.1.1.241",
    "AJ": "B.1.1.240",
    "AK": "B.1.1.232",
    "AL": "B.1.1.231",
    "AM": "B.1.1.216",
    "AN": "B.1.1.200",
    "AP": "B.1.1.70",
    "AQ": "B.1.1.39",
    "AS": "B.1.1.317",
    "AT": "B.1.1.370",
    "AU": "B.1.466.2",
    "AV": "B.1.1.482",
    "AW": "B.1.1.464",
    "AY": "B.1.617.2",
    "AZ": "B.1.1.318",
    "BA": "B.1.1.529",
    "BB": "B.1.621.1",
    "BC": "B.1.1.529.1.1.1",
    "BD": "B.1.1.529.1.17.2",
    "BE": "B.1.1.529.5.3.1",
    "BF": "B.1.1.529.5.2.1",
    "BG": "B.1.1.529.2.12.1",
    "BH": "B.1.1.529.2.38.3",
    "BJ": "B.1.1.529.2.10.1",
    "BK": "B.1.1.529.5.1.10",
    "BL": "B.1.1.529.2.75.1",
    "BM": "B.1.1.529.2.75.3",
    "BN": "B.1.1.529.2.75.5",
    "BP": "B.1.1.529.2.3.16",
    "BQ": "B.1.1.529.5.3.1.1.1.1",
    "BR": "B.1.1.529.2.75.4",
    "BS": "B.1.1.529.2.3.2",
    "BT": "B.1.1.529.5.1.21",
    "BU": "B.1.1.529.5.2.16",
    "BV": "B.1.1.529.5.2.20",
    "BW": "B.1.1.529.5.6.2",
    "BY": "B.1.1.529.2.75.6",
    "BZ": "B.1.1.529.5.2.3",
    "CA": "B.1.1.529.2.75.2",
    "CB": "B.1.1.529.2.75.9",
    "CC": "B.1.1.529.5.3.1.1.1.2",
    "CD": "B.1.1.529.5.2.31",
    "CE": "B.1.1.529.5.2.33",
    "CF": "B.1.1.529.5.2.27",
    "CG": "B.1.1.529.5.2.26",
    "CH": "B.1.1.529.2.75.3.4.1.1",
    "CJ": "B.1.1.529.2.75.3.1.1.1",
    "CK": "B.1.1.529.5.2.24",
    "CL": "B.1.1.529.5.1.29",
    "CM": "B.1.1.529.2.3.20",
    "CN": "B.1.1.529.5.2.21",
    "CP": "B.1.1.529.5.2.6",
    "CQ": "B.1.1.529.5.3.1.4.1.1",
    "CR": "B.1.1.529.5.2.18",
    "CS": "B.1.1.529.4.1.10",
    "CT": "B.1.1.529.5.2.36",
    "CU": "B.1.1.529.5.1.26",
    "CV": "B.1.1.529.2.75.3.1.1.3",
    "CW": "B.1.1.529.5.3.1.1.1.1.1.1.14",
    "CY": "B.1.1.529.5.2.7",
    "CZ": "B.1.1.529.5.3.1.1.1.1.1.1.1",
    "DA": "B.1.1.529.5.2.38",
    "DB": "B.1.1.529.5.2.25",
    "DC": "B.1.1.529.4.6.5",
    "DD": "B.1.1.529.2.3.21",
    "DE": "B.1.1.529.5.1.23",
    "DF": "B.1.1.529.5.10.1",
    "DG": "B.1.1.529.5.2.24.2.1.1",
    "DH": "B.1.1.529.5.1.22",
    "DJ": "B.1.1.529.5.1.25",
    "DK": "B.1.1.529.5.3.1.1.1.1.1.1.7",
    "DL": "B.1.1.529.5.1.15",
    "DM": "B.1.1.529.5.3.1.1.1.1.1.1.15",
    "DN": "B.1.1.529.5.3.1.1.1.1.1.1.5",
    "DP": "B.1.1.529.5.3.1.1.1.1.1.1.8",
    "DQ": "B.1.1.529.5.2.47",
    "DR": "B.1.1.529.5.3.1.1.1.1.1.1.3",
    "DS": "B.1.1.529.2.75.5.1.3.1",
    "DT": "B.1.1.529.5.3.1.1.1.1.1.1.32",
    "DU": "B.1.1.529.5.3.1.1.1.1.1.1.2",
    "DV": "B.1.1.529.2.75.3.4.1.1.1.1.1",
    "DW": "B.1.1.529.5.3.1.1.2.1",
    "DY": "B.1.1.529.5.2.48",
    "DZ": "B.1.1.529.5.2.49",
    "EA": "B.1.1.529.5.3.1.1.1.1.1.1.52",
    "EB": "B.1.1.529.5.1.35",
    "EC": "B.1.1.529.5.3.1.1.1.1.1.10.1",
    "ED": "B.1.1.529.5.3.1.1.1.1.1.1.18",
    "EE": "B.1.1.529.5.3.1.1.1.1.1.1.4",
    "EF": "B.1.1.529.5.3.1.1.1.1.1.1.13",
    "EG": "XBB.1.9.2",
    "EH": "B.1.1.529.5.3.1.1.1.1.1.1.28",
    "EJ": "B.1.1.529.2.75.5.1.3.8",
    "EK": "XBB.1.5.13",
    "EL": "XBB.1.5.14",
    "EM": "XBB.1.5.7",
    "EN": "B.1.1.529.5.3.1.1.1.1.1.1.46",
    "EP": "B.1.1.529.2.75.3.1.1.4",
    "EQ": "B.1.1.529.5.1.33",
    "ER": "B.1.1.529.5.3.1.1.1.1.1.1.22",
    "ES": "B.1.1.529.5.3.1.1.1.1.1.1.65",
    "ET": "B.1.1.529.5.3.1.1.1.1.1.1.35",
    "EU": "XBB.1.5.26",
    "EV": "B.1.1.529.5.3.1.1.1.1.1.1.71",
    "EW": "B.1.1.529.5.3.1.1.1.1.1.1.38",
    "EY": "B.1.1.529.5.3.1.1.1.1.1.1.13.1.1.1",
    "EZ": "B.1.1.529.5.3.1.1.1.1.1.1.43",
    "FA": "B.1.1.529.5.3.1.1.1.1.1.1.10",
    "FB": "B.1.1.529.5.3.1.1.1.1.1.2.1",
    "FC": "B.1.1.529.5.3.1.1.1.1.1.1.72",
    "FD": "XBB.1.5.15",
    "FE": "XBB.1.18.1",
    "FF": "B.1.1.529.5.3.1.1.1.1.1.8.2",
    "FG": "XBB.1.5.16",
    "FH": "XBB.1.5.17",
    "FJ": "B.1.1.529.2.75.3.4.1.1.1.1.19",
    "FK": "B.1.1.529.2.75.3.4.1.1.1.1.17",
    "FL": "XBB.1.9.1",
    "FM": "B.1.1.529.5.3.1.1.1.1.1.1.53",
    "FN": "B.1.1.529.5.3.1.1.1.1.1.1.74",
    "FP": "XBB.1.11.1",
    "FQ": "B.1.1.529.5.3.1.1.1.1.1.1.39",
    "FR": "B.1.1.529.2.75.5.1.2.3",
    "XA": ["B.1.1.7","B.1.177"],
    "XB": ["B.1.634","B.1.631"],
    "XC": ["AY.29","B.1.1.7"],
    "XD": ["B.1.617.2*","BA.1*"],
    "XE": ["BA.1*","BA.2*"],
    "XF": ["B.1.617.2*","BA.1*"],
    "XG": ["BA.1*","BA.2*"],
    "XH": ["BA.1*","BA.2*"],
    "XJ": ["BA.1*","BA.2*"],
    "XK": ["BA.1*","BA.2*"],
    "XL": ["BA.1*","BA.2*"],
    "XM": ["BA.1.1*","BA.2*"],
    "XN": ["BA.1*","BA.2*"],
    "XP": ["BA.1.1*","BA.2*"],
    "XQ": ["BA.1.1*","BA.2*"],
    "XR": ["BA.1.1*","BA.2*"],
    "XS": ["B.1.617.2*","BA.1.1*"],
    "XT": ["BA.2*","BA.1*"],
    "XU": ["BA.1*","BA.2*"],
    "XV": ["BA.1*","BA.2*"],
    "XW": ["BA.1*","BA.2*"],
    "XY": ["BA.1*","BA.2*"],
    "XZ": ["BA.2*","BA.1*"],
    "XAA": ["BA.1*","BA.2*"],
    "XAB": ["BA.1*","BA.2*"],
    "XAC": ["BA.2*","BA.1*","BA.2*"],
    "XAD": ["BA.2*","BA.1*"],
    "XAE": ["BA.2*","BA.1*"],
    "XAF": ["BA.1*","BA.2*"],
    "XAG": ["BA.1*","BA.2*"],
    "XAH": ["BA.2*","BA.1*"],
    "XAJ": ["BA.2.12.1*","BA.4*"],
    "XAK": ["BA.2*","BA.1*","BA.2*"],
    "XAL": ["BA.1*","BA.2*"],
    "XAM": ["BA.1.1","BA.2.9"],
    "XAN": ["BA.2*","BA.5.1"],
    "XAP": ["BA.2*","BA.1*"],
    "XAQ": ["BA.1*","BA.2*"],
    "XAR": ["BA.1*","BA.2*"],
    "XAS": ["BA.5*","BA.2*"],
    "XAT": ["BA.2.3.13","BA.1*"],
    "XAU": ["BA.1.1*","BA.2.9*"],
    "XAV": ["BA.2*","BA.5*"],
    "XAW": ["BA.2*","AY.122"],
    "XAY": ["AY.45","BA.4/5*"],
    "XAZ": ["BA.2.5","BA.5","BA.2.5"],
    "XBA": ["AY.45","BA.4/5"],
    "XBB": ["BJ.1","BM.1.1.1"],
    "XBC": ["BA.2*","B.1.617.2*","BA.2*","B.1.617.2*"],
    "XBD": ["BA.2.75.2","BF.5"],
    "XBE": ["BA.5.2","BE.4.1"],
    "XBF": ["BA.5.2.3","CJ.1"],
    "XBG": ["BA.2.76","BA.5.2"],
    "XBH": ["BA.2.3.17","BA.2.75.2"],
    "XBJ": ["BA.2.3.20","BA.5.2"]
}

function alias(long_lineage) {
  let best_alias = null;
  for(a in aliases) {
    if(a.charAt(0) == "X") // skip recombinants
      continue
    let a_depth = aliases[a].split('.').length;
    if(long_lineage.length > aliases[a].length && aliases[a]+"." == long_lineage.substring(0, aliases[a].length+1) && (best_alias == null || a_depth > aliases[best_alias].split('.').length)) {
      best_alias = a;
    }
  }
  if(best_alias == null)
    return long_lineage;
  return best_alias + long_lineage.substring(aliases[best_alias].length, long_lineage.length)
}

class Lineage {
  constructor(name) {
    this.display_name = name;
    let extension = name.indexOf('.') > -1 ? name.substring(name.indexOf('.'), name.length) : "";
    let prefix = name.indexOf('.') > -1 ? name.substring(0, name.indexOf('.')) : name;
    if(!(prefix in aliases)) {
      console.error("ERROR: '" + prefix + "' is not in our alias list - either it's wrong, or our list is out of date");
    }
    let prefix_full = aliases[prefix];
    if(typeof prefix_full == typeof []) { // recombinant, but the component lineages are not trivially parsed
      this.unaliased = name; // this will also fall apart if an when there are aliased sub-recombinant lineages
      this.recomb = prefix_full;
    } else {
      this.unaliased = prefix_full + extension;
      this.recomb = null;
    }
    this.parts = this.unaliased.split('.');
    this.depth = this.display_name != "root" ? this.parts.length : 0;
    this.weekly_cts = {}; // number of genomes observed per week, where keys are isoweek #s
    this.children = [];
  }
  get_name() {
    return this.display_name;
  }
  get_long_name() {
    return this.unaliased;
  }
  parent_of(other_lineage) {
    return this.unaliased.length < other_lineage.get_long_name().length
        && this.unaliased+"." == other_lineage.get_long_name().substring(0, this.unaliased.length+1);
  }
  increment(week) {
    if(!(week in this.weekly_cts)) {
      this.weekly_cts[week] = 0;
    }
    this.weekly_cts[week]++;
  }
  get(week) {
    return (week in this.weekly_cts) ? this.weekly_cts[week] : 0;
  }
  get_total(week, exclude) {
    let t = (week in this.weekly_cts) ? this.weekly_cts[week] : 0;
    for(let i = 0; i < this.children.length; i++) {
      if(exclude.indexOf(this.children[i].get_name()) == -1)
        t = t + this.children[i].get_total(week, exclude);
    }
    return t;
  }
  // total samples assigned to this specific lineage across all weeks
  assigned() {
    let s = 0;
    for(let w in this.weekly_cts) {
      s = s + this.weekly_cts[w];
    }
    return s;
  }
  // total samples assigned to this lineage AND ALL SUBLINEAGES across all weeks
  total() {
    let s = 0;
    for(let w in this.weekly_cts) {
      s = s + this.weekly_cts[w];
    }
    for(let i = 0; i < this.children.length; i++) {
      s = s + this.children[i].total();
    }
    return s;
  }
  *depth_first() {
    if(this.display_name != "root")
      yield this;
    for(let i = 0; i < this.children.length; i++)
      yield * this.children[i].depth_first();
  }
  add_lineage(l) {
    for(let i = 0; i < this.children.length; i++) {
      if(this.children[i].parent_of(l)) {
        this.children[i].add_lineage(l);
        return;
      }
    }
    l.parent = this;
    this.children.push(l);
  }
  lca(other_lineage) {
    for(let i = 0; i < (this.parts.length < other_lineage.parts.length ? this.parts.length : other_lineage.parts.length); i++) {
      if(this.parts[i] != other_lineage.parts[i]) {
        return this.parts.slice(0, i).join('.');
      }
    }
    return (this.parts.length < other_lineage.parts.length ? this.unaliased : other_lineage.unaliased);
  }
  lowest_split(other_lineage) { // like LCA but the lineage just below that tha differentiates this from the other
    for(let i = 0; i < (this.parts.length < other_lineage.parts.length ? this.parts.length : other_lineage.parts.length); i++) {
      if(this.parts[i] != other_lineage.parts[i]) {
        return this.parts.slice(0, i+1).join('.');
      }
    }
    return (this.parts.length < other_lineage.parts.length ? this.unaliased : other_lineage.unaliased);
  }
}

class LineageTree {
  constructor(lineages) {
    this.root = new Lineage("root");
    lineages.sort(function sort(a,b) {return a.depth-b.depth});
    for(let i = 0; i < lineages.length; i++) {
      this.root.add_lineage(lineages[i]);
    }
  }
  add_lineage(lineage) {
    this.root.add_lineage(lineage);
  }
  *depth_first() {
    yield * this.root.depth_first();
  }
}

let voi_list = ["BA.5", "BA.2", "BA.2.75", "BA.4.6", "BA.5.2", "BF.7", "BN.1", "BQ.1", "BQ.1.1", "CK.1", "XBB", "XBB.1.5", "XBB.1.9", "XBB.1.16"];

let voi_lookup = {};

let colors = ["#023eff", "#ff7c00", "#1ac938", "#e8000b", "#8b2be2", "#9f4800", "#f14cc1", "#a3a3a3", "#ffc400", "#00d7ff", "#a1c9f4", "#ffb482", "#8de5a1", "#ff9f9b", "#d0bbff", "#debb9b", "#fab0e4", "#cfcfcf", "#fffea3", "#b9f2f0", "#4c72b0", "#dd8452", "#55a868", "#c44e52", "#8172b3", "#937860", "#da8bc3", "#8c8c8c", "#ccb974", "#64b5cd"];

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
let meta = null; // metadata

function init() {
  document.getElementById("report_date").innerText = "May 1, 2023";
  document.getElementById("sample_date").innerText = "April 21, 2023";
  loadText("230501.meta_simple.tsv", function(content) {
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
    trends(meta, "variants", "voc", "recent_voc");
  });
}

function add_lin() {
  lin = document.getElementById("lin").value;
  if(!(lin in voi_lookup)) {
    alert("Lineage '" + lin + "' was not found (among our samples)");
    return;
  }
  voi_list.push(lin);
  // this should be all we need to clear globally to recreate everything from scratch:
  voi_lookup = {};
}

function show_all() {
  trends(meta, "variants", "voc", "recent_voc", true);
}

function trends(meta, eid2, eid, eid3, plot_all) {
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

  let weekly_counts = new Array(dates.length).fill(0);
  lineage_list = {}; // just a list of unique lineage names
  for(id in meta)
    lineage_list[meta[id]["lineage"]] = 1;

  // make lineage list and tree of lineages
  let vois = [];
  for(l in lineage_list) {
    vois.push(new Lineage(l));
    voi_lookup[l] = vois[vois.length-1];
  }
  for(let i = 0; i < voi_list.length; i++) {
    if(!(voi_list[i] in voi_lookup)) {
      vois.push(new Lineage(voi_list[i]));
      voi_lookup[voi_list[i]] = vois[vois.length-1];
    }
  }
  let lineage_tree = new LineageTree(vois);

  // add up weekly counts per lineage
  for(id in meta) {
    let w = parseInt(meta[id]["isoweek"]) - 1; // offset by 1 to make it 0-indexed
    weekly_counts[w]++;
    if(isNaN(w)) {console.log(id, w, l, "MISSING WEEK!"); continue;} // it didn't have a week for some reason (ex. 1466)
    voi_lookup[meta[id]["lineage"]].increment(w);
  }


  let table = document.createElement("table");
  document.getElementById(eid).innerHTML = '';
  document.getElementById(eid).appendChild(table);
  let tr = document.createElement("tr");
  table.appendChild(tr);
  col = document.createElement("th");
  col.innerText = "Pango lineage";
  tr.appendChild(col);
  col = document.createElement("th");
  col.innerText = "Assigned";
  tr.appendChild(col);
  col = document.createElement("th");
  col.innerText = "Total (incl. sublineages)";
  tr.appendChild(col);

  let tot = 0;
  for(const v of lineage_tree.depth_first()) {
    tr = document.createElement("tr");
    table.appendChild(tr);
    col = document.createElement("td");
    col.innerHTML = (v.parent.depth>0 ? "&nbsp;".repeat(v.parent.depth-1) : "") + (v.parent.depth>0 ? "&boxur;" : "") + "&boxh;".repeat(v.depth-v.parent.depth-1) + v.get_name();
    tr.appendChild(col);
    col = document.createElement("td");
    tot = tot + v.assigned();
    col.innerText = v.assigned();
    tr.appendChild(col);
    col = document.createElement("td");
    col.innerText = v.total();
    tr.appendChild(col);
  }

  tr = document.createElement("tr");
  table.appendChild(tr);
  tr.appendChild(document.createElement("th"));
  col = document.createElement("th");
  col.innerText = "Total samples";
  tr.appendChild(col);
  col = document.createElement("td");
  col.innerText = tot;
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

  for(i = 0; i < dates.length; i++) {
    tr = document.createElement("tr");
    table.appendChild(tr);
    col = document.createElement("th");
    let d = new Date(dates[i]);
    col.innerText = d.toLocaleString('default', { month: 'short' }) + " " + d.getDate() + ", " + (1900+d.getYear());
    tr.appendChild(col);
    col = document.createElement("td");
    col.innerText = weekly_counts[i];
    tr.appendChild(col);
  }

  let apex = [];

  for(let k = 0; k < voi_list.length; k++) {
    let v = voi_list[k];
    y = new Array(dates.length);
    for(var i = 0; i < dates.length; i++) {
      y[i] = [dates[i], 0];
    }
    for(i = 0; i < y.length; i++) {
      y[i][1] = voi_lookup[v].get_total(i, voi_list)
    }
    for(var j = 0; j < y.length; j++) {
      y[j][1] = y[j][1] / weekly_counts[j] * 100;
    }
    if(plot_all) {
      apex.push({"name":v, "data":y});
    } else {
      apex.push({"name":v, "data":y.slice(y.length-15, y.length)});
    }
  }

  let options = {
    colors: colors,
    chart: {
      //type: 'line',
      type: 'bar',
      stacked: true,
      width: "100%",
      height: "400px",
      events : {
        /*
        beforeZoom : (e, {xaxis}) => {
          return {xaxis: {min:(xaxis.min < use_dates[0] ? use_dates[0] : xaxis.min), max:(xaxis.max > use_dates[use_dates.length-1] ? use_dates[use_dates.length-1] : xaxis.max)}};
        }
        */
      }
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opts) {
          return parseInt(val);
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
      min: apex[0]["data"][0][0],
      max: apex[0]["data"][apex[0]["data"].length-1][0],
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
  //chart.zoomX(dates[dates.length-15], dates[dates.length-1]);
  //}, 2000);
  

  // recent weeks variant table
  table = document.createElement("table");
  document.getElementById(eid3).innerHTML = "";
  document.getElementById(eid3).appendChild(table);
  tr = document.createElement("tr");
  table.appendChild(tr);
  col = document.createElement("th");
  col.innerText = "Pango lineage";
  tr.appendChild(col);
  for(var wk = max_week-8; wk < max_week; wk++) {
    col = document.createElement("th");
    let d = (new Date(dates[wk])).toLocaleDateString("en-US");
    col.innerHTML = d.substring(0,d.length-5) + "-<br/><a style='color:gray'># (%/wk)</a>";// + (new Date(dates[wk]).getDate()+6).toLocaleDateString("en-US");
    tr.appendChild(col);
  }
  let prev = null;
  for(const v of lineage_tree.depth_first()) {
    if(voi_list.indexOf(v.get_name()) == -1) continue;
    if(prev != null) {
      let lca = v.lowest_split(prev);
      let aliased_lca = alias(lca);
      if(aliased_lca != v.get_name() && aliased_lca != prev.get_name()) {
        tr = document.createElement("tr");
        table.appendChild(tr);
        col = document.createElement("td");
        col.innerHTML = "&boxh;".repeat(lca.split('.').length) + "&nbsp;" + aliased_lca;
        tr.appendChild(col);
      }
      
    }
    prev = v;
    tr = document.createElement("tr");
    table.appendChild(tr);
    col = document.createElement("td");
    col.innerHTML = "&boxh;".repeat(v.depth) + "&nbsp;" + v.get_name();
    tr.appendChild(col);
    for(j = max_week-8; j < max_week; j++) {
      // exclude any lineages in voi_list that are children of this one (ex. BA.5 should exclude BQ.1)
      ct = v.get_total(j, exclude=voi_list);
      for(let i = 0; i < voi_list.length; i++) {
      }
      col = document.createElement("td");
      //ct = (j in lineages[l] ? lineages[l][j] : 0);
      if(ct > 0)
        col.innerText = ct + " (" + (ct/weekly_counts[j]*100).toFixed(2) + "%)";
      else
        col.innerText = "-";
      tr.appendChild(col);
    }
  }
}


// fire init() when page is loaded (i.e. body.onload...)
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

