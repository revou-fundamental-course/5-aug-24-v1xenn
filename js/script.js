// ini javascript

function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(`isi inputan berat badan: ${inputWeight}`);
    console.log(`isi inputan tinggi badan: ${inputHeight}`);

    (inputWeight == '' || inputHeight == '') 
        ? alert('Inputan Berat Badan kosong!')
        : result(inputHeight, inputWeight);

    console.log('form submitted');
}

function result(inputHeight, inputWeight) {
    let converCmToM = inputHeight * 100;
        let resultHeight = Math.pow(converCmToM, 2);
        console.log(inputWeight / resultHeight);
}