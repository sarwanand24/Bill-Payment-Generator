//GETTING THE NAME AND MOBILE NO. OF CUSTOMER 
var name3 = sessionStorage.getItem("name2");
var mobile3 = sessionStorage.getItem("mobile2");
document.getElementById("cstm-name").innerHTML = name3;
document.getElementById("cstm-mob").innerHTML = mobile3;

//GETTING THE QUANTITY, TOTAL AND PRICE OF THE CART
var sum_of_total3 = sessionStorage.getItem("sum_of_total2");
var sum_of_quant3 = sessionStorage.getItem("sum_of_quant2");
document.getElementById("total").innerHTML = sum_of_total3;
document.getElementById("quant-total").innerHTML = sum_of_quant3;
var count3 = JSON.parse(sessionStorage.getItem("count2"));
console.log(count3);
var sub_total3 = JSON.parse(sessionStorage.getItem("sub_total2"));
console.log(sub_total3);

for(var i=1; i<=163; i++){
    console.log(count3[i]);
   if(count3[i] > 0){
    console.log(this.i);
      console.log(count3[this.i]);
      console.log(sub_total3[this.i]);
      if(this.i>0 && this.i<=17){ //FOR IRON CART
        document.getElementById("iron-heading").style.display = "block";
        document.getElementById("list"+this.i).style.display = "block";
        document.getElementById("quant"+this.i).innerHTML = count3[this.i];
        document.getElementById("prc"+this.i).innerHTML = sub_total3[this.i];
      }
      if(this.i>17 && this.i<=34){ //FOR NORMAL WASH CART
        document.getElementById("nwash-heading").style.display = "block";
        document.getElementById("list"+this.i).style.display = "block";
        document.getElementById("quant"+this.i).innerHTML = count3[this.i];
        document.getElementById("prc"+this.i).innerHTML = sub_total3[this.i];
      }
      if(this.i>34 && this.i<=51){ //FOR ORGANIC WASH CART
        document.getElementById("owash-heading").style.display = "block";
        document.getElementById("list"+this.i).style.display = "block";
        document.getElementById("quant"+this.i).innerHTML = count3[this.i];
        document.getElementById("prc"+this.i).innerHTML = sub_total3[this.i];
      }
      if(this.i>51 && this.i<=68){ //FOR PREMIUM WASH CART
        document.getElementById("pwash-heading").style.display = "block";
        document.getElementById("list"+this.i).style.display = "block";
        document.getElementById("quant"+this.i).innerHTML = count3[this.i];
        document.getElementById("prc"+this.i).innerHTML = sub_total3[this.i];
      }
      if(this.i>68 && this.i<=82){ //FOR DRY CLEAN CART
        document.getElementById("dryclean-heading").style.display = "block";
        document.getElementById("list"+this.i).style.display = "block";
        document.getElementById("quant"+this.i).innerHTML = count3[this.i];
        document.getElementById("prc"+this.i).innerHTML = sub_total3[this.i];
      }
   }
}