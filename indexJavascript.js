var MenuIsShown = false;

function ToggleMenu()
{
    var menu = document.getElementById("Menu");
    MenuIsShown = !MenuIsShown;

    menu.hidden = !MenuIsShown;
}