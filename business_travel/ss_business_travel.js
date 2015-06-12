$(document).ready(function() {
    //variables
    var experience_person               = $("#ss_experience_person"),
        experience_level                = $("#ss_experience_level"),
        intermediate_person             = $("#ss_intermediate_person"),
        expert_person                   = $("#ss_expert_person"),
        novice_person                   = $("#ss_novice_person"),
        business_tips                   = $("#ss_business_tips"),

        novice_traveler_wrapper         = $("#ss_novice_traveler_wrapper"),
        novice_packing_wrapper          = $("#ss_novice_packing_wrapper"),
        novice_packing_title            = $("#ss_novice_packing_title"),
        novice_packing_content          = $("#ss_novice_packing_content"),
        novice_app_wrapper              = $("#ss_novice_app_wrapper"),
        novice_app_title                = $("#ss_novice_app_title"),
        novice_app_content              = $("#ss_novice_app_content"),
        novice_checkin_wrapper          = $("#ss_novice_checkin_wrapper"),
        novice_checkin_title            = $("#ss_novice_checkin_title"),
        novice_checkin_content          = $("#ss_novice_checkin_content"),
        intermediate_traveler_wrapper   = $("#ss_intermediate_traveler_wrapper"),
        intermediate_packing_wrapper    = $("#ss_intermediate_packing_wrapper"),
        intermediate_packing_title      = $("#ss_intermediate_packing_title"),
        intermediate_packing_content    = $("#ss_intermediate_packing_content"),
        intermediate_app_wrapper        = $("#ss_intermediate_app_wrapper"),
        intermediate_app_title          = $("#ss_intermediate_app_title"),
        intermediate_app_content        = $("#ss_intermediate_app_content"),
        intermediate_checkin_wrapper    = $("#ss_intermediate_checkin_wrapper"),
        intermediate_checkin_title      = $("#ss_intermediate_checkin_title"),
        intermediate_checkin_content    = $("#ss_intermediate_checkin_content"),
        expert_traveler_wrapper         = $("#ss_expert_traveler_wrapper"),
        expert_packing_wrapper          = $("#ss_expert_packing_wrapper"),
        expert_packing_title            = $("#ss_expert_packing_title"),
        expert_packing_content          = $("#ss_expert_packing_content"),
        expert_app_wrapper              = $("#ss_expert_app_wrapper"),
        expert_app_title                = $("#ss_expert_app_title"),
        expert_app_content              = $("#ss_expert_app_content"),
        expert_checkin_wrapper          = $("#ss_expert_checkin_wrapper"),
        expert_checkin_title            = $("#ss_expert_checkin_title"),
        expert_checkin_content          = $("#ss_expert_checkin_content"),
        bottom_nav                      = $("#ss_bottom_nav"),
        bottom_apps                     = $("#ss_bottom_apps"),
        bottom_back_to_all              = $("#ss_bottom_back_to_all"),
        bottom_packing_tips             = $("#ss_bottom_packing_tips"),
        bottom_check_in_tips            = $("#ss_bottom_check_in_tips"),
        footer_dots                     = $("#ss_footer_dots"),

        skype                           = $("#skype"),
        google_translate                = $("#google_translate"),
        kayak                           = $("#kayak"),
        trip_advisor                    = $("#trip_advisor"),
        yelp                            = $("#yelp"),
        four_square                     = $("#four_square"),
        the_weather_channel             = $("#the_weather_channel"),
        what_s_near_me                  = $("#what_s_near_me"),
        help_call                       = $("#help_call"),
        trip_it                         = $("#trip_it"),
        open_table                      = $("#open_table"),
        zagat                           = $("#zagat"),
        hop_stop                        = $("#hop_stop"),
        cab_4_me                        = $("#cab_4_me"),
        vocre                           = $("#vocre"),
        oanda                           = $("#oanda"),
        ever_note                       = $("#ever_note"),
        where_to_wee                    = $("#where_to_wee"),
        all_subway                      = $("#all_subway"),
        trip_lingo                      = $("#trip_lingo"),
        seat_guru                       = $("#seat_guru"),
        my_tsa                          = $("#my_tsa"),
        flight_track                    = $("#flight_track"),
        flight_update_pro               = $("#flight_update_pro"),
        gate_guru                       = $("#gate_guru"),
        aa                              = $("#aa"),
        delta                           = $("#delta"),
        jet_blue                        = $("#jet_blue"),
        united                          = $("#united"),
        airport_wifi                    = $("#airport_wifi"),
        fly_smart                       = $("#fly_smart"),

        nav_bott = "",
        nav_left = "";

        //store original position
        var experience_person_position               = $.data(experience_person, 'position', $(experience_person).position()),
            experience_level_position                = $.data(experience_level, 'position', $(experience_level).position()),
            intermediate_person_position             = $.data(intermediate_person, 'position', $(intermediate_person).position()),
            expert_person_position                   = $.data(expert_person, 'position', $(expert_person).position()),
            novice_person_position                   = $.data(novice_person, 'position', $(novice_person).position()),
            business_tips_position                   = $.data(business_tips, 'position', $(business_tips).position()),
            novice_traveler_wrapper_position         = $.data(novice_traveler_wrapper, 'position', $(novice_traveler_wrapper).position()),
            novice_packing_wrapper_position          = $.data(novice_packing_wrapper, 'position', $(novice_packing_wrapper).position()),
            novice_packing_title_position            = $.data(novice_packing_title, 'position', $(novice_packing_title).position()),
            novice_packing_content_position          = $.data(novice_packing_content, 'position', $(novice_packing_content).position()),
            novice_app_wrapper_position              = $.data(novice_app_wrapper, 'position', $(novice_app_wrapper).position()),
            novice_app_title_position                = $.data(novice_app_title, 'position', $(novice_app_title).position()),
            novice_app_content_position              = $.data(novice_app_content, 'position', $(novice_app_content).position()),
            novice_checkin_wrapper_position          = $.data(novice_checkin_wrapper, 'position', $(novice_checkin_wrapper).position()),
            novice_checkin_title_position            = $.data(novice_checkin_title, 'position', $(novice_checkin_title).position()),
            novice_checkin_content_position          = $.data(novice_checkin_content, 'position', $(novice_checkin_content).position()),
            intermediate_traveler_wrapper_position   = $.data(intermediate_traveler_wrapper, 'position', $(intermediate_traveler_wrapper).position()),
            intermediate_packing_wrapper_position    = $.data(intermediate_packing_wrapper, 'position', $(intermediate_packing_wrapper).position()),
            intermediate_packing_title_position      = $.data(intermediate_packing_title, 'position', $(intermediate_packing_title).position()),
            intermediate_packing_content_position    = $.data(intermediate_packing_content, 'position', $(intermediate_packing_content).position()),
            intermediate_app_wrapper_position        = $.data(intermediate_app_wrapper, 'position', $(intermediate_app_wrapper).position()),
            intermediate_app_title_position          = $.data(intermediate_app_title, 'position', $(intermediate_app_title).position()),
            intermediate_app_content_position        = $.data(intermediate_app_content, 'position', $(intermediate_app_content).position()),
            intermediate_checkin_wrapper_position    = $.data(intermediate_checkin_wrapper, 'position', $(intermediate_checkin_wrapper).position()),
            intermediate_checkin_title_position      = $.data(intermediate_checkin_title, 'position', $(intermediate_checkin_title).position()),
            intermediate_checkin_content_position    = $.data(intermediate_checkin_content, 'position', $(intermediate_checkin_content).position()),
            expert_traveler_wrapper_position         = $.data(expert_traveler_wrapper, 'position', $(expert_traveler_wrapper).position()),
            expert_packing_wrapper_position          = $.data(expert_packing_wrapper, 'position', $(expert_packing_wrapper).position()),
            expert_packing_title_position            = $.data(expert_packing_title, 'position', $(expert_packing_title).position()),
            expert_packing_content_position          = $.data(expert_packing_content, 'position', $(expert_packing_content).position()),
            expert_app_wrapper_position              = $.data(expert_app_wrapper, 'position', $(expert_app_wrapper).position()),
            expert_app_title_position                = $.data(expert_app_title, 'position', $(expert_app_title).position()),
            expert_app_content_position              = $.data(expert_app_content, 'position', $(expert_app_content).position()),
            expert_checkin_wrapper_position          = $.data(expert_checkin_wrapper, 'position', $(expert_checkin_wrapper).position()),
            expert_checkin_title_position            = $.data(expert_checkin_title, 'position', $(expert_checkin_title).position()),
            expert_checkin_content_position          = $.data(expert_checkin_content, 'position', $(expert_checkin_content).position()),
            bottom_nav_position                      = $.data(bottom_nav, 'position', $(bottom_nav).position()),
            bottom_apps_position                     = $.data(bottom_apps, 'position', $(bottom_apps).position()),
            bottom_back_to_all_position              = $.data(bottom_back_to_all, 'position', $(bottom_back_to_all).position()),
            bottom_packing_tips_position             = $.data(bottom_packing_tips, 'position', $(bottom_packing_tips).position()),
            bottom_check_in_tips_position            = $.data(bottom_check_in_tips, 'position', $(bottom_check_in_tips).position()),
            footer_dots_position                     = $.data(footer_dots, 'position', $(footer_dots).position());
            var start = false;

    function apps_hidden(){
        skype.fadeOut(100);
        google_translate.fadeOut(100);
        kayak.fadeOut(100);
        trip_advisor.fadeOut(100);
        yelp.fadeOut(100);
        four_square.fadeOut(100);
        the_weather_channel.fadeOut(100);
        what_s_near_me.fadeOut(100);
        help_call.fadeOut(100);
        trip_it.fadeOut(100);
        open_table.fadeOut(100);
        zagat.fadeOut(100);
        hop_stop.fadeOut(100);
        cab_4_me.fadeOut(100);
        vocre.fadeOut(100);
        oanda.fadeOut(100);
        ever_note.fadeOut(100);
        where_to_wee.fadeOut(100);
        all_subway.fadeOut(100);
        trip_lingo.fadeOut(100);
        seat_guru.fadeOut(100);
        my_tsa.fadeOut(100);
        flight_track.fadeOut(100);
        flight_update_pro.fadeOut(100);
        gate_guru.fadeOut(100);
        aa.fadeOut(100);
        delta.fadeOut(100);
        jet_blue.fadeOut(100);
        united.fadeOut(100);
        airport_wifi.fadeOut(100);
        fly_smart.fadeOut(100);

    }

    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
        });
    }

    preload([
        'images/ss_bottom_packing_tips_hover.png',
        'images/ss_bottom_check_in_tips_hover.png',
        'images/ss_bottom_apps_hover.png',
        'images/ss_bottom_back_to_all_hover.png'
    ]);

    function novice_content_hidden(){
        if(novice_app_title.is(":visible")){
            novice_app_title.animate({left:"+=780"},350).fadeOut(50);
            novice_app_content.animate({left: "-=829"},200).fadeOut(50);
        }else if(novice_checkin_title.is(":visible")){
            novice_checkin_title.animate({left:"+=780"},350).fadeOut(50);
            novice_checkin_content.animate({left: "-=829"},200).fadeOut(50);
        }else if(novice_packing_title.is(":visible")){
            novice_packing_title.animate({left:"+=780"},350).fadeOut(50);
            novice_packing_content.animate({left: "-=829"},200).fadeOut(50);
        }
    }

    function intermediate_content_hidden(){
        if(intermediate_app_title.is(":visible")){
            intermediate_app_title.animate({left:"+=780"},350).fadeOut(50);
            intermediate_app_content.animate({left: "-=829"},200).fadeOut(50);
        }else if(intermediate_checkin_title.is(":visible")){
            intermediate_checkin_title.animate({left:"+=780"},350).fadeOut(50);
            intermediate_checkin_content.animate({left: "-=829"},200).fadeOut(50);
        }else if(intermediate_packing_title.is(":visible")){
            intermediate_packing_title.animate({left:"+=780"},350).fadeOut(50);
            intermediate_packing_content.animate({left: "-=829"},200).fadeOut(50);
        }
    }

    function expert_content_hidden(){
        if(expert_app_title.is(":visible")){
            expert_app_title.animate({left:"+=780"},350).fadeOut(50);
            expert_app_content.animate({left: "-=829"},200).fadeOut(50);
        }else if(expert_checkin_title.is(":visible")){
            expert_checkin_title.animate({left:"+=780"},350).fadeOut(50);
            expert_checkin_content.animate({left: "-=829"},200).fadeOut(50);
        }else if(expert_packing_title.is(":visible")){
            expert_packing_title.animate({left:"+=780"},350).fadeOut(50);
            expert_packing_content.animate({left: "-=829"},200).fadeOut(50);
        }
    }

    //show all
    function back_to_all(type){

        bottom_back_to_all.one({
            click: function(){

                experience_person.fadeIn(50);

                novice_content_hidden();
                intermediate_content_hidden();
                expert_content_hidden();

                novice_traveler_wrapper.hide();
                intermediate_traveler_wrapper.hide();
                expert_traveler_wrapper.hide();

                experience_level.delay(75).animate({top: experience_level_position.top});
                novice_person.delay(75).animate({top: novice_person_position.top});
                intermediate_person.animate({top: intermediate_person_position.top});
                expert_person.delay(50).animate({top: expert_person_position.top});

                bottom_nav.delay(300).fadeOut(50).animate({top: "-=575"},200);
                footer_dots.delay(100).fadeOut(50).animate({left: "-=756"},200);

                bottom_navigation();
            }
        });

    }

    //show first page
    function first_page(type){
        var packing_title = eval(type + "_packing_title"),
            packing_content = eval(type + "_packing_content"),
            packing_title_position = eval(type + "_packing_title_position"),
            packing_content_position = eval(type + "_packing_content_position");
        novice_content_hidden();
        intermediate_content_hidden();
        expert_content_hidden();
        experience_person.delay(200).fadeOut(50);
        bottom_nav.delay(300).fadeIn(50).animate({top: "+=575"},300);
        packing_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
        packing_content.delay(100).fadeIn(50).animate({left: "+=829"},200);
        footer_dots.delay(100).fadeIn(50).animate({left: "+=756"},200);
        bottom_apps.css("background", "url(images/ss_bottom_apps.png) no-repeat");
        bottom_packing_tips.css("background", "url(images/ss_bottom_packing_tips_hover.png) no-repeat");
        bottom_check_in_tips.css("background", "url(images/ss_bottom_check_in_tips.png) no-repeat");
    }

    bottom_back_to_all.on({
        click: function(){
            bottom_apps.css("background", "url(images/ss_bottom_apps.png) no-repeat");
            bottom_packing_tips.css("background", "url(images/ss_bottom_packing_tips.png) no-repeat");
            bottom_check_in_tips.css("background", "url(images/ss_bottom_check_in_tips.png) no-repeat");
        },
        mouseenter: function(){
            $(this).css("background", "url(images/ss_bottom_back_to_all_hover.png)");
        },
        mouseleave: function(){
            $(this).css("background", "url(images/ss_bottom_back_to_all.png)");
        }
    });

    //animation for novice traveler
    function novice_traveler(){
        novice_person.one({
            click: function() {       
                //animations
                novice_traveler_wrapper.show();

                experience_level.delay(75).animate({top:"+=570"},200);
                novice_person.animate({top:"+=570"},200);
                intermediate_person.delay(50).animate({top:"+=570"},200);
                expert_person.delay(75).animate({top:"+=570"},200);
                first_page("novice");
                back_to_all("novice");
                nav_bott="novice";
            },
            mouseenter: function(){
            },
            mouseleave: function(){
            }
        });

        
    }

    //animation for intermediate traceler
    function intermediate_traveler(){

        intermediate_person.one({
            click: function() {
                //variables

                intermediate_traveler_wrapper.show();

                experience_level.delay(75).animate({top:"+=570"},200);
                novice_person.delay(75).animate({top:"+=570"},150);
                intermediate_person.animate({top:"+=570"},150);
                expert_person.delay(50).animate({top:"+=570"},150);
                first_page("intermediate");
                back_to_all("intermediate");
                nav_bott="intermediate";

            },
            mouseenter: function(){
            },
            mouseleave: function(){
            }
        });
            }

    //animation for expert traveler
    function expert_traveler(){

        expert_person.one({
            click: function() {         
                //variables
                expert_traveler_wrapper.show();
                experience_level.delay(75).animate({top:"+=570"},200);
                novice_person.delay(75).animate({top:"+=570"},150);
                intermediate_person.delay(50).animate({top:"+=570"},150);
                expert_person.delay(0).animate({top:"+=570"},150);
                first_page("expert");
                back_to_all("expert");
                nav_bott="expert";

            },
            mouseenter: function(){
            },
            mouseleave: function(){
            }
        });
        
    }

    


    function apps(){

        bottom_apps.on({
            click: function(){
                if(novice_app_title.is(":visible") || novice_checkin_title.is(":visible") || novice_packing_title.is(":visible")){

                    novice_content_hidden();

                    novice_app_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    novice_app_content.delay(50).fadeIn(50).animate({left: "+=829"},200);

                }else if(intermediate_app_title.is(":visible") || intermediate_checkin_title.is(":visible") || intermediate_packing_title.is(":visible")){
                    
                    intermediate_content_hidden();

                    intermediate_app_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    intermediate_app_content.delay(50).fadeIn(50).animate({left: "+=829"},200);
                }else if(expert_app_title.is(":visible") || expert_checkin_title.is(":visible") || expert_packing_title.is(":visible")){
                    
                    expert_content_hidden();

                    expert_app_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    expert_app_content.delay(50).fadeIn(50).animate({left: "+=829"},200);
                }
                bottom_apps.css("background", "url(images/ss_bottom_apps_hover.png) no-repeat");
                bottom_packing_tips.css("background", "url(images/ss_bottom_packing_tips.png) no-repeat");
                bottom_check_in_tips.css("background", "url(images/ss_bottom_check_in_tips.png) no-repeat");
            },
            mouseenter: function(){
                $(this).css("background", "url(images/ss_bottom_apps_hover.png) no-repeat");
            },
            mouseleave: function(){
                if(novice_app_title.is(":visible") || intermediate_app_title.is(":visible") || expert_app_title.is(":visible")){
                    $(this).css("background", "url(images/ss_bottom_apps_hover.png) no-repeat");
                }else{
                    $(this).css("background", "url(images/ss_bottom_apps.png) no-repeat");
                }
            }
        });
        
    }

    function packing(){
            bottom_packing_tips.on({
            click: function(){

                if(novice_app_title.is(":visible") || novice_checkin_title.is(":visible") || novice_packing_title.is(":visible")){
                    
                    novice_content_hidden();

                    novice_packing_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    novice_packing_content.delay(50).fadeIn(50).animate({left: "+=829"},200);

                }else if(intermediate_app_title.is(":visible") || intermediate_checkin_title.is(":visible") || intermediate_packing_title.is(":visible")){
                    
                    intermediate_content_hidden();

                    intermediate_packing_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    intermediate_packing_content.delay(50).fadeIn(50).animate({left: "+=829"},200);
                }else if(expert_app_title.is(":visible") || expert_checkin_title.is(":visible") || expert_packing_title.is(":visible")){

                    expert_content_hidden();

                    expert_packing_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    expert_packing_content.delay(50).fadeIn(50).animate({left: "+=829"},200);
                }
                bottom_apps.css("background", "url(images/ss_bottom_apps.png) no-repeat");
                bottom_packing_tips.css("background", "url(images/ss_bottom_packing_tips_hover.png) no-repeat");
                bottom_check_in_tips.css("background", "url(images/ss_bottom_check_in_tips.png) no-repeat");
            },
            mouseenter: function(){
                $(this).css("background", "url(images/ss_bottom_packing_tips_hover.png) no-repeat");
            },
            mouseleave: function(){
                if(novice_packing_title.is(":visible") || intermediate_packing_title.is(":visible") || expert_packing_title.is(":visible")){
                    $(this).css("background", "url(images/ss_bottom_packing_tips_hover.png) no-repeat");
                }else{
                    $(this).css("background", "url(images/ss_bottom_packing_tips.png) no-repeat");
                }
            }
        });
    }

    function checkin(){
        bottom_check_in_tips.on({
            click: function(){
                if(novice_app_title.is(":visible") || novice_checkin_title.is(":visible") || novice_packing_title.is(":visible")){
                    
                    novice_content_hidden();

                    novice_checkin_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    novice_checkin_content.delay(50).fadeIn(50).animate({left: "+=829"},200);

                }else if(intermediate_app_title.is(":visible") || intermediate_checkin_title.is(":visible") || intermediate_packing_title.is(":visible")){
                    
                    intermediate_content_hidden();

                    intermediate_checkin_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    intermediate_checkin_content.delay(50).fadeIn(50).animate({left: "+=829"},200);
                }else if(expert_app_title.is(":visible") || expert_checkin_title.is(":visible") || expert_packing_title.is(":visible")){
                    
                    expert_content_hidden();

                    expert_checkin_title.delay(350).fadeIn(50).animate({left:"-=780"},350);
                    expert_checkin_content.delay(50).fadeIn(50).animate({left: "+=829"},200);
                }
                bottom_apps.css("background", "url(images/ss_bottom_apps.png) no-repeat");
                bottom_packing_tips.css("background", "url(images/ss_bottom_packing_tips.png) no-repeat");
                bottom_check_in_tips.css("background", "url(images/ss_bottom_check_in_tips_hover.png) no-repeat");
            },
            mouseenter: function(){
                $(this).css("background", "url(images/ss_bottom_check_in_tips_hover.png) no-repeat");
            },
            mouseleave: function(){
                if(novice_checkin_title.is(":visible") || intermediate_checkin_title.is(":visible") || expert_checkin_title.is(":visible")){
                    $(this).css("background", "url(images/ss_bottom_check_in_tips_hover.png) no-repeat");
                }else{
                    $(this).css("background", "url(images/ss_bottom_check_in_tips.png) no-repeat");
                }
            }
        });
    }

    function bottom_navigation(){
        switch(nav_bott){
            case "novice":
                novice_traveler();
                break;
            case "intermediate":
                intermediate_traveler();
                break;
            case "expert":
                expert_traveler();
                break;
        }

    }



    $('img[alt="skype"]').on({
        click: function(){
            apps_hidden();
            skype.delay(100).fadeIn(200);
        }
    });
    $('img[alt="google translate"]').on({
        click: function(){
            apps_hidden();
            google_translate.delay(100).fadeIn(200);
        }
    });
    $('img[alt="kayak"]').on({
        click: function(){
            apps_hidden();
            kayak.delay(100).fadeIn(200);
        }
    });
    $('img[alt="TripAdvisor"]').on({
        click: function(){
            apps_hidden();
            trip_advisor.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Foursquare"]').on({
        click: function(){
            apps_hidden();
            four_square.delay(100).fadeIn(200);
        }
    });
    $('img[alt="The Weather Channel"]').on({
        click: function(){
            apps_hidden();
            the_weather_channel.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Yelp"]').on({
        click: function(){
            apps_hidden();
            yelp.delay(100).fadeIn(200);
        }
    });
    $('img[alt="What\'s Near Me"]').on({
        click: function(){
            apps_hidden();
            what_s_near_me.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Help Call"]').on({
        click: function(){
            apps_hidden();
            help_call.delay(100).fadeIn(200);
        }
    });
    $('img[alt="TripIt"]').on({
        click: function(){
            apps_hidden();
            trip_it.delay(100).fadeIn(200);
        }
    });
    $('img[alt="OpenTable"]').on({
        click: function(){
            apps_hidden();
            open_table.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Zagat"]').on({
        click: function(){
            apps_hidden();
            zagat.delay(100).fadeIn(200);
        }
    });
    $('img[alt="HopStop"]').on({
        click: function(){
            apps_hidden();
            hop_stop.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Cab4me"]').on({
        click: function(){
            apps_hidden();
            cab_4_me.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Gate Guru"]').on({
        click: function(){
            apps_hidden();
            gate_guru.delay(100).fadeIn(200);
        }
    });
    $('img[alt="American Airlines"]').on({
        click: function(){
            apps_hidden();
            aa.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Delta"]').on({
        click: function(){
            apps_hidden();
            delta.delay(100).fadeIn(200);
        }
    });
    $('img[alt="jetBlue"]').on({
        click: function(){
            apps_hidden();
            jet_blue.delay(100).fadeIn(200);
        }
    });
    $('img[alt="United"]').on({
        click: function(){
            apps_hidden();
            united.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Airport Wifi"]').on({
        click: function(){
            apps_hidden();
            airport_wifi.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Flysmart"]').on({
        click: function(){
            apps_hidden();
            fly_smart.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Vocre"]').on({
        click: function(){
            apps_hidden();
            vocre.delay(100).fadeIn(200);
        }
    });
    $('img[alt="OANDA"]').on({
        click: function(){
            apps_hidden();
            oanda.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Evernote"]').on({
        click: function(){
            apps_hidden();
            ever_note.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Where to Wee"]').on({
        click: function(){
            apps_hidden();
            where_to_wee.delay(100).fadeIn(200);
        }
    });
    $('img[alt="AllSubway"]').on({
        click: function(){
            apps_hidden();
            all_subway.delay(100).fadeIn(200);
        }
    });
    $('img[alt="TripLingo"]').on({
        click: function(){
            apps_hidden();
            trip_lingo.delay(100).fadeIn(200);
        }
    });
    $('img[alt="SeatGuru"]').on({
        click: function(){
            apps_hidden();
            seat_guru.delay(100).fadeIn(200);
        }
    });
    $('img[alt="My TSA"]').on({
        click: function(){
            apps_hidden();
            my_tsa.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Flight Track"]').on({
        click: function(){
            apps_hidden();
            flight_track.delay(100).fadeIn(200);
        }
    });
    $('img[alt="Flight Update Pro"]').on({
        click: function(){
            apps_hidden();
            flight_update_pro.delay(100).fadeIn(200);
        }
    });

    novice_traveler();
    intermediate_traveler();
    expert_traveler();
    apps();
    packing();
    checkin();

    $("#btn_sources").toggle(function(){
            $("#sources").fadeIn(50);
        }, function(){
            $("#sources").fadeOut(50);
        });


});














