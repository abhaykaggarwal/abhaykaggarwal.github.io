
function opaque1() {
    document.getElementById('san_img').style.opacity = '0.5';
    document.getElementById('eboshi_img').style.opacity = '0.5';
    document.getElementById('forest_img').style.opacity = '1.0';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }

    let forest = document.getElementsByClassName('forest');
    for (index = 0; index < forest.length; index++) {
        forest[index].style.display = "inherit";
    }

}

document.getElementById('forest_img').onclick = opaque1;

function opaque2() {
    document.getElementById('san_img').style.opacity = '0.5';
    document.getElementById('eboshi_img').style.opacity = '1.0';
    document.getElementById('forest_img').style.opacity = '0.5';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }

    let eboshi = document.getElementsByClassName('eboshi');
    for (index = 0; index < eboshi.length; index++) {
        eboshi[index].style.display = "inherit";
    }
}

document.getElementById('eboshi_img').onclick = opaque2;


function opaque3() {
    document.getElementById('san_img').style.opacity = '1.0';
    document.getElementById('eboshi_img').style.opacity = '0.5';
    document.getElementById('forest_img').style.opacity = '0.5';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }

    let san = document.getElementsByClassName('san');
    for (index = 0; index < san.length; index++) {
        san[index].style.display = "inherit";
    }
}

document.getElementById('san_img').onclick = opaque3;


function opaque4() {
    document.getElementById('san_img').style.opacity = '1.0';
    document.getElementById('eboshi_img').style.opacity = '1.0';
    document.getElementById('forest_img').style.opacity = '1.0';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }
}
document.getElementById('t').onclick = opaque4;