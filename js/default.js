function changeSelector(pane) {
    switch(pane)
    {
        case 'b':
            document.getElementById("BuildingsPane").style.display = "block";
            document.getElementById("UpgradesPane").style.display = "none";
            document.getElementById("DeityPane").style.display = "none";
            document.getElementById("ConquestPane").style.display = "none";
            document.getElementById("TradePane").style.display = "none";
            break;
        case 'u':
            document.getElementById("BuildingsPane").style.display = "none";
            document.getElementById("UpgradesPane").style.display = "block";
            document.getElementById("DeityPane").style.display = "none";
            document.getElementById("ConquestPane").style.display = "none";
            document.getElementById("TradePane").style.display = "none";
            break;
        case 'd':
            document.getElementById("BuildingsPane").style.display = "none";
            document.getElementById("UpgradesPane").style.display = "none";
            document.getElementById("DeityPane").style.display = "block";
            document.getElementById("ConquestPane").style.display = "none";
            document.getElementById("TradePane").style.display = "none";
            break;
        case 'c':
            document.getElementById("BuildingsPane").style.display = "none";
            document.getElementById("UpgradesPane").style.display = "none";
            document.getElementById("DeityPane").style.display = "none";
            document.getElementById("ConquestPane").style.display = "block";
            document.getElementById("TradePane").style.display = "none";
            break;
        case 't':
            document.getElementById("BuildingsPane").style.display = "none";
            document.getElementById("UpgradesPane").style.display = "none";
            document.getElementById("DeityPane").style.display = "none";
            document.getElementById("ConquestPane").style.display = "none";
            document.getElementById("TradePane").style.display = "block";
            break;
        default:

            break;
        
    }
}