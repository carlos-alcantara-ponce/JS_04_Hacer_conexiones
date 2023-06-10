function fcambia_nombre() {

    var nombre_perfil = document.querySelector("#idperfil");

    nombre_perfil.innerHTML = "Yorch Wachinton";
}


function fdecreaseconnreq() {

    var num_conn_req = document.querySelector("#id_num_conn_req")

    num_conn_req2 = num_conn_req.innerHTML;
    num_conn_req2--;
    num_conn_req.innerHTML = num_conn_req2;
    // console.log(num_conn_req);
}


function fincreaseconn() {

    var num_conn = document.querySelector("#id_num_conn")

    num_conn2 = num_conn.innerHTML;
    num_conn2++;
    num_conn.innerHTML = num_conn2;


}

function fremoveconnreq(num_conn_req) {

    if (num_conn_req == 10 || num_conn_req == 11) {
        var conn_req = document.querySelector("#connreq_1")
        conn_req.remove();

    }
    else if (num_conn_req == 20 || num_conn_req == 21) {
        var conn_req = document.querySelector("#connreq_2")
        conn_req.remove();
    }

    fdecreaseconnreq();

    if (num_conn_req == 10 || num_conn_req == 20) {

        fincreaseconn();
    }


}




