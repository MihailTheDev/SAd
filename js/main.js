async function goHome(show_loading = true){
    if(show_loading){
        toggleLoading();
        await sleep(500);
    }

    var browse = document.getElementsByClassName("row-distro")[0];
    browse.style.display = "block";

    var browse = document.getElementsByClassName("row-team")[0];
    browse.style.display = "block";
    
    var browse = document.getElementsByClassName("browse")[0];
    browse.style.display = "none";

    if(show_loading){
        toggleLoading();
        await sleep(500);
    }
}

async function goBrowse(show_loading = true){
    if(show_loading){
        toggleLoading();
        await sleep(500);
    }

    var browse = document.getElementsByClassName("row-distro")[0];
    browse.style.display = "none";

    var browse = document.getElementsByClassName("row-team")[0];
    browse.style.display = "none";

    var browse = document.getElementsByClassName("browse")[0];
    browse.style.display = "block";

    var arrow = document.getElementsByClassName("right-arrow")[0];
    arrow.style.right = "95.5%";

    var logo = document.getElementsByClassName("logo")[0];
    logo.style.left = "95.5%";
    console.log(arrow);

    if(show_loading){
        toggleLoading();
        await sleep(500);
    }
}

async function expandPackage(elem){
    console.log(elem.getElementsByClassName("expandable")[0].style.display);
    if(elem.getElementsByClassName("expandable")[0].style.display === "block")
        elem.getElementsByClassName("expandable")[0].style.display = "none";
    else
        elem.getElementsByClassName("expandable")[0].style.display = "block";
}

async function selectOS(){
    document.getElementsByClassName("package-list")[0].style.display = "flex";
}