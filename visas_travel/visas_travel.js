$(document).ready(function(){
    //variables
    var visit_select        = $("#ss_visit_select"),
        sources_img         = $("#ss_visa_sources img"),
        menu_button         = $("#ss_menu_button"),
        main_nav            = $("#ss_visa_nav"),
        visa_select1        = $("#ss_visa_select1"),
        nav_visit           = $("#ss_visas_nav_visit"),
        nav_visit_label     = $("#ss_visas_nav_visit_label"),
        nav_work            = $("#ss_visas_nav_work"),
        nav_work_label      = $("#ss_visas_nav_work_label"),
        nav_study           = $("#ss_visas_nav_study"),
        nav_study_label     = $("#ss_visas_nav_study_label"),
        nav_immigrate       = $("#ss_visas_nav_immigrate"),
        nav_immigrate_label = $("#ss_visas_nav_immigrate_label"),
        select     = $("#ss_visit_select img"),
        select_student      = $("#ss_visit_select_student img"),
        select_exchange     = $("#ss_visit_select_exchange img"),
        visit_el   = $("#ss_visa_visit_el"),
        visit_how  = $("#ss_visa_visit_how"),
        visit_cost = $("#ss_visa_visit_cost"),
        study_student_el    = $("#ss_visa_study_student_el"),
        study_student_how   = $("#ss_visa_study_student_how"),
        study_student_cost  = $("#ss_visa_study_student_cost"),
        study_exchange_el   = $("#ss_visa_study_exchange_el"),
        study_exchange_how  = $("#ss_visa_study_exchange_how"),
        study_exchange_cost = $("#ss_visa_study_exchange_cost"),
        work_el             = $("#ss_visa_work_el"),
        work_how            = $("#ss_visa_work_how"),
        work_cost           = $("#ss_visa_work_cost"),
        immigrate_el        = $("#ss_visa_immigrate_el"),
        immigrate_how       = $("#ss_visa_immigrate_how"),
        immigrate_cost      = $("#ss_visa_immigrate_cost"),
        visit_el2  = $("#ss_visa_visit_el_2"),
        visit_how2 = $("#ss_visa_visit_how_2"),
        visit_cost2= $("#ss_visa_visit_cost_2"),
        study_student_el2   = $("#ss_visa_study_student_el_2"),
        study_student_how2  = $("#ss_visa_study_student_how_2"),
        study_student_cost2 = $("#ss_visa_study_student_cost_2"),
        study_exchange_el2  = $("#ss_visa_study_exchange_el_2"),
        study_exchange_how2 = $("#ss_visa_study_exchange_how_2"),
        study_exchange_cost2= $("#ss_visa_study_exchange_cost_2"),
        work_el2            = $("#ss_visa_work_el_2"),
        work_how2           = $("#ss_visa_work_how_2"),
        work_cost2          = $("#ss_visa_work_cost_2"),
        immigrate_el2       = $("#ss_visa_immigrate_el_2"),
        immigrate_how2      = $("#ss_visa_immigrate_how_2"),
        immigrate_cost2     = $("#ss_visa_immigrate_cost_2"),
        visit_el_container   = $("#ss_visa_visit_el_container"),
        visit_how_container  = $("#ss_visa_visit_how_container"),
        visit_cost_container = $("#ss_visa_visit_cost_container"),
        study_student_el_container    = $("#ss_visa_study_student_el_container"),
        study_student_how_container   = $("#ss_visa_study_student_how_container"),
        study_student_cost_container  = $("#ss_visa_study_student_cost_container"),
        study_exchange_el_container   = $("#ss_visa_study_exchange_el_container"),
        study_exchange_how_container  = $("#ss_visa_study_exchange_how_container"),
        study_exchange_cost_container = $("#ss_visa_study_exchange_cost_container"),
        work_el_container             = $("#ss_visa_work_el_container"),
        work_how_container            = $("#ss_visa_work_how_container"),
        work_cost_container           = $("#ss_visa_work_cost_container"),
        immigrate_el_container        = $("#ss_visa_immigrate_el_container"),
        immigrate_how_container       = $("#ss_visa_immigrate_how_container"),
        immigrate_cost_container      = $("#ss_visa_immigrate_cost_container"),
        arrows                        = $("#ss_visa_buttons"),
        sub_title_el                  = $("#ss_sub_title_el"),
        sub_title_how                 = $("#ss_sub_title_how"),
        sub_title_cost                = $("#ss_sub_title_cost"),
        up                            = $("#ss_up"),
        down                          = $("#ss_down"),
        sources                       = $("#ss_sources"),
        links                         = $("#ss_links"),
        el_nav                        = $("#ss_el"),
        how_nav                       = $("#ss_how"),
        cost_nav                      = $("#ss_cost"),
        student  = "",
        exchange = "",
        visit_function_called = false,
        study_function_called = false,
        display_array,
        nav                           = 0;
        var display_visit = new Array(visit_el_container, visit_how_container, visit_cost_container);
        var display_exchange = new Array(study_exchange_el_container, study_exchange_how_container, study_exchange_cost_container);
        var display_student = new Array(study_student_el_container, study_student_how_container, study_student_cost_container);
        var display_work = new Array(work_el_container, work_how_container, work_cost_container);
        var display_immigrate = new Array(immigrate_el_container, immigrate_how_container, immigrate_cost_container);

    //hide elements
    menu_button.hide(0);
    visit_select.hide(0);
    //select.hide(0);
    select_exchange.hide(0);
    select_student.hide(0);
    //hide content
    visit_el_container.hide(0);
    visit_how_container.hide(0);
    visit_cost_container.hide(0);
    study_student_el_container.hide(0);
    study_student_how_container.hide(0);
    study_student_cost_container.hide(0);
    study_exchange_el_container.hide(0);
    study_exchange_how_container.hide(0);
    study_exchange_cost_container.hide(0);
    work_el_container.hide(0);
    work_how_container.hide(0);
    work_cost_container.hide(0);
    immigrate_el_container.hide(0);
    immigrate_how_container.hide(0);
    immigrate_cost_container.hide(0);
    arrows.hide(0);
    sources.hide(0);
    $("#ss_sources_2").hide(0);
    //navigation actions
    nav_visit_click();
    nav_study_click();
    nav_work_click();
    nav_immigrate_click();

    source_click();

$("#btn_sources").toggle(function(){
        $("#sources").fadeIn(50);
        console.log("hello");d
    }, function(){
        $("#sources").fadeOut(50);
    });
     $("#ss_visa_sources").on({
        mouseenter: function(){
            sources_img.attr("src","images/ss_btn_sources_hover.png");
        },
        mouseleave: function(){
            sources_img.attr("src","images/ss_btn_sources.png");
        }
    });


    //toggle sources
    function source_click(){
        $('#ss_visa_sources').toggle( function(){
            links.fadeOut(200);
            $("#ss_note").fadeOut(200)
            $(this).animate({left: "-=725"}, 500);
            sources.delay(400).fadeIn(200);
            $("#ss_sources_2").delay(400).fadeIn(200);
            }, function() {
                $(this).animate({left: "+=725"}, 500);
                sources.fadeOut(200);
                $("#ss_sources_2").fadeOut(200);
                links.delay(400).fadeIn(200);
                $("#ss_note").delay(400).fadeIn(200);
        });

    }

        
    
    function nav_visit_click(){
        //click Visit functions
        nav_visit.one("click", function() {  
                 
            //variables
            var $this = $(this);

            //hide main navigation
            visa_select1.fadeOut(400)
            nav_visit_label.fadeOut(400);
            nav_study.fadeOut(400);
            nav_study_label.fadeOut(400);
            nav_work.fadeOut(400);
            nav_work_label.fadeOut(400);
            nav_immigrate.fadeOut(400);
            nav_immigrate_label.fadeOut(400);

            //store nav_visit position
            nav_visit_position = $.data(this, 'position', $this.position());

            //animate
            $this.animate({top:"-=130"});

            
            //take away hover_bg
            nav_visit.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_visit.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_visit.png)");
                  }
            );

            select_nav_option("visit")
            //show menu button    
            menu_button.fadeIn(250).attr("src", "images/ss_btn_menu.png");
            //navigation menu
            nav_menu_action(nav_visit, nav_visit_position)
            nav = "visit";
        });
    }

    function nav_study_click(){
        //click Visit functions
        nav_study.one("click", function() {         
            //variables
            var $this = $(this);

            //hide main navigation
            visa_select1.fadeOut(400);
            nav_visit.fadeOut(400);
            nav_visit_label.fadeOut(400);
            nav_study_label.fadeOut(400);
            nav_work.fadeOut(400);
            nav_work_label.fadeOut(400);
            nav_immigrate.fadeOut(400);
            nav_immigrate_label.fadeOut(400);

            //store position
            nav_study_position = $.data(this, 'position', $this.position());

            //animate
            $this.animate({ left: "+=95" }, 400)
                .animate({top:"-=75"});

            //display visit_select
            visit_select.delay(800).fadeIn(250);
            select_student.delay(800).fadeIn(250);
            select_exchange.delay(800).fadeIn(270);
            
            //make sure this function only runs once so animation doesn't double.
            if (study_function_called == false){
                select_visit(select_student,select_exchange, "student", nav_study);
                select_visit(select_exchange, select_student, "exchange", nav_study);
            }

            //take away hover_bg
            nav_study.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_study.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_study.png)");
                  }
            );


            //show menu button    
            menu_button.fadeIn(250).attr("src", "images/ss_btn_menu.png");
            //navigation menu
            nav_menu_action(nav_study, nav_study_position)
            nav = "study";
        });
    }

    function nav_work_click(){
        //click Visit functions
        nav_work.one("click", function() {         
            //variables
            var $this = $(this);

            //hide main navigation
            visa_select1.fadeOut(400);
            nav_visit.fadeOut(400);
            nav_visit_label.fadeOut(400);
            nav_study.fadeOut(400);
            nav_study_label.fadeOut(400);
            nav_work_label.fadeOut(400);
            nav_immigrate.fadeOut(400);
            nav_immigrate_label.fadeOut(400);

            //store position
            nav_work_position = $.data(this, 'position', $this.position());

            //animate
            $this.animate({ left: "-=385" }, 400)
                .animate({top:"-=130"});

            //take away hover_bg
            nav_work.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_work.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_work.png)");
                  }
            );

            //display content
            select_nav_option("work")

            //show menu button    
            menu_button.fadeIn(250).attr("src", "images/ss_btn_menu.png");
            //navigation menu
            nav_menu_action(nav_work, nav_work_position)
            nav="work";
        });

    }

    function nav_immigrate_click(){
        //click Visit functions
        nav_immigrate.one({
            click: function() {         
                //variables
                var $this = $(this);

                //hide main navigation
                visa_select1.fadeOut(400);
                nav_visit.fadeOut(400);
                nav_visit_label.fadeOut(400);
                nav_study.fadeOut(400);
                nav_study_label.fadeOut(400);
                nav_work_label.fadeOut(400);
                nav_work.fadeOut(400);
                nav_immigrate_label.fadeOut(400);

                //store position
                nav_immigrate_position = $.data(this, 'position', $this.position());

                //animate
                $this.animate({ left: "-=575" }, 400)
                    .animate({top:"-=130"});

                //take away hover_bg
                nav_immigrate.hover(
                      function () {
                        $(this).css("background", "url(images/ss_visa_immigrate.png)");
                      }, 
                      function () {
                        $(this).css("background", "url(images/ss_visa_immigrate.png)");
                      }
                );

                //display content
                select_nav_option("immigrate")

                //show menu button    
                menu_button.fadeIn(250).attr("src", "images/ss_btn_menu.png");
                //navigation menu
                nav_menu_action(nav_immigrate, nav_immigrate_position)
                nav="immigrate";
            },
            mouseenter: function(){
                $(this).attr("src", "images/ss_visa_immigrate_hover.png");
            },
            mouseleave: function(){
                $(this).attr("src", "images/ss_visa_immigrate.png");
            }
        });
    }




    //menu function for navigation
    function nav_menu_action(selected_nav_element, selected_nav_element_positon){
        //menu hover
        menu_button.on({
            click: function(){
                $(this).delay(100).fadeOut(200);
                //animate button back to origional position
                selected_nav_element.animate({
                    left: selected_nav_element_positon.left                   
                },function () {
                    $(this).animate({
                        top: selected_nav_element_positon.top
                    });
                });
                //hide visit_select
                visit_select.delay(200).fadeOut(250);
                select_student.delay(200).fadeOut(250);
                select_exchange.delay(200).fadeOut(250);
                //show navigation
                visa_select1.delay(200).fadeIn(400);
                nav_visit.delay(200).fadeIn(400);
                nav_visit_label.delay(200).fadeIn(400);
                nav_study.delay(200).fadeIn(400);
                nav_study_label.delay(200).fadeIn(400);
                nav_work.delay(200).fadeIn(400);
                nav_work_label.delay(200).fadeIn(400);
                nav_immigrate.delay(200).fadeIn(400);
                nav_immigrate_label.delay(200).fadeIn(400);
                //hide content
                visit_el_container.fadeOut(100);
                visit_how_container.fadeOut(100);
                visit_cost_container.fadeOut(100);
                study_student_el_container.fadeOut(100);
                study_student_how_container.fadeOut(100);
                study_student_cost_container.fadeOut(100);
                study_exchange_el_container.fadeOut(100);
                study_exchange_how_container.fadeOut(100);
                study_exchange_cost_container.fadeOut(100);
                work_el_container.fadeOut(100);
                work_how_container.fadeOut(100);
                work_cost_container.fadeOut(100);
                immigrate_el_container.fadeOut(100);
                immigrate_how_container.fadeOut(100);
                immigrate_cost_container.fadeOut(100);
                arrows.fadeOut(100);

                //give back hover
                nav_visit.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_visit_hover.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_visit.png)");
                  }
                );
                nav_study.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_study_hover.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_study.png)");
                  }
                );
                nav_work.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_work_hover.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_work.png)");
                  }
                );
                nav_immigrate.hover(
                  function () {
                    $(this).css("background", "url(images/ss_visa_immigrate_hover.png)");
                  }, 
                  function () {
                    $(this).css("background", "url(images/ss_visa_immigrate.png)");
                  }
                );

                //reset page nav
                el_nav.attr("src", "images/ss_el_dis.png");
                how_nav.attr("src", "images/ss_how.png");
                cost_nav.attr("src", "images/ss_cost.png");

                $(this).off();

                navigation();
            },
            mouseenter: function(){
                $(this).attr("src", "images/ss_btn_menu_hover.png");
            },
            mouseleave: function(){
                $(this).attr("src", "images/ss_btn_menu.png");
            }
        });
    }

    function navigation(){
        switch(nav){
            case "visit":
                nav_visit_click();
                break;
            case "study":
                nav_study_click();
                break;
            case "work":
                nav_work_click();
                break;
            case "immigrate":
                nav_immigrate_click();
                break;
        } 
    }
    //function study which has deeper navigation
    function select_visit(select_element1, select_element2, option, nav_type){
        if(nav_type == nav_visit)
            visit_function_called = true;
        else if (nav_type == nav_study)
            study_function_called = true;
        select_element1.on({
            click: function(){
                visit_select.fadeOut(250);
                select_element1.fadeOut(250);
                select_element2.fadeOut(250);
                //animate nav_type
                nav_type.animate({ left: "-=290" }, 400);
                nav_type.animate({ top: "-=55"});
        
                display_array = eval("display_" + option);
                //display first page
                display_content(display_array)
                arrows_function_unbind();
                //terrible arrows function
                arrows_function(display_array);
            },
            mouseenter: function(){
                $(this).attr("src", "images/ss_visa_" + option + "_hover.png");
            },
            mouseleave: function(){
                $(this).attr("src", "images/ss_visa_" + option + ".png");
            }
        });
    }

    //function visit, work and immigrate navigation
    function select_nav_option(option){
        display_array = eval("display_" + option);
        //display first page
        display_content(display_array)
        arrows_function_unbind();
        //terrible arrows function
        arrows_function(display_array);
    }

    //displays eligibility page
    function display_content(display_array){
        display_array[0].delay(400).fadeIn(400);
        arrows.delay(400).fadeIn(400);
        up.attr("src", "images/ss_btn_up_disabled.png");
        down.attr("src", "images/ss_btn_down.png");
    }

    function arrows_function_unbind(){
        el_nav.off();
        how_nav.off();
        cost_nav.off();
        up.off();
        down.off();
    }

    function arrows_function(display_array){
        var eligibility_page  = display_array[0],
            how_to_apply_page =  display_array[1],
            cost_page         = display_array[2];

        el_nav.on({
            click: function(){
                if(eligibility_page.is(":hidden")){
                    cost_page.fadeOut(400);
                    how_to_apply_page.fadeOut(400);
                    eligibility_page.delay(200).fadeIn(400);
                    $(this).attr("src", "images/ss_el_dis.png");
                    how_nav.attr("src", "images/ss_how.png");
                    cost_nav.attr("src", "images/ss_cost.png");

                    up.attr("src", "images/ss_btn_up_disabled.png");
                    down.attr("src", "images/ss_btn_down.png");
                }
            },
            mouseenter: function(){
                if(eligibility_page.is(":hidden")){
                    $(this).attr("src", "images/ss_el_hover.png");
                }
            },
            mouseleave: function(){
                if(eligibility_page.is(":hidden")){
                    $(this).attr("src", "images/ss_el.png");
                }else{
                    $(this).attr("src", "images/ss_el_dis.png");
                }
            }

        });
        how_nav.on({
            click: function(){
                if(how_to_apply_page.is(":hidden")){
                    cost_page.fadeOut(400);
                    eligibility_page.fadeOut(400);
                    how_to_apply_page.delay(200).fadeIn(400);
                    $(this).attr("src", "images/ss_how_dis.png");
                    cost_nav.attr("src", "images/ss_cost.png");
                    el_nav.attr("src", "images/ss_el.png");

                    up.attr("src", "images/ss_btn_up.png");
                    down.attr("src", "images/ss_btn_down.png");

                }
            },
            mouseenter: function(){
                if(how_to_apply_page.is(":hidden")){
                    $(this).attr("src", "images/ss_how_hover.png");
                }
            },
            mouseleave: function(){
                if(how_to_apply_page.is(":hidden")){
                    $(this).attr("src", "images/ss_how.png");
                }else{
                    $(this).attr("src", "images/ss_how_dis.png");
                }
            }

        });
        cost_nav.on({
            click: function(){
                if(cost_page.is(":hidden")){
                    how_to_apply_page.fadeOut(400);
                    eligibility_page.fadeOut(400);
                    cost_page.delay(200).fadeIn(400);
                    $(this).attr("src", "images/ss_cost_dis.png");
                    how_nav.attr("src", "images/ss_how.png");
                    el_nav.attr("src", "images/ss_el.png");

                    up.attr("src", "images/ss_btn_up.png");
                    down.attr("src", "images/ss_btn_down_disabled.png");
                }
            },
            mouseenter: function(){
                if(cost_page.is(":hidden")){
                    $(this).attr("src", "images/ss_cost_hover.png");

                }
            },
            mouseleave: function(){
                if(cost_page.is(":hidden")){
                    $(this).attr("src", "images/ss_cost.png");
                }else{
                    $(this).attr("src", "images/ss_cost_dis.png");
                }
            }

        });
        up.on({
            click: function(){
                if(cost_page.is(":visible")){
                    cost_page.fadeOut(400);
                    how_to_apply_page.delay(200).fadeIn(400);
                    how_nav.attr("src", "images/ss_how_dis.png");
                    cost_nav.attr("src", "images/ss_cost.png");
                    el_nav.attr("src", "images/ss_el.png");
                    down.attr("src", "images/ss_btn_down.png");
                }
                if(how_to_apply_page.is(":visible")){
                    how_to_apply_page.fadeOut(400);
                    eligibility_page.delay(200).fadeIn(400);
                    el_nav.attr("src", "images/ss_el_dis.png");
                    cost_nav.attr("src", "images/ss_cost.png");
                    how_nav.attr("src", "images/ss_how.png");
                    up.attr("src", "images/ss_btn_up_disabled.png");
                }
            },
            mouseenter: function(){
                if((cost_page.is(":visible")) || (how_to_apply_page.is(":visible")))
                    $(this).attr("src", "images/ss_btn_up_hover.png");
            },
            mouseleave: function(){
                if((cost_page.is(":visible")) || (how_to_apply_page.is(":visible")))
                    $(this).attr("src", "images/ss_btn_up.png");
            }
        });

        down.on({
            click: function(){
                if(eligibility_page.is(":visible")){
                    eligibility_page.fadeOut(400);
                    how_to_apply_page.delay(200).fadeIn(400);
                    how_nav.attr("src", "images/ss_how_dis.png");
                    cost_nav.attr("src", "images/ss_cost.png");
                    el_nav.attr("src", "images/ss_el.png");
                    up.attr("src", "images/ss_btn_up.png");
                }
                if(how_to_apply_page.is(":visible")){
                    how_to_apply_page.fadeOut(400);
                    cost_page.delay(200).fadeIn(400);
                    cost_nav.attr("src", "images/ss_cost_dis.png");
                    el_nav.attr("src", "images/ss_el.png");
                    how_nav.attr("src", "images/ss_how.png");
                    down.attr("src", "images/ss_btn_down_disabled.png");
                }

            },
            mouseenter: function(){
                if(eligibility_page.is(":visible") || (how_to_apply_page.is(":visible")))
                    $(this).attr("src", "images/ss_btn_down_hover.png");
            },
            mouseleave: function(){
                if(eligibility_page.is(":visible") || (how_to_apply_page.is(":visible")))
                    $(this).attr("src", "images/ss_btn_down.png");
            }
        });

    }

    
});