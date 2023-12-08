console.log('worker1.js'); //ce message ne sera jamais visible même si tout marche correctement

onmessage = function (event) {
    console.log("J'ai reçu le message: " + event.data);
    if(event.data === "Salut"){
        postMessage("Bonjour !");
    }else {
        postMessage("Tu pourrais dire bonjour !");
    }
}