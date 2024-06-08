function printText(){
    const inputDOM = document.getElementById('inputText')
    const inputText = inputDOM.value

    const parDom = document.getElementById('helloText')
    parDom.innerHTML = inputText
}