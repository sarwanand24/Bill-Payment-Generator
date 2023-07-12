document.getElementById("iron-box").addEventListener("click", function(){
    document.getElementById("iron-box").classList.add("service-select");
    document.getElementById("nwash-box").classList.remove("service-select");
    document.getElementById("owash-box").classList.remove("service-select");
    document.getElementById("pwash-box").classList.remove("service-select");
    document.getElementById("dryclean-box").classList.remove("service-select");
    console.log(this.id);
    document.getElementById("iron-cart").style.display = "block";
    document.getElementById("nwash-cart").style.display = "none";
    document.getElementById("pwash-cart").style.display = "none";
    document.getElementById("owash-cart").style.display = "none";
    document.getElementById("dryclean-cart").style.display = "none";
})
document.getElementById("nwash-box").addEventListener("click", function(){
    document.getElementById("nwash-box").classList.add("service-select");
    document.getElementById("iron-box").classList.remove("service-select");
    document.getElementById("owash-box").classList.remove("service-select");
    document.getElementById("pwash-box").classList.remove("service-select");
    document.getElementById("dryclean-box").classList.remove("service-select");
    console.log(this.id);
    document.getElementById("nwash-cart").style.display = "block";
    document.getElementById("iron-cart").style.display = "none";
    document.getElementById("pwash-cart").style.display = "none";
    document.getElementById("owash-cart").style.display = "none";
    document.getElementById("dryclean-cart").style.display = "none";
})
document.getElementById("owash-box").addEventListener("click", function(){
    document.getElementById("owash-box").classList.add("service-select");
    document.getElementById("iron-box").classList.remove("service-select");
    document.getElementById("nwash-box").classList.remove("service-select");
    document.getElementById("pwash-box").classList.remove("service-select");
    document.getElementById("dryclean-box").classList.remove("service-select");
    console.log(this.id);
    document.getElementById("owash-cart").style.display = "block";
    document.getElementById("nwash-cart").style.display = "none";
    document.getElementById("pwash-cart").style.display = "none";
    document.getElementById("iron-cart").style.display = "none";
    document.getElementById("dryclean-cart").style.display = "none";
})
document.getElementById("pwash-box").addEventListener("click", function(){
    document.getElementById("pwash-box").classList.add("service-select");
    document.getElementById("iron-box").classList.remove("service-select");
    document.getElementById("nwash-box").classList.remove("service-select");
    document.getElementById("owash-box").classList.remove("service-select");
    document.getElementById("dryclean-box").classList.remove("service-select");
    console.log(this.id);
    document.getElementById("pwash-cart").style.display = "block";
    document.getElementById("nwash-cart").style.display = "none";
    document.getElementById("owash-cart").style.display = "none";
    document.getElementById("iron-cart").style.display = "none";
    document.getElementById("dryclean-cart").style.display = "none";
})
document.getElementById("dryclean-box").addEventListener("click", function(){
    document.getElementById("dryclean-box").classList.add("service-select");
    document.getElementById("iron-box").classList.remove("service-select");
    document.getElementById("nwash-box").classList.remove("service-select");
    document.getElementById("owash-box").classList.remove("service-select");
    document.getElementById("pwash-box").classList.remove("service-select");
    console.log(this.id);
    document.getElementById("dryclean-cart").style.display = "block";
    document.getElementById("iron-cart").style.display = "none";
    document.getElementById("nwash-cart").style.display = "none";
    document.getElementById("pwash-cart").style.display = "none";
    document.getElementById("owash-cart").style.display = "none";
})

var no_of_item = [];
var count = [];
var sub_total = [];
var total = document.getElementById("total");

