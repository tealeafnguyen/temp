const fetch = window.fetch

$(document).ready(function () {
    populate();
})


function clicked(val){
    console.log(val)

    var obj = {num : val}

    $.post("/purge", obj, function (data) {
        populate()
    });
}



document.querySelector('#addMe').addEventListener('click', event => {
    event.preventDefault()
    var userData = {
        name: $("#name").val(),
        number: $("#phone").val(),
        size: $('#size').val()
    }

    $.post("/table", userData, function (data) {
        populate()
    });
})



function populate() {
    var userData = null;

    $('#currTable').html('')

    $.post("/tableR", userData, function (data) {
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            $('#currTable').append(`
            <div style="display:inline-block; margin:20px;">
                Name: ${data[i].name} <br>
                Phone: ${data[i].number} <br>
                Party Size: ${data[i].size} <br>
                Table Number: ${data[i].table + 1} <br>
                <button onclick="clicked(${data[i].table})" class='purge' id=${data[i].table}>Purge</button>
            </div>
            `)
        }
    });

}
