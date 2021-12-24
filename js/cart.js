var items = JSON.parse('[{"name": "ASUS Laptop E210MA-GJ001T","cost": "19990", "img" : "img/10.webp"}, {"name": "Acer Aspire XC-830","cost": "19990", "img" : "img/3.webp"}]');
function render_cart(){
    var cart = document.querySelector("div.cart");

    for (let i = 0; i < items.length; i++) {
        //item
        var block = document.createElement("div");
        block.classList.add("item");

        //image
        var image = document.createElement("div");
        image.classList.add("image");
        var img = document.createElement("img");
        img.setAttribute("src", items[i].img);
        img.setAttribute("height", "120px");
        image.appendChild(img);
        block.appendChild(img);

        //desc
        var desc = document.createElement("div");
        desc.classList.add("description");

        var dname = document.createElement("span");
        dname.textContent = items[i].name;
        desc.appendChild(dname);

        var dcost = document.createElement("span");
        dcost.setAttribute("id", "cost");
        dcost.textContent = items[i].cost;
        desc.appendChild(dcost);
        block.appendChild(desc);

        //qty
        var qty = document.createElement("div");
        qty.classList.add("quantity");

        var btn_mns = document.createElement("button");
        btn_mns.classList.add("plus-btn");
        btn_mns.textContent = "-";
        btn_mns.setAttribute("onclick", "mns(" + i + ")");
        qty.appendChild(btn_mns);

        var qtyinp = document.createElement("input");
        qtyinp.id = "qty";
        qtyinp.type = "text";
        qtyinp.value = 1;
        qtyinp.setAttribute("oninput", "num(" + i + ")");
        qty.appendChild(qtyinp);

        var btn_pls = document.createElement("button");
        btn_pls.textContent = "+";
        btn_pls.setAttribute("onclick", "pls(" + i + ")");
        qty.appendChild(btn_pls);

        var total_cost = document.createElement("div");
        total_cost.classList.add("total-price");
        var total_costtxt = document.createElement("span");
        total_costtxt.id = "total-cost";
        total_costtxt.textContent = items[i].cost;
        total_cost.appendChild(total_costtxt);

        qty.appendChild(total_cost);
        block.appendChild(qty);

        //btn-delete
        var dlt_btn = document.createElement("div");
        dlt_btn.classList.add("buttons");
        var dlt_txt = document.createElement("span");
        dlt_txt.classList.add("delete-btn");
        dlt_txt.textContent = "Удалить";
        dlt_btn.appendChild(dlt_txt);
        block.appendChild(dlt_btn);

        cart.appendChild(block);
    }
}

//func
var qty = document.querySelectorAll("input#qty");
var cost = document.querySelectorAll("span#cost");
var total_cost = document.querySelectorAll("span#total-cost");

function pls(id) {
    qty[id].value = parseInt(qty[id].value) + 1;
    num(id);
}

function mns(id) {
    if (qty[id].value > 1) {
        qty[id].value -= 1;
        num(id);
    }
}

function num(id) {
    total_cost[id].innerText = parseInt(cost[id].innerText) * parseInt(qty[id].value);
}