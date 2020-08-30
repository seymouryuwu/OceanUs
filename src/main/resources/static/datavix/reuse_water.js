function reuse_viz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/reuseofreclaimedwater/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);
}
