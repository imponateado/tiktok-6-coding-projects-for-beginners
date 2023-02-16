function genRandPass(length) {
    var result = "";
    var chars = "QWERTYUIOPASDFGHJKLÇZXCVBNMqwertyuiopasdfghjklçzxcvbnm1234567890";
    for(var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function genPass () {
    var element = document.createElement("p");
    var ay = document.getElementById("chars");
    var randstr = genRandPass(ay.value);

    element.innerHTML = randstr;
    document.body.appendChild(element);
    return false;
}

