$(window).load(function(){
    $('#loading').remove();
});
$(document).ready(function(){
    //============================================================================
    //  common
    //============================================================================
    $('#popup').modal({
        backdrop:false,
        show: "show",
    }); 
    $("body").niceScroll();
    $("#sidebar").niceScroll();
    $(".ui-widget-content-chart").niceScroll();
    $(".table-responsive").niceScroll();
    $('[data-toggle="tooltip"]').tooltip();
    
    //============================================================================
    //  #sidebar
    //============================================================================
    var acc_item = $('#sidebar .accordion > li');
    var acc_active = $('#sidebar .accordion > li.active').index();
    if(acc_item.hasClass("active")){
        $('#sidebar .accordion').accordion({
            heightStyle: "content",
            collapsible: true,
            active: acc_active
        });
        
    }
    
    $(".sidebar-toggle").click(function(){
        $("#sidebar").toggleClass("on");
    });
    
    $(window).resize(function(){
        var winWid = $(window).width();
        
        if(winWid > 992) {
            $("#sidebar").addClass("on");
            
        }else {
            $("#sidebar").removeClass("on");
        }
        // tab메뉴
        var tabListEa = $(".tab_wrap .tabbox li").length;
        var tabWrapWid = $(".tab_wrap").width(); 
        var listWid = tabWrapWid/tabListEa; // 여백 10px
        if(tabWrapWid == 0) {
            $(".tab_wrap .tabbox li").css({"width":"100px"});
        }else {
            if(tabListEa < 3) {
                $(".tab_wrap .tabbox li").css({"width":"calc(50% - 5px)","max-width":"160px"});
            }else if(tabListEa >= 3) {
                $(".tab_wrap .tabbox li").css({"width":listWid,"max-width":"160px"});
            }
        } 
    }).resize();
    
    // 파일추가 버튼 클릭시
    $("#file_form > div").hide();
    $("#file_form > div").eq(0).show();
    var file_form = ($("#file_form > div").length)+1;
    var index = 1;
    $(".btn_addfile").click(function(){
        index++
        if(index==file_form){
            alert(index+"개 이상 파일 추가 하실 수 없습니다.");
            index=4;
        }else{
            $("#file"+index).show();
        }
    });
        
    $("#file_form .btn_removefile").click(function(){
        $("#file"+index).hide();
        index--
    });
    
    $(".btn_tabletoggle").click(function(){
        $(this).toggleClass("on");
        var article = $(this).parents("tr").nextAll(".hide");
        var article2 = $(this).parents("tr").nextAll(".show");
        if($(article).hasClass("hide")) {
            $(article).removeClass("hide").addClass("show");
        }else {
            $(article2).addClass("hide").removeClass("show");
        }
        
    });
    
    $(".btn_regist").click(function(){
        $(this).toggleClass("on");
    });
    
    $(".btn_add_line").click(function(){
        var clone = $(this).parents("#inner_table").find("tbody tr").eq(0).clone(true);
        $(this).parents("thead").siblings("tbody").append(clone);
    });
    
    $(".btn_remove_line").click(function(){
        $(this).parent().parent().remove();
    });
    
    $(".btn-remove").click(function(){
        $(this).parent().remove();
    });
    
});

// commonTab
function commonTab(tabParent, tabName){
	$("."+tabParent+" ul.tabbox li").removeClass("on");
	$("."+tabParent+" ul.tabbox li."+tabName).addClass("on");
	$("."+tabParent+" .hiddencontents").removeClass("on");
	$("."+tabParent+" .hiddencontents."+tabName).addClass("on");
}

