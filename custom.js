document.onkeydown=function(e){
    var keyCode=e.keyCode||e.which||e.charCode;
    var ctrlKey=e.ctrlKey||e.metaKey;
    if(ctrlKey){
        if(keyCode==39)document.getElementById('nxt_button').click()
        if(keyCode==37)document.getElementById('pre_button').click()
    }
}