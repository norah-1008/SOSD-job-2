$(function () {
    $(".checkall").change(function () {
        console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
    });
    $(".j-checkbox").change(function () {
        // console.log($(".j-checkbox:checked").length);
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    });
    // 增减商品
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val();
        // console.log(n);
        n++;
        $(this).siblings(".itxt").val(n);
        // 小计
        var p = $(this).parent().parent().siblings(".p-price").html();
        p = p.substr(1);
        console.log(p);
        $(this).parent().parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });
    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        // console.log(n);
        n--;
        $(this).siblings(".itxt").val(n);
        // 小计
        var p = $(this).parent().parent().siblings(".p-price").html();
        p = p.substr(1);
        console.log(p);
        $(this).parent().parent().siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });

    // 修改文本框的值 小计
    $(".itxt").change(function () {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    })

    // 计算总和
    getSum();
    function getSum() {
        // var count = 0;//总件数
        var money = 0;//总价钱
        // $(".itxt").each(function (i, ele) {
        //     count += parseInt($(ele).val());
        // })
        // $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
        // 

        var j_checkbox = document.getElementById(".j-checkbox");
    }

    // 删除商品
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })
})