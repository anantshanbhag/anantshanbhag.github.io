$(function () {

    const title = "North Star";
    const layoutPath = "views/layout/";
    const viewsPath = "views/content/";
    let content = "home";

    // Layout Load
    $("head").load(layoutPath + "head.html");
    $("header").load(layoutPath + "header.html");
    $("footer").load(layoutPath + "footer.html");
    $("#index").load(viewsPath + content + ".html");    // default index load
    $("#lblTitle").text(title);
    $("#lblTitleCaps").text(title.toUpperCase());

    // Click events
    $(document).on('click', ".home", function (e) {
        content = "home";
        $("#index").load(viewsPath + content + ".html");
    });

    $(document).on('click', ".about", function (e) {
        content = "about";
        $("#index").load(viewsPath + content + ".html");
    });

    $(document).on('click', ".dmit", function (e) {
        content = "dmit";
        $("#index").load(viewsPath + content + ".html");
    });

    $(document).on('click', ".astrology", function (e) {
        content = "astrology";
        $("#index").load(viewsPath + content + ".html");
    });

    $(document).on('click', ".services", function (e) {
        content = "services";
        $("#index").load(viewsPath + content + ".html");
    });

    $(document).on('click', ".contact", function (e) {
        content = "contact";
        $("#index").load(viewsPath + content + ".html");
    });
});
