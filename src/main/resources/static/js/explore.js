/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Explore Page */
/* DESCRIPTION : JavaScript functions only applicable to the explore page */
/* AUTHOR      : Malcolm Malloy */
/* TARGET HTML : templates/explore.html */
/* NOTES       : Modifying the maps and graphs must be done through logging into Tableau */

/* ------------------- */
/* EXPLORE : PAGE LOAD */
/* ------------------- */

$( document ).ready(function() {
  tableauMap();
  waste_water_mel();
  reuse_viz();
});

/* --------------------- */
/* EXPLORE : TABLEAU MAP */
/* --------------------- */
/* Loads and embeds Tableau map iframe */

function tableauMap() {
    var containerDiv = document.getElementById("tableauViz_2019"),
    url = "https://public.tableau.com/views/WaterConsumptionineachdistrictofMelbournein2019/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

/* ----------------------------------- */
/* EXPLORE : TABLEAU WASTE WATER GRAPH */
/* ----------------------------------- */
/* Loads and embeds Tableau waste water graph  */

function waste_water_mel() {
    var containerDiv = document.getElementById("tableauViz_waste"),
    url = "https://public.tableau.com/views/Wastewatervolume/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}

/* ------------------------------------------ */
/* EXPLORE : TABLEAU REUSE AND RECYCLE GRAPH  */
/* ------------------------------------------ */
/* Loads and embeds Tableau recycle graph iframe */

function reuse_viz() {
    var containerDiv = document.getElementById("tableauViz_reuse"),
    url = "https://public.tableau.com/views/reuseofreclaimedwater/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}