for(var i = 1; i<=82; i++){
    no_of_item[i] = document.getElementById("no-of-item"+i);
    count[i] = 0;
    sub_total[i] = 0;
    //**********INCREMENT FUNCTION**********
    document.getElementById("inc"+i).addEventListener("click", function(){
        console.log(this.id);
        var number = this.id.replace(/[a-z]/g,"");
        console.log(number);
        count[number]++;
        console.log(count[number]);
        if(number == 1 || number == 2 || number == 4 || number == 7 || number == 19 || number == 21 || number == 24){
            sub_total[number] = count[number]*7;
            console.log(sub_total[number]);
        }
        else if(number == 3 || number == 10 || number == 13 || number == 16 || number == 20 || number == 27 || number == 34){
            sub_total[number] = count[number]*5;
            console.log(sub_total[number]);
        }
        else if(number == 5 || number == 8 || number == 9 || number == 11 || number == 14){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        else if(number == 6 || number == 47 || number == 50 || number == 64 || number == 67){
            sub_total[number] = count[number]*15;
            console.log(sub_total[number]);
        }
        else if(number == 12 || number == 49 || number == 66){
            sub_total[number] = count[number]*30;
            console.log(sub_total[number]);
        }
        else if(number == 15 || number == 30 || number == 33 || number == 37 || number == 44 || number == 51 || number == 54 || number == 61 || number == 68){
            sub_total[number] = count[number]*10;
            console.log(sub_total[number]);
        }
        else if(number == 17){
            sub_total[number] = count[number]*1;
            console.log(sub_total[number]);
        }
        else if(number == 18){
            sub_total[number] = count[number]*6;
            console.log(sub_total[number]);
        }
        else if(number == 70){
            sub_total[number] = count[number]*269;
            console.log(sub_total[number]);
        }
        else if(number == 72){
            sub_total[number] = count[number]*119;
            console.log(sub_total[number]);
        }
        else if(number == 74 || number == 78){
            sub_total[number] = count[number]*129;
            console.log(sub_total[number]);
        }
        else if(number == 75){
            sub_total[number] = count[number]*249;
            console.log(sub_total[number]);
        }
        else if(number == 76){
            sub_total[number] = count[number]*149;
            console.log(sub_total[number]);
        }
        else if(number == 77){
            sub_total[number] = count[number]*209;
            console.log(sub_total[number]);
        }
        else if(number == 73){
            sub_total[number] = count[number]*99;
            console.log(sub_total[number]);
        }
        else if(number == 80){
            sub_total[number] = count[number]*799;
            console.log(sub_total[number]);
        }
        else if(number == 71 || number == 82){
            sub_total[number] = count[number]*299;
            console.log(sub_total[number]);
        }
        else if(number == 79 || number == 81){
            sub_total[number] = count[number]*399;
            console.log(sub_total[number]);
        }
        else if(number == 22 || number == 25 || number == 28 || number == 31 || number == 40 || number == 43 || number == 57 || number == 60 || number == 69){
            sub_total[number] = count[number]*39;
            console.log(sub_total[number]);
        }
        else if(number == 23 || number == 26){
            sub_total[number] = count[number]*29;
            console.log(sub_total[number]);
        }
        else if(number == 29){
            sub_total[number] = count[number]*59;
            console.log(sub_total[number]);
        }
        else if(number == 46 || number == 63){
            sub_total[number] = count[number]*69;
            console.log(sub_total[number]);
        }
        else if(number == 35 || number == 36 || number == 38 || number == 41 || number == 52 || number == 53 || number == 55 || number == 58){
            sub_total[number] = count[number]*12;
            console.log(sub_total[number]);
        }
        else if(number == 39 || number == 42 || number == 45 || number == 48 || number == 56 || number == 59 || number == 62 || number == 65){
            sub_total[number] = count[number]*49;
            console.log(sub_total[number]);
        }
        no_of_item[number].innerHTML = count[number];
        var sum_of_total = 0;
        var sum_of_quant = 0;
        for(var j = 1; j<=82; j++){
           sum_of_total = sum_of_total + sub_total[j];
           sum_of_quant = sum_of_quant + count[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(sum_of_quant);//TOTAL QUANTITY TO BE PRINTED ON BILL
           console.log(count[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total[j]);//PRICE OF SEPARATE CLOTHES
        }
        total.innerHTML = sum_of_total;
        console.log(sum_of_total);
        sessionStorage.setItem("sum_of_total2", sum_of_total);
        console.log(sum_of_quant);
        sessionStorage.setItem("sum_of_quant2", sum_of_quant);
        console.log(count);
        sessionStorage.setItem("count2", JSON.stringify(count));
        console.log(sub_total);
        sessionStorage.setItem("sub_total2", JSON.stringify(sub_total));
    })
   //**********DECREMENT FUNCTION**********
   document.getElementById("dec"+i).addEventListener("click", function(){
    console.log(this.id);
    var number = this.id.replace(/[a-z]/g,"");
    console.log(number);
    if(count[number] > 0){
    count[number]--;
    }
    console.log(count[number]);
    if(number == 1 || number == 2 || number == 4 || number == 7 || number == 19 || number == 21 || number == 24){
        sub_total[number] = count[number]*7;
        console.log(sub_total[number]);
    }
    else if(number == 3 || number == 10 || number == 13 || number == 16 || number == 20 || number == 27 || number == 34){
        sub_total[number] = count[number]*5;
        console.log(sub_total[number]);
    }
    else if(number == 5 || number == 8 || number == 9 || number == 11 || number == 14){
        sub_total[number] = count[number]*20;
        console.log(sub_total[number]);
    }
    else if(number == 6 || number == 47 || number == 50 || number == 64 || number == 67){
        sub_total[number] = count[number]*15;
        console.log(sub_total[number]);
    }
    else if(number == 12 || number == 49 || number == 66){
        sub_total[number] = count[number]*30;
        console.log(sub_total[number]);
    }
    else if(number == 15 || number == 30 || number == 33 || number == 37 || number == 44 || number == 51 || number == 54 || number == 61 || number == 68){
        sub_total[number] = count[number]*10;
        console.log(sub_total[number]);
    }
    else if(number == 17){
        sub_total[number] = count[number]*1;
        console.log(sub_total[number]);
    }
    else if(number == 18){
        sub_total[number] = count[number]*6;
        console.log(sub_total[number]);
    }
    else if(number == 70){
        sub_total[number] = count[number]*269;
        console.log(sub_total[number]);
    }
    else if(number == 72){
        sub_total[number] = count[number]*119;
        console.log(sub_total[number]);
    }
    else if(number == 74 || number == 78){
        sub_total[number] = count[number]*129;
        console.log(sub_total[number]);
    }
    else if(number == 75){
        sub_total[number] = count[number]*249;
        console.log(sub_total[number]);
    }
    else if(number == 76){
        sub_total[number] = count[number]*149;
        console.log(sub_total[number]);
    }
    else if(number == 77){
        sub_total[number] = count[number]*209;
        console.log(sub_total[number]);
    }
    else if(number == 73){
        sub_total[number] = count[number]*99;
        console.log(sub_total[number]);
    }
    else if(number == 80){
        sub_total[number] = count[number]*799;
        console.log(sub_total[number]);
    }
    else if(number == 71 || number == 82){
        sub_total[number] = count[number]*299;
        console.log(sub_total[number]);
    }
    else if(number == 79 || number == 81){
        sub_total[number] = count[number]*399;
        console.log(sub_total[number]);
    }
    else if(number == 22 || number == 25 || number == 28 || number == 31 || number == 40 || number == 43 || number == 57 || number == 60 || number == 69){
        sub_total[number] = count[number]*39;
        console.log(sub_total[number]);
    }
    else if(number == 23 || number == 26){
        sub_total[number] = count[number]*29;
        console.log(sub_total[number]);
    }
    else if(number == 29){
        sub_total[number] = count[number]*59;
        console.log(sub_total[number]);
    }
    else if(number == 46 || number == 63){
        sub_total[number] = count[number]*69;
        console.log(sub_total[number]);
    }
    else if(number == 35 || number == 36 || number == 38 || number == 41 || number == 52 || number == 53 || number == 55 || number == 58){
        sub_total[number] = count[number]*12;
        console.log(sub_total[number]);
    }
    else if(number == 39 || number == 42 || number == 45 || number == 48 || number == 56 || number == 59 || number == 62 || number == 65){
        sub_total[number] = count[number]*49;
        console.log(sub_total[number]);
    }
    no_of_item[number].innerHTML = count[number];
    var sum_of_total = 0;
    var sum_of_quant = 0;
    for(var j = 1; j<=82; j++){
       sum_of_total = sum_of_total + sub_total[j];
       sum_of_quant = sum_of_quant + count[j];
       console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
       console.log(sum_of_quant);//TOTAL QUANTITY TO BE PRINTED ON BILL
       console.log(count[j]);//QUANTITY OF SEPARATE CLOTHES
       console.log(sub_total[j]);//PRICE OF SEPARATE CLOTHES
    }
    total.innerHTML = sum_of_total;
    console.log(sum_of_total);
    sessionStorage.setItem("sum_of_total2", sum_of_total);
    console.log(sum_of_quant);
    sessionStorage.setItem("sum_of_quant2", sum_of_quant);
    console.log(count);
    sessionStorage.setItem("count2", count);
    console.log(sub_total);
    sessionStorage.setItem("sub_total2", sub_total);
})
}

document.getElementById("btn").addEventListener("click", function(){
    var name = document.getElementById("Inpname").value;
    var mobile = document.getElementById("Inpmob").value;
    sessionStorage.setItem("name2", name);
    sessionStorage.setItem("mobile2", mobile);
    window.location = "bill.html";
})




