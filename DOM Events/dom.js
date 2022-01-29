function xyz()
{
    const x = document.getElementById('testid_1');
    x.innerHTML = Date();
    x.style.background = 'lightgreen';
    x.style.padding = "5px";
}

function xyz()
{
    const x = document.getElementById('testid_2');
    x.innerHTML = Date();
    x.style.background = 'lightgreen';
    x.style.padding = "5px";
}

//==================uppercase lowercase========================
function input_function()
{
    const x = document.getElementById('case');
   // x.value = x.value.toUpperCase();
   x.value = x.value.toLowerCase();
}

//=================select show=========================
function select_function()
{
    const x = document.getElementById('selectid').value;
    document.getElementById('result').innerHTML = x;
}


 
