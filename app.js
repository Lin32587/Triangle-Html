var btnOK = document.getElementById("btnOK");
var btnCL = document.getElementById("btnCL");
btnOK.onclick = function () {
    var a = Number(bian1.value);
    var b = Number(bian2.value);
    var c = Number(bian3.value);
    if (a <= 0 || b <= 0 || c <= 0) {
        alert("请输入大于0的数值！")
    }
    else {
        if (a + b > c && a + c > b && b + c > a) {
            if (a == b || b == c || a == c) {
                if (a == b&&b == c&&a==c) {
                    alert("等边三角形");
                }
                else if(a*a==b*b+c*c||b*b==a*a+c*c||c*c==a*a+b*b){
                    alert("等腰直角三角形");
                }
                else{
                    alert("等腰三角形");
                }
            }
            else if(a*a==b*b+c*c||b*b==a*a+c*c||c*c==a*a+b*b){
                alert("直角三角形");
            }
            else{
                alert("不等边三角形");
            }
        }
        else {
            alert("这不是个三角形哦~");
        }
    }
}
btnCL.onclick = function () {
    history.go(0);
}
