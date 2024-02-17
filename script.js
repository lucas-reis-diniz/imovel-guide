

function textSubstitute1() {
    var action1 = document.getElementById("phone-action1")

    if (action1) {
        action1.innerHTML = "(99) 99999-9999"
    } else {
        console.error("Element not found")
    }
}

function textSubstitute2() {
    var action2 = document.getElementById("phone-action2")

    if (action2) {
        action2.innerHTML = "(99) 99999-9999"
    } else {
        console.error("Element not found")
    }
}

function aplicarMascaraCpf(input) {
    var cpf = input.value.replace(/\D/g, '');

    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');

    input.value = cpf;
}

function aplicarMascaraTelefone(input) {
    var telefone = input.value.replace(/\D/g, '');

    telefone = telefone.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');

    input.value = telefone;
}

function calcularRegraDeTres() {
    // Obtem os valores dos inputs
    var num1 = parseFloat(document.getElementById("number1").value) || 0;
    var num2 = parseFloat(document.getElementById("number2").value) || 0;
    var num3 = parseFloat(document.getElementById("number3").value) || 0;

    var resultado = (num2 * num3) / num1;

    document.getElementById("res").value = resultado.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    var openModalBtn = document.getElementById("modal-img");
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var closeBtn = document.getElementsByClassName("close")[0];

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = document.getElementById("myHomeImage").src;
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    modal.style.display = "none";
});

function autoClick() {
    $("#download").click();
}

$(document).ready(function(){
    var element = $("#challenge-5-content");

    $("#download").on('click', function(){

        html2canvas(element, {
            onrendered: function(canvas) {
                var imageData = canvas.toDataURL("image/jpg");
                var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
                $("#download").attr("download", "image.jpg").attr("href", newData);
            }
        });

    });
});

