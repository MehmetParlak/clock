function clock(time) {
    var d, h, m, s;
    d = new Date();
    h = time[0];
    m = time[1];
    s = time[2];

    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s + 180);

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();


    if (h < 12) {

        setText("suffix", "AM");
    } else {

        setText("suffix", "PM");
    }

    if (h != 12) {

        h = h % 12;
    }

    setText("hr", h);
    setText("mi", m);
    setText("sec", s);
    document.getElementById("digi").innerHTML = setInnerDigi();
    document.getElementById("month").innerHTML = Gun();


    setTimeout(clock(time), 1000);
};





function setAttr(id, val) {
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute("transform", v);

};

function setText(id, val) {

    if (val < 10) {
        val = '0' + val;
    }

    document.getElementById(id).innerHTML = val;

};

function setInnerDigi() {
    var d, h, m, s;
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h < 10) {
        h = '0' + h;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    var v = h + ":" + m + ":" + s;
    return v;
}

function Gun() {
    var date = new Date();
    var months = date.getMonth();
    var Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var v = date.getDate() + " " + Months[months];
    return v;
}


//type1 can be original=0 and added decremented time=1//
//type2 can be minutes or hours//

function returntime(type1, type2, val) {
    var d, h, m, s;
    var arr;
    if (Number(type1) == 0) {
        d = new Date();
        h = 30 * (d.getHours() % 12 + d.getMinutes() / 60);
        m = 6 * d.getMinutes();
        s = 6 * d.getSeconds();
        arr = [h, m, s];
    } else if (Number(type1) == 1) {

        if (Number(type2) == 0) {
            d = new Date();
            h = 30 * ((d.getHours() + Number(val)) % 12 + d.getMinutes() / 60);
            m = 6 * d.getMinutes();
            s = 6 * d.getSeconds();
            arr = [h, m, s];

        } else {
            d = new Date();
            h = 30 * (d.getHours() % 12 + (d.getMinutes() + Number(val)) / 60);
            m = 6 * (d.getMinutes() + Number(val));
            s = 6 * d.getSeconds();
            arr = [h, m, s];

        }

    } else {
        if (Number(type2) == 0) {
            d = new Date();
            h = 30 * ((d.getHours() - Number(val)) % 12 + d.getMinutes() / 60);
            m = 6 * d.getMinutes();
            s = 6 * d.getSeconds();
            arr = [h, m, s];

        } else {
            d = new Date();
            h = 30 * (d.getHours() % 12 + (d.getMinutes() - Number(val)) / 60);
            m = 6 * (d.getMinutes() - Number(val));
            s = 6 * d.getSeconds();
            arr = [h, m, s];

        }

    }
    return arr;

}


function incrementTime(){

  var x=returntime(1,0,1);
  clock(x);
}

function decrementTime(){

  var x=returntime(2,0,1);
  clock(x);
}

function autoTime(){

  var x=returntime(0,0,0);
  clock(x);
}
var begin=returntime(0,0,0);
console.log("Mehmet");
console.log(begin);
console.log("Mehmet");

window.onload = clock(begin);
