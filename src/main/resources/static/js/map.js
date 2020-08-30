$( document ).ready(function() {

});


function viz2019() {
    var containerDiv = document.getElementById("tableauViz_2019"),
    url = "https://public.tableau.com/shared/HYKJXYQ3H?:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}
