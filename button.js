AFRAME.registerComponent('buttons', {


    init: function () {
      // Do something when component first attached.
    var b1 = document.createElement("button")
    b1.innerHTML = "order now"
    
    var bDiv = document.getElementById("buttonNew");
    bDiv.appendChild(b1);

    },
    
});
