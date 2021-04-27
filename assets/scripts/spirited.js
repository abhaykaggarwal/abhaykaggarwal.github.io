
function opaque1() {
    document.getElementById('haku_img').style.opacity = '0.5';
    document.getElementById('noface_img').style.opacity = '0.5';
    document.getElementById('chihiro_img').style.opacity = '1.0';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }

    let chihiro = document.getElementsByClassName('chihiro');
    for (index = 0; index < chihiro.length; index++) {
        chihiro[index].style.display = "inherit";
    }

}

document.getElementById('chihiro_img').onclick = opaque1;

function opaque2() {
    document.getElementById('haku_img').style.opacity = '0.5';
    document.getElementById('noface_img').style.opacity = '1.0';
    document.getElementById('chihiro_img').style.opacity = '0.5';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }

    let noface = document.getElementsByClassName('noface');
    for (index = 0; index < noface.length; index++) {
        noface[index].style.display = "inherit";
    }
}

document.getElementById('noface_img').onclick = opaque2;


function opaque3() {
    document.getElementById('haku_img').style.opacity = '1.0';
    document.getElementById('noface_img').style.opacity = '0.5';
    document.getElementById('chihiro_img').style.opacity = '0.5';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }

    let haku = document.getElementsByClassName('haku');
    for (index = 0; index < haku.length; index++) {
        haku[index].style.display = "inherit";
    }
}

document.getElementById('haku_img').onclick = opaque3;


function opaque4() {
    document.getElementById('haku_img').style.opacity = '1.0';
    document.getElementById('noface_img').style.opacity = '1.0';
    document.getElementById('chihiro_img').style.opacity = '1.0';

    var index;
    let appear = document.getElementsByClassName('appear');
    for (index = 0; index < appear.length; index++) {
        appear[index].style.display ="none";
    }
}
document.getElementById('t').onclick = opaque4;


