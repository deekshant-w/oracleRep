var getReport = ()=>{
    let data = {};
    let subVal = document.getElementById("reportSelect").value;
    if(subVal==""){
        // AJAX request example
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Select a Ledgeer',
        })
    }
}