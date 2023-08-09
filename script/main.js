$(function(){
    $(window).ready(function () {
        $(".load").delay(3000).fadeOut();
    })


    $("#wrap").fullpage({
        navigation:true,
        navigationPosition: "right",
        navigationTooltips: ["2023 한강 커피 축제","축제 소개","티켓 / 팸플릿","프로그램","MD 상품","커뮤니티","오시는길"],
        showActiveTooltip:true,
        slidesNavigation:true,
        menu:"#header",
        anchors:["menu01","menu02","menu03","menu04","menu05","menu06","menu07"],
    })


    $(".event_list").hide()
    $(".box5_content h2").click(function(){
        $(".box5_content h2").removeClass("on")
        $(this).addClass("on")
        $(".box5_content>div>ul").hide()
        $(this).next().show()
    })


    $(".m_menu").hide()
    $(".m_menu_btn").click(function(){
        $(".m_menu").toggle()
    })


}) //jQuery

