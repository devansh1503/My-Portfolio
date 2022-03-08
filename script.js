
const main = document.getElementsByClassName('main')[0];
const abt = document.getElementsByClassName('about')[0];
const skl = document.getElementsByClassName('skills')[0];
const pro = document.getElementsByClassName('projects')[0];
const cert = document.getElementsByClassName('cert')[0];
const lin = document.getElementsByClassName('links')[0];
const clo = document.getElementsByClassName('close')[0];
var curr = main;
function displaycard(i){
    clo.classList.remove('hide');
    main.classList.add('hide');
    if(i==1){
        abt.classList.remove('hide');
        curr=abt;
    }
    if(i==2){
        skl.classList.remove('hide');
        curr=skl;
    }
    if(i==3){
        pro.classList.remove('hide');
        curr=pro;
    }
    if(i==4){
        cert.classList.remove('hide');
        curr=cert;
    }
    if(i==5){
        lin.classList.remove('hide');
        curr=lin;
    }

}
function shrinkcard(){
    curr.classList.add('hide');
    main.classList.remove('hide');
    clo.classList.add('hide');
}

