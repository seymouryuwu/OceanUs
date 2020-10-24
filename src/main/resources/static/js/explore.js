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
  tableauMap();
  waste_water_mel();
  reuse_viz();
});

/* ---------------------- */
/* MAP : TABLEAU MAP */
/* ---------------------- */

function tableauMap() {
    var containerDiv = document.getElementById("tableauViz_2019"),
    url = "https://public.tableau.com/views/WaterConsumptionineachdistrictofMelbournein2019/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

/* ------------------------------- */
/* MAP : TABLEAU WASTE WATER GRAPH */
/* ------------------------------- */

function waste_water_mel() {
    var containerDiv = document.getElementById("tableauViz_waste"),
    url = "https://public.tableau.com/views/Wastewatervolume/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}

/* -------------------------------------- */
/* MAP : TABLEAU REUSE AND RECYCLE GRAPH  */
/* -------------------------------------- */

function reuse_viz() {
    var containerDiv = document.getElementById("tableauViz_reuse"),
    url = "https://public.tableau.com/views/reuseofreclaimedwater/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}
