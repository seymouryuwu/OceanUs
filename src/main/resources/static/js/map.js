$( document ).ready(function() {

});


function map2019() {
    var containerDiv = document.getElementById("tableauViz_2019"),
    url = "https://public.tableau.com/shared/HYKJXYQ3H?:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

function map2018() {
    var containerDiv = document.getElementById("tableauViz_2018"),
    url = "https://public.tableau.com/views/WaterConsumptionineachdistrictofMelbournein2018/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}

function waste_water_mel() {
    var containerDiv = document.getElementById("tableauViz_waste"),
    url = "https://public.tableau.com/views/wastewateravevolume/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}

function reuse_viz() {
    var containerDiv = document.getElementById("tableauViz_reuse"),
    url = "https://public.tableau.com/views/reuseofreclaimedwater/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}
