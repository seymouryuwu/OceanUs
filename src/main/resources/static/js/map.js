/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT :  Map Page */
/* DESCRIPTION : JavaScript functions only applicable to the map page */
/* AUTHOR:     : Malcolm Malloy */
/* TARGET HTML : templates/map.html */

/* --------------- */
/* MAP : PAGE LOAD */
/* --------------- */

$( document ).ready(function() {
  map2018();
  map2019();
  waste_water_mel();
  reuse_viz();
});

/* ---------------------- */
/* MAP : 2019 TABLEAU MAP */
/* ---------------------- */

function map2019() {
    var containerDiv = document.getElementById("tableauViz_2019"),
    url = "https://public.tableau.com/shared/HYKJXYQ3H?:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

/* ---------------------- */
/* MAP : 2018 TABLEAU MAP */
/* ---------------------- */

function map2018() {
    var containerDiv = document.getElementById("tableauViz_2018"),
    url = "https://public.tableau.com/views/WaterConsumptionineachdistrictofMelbournein2018/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}

/* ------------------------------- */
/* MAP : TABLEAU WASTE WATER GRAPH */
/* ------------------------------- */

function waste_water_mel() {
    var containerDiv = document.getElementById("tableauViz_waste"),
    url = "https://public.tableau.com/views/wastewateravevolume/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}

/* -------------------------------------- */
/* MAP : TABLEAU REUSE AND RECYCLE GRAPH  */
/* -------------------------------------- */

function reuse_viz() {
    var containerDiv = document.getElementById("tableauViz_reuse"),
    url = "https://public.tableau.com/views/reuseofreclaimedwater/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}
