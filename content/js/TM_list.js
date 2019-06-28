window.onload = function () {
    var pnode = document.getElementById('productlist');
    var add = pnode.innerHTML;
    var pdname_arr = [
        "技嘉RTX2060 GAMING OC PRO 6G",
        "顺丰技嘉RTX2060 显卡6G GAMING ",
        "耕升RTX2060 6g显卡 吃鸡游戏显卡台",
        "影驰 RTX2060 大将/GAMER 6G 图灵",
        "MSI/微星 GeForce RTX 2070 AERO IT",
        "【顺丰分期】映众RTX2060 6G超级冰",
        "耕升RTX2060 G魂OC/追风版 6G 光线",
        "映众RTX2060 超级冰龙版6G显卡台式",
        "铭鑫RTX2060 6GB GDDR6炫彩版游戏",
        "盈通?RTX2060?6G?D6豪华版?台式机",
        "全新gtx1660ti 6G显卡RTX2060 6G台",
    ]
    var shopname_arr = [
        "七彩虹官方旗舰店",
        "微星旗舰店",
        "ASUS华硕旗舰店",
        "影驰电脑硬件旗舰店",
        "索泰旗舰店",
        "绝胜电竞数码专营店",
        "瑞达中腾数码专营店",
        "技嘉旗舰店",
        "斯兰达数码专营店",
        "思泽数码专营店",
        "创众达数码专营店",
    ]
    var price_arr = [
        "2099",
        "3099",
        "2999",
        "2599",
        "2400",
        "3000",
        "2800",
        "3100",
        "2200",
        "3499",
        "9999",
    ]
    for (var i = 2; i < 31; i++) {
        rnd = parseInt(Math.floor(Math.random() * 10));
        rnd1 = parseInt(Math.floor(Math.random() * 10));
        rnd2 = parseInt(Math.floor(Math.random() * 10));
        rnd3 = parseInt(Math.floor(Math.random() * 10));
        sw = parseInt(rnd / 10).toString();
        gw = (rnd % 10).toString();
        picid = sw + gw;
        var newadd = add.replace(
            "TM_list_pinfo10.jpg",
            "TM_list_pinfo" + picid + ".jpg"
        );
        newadd = newadd.replace("七彩虹RTX2060 6G Ultra/AD/Vulcan", pdname_arr[rnd1]);
        newadd = newadd.replace("2599", price_arr[rnd2]);
        newadd = newadd.replace("和瑟数码专营店", shopname_arr[rnd3]);
        newadd = newadd.replace("855", parseInt(rnd3 * rnd * 9.7));
        newadd = newadd.replace("508", parseInt(rnd2 * rnd * 7.3));
        pnode.innerHTML += newadd;
    }

}