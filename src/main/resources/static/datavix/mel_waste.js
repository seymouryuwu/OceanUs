function waste_water_mel() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/wastewateravevolume/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}
