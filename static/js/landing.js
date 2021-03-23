function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function showLoader(){
    Swal.fire({
        title: "Processing your request ...<br><br>",
        html:
        `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>`,
        showConfirmButton: false,
        allowOutsideClick: false
      })
}

function showError(err="There was an error in processing your request!", rea='Oops..'){
    Swal.fire({
        icon: 'error',
        title: rea,
        text: err,
    })
}

var getReport = ()=>{
    showLoader();
    let data = new FormData();
    let csrftoken = getCookie('csrftoken');

    let subVal = document.getElementById("reportSelect").value;
    if(subVal==""){
        showError('Please Select a Ledgeer');
        return
    }
    data.append('subVal',subVal)
    fetch('/',{
        method: "POST",
        body: data,
        headers: { "X-CSRFToken": csrftoken },
    })
    .then(response=>response.json())
    .then(res=>{
        if(res.status=='ok'){
            window.location = res.next;
        }
        else{
            throw "Request Failed: "+String(res)
        }
    })
    .catch(err=>showError(err))
}