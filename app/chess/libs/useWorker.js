//var monWorker = new Worker("../../public/testWorker.js");

export function useWorker() {
    console.log('use worker');
    const worker1 = new Worker('../../../public/worker1.js');

    worker1.postMessage('Salut');
    worker1.onmessage = function(event) {
        console.log(event.data);
    }

    worker1.postMessage("T'as pas une clope ?");
    worker1.onmessage = function(event) {
        console.log(event.data);
    }
}