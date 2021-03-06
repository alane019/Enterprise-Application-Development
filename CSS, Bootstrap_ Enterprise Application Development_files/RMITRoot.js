if (window.hasOwnProperty("ENV") && (ENV.hasOwnProperty("WIKI_PAGE") || ENV.hasOwnProperty("DISCUSSION"))) {
    console.log("USE MUTATION OBSERVER");
    var targetNode = document.querySelector('.ic-app-main-content');
    var config = {
        childList: true,
        subtree: true
    };
    var observer = new MutationObserver(function(mutationsList, observer) {
        console.log("Mutated root");
        if (document.querySelector(".user_content") || document.querySelector(".entry-content")) {
            observer.disconnect();
            runCustomScripts();
        }
    });
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
} else {
    console.log("NO MUTATION OBSERVER");
    runCustomScripts();
}

function runCustomScripts() {
    /*
     **  Enable Custom Style in Rich Content Editor
     **
     **  Purpose/Description: 
     **      Automatically adds the custom CSS (21CC, RMITOnline, RMITStudios, RMIT Root) to the
     **      Canvas rich content editor iframe when editing the page to allow styling of
     **      custom components
     **
     **  License: (MIT License? Apache License 2.0? GNU Affero General Public License v3.0?)
     **      TBC (Refer to the license.md)
     **  
     **  Author(s):
     **      Edwin Ang Ding Hou, 21CC Project, RMIT Univeristy
     **  
     **  Contributor(s):
     **
     **
     */

    $(document).ready(function() {

        var counter = 0;
        // run intervals to check if the iframe exits
        var checkEditorIframe = setInterval(function() {
            var pageIframe = $('#wiki_page_body_ifr');
            var syllabusIframe = $('#course_syllabus_body_ifr');
            var quizIframe = $('#quiz_description_ifr');
            // discussion has id with various numbering
            var discussionIframe;
            for (var i = 0; i < 100; i++) {
                if ($('#discussion-topic-message' + i + '_ifr').length) {
                    discussionIframe = $('#discussion-topic-message' + i + '_ifr');
                    break;
                } else {
                    discussionIframe = $('#discussion-topic-message9_ifr');
                }
            }
            var assignmentIframe = $('#assignment_description_ifr');

            // if iframe exist, clear the interval and run the function to get the CSS link
            if (pageIframe.length || syllabusIframe.length || quizIframe.length || discussionIframe.length || assignmentIframe.length) {
                clearInterval(checkEditorIframe);
                if (pageIframe.length) {
                    getCSSLink(pageIframe);
                } else if (syllabusIframe.length) {
                    getCSSLink(syllabusIframe);
                } else if (quizIframe.length) {
                    getCSSLink(quizIframe);
                } else if (discussionIframe.length) {
                    getCSSLink(discussionIframe);
                } else if (assignmentIframe.length) {
                    getCSSLink(assignmentIframe);
                }
            } else if (counter === 20) {
                clearInterval(checkEditorIframe);
            } else {
                counter += 1;
            }
        }, 500);

        // search through the document and obtain the css link via the file name
        function getCSSLink(currentIframe) {
            // search through all links in head 
            $('html head link').each(function() {
                // only get link with rel="stylesheet"
                if ($(this).attr('rel') === 'stylesheet') {
                    // get the href of the <link> and check for the name
                    var link = $(this).attr('href');
                    var linkSplit = link.split('/');
                    var cssName = linkSplit[linkSplit.length - 1];

                    // get the href of <link> within the iframe
                    var iframeLinks = currentIframe.contents().find("head link[rel='stylesheet']");
                    var iframeLinksArray = [];
                    iframeLinks.each(function() {
                        var specificIframeLink = $(this).attr('href').split('/');
                        iframeLinksArray.push(specificIframeLink[specificIframeLink.length - 1]);
                    });

                    // if RMITRoot CSS exist, inject the CSS into the rich content editor
                    if (cssName === 'RMITRoot.min.css' || cssName === 'RMITRoot.css') {
                        // check if CSS already exist in iframe
                        checkIfCSSExistInIframe(cssName, iframeLinksArray, link, currentIframe);
                    }

                    // if 21CC CSS exist, inject the CSS into the rich content editor
                    if (cssName === '21CC.min.css' || cssName === '21CC.css') {
                        // check if CSS already exist in iframe
                        checkIfCSSExistInIframe(cssName, iframeLinksArray, link, currentIframe);
                    }

                    // if RMITOnline CSS exist, inject the CSS into the rich content editor
                    if (cssName === 'RMITOnline.min.css' || cssName === 'RMITOnline.css') {
                        // check if CSS already exist in iframe
                        checkIfCSSExistInIframe(cssName, iframeLinksArray, link, currentIframe);
                    }

                    // if RMITStudios CSS exist, inject the CSS into the rich content editor
                    if (cssName === 'RMITStudios.min.css' || cssName === 'RMITStudios.css') {
                        // check if CSS already exist in iframe
                        checkIfCSSExistInIframe(cssName, iframeLinksArray, link, currentIframe);
                    }

                    // if GusVE CSS exist, inject the CSS into the rich content editor
                    if (cssName === 'GusVE.min.css' || cssName === 'GusVE.css') {
                        // check if CSS already exist in iframe
                        checkIfCSSExistInIframe(cssName, iframeLinksArray, link, currentIframe);
                    }
                }
            });
        }

        function checkIfCSSExistInIframe(cssName, iframeLinksArray, link, currentIframe) {
            // loop through existing CSS in iframe
            for (var i = 0; i < iframeLinksArray.length; i++) {
                if (cssName === iframeLinksArray[i]) {
                    // do not insert and stop loop
                    break;
                } else if (i === iframeLinksArray.length - 1 && cssName !== iframeLinksArray[i]) {
                    // insert CSS into iframe
                    insertCSS(link, currentIframe);
                }
            }
        }


        // when the iframe loads, insert the <link> with the href for the custom css
        function insertCSS(href, currentIframe) {
            currentIframe
                .contents().find("head")
                .append($('<link rel="stylesheet" type="text/css" href="' + href + '">'));
        }
    });

    function studiosOpenWindow(link) {
        window.open(link, "_blank");
    }

    if (document.querySelector(".st-library-wrapper")) {
        document.querySelector(".st-copyright").setAttribute("data-link", "http://www1.rmit.edu.au/browse;ID=yanikxxb8zzb1");
    }

    if (document.querySelector(".st-library-wrapper")) {
        document.querySelector(".st-google-scholar").setAttribute("data-link", "https://emedia.rmit.edu.au/learninglab/smarthinking");
    }

    // if page is library page or librarian page, and if iframe exists. replace with new version

    if (window.location.pathname.includes("librar")) {
        if (document.querySelector("iframe[src='https://refchatter.net/chat/chat-rmit-library@chat.refchatter.net?css=http://mams.rmit.edu.au/lwbxzlyqni05.css&skin=225&theme=newtheme&title=Ask%20a%20Librarian&identity=librarian']")) {
            console.log("page is version of library page");
            var xhr = new XMLHttpRequest();

            xhr.open("GET", "/api/v1/courses/" + ENV.COURSE_ID);

            xhr.onreadystatechange = function() {
                console.log("ready state: " + xhr.readyState);
                console.log("status: " + xhr.status);
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var json = JSON.parse(xhr.responseText.slice(9, xhr.responseText.length));
                    console.log(json);
                    if (json.time_zone.includes("Australia")) {
                        console.log("course is in australia, update widget");
                        if (document.querySelector("iframe[src='https://refchatter.net/chat/chat-rmit-library@chat.refchatter.net?css=http://mams.rmit.edu.au/lwbxzlyqni05.css&skin=225&theme=newtheme&title=Ask%20a%20Librarian&identity=librarian']")) {
                            var oldChatWidget = document.querySelector("iframe[src='https://refchatter.net/chat/chat-rmit-library@chat.refchatter.net?css=http://mams.rmit.edu.au/lwbxzlyqni05.css&skin=225&theme=newtheme&title=Ask%20a%20Librarian&identity=librarian']");
                            oldChatWidget.removeAttribute("style");
                            oldChatWidget.setAttribute("width", "100%");
                            oldChatWidget.setAttribute("style", "position:absolute; top:0; left:0; width:100%; height:100%;");
                            oldChatWidget.removeAttribute("height");
                            oldChatWidget.setAttribute("src", "https://secure.livechatinc.com/licence/7430141/open_chat.cgi?groups=22");
                            oldChatWidget.outerHTML = "<div style=\"width:100%; height:0; position:relative; padding-bottom:600px;\">" + oldChatWidget.outerHTML + "</div>";
                        }
                        if (document.querySelector(".libraryh3lp")) {
                            var oldFrameHeading = document.querySelectorAll(".libraryh3lp");
                            for (var i = 0; i < oldFrameHeading.length; i++) {
                                oldFrameHeading[i].outerHTML = "";
                            }
                        }
                        if (document.querySelector("div.st-library-widget:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)")) {
                            document.querySelector("div.st-library-widget:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").outerHTML = "<p style=\"color: #000054;\">Have a question for one of our librarians? Use the chat box below. You can also contact us via <a href=\"http://www.rmit.edu.au/library/askalibrarian\" class=\"external\" target=\"_blank\" rel=\"noreferrer noopener\"><span><span>email or phone</span><span class=\"screenreader-only\">&nbsp;(Links to an external site.)</span></span><span class=\"ui-icon ui-icon-extlink ui-icon-inline\" title=\"Links to an external site.\"><span class=\"screenreader-only\">Links to an external site.</span></span></a>.</p>";
                        }
                    } else {
                        console.log("course is in vietnam, do not update widget");
                    }
                }
            }

            xhr.send();
        } else {
            console.log("page is library but iframe doesnt exist");
        }
    } else {
        console.log("library not in page title");
    }




    // SAM LIBRARY PAGE //

    if (document.querySelector(".st-library-wrapper")) {
        var stLibDivs = document.querySelectorAll(".st-library-element");
        for (var stJ = 0; stJ < stLibDivs.length; stJ++) {
            stLibDivs[stJ].addEventListener("click", function() {
                studiosOpenWindow(this.getAttribute("data-link"))
            }, false);
        }

    }



    if (document.querySelector(".st-academic-library-grid")) {
        var stLibAcademicDivs = document.querySelectorAll(".st-academic-grid-tile");
        for (var stAJ = 0; stAJ < stLibAcademicDivs.length; stAJ++) {
            stLibAcademicDivs[stAJ].addEventListener("click", function() {
                studiosOpenWindow(this.getAttribute("data-link"))
            }, false);
        }
    }

    // SAM LIBRARY PAGE END //

    if (window.location.href.includes("rmit.test.instructure") || window.location.href.includes("rmit.beta.instructure")) {
        // Test walkme
        console.log("Test walkme deployed");
        (function() {
            var walkme = document.createElement('script');
            walkme.type = 'text/javascript';
            walkme.async = true;
            walkme.src = 'https://cdn.walkme.com/users/3ef27b45ddca4cb397ec5dc9548bee79/test/walkme_3ef27b45ddca4cb397ec5dc9548bee79_https.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(walkme, s);
            window._walkmeConfig = {
                smartLoad: true
            };
        })();

    } else {

        if (window.location.href.includes("rmit.instructure")) {
            // Prod walkme
            console.log("Prod walkme deployed");
            (function() {
                var walkme = document.createElement('script');
                walkme.type = 'text/javascript';
                walkme.async = true;
                walkme.src = 'https://cdn.walkme.com/users/3ef27b45ddca4cb397ec5dc9548bee79/walkme_3ef27b45ddca4cb397ec5dc9548bee79_https.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(walkme, s);
                window._walkmeConfig = {
                    smartLoad: true
                };
            })();

        }
    }

    if (!$('body').hasClass('full-width')) {
        $('body').addClass('full-width');
    }
    /*
     **  Disable user setting
     **
     **  Purpose/Description:
     **      Prevent users from changing their full name and sortable name.
     **
     **  License: (MIT License? Apache License 2.0? GNU Affero General Public License v3.0?)
     **      TBC (Refer to the license.md)
     **
     **  Author(s):
     **      Edwin Ang Ding Hou, 21CC Project, RMIT Univeristy
     **
     **  Contributor(s):
     **
     **
     */
    if (window.location.pathname === "/profile/settings") {
        $('input#user_name').prop('disabled', 'true');
        $('input#user_sortable_name').prop('disabled', 'true');

        // ensure that the button exist, prevent error
        if ($('.edit_settings_link').length) {
            $('.edit_settings_link').on('click', function() {
                // hide input field
                $('#user_name').hide();
                $('#user_sortable_name').hide();

                // show display name
                $('.sortable_name.display_data').show();
                $('.full_name.display_data').show();
            });
        }
    }

    var w2lCalled;
    $(document).ready(function() {
        // stops function if user is not on dashboard
        if (window.location.pathname !== '/') {
            return;
        }

        // tries the code and catch if there are errors
        try {
            getCourses();
        } catch (e) {
            //console.log(e);
            if (!w2lCalled) {
                welcomeToLearn();
                w2lCalled = true;
            }
        }

        // list the courses
        function getCourses() {
            var url = '/api/v1/courses?per_page=100&include[]=public_description&include[]=term';
            $.ajax({
                'url': url,
            }).done(function(courseData) {
                //console.log(courseData.length)
                //console.log(courseData)
                searchProgramShellCourse(courseData);
            }).fail(function(error) {
                //console.log('failed to get dashboard card order');
                console.log(error);
                // Added W2L init function to ensure it runs second to this
                if (!w2lCalled) {
                    welcomeToLearn();
                    w2lCalled = true;
                }
            });
        }

        var programCardOrder = -1;

        function searchProgramShellCourse(courseData) {
            var haveInsertedCSS = false;
            for (var i = 0; i < courseData.length; i++) {
                //console.log("----------------");
                var courseID = courseData[i].id;
                var courseName = courseData[i].name;
                var publicDescription = courseData[i].public_description;
                //            var sisID = courseData[i].sis_course_id;
                var term = courseData[i].term.name;

                if (term.match(/program/gi)) {
                    programCardOrder += 1;
                    checkIfProgramShellCourseCardExist(courseID, courseName, publicDescription);
                    //console.log(courseID+': Program shell');
                } else {
                    // Added W2L init function to ensure it runs second to this
                    if (!w2lCalled) {
                        welcomeToLearn();
                        w2lCalled = true;
                    }
                    //console.log("No program shell found");
                }
                //            if (sisID === undefined || sisID === null || sisID === ""){
                //                console.log(courseID+': No sis id');
                //            }else if (sisID.match(/_PS/g)){
                //                programCardOrder +=1;
                //                checkIfProgramShellCourseCardExist(courseID, courseName, publicDescription);
                //                console.log(courseID+': Program shell');
                ////                if (!haveInsertedCSS){
                ////                    insertCSS();    
                ////                    haveInsertedCSS = true;
                ////                    console.log('insert css');
                ////                }
                //            }else{
                //                console.log("No program shell found");
                //            }
            }
            if (courseData.length == 0) {
                if (!w2lCalled) {
                    welcomeToLearn();
                    w2lCalled = true;
                }
            }
        }

        function checkIfProgramShellCourseCardExist(courseID, courseName, publicDescription) {
            var cardOrder = getCurrentDashboardCardOrder();
            for (var i = 0; i < cardOrder.length; i++) {
                if (parseFloat(cardOrder[i]) === parseFloat(courseID)) {
                    //console.log("Course Name: "+courseName);
                    //console.log("Course ID: "+courseID);
                    //console.log("Course Description: "+publicDescription);
                    //console.log('Course card exist!');
                    //console.log("Card order: " + i +", Program order: "+ programCardOrder);
                    if (i !== programCardOrder) {
                        if (!w2lCalled) {
                            welcomeToLearn();
                            w2lCalled = true;
                        }
                        // reorder course card (splice)
                        //console.log("Need to reorder");
                        // remove the current ID pos                    
                        cardOrder.splice(i, 1);
                        // set new ID pos
                        cardOrder.splice(programCardOrder, 0, String(courseID));

                        //console.log(cardOrder);
                        sortCards(cardOrder);
                        insertSuperCourseCardID(programCardOrder, courseID);
                        switchNavLocation(courseID);
                        insertProgramIndicator(courseID);
                        // Added W2L init function to ensure it runs second to this

                        //                    insertSuperCourseDescription(courseID, publicDescription);
                        //                    setColourPicker(courseID, 'ENV');
                        watch_nickname_change(courseID);
                    } else {
                        if (!w2lCalled) {
                            welcomeToLearn();
                            w2lCalled = true;
                        }
                        //console.log("Do not need to reorder");
                        insertSuperCourseCardID(programCardOrder, courseID);
                        switchNavLocation(courseID);
                        insertProgramIndicator(courseID);
                        //                    setColourPicker(courseID, 'ENV');
                        watch_nickname_change(courseID);
                        // Added W2L init function to ensure it runs second to this

                    }

                    break;
                } else if (i === (cardOrder.length - 1) && parseFloat(cardOrder[i]) !== parseFloat(courseID)) {
                    programCardOrder -= 1;
                    //console.log(courseID);
                    //console.log('Course card does not exist!');
                    // build course card
                    // Added W2L init function to ensure it runs second to this
                    if (!w2lCalled) {
                        welcomeToLearn();
                        w2lCalled = true;
                    }
                }
            }
        }

        function getCurrentDashboardCardOrder() {
            var order = [];
            var links = document.querySelectorAll('div#DashboardCard_Container > div.ic-DashboardCard__box a.ic-DashboardCard__link');
            if (links.length === 0) {
                return;
            }
            var courseRegex = new RegExp('/courses/([0-9]+)$');
            for (var i = 0; i < links.length; i++) {
                var matches = courseRegex.exec(links[i].href);
                if (matches) {
                    order.push(matches[1]);
                }
            }
            return order;
        }


        function sortCards(cardOrder) {
            var box = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box');
            var cards = box.childNodes;
            if (cards.length < 2) {
                return;
            }
            var order = getCurrentDashboardCardOrder();
            // New cards
            var pos = 0;
            var needsUpdated = false;
            var j;
            var k;
            var id;
            var el;
            // how does the code below works?

            for (k = 0; k < order.length; k++) {
                id = cardOrder[k];
                j = cardOrder.indexOf(id);
                if (j === -1) {
                    el = cards[k];
                    box.insertBefore(el, cards[pos]);
                    order.splice(k, 1);
                    order.splice(pos, 0, id);
                    pos++;
                }
                //console.log("handling new cards");
            }
            // Existing cards
            for (j = 0; j < cardOrder.length; j++) {
                id = cardOrder[j];
                k = order.indexOf(id);
                if (k === -1) {
                    needsUpdated = true;
                    continue;
                }
                if (k === pos) {
                    pos++;
                    continue;
                }
                el = cards[k];

                box.insertBefore(el, cards[pos]);
                order.splice(k, 1);
                order.splice(pos, 0, id);
                pos++;
                //console.log("handling existing cards");
            }
            if (needsUpdated) {
                //console.log("need to update");
                //          saveCardOrder();
            }
            return;
        }

        function switchNavLocation(courseID) {
            // get nav html element
            var outer_html = $('.super_card_id_' + courseID + ' .ic-DashboardCard__action-container').clone().wrap('<p>').parent().html();

            // remove old nav
            $('.super_card_id_' + courseID + ' .ic-DashboardCard__action-container').remove();

            // add new nav in card link
            $('.super_card_id_' + courseID + ' .ic-DashboardCard__link').append(outer_html);

        }

        function insertProgramIndicator(courseID) {
            var indicator_location;
            if ($('.super_card_id_' + courseID + ' .ic-DashboardCard__header_image').length) {
                indicator_location = $('.super_card_id_' + courseID + ' .ic-DashboardCard__header_image');
            } else {
                indicator_location = $('.super_card_id_' + courseID + ' .ic-DashboardCard__header_hero');
            }
            indicator_location.append('<div class="program-shell-indicator"><p>PROGRAM</p></div>');
        }

        function insertSuperCourseCardID(programCardOrder, courseID) {
            var box = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box');
            var cards = box.childNodes;
            //console.log(cards);
            cards[programCardOrder].className += " super_course_card super_card_id_" + courseID;
        }

        function watch_nickname_change(courseID) {
            $('#DashboardCard_Container .ic-DashboardCard.super_card_id_' + courseID + ' .Button--icon-action-rev').off('click');
            $('#DashboardCard_Container .ic-DashboardCard.super_card_id_' + courseID + ' .Button--icon-action-rev').on('click', function() {
                //console.log("Click on colour picker button");
                setTimeout(function() {
                    $('.ColorPicker__Actions #ColorPicker__Apply').off('click');
                    $('.ColorPicker__Actions #ColorPicker__Apply').on('click', function() {
                        //console.log("Apply nickname");
                        $('span.cwXOojd._3tceWTN._1_aWx-B.wUiIG-f._3RYB9rV').parent('span').hide();
                        api_update_course_nickname(courseID, $('#NicknameInput').val());

                        setTimeout(function() {
                            $('span.cwXOojd._3tceWTN._1_aWx-B.wUiIG-f._3RYB9rV').parent('span').remove();
                        }, 100);
                    });
                }, 100);

            });
        }

        function api_update_course_nickname(courseID, nickname_input) {
            $.ajax({
                url: '/api/v1/users/self/course_nicknames/' + courseID,
                type: 'PUT',
                processData: false,
                data: 'nickname=' + nickname_input,
                success: function(data) {
                    $('.ic-DashboardCard.super_card_id_' + courseID + ' .ic-DashboardCard__header-title span').text(nickname_input);
                    //console.log('update nickname');
                },
                error: function(error) {
                    //console.log('error update nickname');
                }
            });
        }

        //    function insertSuperCourseDescription(courseID, publicDescription){
        //        $('#DashboardCard_Container .ic-DashboardCard.super_card_id_'+courseID+' .ic-DashboardCard__header_content').append('<p style="margin:0;">'+publicDescription+'</p>');
        //    }

        //    function setColourPicker(courseID, colourSource) {
        //        console.log("--------------")
        //        
        //        var colourCode;
        //        if (colourSource === 'ENV') {
        //            colourCode = ENV.PREFERENCES.custom_colors['course_' + courseID];
        //        } else {
        //            colourCode = colourSource;
        //        }
        //        var hideColourOverlay = ENV.PREFERENCES.hide_dashcard_color_overlays;
        //        console.log("Hide overlay?: "+hideColourOverlay);
        //        console.log("Colour to be set: "+colourCode);
        //        
        //        if (hideColourOverlay === false) {
        //            console.log("Setting color picker button to: "+colourCode);
        //            console.log($('#DashboardCard_Container .ic-DashboardCard.super_card_id_' + courseID + ' .Button--icon-action-rev'));
        //            setTimeout(function(){
        //                $('#DashboardCard_Container .ic-DashboardCard.super_card_id_' + courseID + ' .Button--icon-action-rev').css('background-color', colourCode);
        //            },100);    
        //        }
        //        
        //        $('#DashboardCard_Container .ic-DashboardCard.super_card_id_'+courseID+' .Button--icon-action-rev').off('click');
        //        $('#DashboardCard_Container .ic-DashboardCard.super_card_id_'+ courseID +' .Button--icon-action-rev').on('click', function() {
        //            console.log("Click on colour picker button");
        //            setTimeout(function(){
        //                $('.ColorPicker__Actions #ColorPicker__Apply').off('click');
        //                $('.ColorPicker__Actions #ColorPicker__Apply').on('click', function() {
        //                    console.log("Click to apply colour");
        //                    setColourPicker(courseID, $('#ColorPickerCustomInput-course_' + courseID).val());
        //                });    
        //            },100);
        //            
        //        });
        //    }

    });

    /* disable public course setting */

    $(document).ready(function() {
        // Ensure that you are within a course
        if (ENV.COURSE_ID || ENV.COURSE_WIZARD || document.location.pathname.indexOf('/courses/') >= 0) {
            if (ENV.current_user_roles.indexOf('root_admin') > 0) {
                // allow root admin to change course public setting
            } else {
                // prevent user below root admin from changing course public setting
                disable_course_public_setting();
            }
        }
    });

    function disable_course_public_setting() {
        $('#course_custom_course_visibility').prop('disabled', 'true');
        $('#course_custom_course_visibility').parent().addClass('disabled');

        $('#course_course_visibility').prop('disabled', 'true');

        $('#course_indexed').prop('disabled', 'true');
        $('#course_indexed').parent().addClass('disabled');

        $('#customize_course_visibility').addClass('disabled');
        $('#Syllabus').prop('disabled', 'true');
    }

    // Welcome to learn data

    // REST VALUES, FOR TESTING
    // var url = '/api/v1/users/self/custom_data/welcometolearn';
    // var parms = {
    //     'ns': 'welcometolearn2',
    //     'data': {
    //         "video_started": false, "card_interaction": false, "video_completed": false
    //     }
    // };
    // $.ajax({
    //     'url': url,
    //     'type': 'PUT',
    //     'data': parms
    // }).done(function (data) {
    //     console.log('Updated user w2l custom data');
    // });


    // by default, assume user is a student in Australia and have not interact with the card
    var W2L = {
        offshore: false, // false = Australia, true = Vietnam, etc
        interaction: {
            card_interaction: false,
            video_started: false,
            video_completed: false,
        },
        user: {
            email: '',
            timezone: '',
            login_id: '',
            role: 'student', // either staff or student (display diff message)
            integration_id: '',
        }
    };

    // Youtube API area -- start --
    var w2l_video_player;
    // initiate youtube video
    window.onYouTubeIframeAPIReady = function() {
        w2l_video_player = new YT.Player('player', {
            videoId: '2QVOLO8AW_0',
            playerVars: {
                modestbranding: '1',
                showinfo: '0',
                rel: '0'
            },
            events: {
                'onStateChange': w2l_onPlayerStateChange
            }
        });
    }

    // update user w2l data based on video status
    function w2l_onPlayerStateChange(event) {
        // video playing (1) or video paused (2)
        if (w2l_video_player.getPlayerState() === 1 || w2l_video_player.getPlayerState() === 2) {
            W2L.interaction.card_interaction = true;
            W2L.interaction.video_started = true;
            W2L.interaction.video_completed = false;
        }

        // video ended (0)
        else if (w2l_video_player.getPlayerState() == 0) {
            W2L.interaction.card_interaction = true;
            W2L.interaction.video_started = true;
            W2L.interaction.video_completed = true;
        }

        // update user w2l custom data
        save_w2l_data(W2L.interaction);
    }

    // stop youtube video
    function w2l_stopVideo() {
        w2l_video_player.stopVideo();
    }

    // pause youtube video
    function w2l_pauseVideo() {
        w2l_video_player.pauseVideo();
    }
    // Youtube API area -- end --

    // update user w2l custom data
    function save_w2l_data(w2l_interaction) {
        var url = '/api/v1/users/self/custom_data/welcometolearn';
        var parms = {
            'ns': 'welcometolearn2',
            'data': w2l_interaction
        };
        $.ajax({
            'url': url,
            'type': 'PUT',
            'data': parms
        }).done(function(data) {
            //        console.log('Updated user w2l custom data');
            //        console.log(data);
        });
    }

    // start w2l
    function welcomeToLearn() {

        // store user data in W2L object
        W2L.user.email = ENV.USER_EMAIL || "default@email";
        W2L.user.timezone = ENV.TIMEZONE || "Australia/timezone"; // Default to on shore student?

        // regex to determine staff from email
        var reg_staff_id = new RegExp(/[ev]\d{2,10}/, 'gi');
        var reg_staff_email = new RegExp(/[a-z]{1,20}[.][a-z]{1,20}?[.]?[a-z]{1,20}[@]/, 'gi');

        // Determine user location and role and init w2l
        // check if dashboard exist
        if (document.querySelector(".ic-DashboardCard__box")) {

            // determine user role, staff or student
            function check_user_role() {
                // check user email
                if (W2L.user.email.match(/rmit.edu/g) && W2L.user.email) {
                    // user's primary email is an RMIT email
                    if (W2L.user.email.match(reg_staff_id) || W2L.user.email.match(reg_staff_email)) {
                        // staff
                        W2L.user.role = 'staff';
                        console.log('User is staff (email)');
                    } else {
                        // student
                        W2L.user.role = 'student';
                        console.log('User is student (email)');
                    }
                    // once we have determine the user's role, check for timezone
                    check_user_timezone();
                } else {
                    // user's primary email is NOT an RMIT email, check their login id instead
                    // use api to get user profile data
                    get_user_profile_data().then(function(user_profile_data) {
                        // store user data in W2L object
                        W2L.user.login_id = user_profile_data.login_id;
                        W2L.user.integration_id = user_profile_data.integration_id;

                        // check user login id
                        if (typeof W2L.user.login_id !== 'undefined' && W2L.user.login_id) {
                            if (W2L.user.login_id.match(reg_staff_id)) {
                                // staff
                                W2L.user.role = 'staff';
                                console.log('User is staff (login_id)');
                            } else {
                                // student
                                W2L.user.role = 'student';
                                console.log('User is student (login_id)');
                            }
                        }
                        // check user integration id if login id is not available
                        else if (typeof W2L.user.integration_id !== 'undefined' && W2L.user.integration_id) {
                            if (W2L.user.integration_id.match(reg_staff_id)) {
                                // staff
                                W2L.user.role = 'staff';
                                console.log('User is staff (integration_id)');
                            } else {
                                // student
                                W2L.user.role = 'student';
                                console.log('User is student (integration_id)');
                            }
                        }
                        // if email, login id and integration id are not available, assume that user is a student
                        else {
                            W2L.user.role = 'student';
                            console.log('User is student (assume)');
                        }

                        // once we have determine the user's role, check for timezone
                        check_user_timezone();
                    }, function(err) {
                        console.log(err); // Error: "It broke"
                        // if api fail, assume that user is a student
                        W2L.user.role = 'student';
                        console.log('User is student (fail)');

                        // once we have determine the user's role, check for timezone
                        check_user_timezone();
                    });
                }
            }

            // determine user location, Australia or offshore
            function check_user_timezone() {
                // check user timezone
                if (typeof W2L.user.timezone !== 'undefined' && W2L.user.timezone) {
                    if (W2L.user.timezone.match(/australia/gi)) {
                        // Australia
                        W2L.offshore = false;
                        console.log('User is in Australia (timezone)');
                    } else {
                        // Offshore
                        W2L.offshore = true;
                        console.log('User is offshore (timezone)');
                    }
                }
                // check user integration id if timezone not available
                else if (typeof W2L.user.integration_id !== 'undefined' && W2L.user.integration_id) {
                    if (W2L.user.integration_id.match(/^srs/gi)) {
                        // Vietnam, VN's integration id starts with srs
                        W2L.offshore = true;
                        console.log('User is offshore (integration_id)');
                    } else {
                        // Assume Australia
                        W2L.offshore = false;
                        console.log('User is in Australia (integration_id)');
                    }
                }
                // if timezone and integration id are not available, assume that user is in Australia
                else {
                    W2L.offshore = false;
                    console.log('User is in Australia (assume)');
                }

                // init w2l based on location
                init_w2l_based_on_location();
            }

            // init w2l based on location
            function init_w2l_based_on_location() {
                if (!W2L.offshore) {
                    welcomeCardInit();
                    console.log('Init w2l injection');
                } else {
                    console.log('Do not inject w2l');
                }
            }

            // init user role check
            check_user_role();
        }

        //--- placed all function within welcometolearn() to prevent them from being exposed
        // get user w2l custom data
        function get_w2l_data() {
            return new Promise(function(resolve, reject) {
                var url = '/api/v1/users/self/custom_data/welcometolearn';
                var parms = {
                    'ns': 'welcometolearn2'
                };
                $.getJSON(url, parms, function(data) {
                    resolve(data);
                }).fail(function(error) {
                    reject(error);
                });
            });
        }

        // get user profile data
        function get_user_profile_data() {
            return new Promise(function(resolve, reject) {
                var url = '/api/v1/users/self/profile';
                $.getJSON(url, function(data) {
                    resolve(data);
                }).fail(function(error) {
                    reject(error);
                });
            });
        }

        // set event handle
        function setCustomEventHandlersForModals() {
            studiosModalNewInit();

            document.querySelector(".studios-modal-close[data-studios-modal-id='0']").addEventListener("click", w2l_pauseVideo, false);
            document.querySelector(".studios-modal[data-studios-modal-id='0']").addEventListener("click", function(e) {
                if (e.target != this) {
                    return;
                }
                w2l_pauseVideo();
            }, false);

            document.querySelector(".w2l-wrapper").addEventListener("click", function() {
                W2L.interaction.card_interaction = true;
                W2L.interaction.video_started = false;
                W2L.interaction.video_completed = false;
                save_w2l_data(W2L.interaction);
            }, false);
        }

        // set w2l card and modal content according to user's role (student/staff)
        function w2l_card_modal_content(role) {
            // w2l card
            var w2l_card = "<div class=\"w2l-wrapper w2l-unseen studios-modal-trigger\">";
            w2l_card += "<div class=\"w2l-image\">";
            w2l_card += "<img alt=\"Image of a smoking ceremony performed by our Aboriginal Elders. A Play icon is on top of the image indicating that this links to a video\" src=\"https://sites.rmit.edu.au/rmitstudios/files/2018/02/pic2-25yruk4.png\" width=262 />";
            w2l_card += "</div>";
            w2l_card += "<div class=\"w2l-blurb\">";
            w2l_card += "<span class=\"w2l-header\">Wominjeka (Welcome) to Learn</span><br />";

            if (role === 'staff') {
                w2l_card += "<div class=\"w2l-subtext\">For the first time in Australia, RMIT students are being welcomed to learn on the lands on which RMIT stands by our Aboriginal Elders.</div>";
            } else {
                w2l_card += "<div class=\"w2l-subtext\">The Aboriginal Elders of RMIT would like to welcome you to their beautiful home and encourage you to reflect on new ideas and respect the laws of the land.</div>";
            }
            w2l_card += "<div class=\"w2l-flags\"><img alt=\"Image of the Indigenous flag and the Torres Straight Islander flag\" src=\"https://www.rmit.edu.au/content/dam/rmit/rmit-images/graphics/australian_aboriginal_flags.png\" width=60/></div>";
            w2l_card += "<div class=\"w2l-artwork\"><img alt=\"a decorative piece of Aboriginal artwork taken from the Ngarara Willim Centre logo\" src=\"https://sites.rmit.edu.au/rmitstudios/files/2018/02/pic3-1php6b8.png\"/></div>";
            w2l_card += "</div></div>";

            // w2l modal
            var w2l_modal = "<div class=\"studios-modal\">";
            w2l_modal += "<div class=\"studios-modal-content\">";
            w2l_modal += "<h3 style=\"margin-top:0;\">Wominjeka (Welcome) to Learn</h3>";
            w2l_modal += "<div class=\"welcome-video-container\">";
            w2l_modal += "<div id=\"player\"></div>";
            w2l_modal += "</div>";
            if (role === 'staff') {
                w2l_modal += "<p>Essentially an e-Welcome to Country, the Aboriginal Elders of RMIT are welcoming our students to learn on the lands of their beautiful home and encouraging them to reflect on new ideas and respect the laws of the land.</p>";
                w2l_modal += "<p>We wish you, as staff, a great year and wish our students well in their studies here at RMIT.</p>";
                w2l_modal += "<i>RMIT University acknowledges the Kulin Nations as the traditional custodians of the land on which the University stands. RMIT University respectfully acknowledges Elders both past and present.</i><br /><br /><i>The below Creds course (Wominjeka, Orientation Course) has been designed for students only. If you are interested in learning more, please contact the Ngarara Willim Centre</i><br /><br />";
            } else {
                w2l_modal += "<p>The Aboriginal Elders of RMIT would like to welcome you to their beautiful home and encourage you to reflect on new ideas and respect the laws of the land.</p>";
                w2l_modal += "<p>Wishing you well, with your studies here at RMIT.</p>";
                w2l_modal += "<i>RMIT University acknowledges the Kulin Nations as the traditional custodians of the land on which the University stands. RMIT University respectfully acknowledges Elders both past and present.</i><br /><br />";
            }
            w2l_modal += "<a href=\"https://www.youtube.com/watch?v=2QVOLO8AW_0\" class=\"welcome-link\">View on YouTube</a>";
            w2l_modal += "<a href=\"https://www.rmit.edu.au/study-with-us/levels-of-study/microcredentials/productdetails/a057f00000ntm2dqav\" class=\"welcome-link\">Indigenous Orientation Wominjeka (Welcome)</a>";
            w2l_modal += "<a href=\"https://www.rmit.edu.au/students/support-and-facilities/student-support/aboriginal-and-torres-strait-islander-students/about-ngarara-willim-centre\" class=\"welcome-link\">About the Ngarara Willim Centre</a>";
            w2l_modal += "</div></div>";

            return w2l_card + w2l_modal;

        }

        // inject w2l card into the dashbaord
        function injectWelcomeCard() {
            console.log('inject for ' + W2L.user.role);
            if (W2L.user.role === 'staff') {
                // show staff message
                $(".ic-DashboardCard__box").prepend(w2l_card_modal_content(W2L.user.role));
            } else {
                // show student message
                $(".ic-DashboardCard__box").prepend(w2l_card_modal_content(W2L.user.role));
            }
            // set modal event handlers
            setCustomEventHandlersForModals();

            // insert yotube api
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        // Init w2l if user have not interacted with w2l
        function welcomeCardInit() {
            // get user's w2l custom data
            get_w2l_data().then(function(custom_data) {
                console.log(custom_data);

                // w2l custom data exist
                if (typeof custom_data.data !== 'undefined' && custom_data.data) {
                    // update w2l data
                    W2L.interaction = custom_data.data;
                    console.log(W2L.interaction);
                    // user have not interact with w2l card
                    if (W2L.interaction.card_interaction === false || W2L.interaction.card_interaction === 'false') {
                        // display w2l card
                        injectWelcomeCard();
                    }
                    // user has interacted with w2l card
                    else {
                        // do not display w2l card
                        console.log('do not display w2l card');
                    }

                    // w2l custom data do not exist
                } else {
                    // display w2l card
                    injectWelcomeCard();

                    // set w2l custom data
                    save_w2l_data(W2L.interaction);
                }

            }, function(err) {
                console.log('Error getting w2l data, show w2l card if failed');
                console.log(err); // Error: "It broke"

                injectWelcomeCard();

                // set w2l custom data
                save_w2l_data(W2L.interaction);
            });
        }
    }






    function openStudiosModal(id) {
        document.querySelector(".studios-modal[data-studios-modal-id='" + id + "']").style.display = "block";
        document.querySelector(".studios-modal[data-studios-modal-id='" + id + "']").setAttribute("aria-hidden", "false");
    }

    function closeStudiosModal(id) {
        document.querySelector(".studios-modal[data-studios-modal-id='" + id + "']").style.display = "none";
        document.querySelector(".studios-modal[data-studios-modal-id='" + id + "']").setAttribute("aria-hidden", "true");
    }

    function studiosModalNewInit() {
        console.log("modal init func");
        var modals = document.querySelectorAll(".studios-modal");
        var triggers = document.querySelectorAll(".studios-modal-trigger");

        for (var stMod = 0; stMod < modals.length; stMod++) {
            modals[stMod].setAttribute("data-studios-modal-id", stMod);
            modals[stMod].setAttribute("aria-hidden", "true");
            modals[stMod].style.display = "none";
            console.log(modals[stMod]);
            var contentDiv = modals[stMod].childNodes[0].innerHTML;
            modals[stMod].childNodes[0].innerHTML = "<a href=\"#\" class=\"studios-modal-close-a\"><div class=\"studios-modal-close\" data-studios-modal-id=\"" + stMod + "\">X</div></a><div style=\"padding:10px 10px 20px 10px; display:block;\">" + contentDiv + "</div>";
        }
        for (stMod = 0; stMod < triggers.length; stMod++) {
            triggers[stMod].setAttribute("data-studios-modal-id", stMod);
        }

        var studioModalClosers = document.querySelectorAll(".studios-modal-close");

        for (stMod = 0; stMod < triggers.length; stMod++) {
            triggers[stMod].addEventListener("click", function(e) {
                e.preventDefault();
                openStudiosModal(this.getAttribute("data-studios-modal-id"));
            }, false);
        }

        for (stMod = 0; stMod < modals.length; stMod++) {
            modals[stMod].addEventListener("click", function(e) {
                if (e.target !== this) {
                    return;
                }
                closeStudiosModal(this.getAttribute("data-studios-modal-id"));
            }, false);
        }

        for (stMod = 0; stMod < studioModalClosers.length; stMod++) {
            studioModalClosers[stMod].addEventListener("click", function() {

                closeStudiosModal(this.getAttribute("data-studios-modal-id"));
            }, false);
        }


    }


    document.addEventListener("DOMContentLoaded", function() {
        if (document.querySelector(".studios-modal-trigger")) {
            console.log("modal init");
            studiosModalNewInit();

        }
    }, false);
    console.log("modal script end");

    /*
     **  Restrict access to people page for students
     **
     **  Purpose/Description:
     **      To protect student privacy, we want to hide people from students 
     **
     **  License: (MIT License? Apache License 2.0? GNU Affero General Public License v3.0?)
     **      TBC (Refer to the license.md)
     **
     **  Author(s):
     **      Edwin Ang Ding Hou, 21CC Project, RMIT Univeristy
     **
     **  Contributor(s):
     **
     **
     */
    if (window.location.href.match(/courses\/[0-9]{0,}\/users/g) && !window.location.href.match(/courses\/[0-9]{0,}\/users\/[0-9]{0,}/g)) {
        function init_course_people_privacy_for_student() {
            // get course data
            function get_course_data(course_id) {
                return new Promise(function(resolve, reject) {
                    $.ajax({
                            url: "/api/v1/courses/" + course_id
                        })
                        .fail(function(error) {
                            reject(error);
                        })
                        .done(function(data) {
                            resolve(data);
                        });
                });
            }

            // hide people page and show alert
            function hide_page_and_alert() {
                var alert_message = '<p style="font-size: 16px;">This page is deliberately blank to protect student privacy. Groups are still available in the tabs above.</p>';
                // remove people page and show alert message
                $('#tab-0').html('<div class="ic-flash-info" style="width:100%;margin-top: 10px;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div>' + alert_message + '</div>');
            }

            // check if the account of the course has opted out
            function check_if_account_opt_out(course_id, account_opt_out, account_id) {
                account_loop: for (var i = 0; i < account_opt_out.length; i++) {

                    var area_name = account_opt_out[i].area;
                    var accounts = account_opt_out[i].accounts;

                    for (var k = 0; k < accounts.length; k++) {
                        if (account_id == accounts[k].id) {
                            console.log(area_name + ' has opted out from hiding everyone tab in people page.');
                            break account_loop;
                        } else if (k == accounts.length - 1 && i == account_opt_out.length - 1 && account_id != accounts[k].id) {
                            console.log('Everyone tab in people page have been hidden');
                            hide_page_and_alert();
                        }
                    }
                }
            }

            // check user's enrollment
            function check_user_enrollment(course_id, account_opt_out) {
                get_course_data(course_id).then(function(data) {

                    var enrollments = data.enrollments;
                    var account_id = data.account_id;


                    if (enrollments.length > 0) {
                        var nonStudent = 0;
                        for (var i = 0; i < enrollments.length; i++) {
                            if (!enrollments[i].type.match(/student/gi)) {
                                nonStudent++;
                            }
                            if (i == enrollments.length - 1 && nonStudent > 0) {
                                console.log(nonStudent);
                                console.log('User is not a student');
                            } else if (i == enrollments.length - 1 && nonStudent == 0) {
                                console.log(nonStudent);
                                console.log('User is a student');
                                check_if_account_opt_out(course_id, account_opt_out, account_id);
                            }
                        }
                    } else {
                        // no enrolment (admin)
                        console.log('User has no enrollment, therefore user is not a student in the course.');
                    }

                });
            }

            // PROD & TEST ENV
            var prod_account_opt_out = [{
                area: "RMIT Vietnam",
                accounts: [{
                        "id": 5,
                        "name": "RMIT University Vietnam Campus",
                        "parent_account_id": 1
                    },
                    {
                        "id": 605,
                        "name": "School of Business & Management",
                        "parent_account_id": 5
                    },
                    {
                        "id": 606,
                        "name": "School of Communication & Design",
                        "parent_account_id": 5
                    },
                    {
                        "id": 607,
                        "name": "School of Science & Technology",
                        "parent_account_id": 5
                    },
                    {
                        "id": 608,
                        "name": "School of Languages & English",
                        "parent_account_id": 5
                    },
                    {
                        "id": 609,
                        "name": "Vietnam College Office",
                        "parent_account_id": 5
                    },
                    {
                        "id": 610,
                        "name": "eLearning Development Group",
                        "parent_account_id": 5
                    },
                    {
                        "id": 611,
                        "name": "Department of Economics and Finance",
                        "parent_account_id": 605
                    },
                    {
                        "id": 612,
                        "name": "Department of Management",
                        "parent_account_id": 605
                    },
                    {
                        "id": 613,
                        "name": "RMIT Asia Graduate Centre",
                        "parent_account_id": 605
                    },
                    {
                        "id": 614,
                        "name": "SoBM School Office",
                        "parent_account_id": 605
                    },
                    {
                        "id": 615,
                        "name": "Department of Communications",
                        "parent_account_id": 606
                    },
                    {
                        "id": 616,
                        "name": "Department of Design",
                        "parent_account_id": 606
                    },
                    {
                        "id": 617,
                        "name": "SoCD School Office",
                        "parent_account_id": 606
                    },
                    {
                        "id": 618,
                        "name": "Department of Engineering",
                        "parent_account_id": 607
                    },
                    {
                        "id": 619,
                        "name": "Department of Information Technology",
                        "parent_account_id": 607
                    },
                    {
                        "id": 620,
                        "name": "SoST School Office",
                        "parent_account_id": 607
                    },
                    {
                        "id": 621,
                        "name": "English for University",
                        "parent_account_id": 608
                    },
                    {
                        "id": 622,
                        "name": "New Initiatives",
                        "parent_account_id": 608
                    },
                    {
                        "id": 623,
                        "name": "Department of Languages",
                        "parent_account_id": 608
                    },
                    {
                        "id": 624,
                        "name": "Careers and Employability Services",
                        "parent_account_id": 609
                    },
                    {
                        "id": 625,
                        "name": "Student Academic Success",
                        "parent_account_id": 609
                    },
                    {
                        "id": 626,
                        "name": "Learning and Teaching",
                        "parent_account_id": 609
                    },
                    {
                        "id": 847,
                        "name": "Course Development Base-Builds",
                        "parent_account_id": 610
                    },
                    {
                        "id": 636,
                        "name": "Architecture Discipline",
                        "parent_account_id": 616
                    },
                    {
                        "id": 637,
                        "name": "Digital Media Discipline",
                        "parent_account_id": 616
                    },
                    {
                        "id": 638,
                        "name": "Fashion & Textiles Discipline",
                        "parent_account_id": 616
                    }
                ]
            }, {
                area: "RMIT Training",
                accounts: [{
                        "id": 693,
                        "name": "RMIT Training",
                        "parent_account_id": 1
                    },
                    {
                        "id": 694,
                        "name": "Foundation Studies",
                        "parent_account_id": 693
                    },
                    {
                        "id": 695,
                        "name": "REW",
                        "parent_account_id": 693
                    },
                    {
                        "id": 696,
                        "name": "Academic Development",
                        "parent_account_id": 693
                    }
                ]
            }, {
                area: "21CC Project",
                accounts: [{
                        "id": 12,
                        "name": "21st Century Credentials",
                        "parent_account_id": 1
                    },
                    {
                        "id": 674,
                        "name": "CSS/JS Lab",
                        "parent_account_id": 12
                    },
                    {
                        "id": 680,
                        "name": "Sandboxes (for demo)",
                        "parent_account_id": 12
                    },
                    {
                        "id": 681,
                        "name": "Development",
                        "parent_account_id": 12
                    },
                    {
                        "id": 682,
                        "name": "L4 Badges",
                        "parent_account_id": 12
                    },
                    {
                        "id": 683,
                        "name": "Archives",
                        "parent_account_id": 12
                    }
                ]
            }, {
                area: "ITS Test Configuration",
                accounts: [{
                        "id": 13,
                        "name": "ITS Test Configuration",
                        "parent_account_id": 1
                    },
                    {
                        "id": 21,
                        "name": "TEST 21st Century Credentials",
                        "parent_account_id": 13
                    },
                    {
                        "id": 676,
                        "name": "Self Enrol Courses",
                        "parent_account_id": 21
                    }
                ]
            }];

            // SANDBOX ENV
            var sandbox_account_opt_out = [{
                area: "RMIT Vietnam",
                accounts: [{
                        "id": 153,
                        "name": "RMIT University Vietnam Campus",
                        "parent_account_id": 1
                    },
                    {
                        "id": 154,
                        "name": "School of Business & Management",
                        "parent_account_id": 153
                    },
                    {
                        "id": 155,
                        "name": "School of Communication & Design",
                        "parent_account_id": 153
                    },
                    {
                        "id": 156,
                        "name": "School of Science & Technology",
                        "parent_account_id": 153
                    },
                    {
                        "id": 157,
                        "name": "School of Languages & English",
                        "parent_account_id": 153
                    },
                    {
                        "id": 158,
                        "name": "Vietnam College Office",
                        "parent_account_id": 153
                    },
                    {
                        "id": 159,
                        "name": "eLearning Development Group",
                        "parent_account_id": 153
                    },
                    {
                        "id": 160,
                        "name": "Department of Economics and Finance",
                        "parent_account_id": 154
                    },
                    {
                        "id": 161,
                        "name": "Department of Management",
                        "parent_account_id": 154
                    },
                    {
                        "id": 162,
                        "name": "RMIT Asia Graduate Centre",
                        "parent_account_id": 154
                    },
                    {
                        "id": 163,
                        "name": "SoBM School Office",
                        "parent_account_id": 154
                    },
                    {
                        "id": 164,
                        "name": "Department of Communications",
                        "parent_account_id": 155
                    },
                    {
                        "id": 165,
                        "name": "Department of Design",
                        "parent_account_id": 155
                    },
                    {
                        "id": 166,
                        "name": "SoCD School Office",
                        "parent_account_id": 155
                    },
                    {
                        "id": 167,
                        "name": "Department of Engineering",
                        "parent_account_id": 156
                    },
                    {
                        "id": 168,
                        "name": "Department of Information Technology",
                        "parent_account_id": 156
                    },
                    {
                        "id": 169,
                        "name": "SoST School Office",
                        "parent_account_id": 156
                    },
                    {
                        "id": 170,
                        "name": "English for University",
                        "parent_account_id": 157
                    },
                    {
                        "id": 171,
                        "name": "New Initiatives",
                        "parent_account_id": 157
                    },
                    {
                        "id": 173,
                        "name": "Careers and Employability Services",
                        "parent_account_id": 158
                    },
                    {
                        "id": 174,
                        "name": "Student Academic Success",
                        "parent_account_id": 158
                    },
                    {
                        "id": 175,
                        "name": "Learning and Teaching",
                        "parent_account_id": 158
                    }
                ]
            }, {
                area: "RMIT Training",
                accounts: [{
                        "id": 11,
                        "name": "RMIT Training",
                        "parent_account_id": 1
                    },
                    {
                        "id": 13,
                        "name": "Academic Development",
                        "parent_account_id": 11
                    },
                    {
                        "id": 14,
                        "name": "School of English Worldwide",
                        "parent_account_id": 11
                    },
                    {
                        "id": 15,
                        "name": "Foundation Studies",
                        "parent_account_id": 11
                    }
                ]
            }, {
                area: "21CC Project",
                accounts: [{
                    "id": 3,
                    "name": "21st Century Credentials",
                    "parent_account_id": 1
                }]
            }, {
                area: "ITS Test Configuration",
                accounts: [{
                        "id": 4,
                        "name": "ITS Test Configuration",
                        "parent_account_id": 1
                    },
                    {
                        "id": 445,
                        "name": "TEST 21st Century Credentials",
                        "parent_account_id": 4
                    }
                ]
            }];

            // get course id
            function getCourseId() {
                var course_id;
                if (ENV.course) {
                    course_id = ENV.course.id;
                } else {
                    var urlSplit = window.location.pathname.split('/');
                    for (var i = 0; i < urlSplit.length; i++) {
                        if (urlSplit[i] == 'courses') {
                            course_id = urlSplit[i + 1];
                            break;
                        }
                    }
                }
                return course_id;
            }

            // Check Canvas environment
            if (window.location.hostname.match(/sandbox/g)) {
                check_user_enrollment(getCourseId(), sandbox_account_opt_out);
            } else {
                check_user_enrollment(getCourseId(), prod_account_opt_out);
            }
        }

        init_course_people_privacy_for_student();
    }

    // get current and all child (tree) sub-account
    //    var account_id = 123;
    //    var accounts = [];
    //    $.ajax({
    //        url: "/api/v1/accounts/"+account_id
    //    })
    //    .fail(function(error){
    //        reject(error);
    //    })
    //    .done(function(data) {
    //        var parent = {
    //            id: data.id,
    //            name: data.name,
    //            parent_account_id: data.parent_account_id,
    //        };
    //        
    //        accounts.push(parent);
    //        
    //        $.ajax({
    //            url: "/api/v1/accounts/"+account_id+"/sub_accounts?recursive=true&per_page=100"
    //        })
    //        .fail(function(error){
    //            reject(error);
    //        })
    //        .done(function(data) {
    //            for(var i=0;i<data.length;i++){
    //                var child = {
    //                    id: data[i].id,
    //                    name: data[i].name,
    //                    parent_account_id: data[i].parent_account_id,
    //                };
    //                accounts.push(child);
    //            }
    //            console.log(accounts);
    //        });
    //    });
    /*
     **  Privacy Reminder
     **
     **  Purpose/Description:
     **      Remind students to be becareful when sharing information
     **
     **  License: (MIT License? Apache License 2.0? GNU Affero General Public License v3.0?)
     **      TBC (Refer to the license.md)
     **
     **  Author(s):
     **      Edwin Ang Ding Hou, 21CC Project, RMIT Univeristy
     **
     **  Contributor(s):
     **
     **
     */
    function insert_reminder(container_el, message) {
        var custom_message;

        var disclaimer_message = '<p style="font-size: 16px;">Please be aware that any information written in a profile can be viewed by other Canvas  users who are in the same courses. Please be mindful when creating your own profile and avoid adding private information you wouldn’t be happy sharing beyond family and close friends.</p>';

        $(container_el + ' .rmit-privacy-reminder').remove();

        $(container_el).prepend('<div class="ic-flash-info rmit-privacy-reminder" style="width:100%; margin-bottom: 20px;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div>' + disclaimer_message + '</div>');
        console.log('Remind user on privacy.');
    }



    // course -> people -> user
    // .match(/courses\/[0-9]{1,}\/users\/[0-9]{1,}/g)
    // /courses/:course_id/users/:user_id

    // group -> people
    // .match(/groups\/[0-9]{1,}\/users\/[0-9]{1,}/g)
    // /groups/:course_id/users/:user_id

    // global nav -> profile
    // .match(/\/profile$/g)
    // /profile

    // global nav -> profile -> edit -> save
    // .match(/\/about\/[0-9]{1,}$/g)
    // /about/:user_id

    // global nav -> profile -> settings
    // .match(/\/profile\/settings$/g)
    // /profile/settings


    if (window.location.pathname.match(/courses\/[0-9]{1,}\/users\/[0-9]{1,}/g) || window.location.pathname.match(/groups\/[0-9]{1,}\/users\/[0-9]{1,}/g) || window.location.pathname.match(/\/profile$/g) || window.location.pathname.match(/\/profile\/settings$/g) || window.location.pathname.match(/\/about\/[0-9]{1,}$/g)) {
        insert_reminder('#content', 'personal');
        //console.log('add disclaimer text');
    }
    if (document.querySelector("a[href=\"http://www1.rmit.edu.au/policies/assessment-policy\"]")) {
        document.querySelector("a[href=\"http://www1.rmit.edu.au/policies/assessment-policy\"]").setAttribute('href', 'https://www.rmit.edu.au/about/governance-and-management/governance/policies/assessment-policy');

    }

    if (window.location.pathname.search("assignments") && typeof ENV !== 'undefined' && ENV.ASSIGNMENT_ID) {
        // Check if assignment is submitted if so create button which makes API call
        var attempts = 0;
        var timePassed = 0;
        var timer;

        function ar_animation_timer() {
            if (timer) {
                clearInterval(timer);
            }
            timePassed = 0;
            timer = setInterval(function() {
                timePassed++;
                if (timePassed == 1) {
                    if (document.querySelector(".studios-reciept-response").classList.contains("receipt-animation")) {
                        document.querySelector(".studios-reciept-response").classList.add("receipt-animation");
                    } else {
                        document.querySelector(".studios-reciept-response").classList.remove("receipt-animation");
                        document.querySelector(".studios-reciept-response").classList.add("receipt-animation");
                    }
                }
                if (timePassed == 10) {
                    if (document.querySelector(".studios-reciept-response").classList.contains("receipt-animation")) {
                        document.querySelector(".studios-reciept-response").classList.remove("receipt-animation");
                    }
                    console.log("time passed");
                    document.querySelector(".studios-reciept-response").outerHTML = "";
                    clearInterval(timer);
                }
            }, 1000);
        }

        function remove_receipt() {
            if (document.querySelector(".studios-reciept-response")) {
                document.querySelector(".studios-reciept-response").outerHTML = "";
            }
        }

        function ar_email_success() {
            remove_receipt();
            var successMarkup = "<div class=\"studios-reciept-response reciept-container-positive\">";
            successMarkup += "<div class=\"studios-reciept-icon reciept-positive\">&#10004;</div>";
            successMarkup += "<div class=\"studios-reciept-text\">Email sent successfully!</div>";
            successMarkup += "</div>";
            document.querySelector(".ic-app-nav-toggle-and-crumbs").innerHTML += successMarkup;
            ar_animation_timer();
            remove_button();
        }

        function ar_email_fail(message) {
            remove_receipt();
            var failMarkup = "<div class=\"studios-reciept-response reciept-container-negative\">";
            failMarkup += "<div class=\"studios-reciept-icon reciept-negative\">X</div>";
            failMarkup += "<div class=\"studios-reciept-text\">" + message + "</div>";
            failMarkup += "</div>";
            document.querySelector(".ic-app-nav-toggle-and-crumbs").innerHTML += failMarkup;
            ar_animation_timer();
        }

        function ar_try_send_email() {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://rmitstudios.com.au/receipts/public/index.php");
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.responseText);
                        if (xhr.responseText.indexOf("essage has been sent") !== -1) {
                            ar_email_success();
                        } else {
                            ar_email_fail("An Error has occured, please try again later");
                        }
                    } else {
                        ar_email_fail("An Error has occured, please try again later");
                    }
                }
            }
            xhr.send("student_id=" + ENV.current_user.id + "&course_id=" + ENV.COURSE_ID + "&assignment_id=" + ENV.ASSIGNMENT_ID);
        }

        function ar_inject_button() {
            console.log("inject button");
            document.querySelector("#sidebar_content > div:nth-child(3)").outerHTML = document.querySelector("#sidebar_content > div:nth-child(3)").outerHTML + "<a role=\"button\" class=\"ar_send_button Button Button--primary submit_assignment_link \" style=\"margin-top:10px;\" href=\"#\">Get Email Receipt</a>";

            document.querySelector(".ar_send_button").addEventListener("click", function(e) {
                if (typeof timer !== 'undefined') {
                    clearInterval(timer);
                }
                e.preventDefault();
                attempts++;
                if (attempts < 3) {
                    ar_try_send_email();
                } else {
                    this.style.backgroundColor = "gray";
                    ar_email_fail("Too many attempts. Try again in a few seconds.");

                    setTimeout(function() {
                        document.querySelector(".ar_send_button").backgroundColor = "#e60028";
                        attempts = 0;
                    }, 5000);
                }
            }, false);
        }

        function remove_button() {
            document.querySelector(".ar_send_button").outerHTML = "";

        }


        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/v1" + window.location.pathname + "/submissions/" + ENV.current_user.id);
        xhr.onreadystatechange = function() {
            console.log("Ready State: " + xhr.readyState);
            console.log("Status: " + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText.slice(9, xhr.responseText.length));
                if (json.workflow_state == "submitted") {
                    ar_inject_button();
                }
            }
        }
        xhr.send();

    }

    /*
     **  21CC Embedded Creds
     **
     **  Purpose/Description:
     **      Allow students to opt-out from credentials that have been embedded in their course.
     **
     **  License: (MIT License? Apache License 2.0? GNU Affero General Public License v3.0?)
     **      TBC (Refer to the license.md)
     **
     **  Author(s):
     **      Edwin Ang Ding Hou, 21CC Project, RMIT Univeristy
     **
     **  Contributor(s):
     **
     **
     */

    /*

    pages
    - dashboard (https://rmit.instructure.com/)
    - all courses (https://rmit.instructure.com/courses)
    - course with embedded mc (https://rmit.instructure.com/courses/[0-9]{1,})
    - mc course (https://rmit.instructure.com/courses/[0-9]{1,})

    custom data model
    var data = {
        "21CC":{
            embedded_creds: [
                {
                    cred_course_name: '',
                    cred_course_id: '',
                    cred_opt_out: false,
                    embedded_in_course: [
                        {
                            course_id: '',
                            course_name: '',
                            opt_out: false,
                        }
                    ]
                },
            ]
        } 
    };
    */

    function init_21CC_embedded_creds() {

        var pathname = window.location.pathname;
        var ns = '21CC_embedded_creds';

        var creds_badge = [{
                cred_name: 'Academic Integrity Awareness',
                cred_course_id: '8845',
                badge_img: 'data:image/png;base64,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',
            },
            {
                cred_name: 'Defining U',
                cred_course_id: '47535',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Promoting U',
                cred_course_id: '47561',
                badge_img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAABQVBMVEUAAAAAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFMAAFPmACj////wOii7u9HYACsOAFBXAEO8ADArAEuQADifADUdAE5zAD13d6NlAECCADutADNIAEY6AEjKAC1ERIHu7vQzM3XMzN1tbZ0JCVmqqsbU1OIiImoaGmUQEF6ZmbpVVYxfX5Pe3ulmZpguLXHIyNo/P33p6fCIiK+fn76Li7F/f6kUEl/jACkFBVY2AEm6ADDCwtbQACz7+/x6AD3eACm1tc01NXcqKm/GAC7j4+z09PjZ2eaNADmlpcJOAESGhq1JSYSvr8mTk7ZycqBSUoofHmhOToc6Onp+SGopJWm+QkhaWo9jY5VCQoCfRlplP21PNm2vUF7kOi7Q0N9qapqjUmbYPDbuOSjHP0CxbZitAAAAEHRSTlMA8BDQMODAsJBwUEAggKBgr0A9MgAAGyRJREFUeNrs2u1O4lAQxvG5hCcHPvNtKxQtikBLKWnSkAARQhAUXXV131/u/wL2FEQUyFo2m+wMzi+hmTmh3/7JSQj0j0GJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxBiUTcQYlE3EGJRNxB7ew2l8t9+fXwKcb/omHtJRvW3I9PeDI6fPI1CWttWM3Hg2ssxMXHg8rR4dLlxeGaMV6nYe0Z933qR27poYJHB/6JsU58/75WNGYQAej7vhnYwykW7o1jt8j3Y9f3x3ZMfN87Nqd3nlsxVs/1ropmgtdpWHumnVtz62LJM5YHyz210zekzMiOARZaw0baHuaqdiwDGJk6ANdY6eANErxOw9oz7dy6h3gzLEztdIaUqTl27mFuGG0JK5/HKizr+BCv07D2TDu34eOWsC6MVYFlqiM7Rkj1TX9LWI3Cy7BOzvA6DWvPbAnrh7sZ1jdjuYuw7uzYQCoaYktY4fXLsI66eJ2GtU9ubm7quU0fN8Mq2KmIRVjtjjGdNqxha1tY1iqsrDSsfZLb7nYzrLwxzsFjWOliagD6xtewVPawfrprYbljY/J9LMP6YOwKoODEGpbKGpZ18yysRpI0hmHpCHgKa34XVoB8CA1L7RBW/VlYH6rjonHKV8/CQmLPL1HpnGtY6m/D8oD53dd1V2EV7H6MqhNrWGqXsGZrYSGxw3gVVt+uZ+iOoGGpHcL6gvWwSnYIVmFhaPfzzp2Gpbb6bOU2PWyE5c8rWYUV2fW0U9GwVOZf3q2bjbCOjHW1CqtvrC40LLVDWA9YD2sxVVdhYZjuGpbaIawv3mZYlfWwWsYMKhqWyh7Wz0/YDAuOnaJnYZ0bM4GGpTKH9WXV1cb/sWarsFzH3GlY6g/aqdvco183WIrCsrHKYQGAO7GjMwnD0CRh6AKjgX1chWFgzPzEC8PEjqdh6MNq2S9a9gVko2HtpUVYP28/xnhyUnp0idTsslZacoH6CYDe6qT9NPZhVZ9WZKNh7aX3379/f//Rw/+jYakFDUvJQNxBiUTcQf0jF1EMoNaKrwuLFaVWVB97ANrjXivlz+yjeQLg4LhciuNWq3bdmjuPfAD9JrLRsN6QpjkCEOTjkqkCrhmhYMKDIAJQCK67ZjpthLPEmR47YxwNys0gisuDUvPrtHE6TUZhUEE8TJCNhvWGeIuwLlFyAs+G5dtPHYWvAIoRzg1Q91E4BaoDXDSAyxp6Z+j1EHXR95E/xsVZBdloWG/IKqxGOYmXYXmdOvodLw3Lmod15+C+U4uBNCzLhmX1O1fOO2SkYb0hz8LygtYyLHSnaOVhwxoOu0DBicZnF8CHwD5fhIWoU0ZWGtYb8iwsvDNXy7Cqjht8SMOazbw0rFbSgOXWBtHLsFxzj6w0rDekYnz76LxLw0J02HkMqzJoDipYXIVuehW2nSsgBqLielg+stKw3pJJ0T8on7luqwEgsZkcmBMA4WCENKxe786kYaE5nJXyvX7jGNWgr2Gp11QmxhTruAnSkOrBNbrBEIAf3AM4CKxDfCsCs9Nxe9Ix+bYbBBMAFyOkXPtGVhqW2oWGpXakYSkZiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7KJGIOyiRiDsokYg7qN/swQENAAAAgjAj2D+tNWDzVwpdTyl0PaXQ9ZRC11MKXU8pdD2l0PWUQtdTCl1PKXQ9pdD1lELXUwpdTyl0PaXQ9ZRC11MKXU8pdD2l0PWUQtdTCl1PKXQ9pdD1lELXUwpdTyl0Y9dcdlsHoSjqT9g6YsyMh2RZ2MIT//+PXUO4QBAlVK1S3HqNEjj7yIqXCCFGH5xy2LHghxB08vUOZMXTmCWHwGWYRgd9cCrgeBeLOEHg28QiiwxLt1iDiEUr3gTPVPouscomdIs1jFhvWrNusWr8HrEWIehEC8ch6UQavIFSrIWf4CsYIWxNLCuEwWWYRgfd0AmDR8n3LVlBrG+F1cRiuBLT6KCb/MPnb7sTt1g1fq1YKvyuIsesAOwsTi581kR65gs8qcpwN8EN4F4z13BHoB4VlOChk1bPTfdKo/3sY5lrc8hy93SLVWEQsUAOgDwzjI6Ty0qR1QBIVcqSRxtgl6GG+Zp6tC4W2aJp7BpIY3QoolusDoYUixkdJzdJGXIDYpWKUww7RQ446tG6WFRtmi4uGyN5i9XFIGLFr0IP4/HG7lSwI1bpzBHKWOCoRxVj0odP9ppYmhIbPEZSxi1WF4OI5cWYARhLRFo6zdgBLJIchwDESg65hCrPyg9JAc35HAX6MJpbEDuFl6nRmp/ZPt5whWUPJQo5t1gVxhBLJSEYeZiAY02ba0Bpf7dTlXQTgiilD1/RihYWxHepqQCC6RoOk+3WjSYHnrjFegfoJh6QbiulA1KWrxVL1McR9jpLrBJw2HhuHwxlrehLsUJExvEtuyCIW6wfAt3UtkDhHlkDD0/K5O9D1YyU0FlT1oq+EmvNx1NyQ0DeYnUxjlgrPCwXYi02NOpRGKq2SoJOWCv6SiyBcnymExPrb7G6GEUsyeEo7279hoWJJStSeUEr+kosU4yX9fMtVhdjiMV4fUVoi1Up+rpYCNTFulesfkb4VZjI71Hj+6wtViv6ObHKTmW6fZ1XYhoddNIhVmMH3harFf2UWCm5I1DdvPNCJC8ax5WYRgeddInVPm6oJXqPG8JEj1giv9D6cYN6Po3fyKFwJabRQSddYoGVp5wh0harFS0e0ekQCzauP/GAtOQx/P8xC3JoXIppdNBJl1jhfxl5CEAc6X+ZtljWtKJhPdG7UDGtnhsV4zw+UbNpqosl6IFmTF/vseQ/KFb9n+SmWJ5GNKxAae3ziLxRMW4sFQAlBxUcuBbT6KCTPrHqz750iFWNBtTnxKo8NoOSJ7Ou95PwL4r1/LTeAkdDLEueajSibBJrrYhVjPstWmCPRSXbP/btWDVCIADC8DzCIFvbaQSROzGN7/9iIfGiBCRn58wyXyXqYvODuuwuzW6Z6QbqeNHlsE7WF/8T1iuB86GHz3F5Pfwxnod1nD8GDOu033RiXn8ulqdfVlWF5ek73J71gTrW7WNbVlEfqGONHvvBsP1e1gfqWKNlaLuJ7Nptbsxog/NFCesWXfOH47f5GwnrFs/mV60vwoR1i7VvdmVilaCOVZrbUpq+jG2lWSWs2CSs8AB1DEtQx7AEdQxLUMewBHUMS1DHsAR1DEtQx7AEdQxLUMewBHUMS1DHsAR1DEtQx7AEdQxLUMewBHUMS1DHsAR1DEtQx7AEdQxLUMewBHUMS1DHsAR1DEtQx7AEdQxLUMewBHUMS1DHsAR1DEtQx7AEdQxLUMewBHUMS1DHsAR1DEtQx7AEdQxLUPfFbh2lJgwFQBSdJdz3kaTRSm1x/2usQsBPIwjOyJw1XJihIskdFUnuqEhyR0WSOyqS3FGR5I6KJHdUJLmjIskdFUnuqEhyR0WSOyqS3FGR5I6KJHdUJLmjIskdFUnuqEhyR0WSOyqS3FGR5I6KJHdUJLmjIskdFUnuqEhyR0WSOyqS3FGR5I6KJHdUJLmjIskdFUnuqEhyR0WSOyqS3FGR5I6KJHfUM+bjmM4YkDvqCes0rk68n9xR+y3TuLnwfnJH7XYao2E1rFebD+OqU9iwXmv+GpsDBuSO2mWdxuYHB3JH7bGMzfSHBbmjdjiPzWXFg9xRD83HsfmdMSF31CPfXrf9pmF9gPttX/Ahd//s3EuS4jAQBFCOUFro41/YGJ9m7n+gabmZsYFCqA2SSh35FlyADEU5XTJB2Da2X0iQk3QEQa26clLGdg/Bqpw5yxvbPQRLhn6eLB3QOHUlYlVmg2CJYA9O3heRY7uHYEkwqFVDP7SN7bLGqy8IlgDtwZ2EbWzvSZ6TdPTLmS0fFG+/zNAJG9s9BKusLR+eoXjNInZs9xCswtZcHZjAZ62+aXlju4dgldVotdNSrFHy2O4hWCVtudLfvxRpG8tEjldfEKySrP7/WBdfONzsIMvNFYJVjt091rn4wqHRku5MPIFglTPsR6spunCwWtgOMgvBKqa9qQsusYXDIG4HmYVgFWLau45BRxUOpoax3UOwyjDuvrvqXhcOQneQWQhWEcY91FD2ZeEg7+pgAIJVQqMf682XhYPAq4MBCFYBjWbmpNeFwyR0B5mFYOVnuVz9y82ZWDKvDgYgWNlZtjYPFw51je0egpXb8DQgWnnc+CR7B5mFYGX29BNWgcJB7NXBAAQrI6YW3bNPPsYn9+pgAIKVk3GB7bynhYM5y95BZiFYGe1rUY5ju08j9+pgAIKVz74WZfGFw1jd2O4hWNnsa1EeXzicpe8gsxCsXGzEWgJbOIxyrw4GIFhZMLUogy8cjKttbPcQrDymqN6cLxyMHWp46XwLwcoi8sv+vVrVNk1xEKwMTBf7YOdqWbZ6CcFKja1FeVvh8BucpKPK9WwtypvVqr5J/QGClRZTiwapVY2z+h0EKymmFg3rkqxczcNwobwQrJS4WjRs3AqHD+nHrsQLIQQrIaYWDft44TBPi7rSlBWClRBfi4YtHyscmvGs9igrBCsZvhYN+1ThYOZ2UbcWygrBSmZfi8ab3z1e7o6qUlcREaxUjDvyl75XOLBHldeNPeWFYCXB1KKxusPLovxRpZZppvwQrDQafexjQwcLB1FH1QrBSoCpReP1atVTNGlH1QrBSoCpRaP9uHAwttWyjqoVgpWAfes2/KS8jmI0g1OP3CThZeNJOqpLM/55J1fxhQN/VOm/7N3NbtswDAdwPQJ1sB1/wZGV5whaDN1hh6Hv/zTDtCVqGsqxRdcmG/5OQ08DxrHyXx9sqw5YMNyBHHEFTYjPZwQO6VbF6Aa+4Q6E+LyCriDTdODAv1UFWlgrwD72zyPkmQwcRLSqQAuLDv/Yh1zpwKGsWgmtKtDCosBaFfn52WTgMBYyWlWghUWQyCXP9q9XyJQMHD7XVdHwbFWBFlamskpuobThTz8hGx44+NtW1XO/fWi4A37iChrbQnm3wQvkKtHAofzYqgTc4zHcAS+pj/2hg4tz+NFvyObQwOEopFUFWlgLzP3Y/xe9/4BMycChakW0qkALa6YlueQbNXCobcB5af6IFtYcC3PJjh44fIM3HAx3sLdu8RZKQQ0cmv+Bg2SGO9iVP2Zsobi1AgfJDHewmy53C4UeOHyDNxwMd7CT2tkgJ5e05MBB4PvbN7Swkk42WpZLrhY4HEAwwx3swy9vVdFvDRy0sBJ8VqsKVgkcJM4M+EALK6mg7Pb+1MDBcAe7IL2BtlrgUIBchjvYSUV5pOWdukYqbcD2GN8jWlgJtDfQNHDQwkohPbp+CRx+QaZvEDgY7mAfpDfQNHDQwkrzlEfXOxu8Qyb5gYPhDnZTUDbsftLefJQfOBjuYCcaOFBoYSVp4EChhZWkgQOFFlba3oFDLztwMNzBXjRwINDCSts9cCjwwME769q+8sxvghnuYC/14AinX74scOjs1cH1g+fa0Qx3sL14iZCwTqIHDhUaOPT2s5M79p7d/WjDHWzu8yXCM2QZviZw6G3CyTX9yCedMNzBlvD7zu+Qgx44HLDAwdtpBZMFmOEONhNaFaaFLD++JnCoCjuH23UBpoUV9YVNKCDDeoFDefdz3/fuYKfFBf4eCzAtrKsWu+/8RlknvawWOOA6P/Stsxhsgb/pAkwL6wq/72yDN8iwWuDQwKTSV33rCjtH4ZoKtqCFddFhTzMQ10mvKwcO0/zYN+5kH2pgA1pYFyX+ZGzLIXCoYYHa98fpBVgNX08L68qh/51fCO97rBY49LBYWIAl6svD19PCukjdXjgzDBxmuyzA7I0Ovp4W1kXqMMEr5X2P34RfpEEMHIjCAqzY7hi9FlaE3V4gPSi6euBA533VwRa0sCL0MMEqgUMLmWLgII/hDraRvL3wg/K+xyv1RkQl9kqF4Q42gh8mkBg48GC4g43gtxfWCRzeIFMMHMQx3MFGvmvgsA8trCumgYO3wf7nq5bRwoqeI3DYiBZWhAcO4/G0b+DQCg0cDHewnc+BQze04ScaOCymhRXdBg6hVdGPkfpLaR7a3neQoRMaOBjuYDPx9gI67XlhWWAjUwp3rDwsIjZwMNzBhnr7V3Eiz6WP050Qp7YfF1TpUWbgYLiDDdUWtWwBjrQqjDsOHh4TGzgY7mBLBTqYftGUt6FFWhWheUkNHAx3sKUGGUy/YMrbS/sDa3iHQ2GnuGbwJSRIDRwMd7Cl6rZVQTDzDbS313N6EF3n+wed7OT6sZ74S51AFsMdbKksYqv6YJj+p021qtPn6U6+OrqlzUtq4GC4g03Vp9iqouk30PBW5YYaUJ3vm4fNq6ohOkicPW64Aw4SY+WTq6pmLGFaXfUPmteh6UPzii8LimK4Aw7wY8vj65n22EP5sHkVf5uXyMDBcAcc3B9brofW3jv/yrliWvUPbjBLnD1uuAMObo8tl2ODFULRvudvwJR+aByLu/Gr0MKaKQYO9eDQVvXWAQB1A6Ye8eYlMHAw3AEL/48t463qR/sCF+T1UGheR2cRIInhDlioLQJpJOttwHRj316rWOBnoeEOeDjZJPhg7Q2Y/81L4MkZwx3w0NirGM5jX2vrn/gMzcs1sj4KtbBmGm10Defbuz1EqRswa9PCmqssPraqAN1DFHvic11aWLP5f1HV0EHU3e8hCt2AWZsW1nz12Hu4ge0hij3xuS4tLJojtodYCNyAWZsWFg1yaFnqic91aWHRIIGD1BOf69LCItHAIUULiwQNHISe+FyXFhaJBg4pWlg0GjgkaGHRaOCQoIVFMztwCEM2i2fa5zHcAW/ljMAhzAMWeU8+mxYWmZsMHOI8YJlvxuTSwiKaDhw+ji5/tgW94Q6Yq9OBw01RPdvvQsMdcIcFDuP3uMKVTwuLDL8lbe+chD5Sm0cLiwwPHJz9qGiqUu5UnBxaWGT4cKfj5xeynu7IsuEO2MMCh5fYqiAQPBUnhxYWGTrcCRvtVD9X4GC4A/aQwAGZSCH1kdo8Wlh02HAnZLST5DG8y2lh0U0GDm9wIXcqTg4tLDp0mvT9LOlnO7JsuPvD3r2sJhAFQQDtGBXzpF0YhgRxkvFP8v//FDWXeWAzBOnFrVSdtcvi2tTch9cvKByCt6TJCgernQO4LhyCt6RhX8W5hYKV4I+FA9mWZaudA5gpHL6HHx0+mXY4WO0cwXzhUK7DxbxA7TYKVor5wqEsVQpWXRzBTOGwO2Lf134bBSvDXOFAu4nUaucQmrBwCJ/VdA5WO4ewjwuHiWPL8Sd4pmAliQsHyqXqQsHKEe+J2VMuVRcKVpK4cKCa1icUrBzhnpjhGyIjq51jCAuHA/GlkVY7BxHtiSkjPdnYfqZgZYkLhyPvpZFWOwcRHMIZRnpCVjtHERUOX4AvWKZQsLLEh3DemD47jylYWVQ4TChYecJbPw5M29xHFKw0KhzGFKxEceHA+lXHaucwVDgMFKxEceFAda6+p2DlmS0cOmdjtXMcKhx6ClYeFQ4jClYiFQ4DBStVq8KhULBSdSocCgUrkwqHnoKV60OFwy8FK5MKh56ClSm8ZpTu5YALgGBtHIkKh2Jj1Xu8cxxB4cD2csDZ3aMBWKwdRlg4fLAVDuuFYXhwGLvJJvfy0DhZ4fBgMJb3DmJUOAwPjVOd1blfGpAFygz/Wzgc+6WKLlgblL9BsBm+FA5tsx3hKbIwpvapZ4wZvtmGdhTn7NfPhujFAbTba03L8UHnxUAtV169blsMD42TVKMrqKl9avHq1RuP7M2e5BG5k1e0qR1thn8fliqO55hOMKd2sBn+rSFbqtxhp3awGb7riJaqE+CpfeoJYIZnsnqyf+KHnTvIQRAIgigKuiBGE7j/aV1IBKLADCbSVf3fJfgJXXPpBoTRaVf7Uh++4bNo+8bKQ+a3tLerQ7WLNXwGJtVOw8fiU+00fCRW1b50o+FP0wodijqflrrROhS1n4fZEJh3/erO5/DvWtNqp+GrUe3m8zAH1tVOw5ej2hPMw+TJzbv8T0sd6B+Kej/xoErmUYaGhleSqNpp+C1Ue6Z5mCrxeRcNH1PGahebh0mymHdxWhqO5aGo5xMPSpQfZWho+LCSVzsNP6LaPzEPC8dw3kXDB0C1Mw8bMe9aw2lpFGkORXniYR+PMqyj4SOg2pmHTZh37WAedgDzrgI0fCWqvQZPPBTjUYYKnJYW41C0HA1fimqvRMMXoNqPYR5WgHnXIczDNjHvOh8NT7XP8MTDOh5liILTUg5F32j4b6j2aGh4qn2OedgC866AmIcx75rQ8C9Ue2g88cCjDHPMw4aBeVdwNPyznXtLiS2KoSjKqcctvb7631tBVBQttYTgSvYYrZgfWVHtbzgtdSiab+V5mHnXJ8zDzLvSLdrwqv0cLx48ZQi3XsOr9rM0vGrvYKXTUoei3zMPM++Kt8Y8zLzrZzS8am9g+osHTxkuoOFVeweDG161X85pqUPReDPnYeZdAQbOw1R7hGkNr9pTzHrx4ClDkDkNr9qzTJmHmXfFGXFa6lA0UP95mHlXpu4vHjxliNW54VV7sr4Nr9rDNW141R6v4zzMvKuDfqelDkWb6DUPM+/qo9OLB08ZWmnT8Kq9mR4Nr9r76dDwqr2l9HmYeVdX2aelDkUbCz4tNe9qLfXFg6cM3WU2vGofIHAeptpHSGt41T5F1jzMvGuQnNNSh6KzpLx48JRhnIiGV+0D/X3Dq/aZfjcPM+8iuuFV+2QXz8PMu4g+LXUoOt7PXzx4ykB2w6v2RXzT8KqdBvMw866lfNnwqp3weZh513rOn5Y6FCX6xYOnDKv60PCqnfh5mHnX0t7Nw8y7CG941c7LiwdPGXiSe1rqUJRnV6qdF6ENr9p5Pw8z7+KtrHmYaueThlftvAp68eApA2dPSx2K8iyk4VU7X7pW7ZQ4HM27qLC7N++ixP9NtVPh9p+nDJS4M++ixOGo2qmwOzkUpcTDZt5Fhdu9eRcl7lQ7JW6OnjJQYXdS7ZR42FQ7FQ57h6KUuDLvosTNZt5Fhd1JtVPievOUgQqHvWq/wCOK+WWnug9NAgAAAABJRU5ErkJggg=='
            },
            {
                cred_name: 'Emotional Intelligence',
                cred_course_id: '32824',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Creative Thinking Essentials',
                cred_course_id: '47663',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Cross Cultural Communication',
                cred_course_id: '29153',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Cultural Adaptation',
                cred_course_id: '29154',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Indigenous Orientation Wominjeka',
                cred_course_id: '8973',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Information Literacy',
                cred_course_id: '29029',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Online U',
                cred_course_id: '47558',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Why Gender Matters',
                cred_course_id: '42722',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Application Package',
                cred_course_id: '47628',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Diversity Matters',
                cred_course_id: '29111',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Career Planning with Credentials',
                cred_course_id: '47577',
                badge_img: 'data:image/png;base64,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'
            },
            {
                cred_name: 'Strategic U',
                cred_course_id: '47833',
                badge_img: 'data:image/png;base64,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',
            },
            {
                cred_name: 'Overcoming Bias and Assumptions',
                cred_course_id: '29152',
                badge_img: 'data:image/png;base64,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',
            },

            // test
            {
                cred_name: 'Academic Integrity Awareness (Embedded Demo)',
                cred_course_id: '47499',
                badge_img: 'data:image/png;base64,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'
            },
        ];

        var embedded_data = [];

        // dashboard
        if (pathname.match(/\/$/gi)) {
            console.log('--- Dashboard');
            //        save_embedded_creds_data(embedded_data);
            //        delete_embedded_creds_data();
            get_embedded_creds_data().then(function(data) {
                console.log('Data on 21CC embedded creds available.');
                embedded_data = data;
                console.log(embedded_data);

                // check to make sure check_dashboard_cards() only runs if there are creds that have opted out
                for (var i = 0; i < embedded_data.length; i++) {
                    if (embedded_data[i].cred_opt_out == true || embedded_data[i].cred_opt_out == 'true') {
                        console.log('A credential has been opted out.');
                        check_dashboard_cards();
                        break;
                    } else if (i == embedded_data.length - 1 && (embedded_data[i].cred_opt_out == false || embedded_data[i].cred_opt_out == 'false')) {
                        console.log('No credential has opted out.');
                    }
                }



            }, function(err) {
                console.log('No data on 21CC embedded creds');
                // console.log(JSON.parse(err.responseText).message);
            });
        }

        // course list or course
        else if (pathname.match(/\/courses/gi)) {
            console.log('--- Course');

            // get user custom data on 21CC embedded creds
            get_embedded_creds_data().then(function(data) {
                    console.log('Data on 21CC embedded creds available.');
                    embedded_data = data;
                    console.log(embedded_data);

                    // course list page
                    if (pathname.match(/\/courses\/?$/gi)) {
                        console.log('--- Course list');

                        // remove opted-out course
                        if ($('#my_courses_table').length) {
                            remove_creds_course_from_course_list();
                        }
                    }

                    // course (course with embedded creds or creds course)
                    else if (pathname.match(/\/courses\/[0-9]{1,}/gi)) {
                        console.log('--- Courses Page');

                        // check if current course is an embedded creds, parent course or just a normal course (from custom data)
                        var current_course_id = get_course_id_from_url();
                        get_course_data(current_course_id).then(function(data) {
                            current_course_id = data.id;
                            var current_course_name = data.name;

                            check_course(current_course_id, current_course_name);
                        });

                    }
                },
                // If no custom data on 21CC embedded creds
                function(err) {
                    console.log('No data on 21CC embedded creds');

                    // if course has embedded creds metadata, then this is the embedded creds landing page (embedded creds parent course). Therefore, add the button to go to the creds course and to opt-out
                    if ($('#rmit-creds').length) {
                        var current_course_id = get_course_id_from_url();
                        var information_page_creds_id = $('#rmit-creds').attr('data-creds-id');
                        var information_page_creds_name = $('#rmit-creds').attr('data-creds-name');

                        get_course_data(information_page_creds_id).then(function(data) {
                            console.log('---- User have access to ' + information_page_creds_name);

                            get_course_data(current_course_id).then(function(data) {
                                parent_course_id = data.id;
                                parent_course_name = data.name;

                                create_new_data(information_page_creds_id, information_page_creds_name, parent_course_id, parent_course_name, false);
                                save_embedded_creds_data(embedded_data);
                                handle_creds_landing_page(false);

                            }, function(err) {
                                handle_creds_landing_page(false);
                                console.log(err); // Error: "It broke"
                            });

                        }, function(err) {
                            console.log('User do not have access to this course. show error');
                            console.log(err); // Error: "It broke"

                            // get the award course name and course code
                            get_course_data(current_course_id).then(function(data) {
                                var current_course_name = data.name;
                                var current_course_code = data.course_code;

                                // get the user role in award course (student or teacher)
                                get_user_role(current_course_id).then(function(data) {
                                    // if user have enrolment(s)
                                    if (data.length > 0) {
                                        for (var i = 0; i < data.length; i++) {
                                            // if a student, show student message
                                            if (data[i].role.match(/student/gi)) {
                                                display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, true);
                                                break;

                                                // else (should be a teacher), show teacher message    
                                            } else if (i == data.length - 1) {
                                                display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, false);
                                            }
                                        }
                                    }
                                    // if user have no enrolment, assume admin
                                    else {
                                        display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, false);
                                    }



                                }, function(err) {
                                    // if user is not a teacher, then user must be a staff (admin)
                                    console.log(err);
                                    display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, false);
                                });
                            });


                        });


                    }
                    // console.log(JSON.parse(err.responseText).message);
                });


        }
        // not on dashboard or course
        else {
            console.log('21CC Embedded Creds - Not on dashboard or course page. Do no run script');
        }

        // check dashboard and removed opted out creds course
        function check_dashboard_cards() {
            console.log('Performing dashboard op-out check.');

            var dashboard_cards = [];

            $('.ic-DashboardCard').each(function(i) {

                if ($(this).find('.ic-DashboardCard__link').length) {
                    var link = $(this).find('.ic-DashboardCard__link').attr('href');
                    var course_id = link.match(/[0-9]{1,}/g)[0];
                    var course_name = $(this).find('.ic-DashboardCard__header-title').text();
                    var course_code = $(this).find('.ic-DashboardCard__header-subtitle').text();

                    var card = {
                        course_id: course_id,
                        course_name: course_name,
                        course_code: course_code,
                        dashboard_position: i,
                    };

                    dashboard_cards.push(card);
                }
            });
            console.log(dashboard_cards);

            for (var i = 0; i < embedded_data.length; i++) {
                var cred_course_id = embedded_data[i].cred_course_id;
                var cred_course_name = embedded_data[i].cred_course_name;
                var cred_opt_out = embedded_data[i].cred_opt_out;

                for (var j = 0; j < dashboard_cards.length; j++) {
                    var card_course_id = dashboard_cards[j].course_id;
                    var dashboard_position = dashboard_cards[j].dashboard_position;

                    if (cred_opt_out && cred_course_id == card_course_id) {
                        console.log('Hide course: ' + cred_course_name + ', ' + cred_course_id);
                        //                    $('.ic-DashboardCard')[dashboard_position].remove();
                        $('.ic-DashboardCard').eq(dashboard_position).remove();
                    }
                }
            }
        }

        // check all course page and removed opted out creds
        function remove_creds_course_from_course_list() {
            console.log('Removing opted-out creds');
            $('.course-list-table-row').each(function(i) {
                if ($(this).find('a').length) {
                    var link = $(this).find('a').attr('href');
                    //                console.log(link);
                    var course_id = link.match(/[0-9]{1,}/g)[0];

                    for (var i = 0; i < embedded_data.length; i++) {
                        var cred_course_id = embedded_data[i].cred_course_id;
                        var cred_opt_out = embedded_data[i].cred_opt_out;
                        if (cred_course_id == course_id && cred_opt_out) {
                            $(this).remove();
                        }
                    }
                }
            });
        }

        // check if course is an mc
        function check_course(current_course_id, current_course_name) {
            console.log('Performing course check - Embedded Creds Course, Embedded Creds Parent Course or Other Course');
            //        var current_course_id = ENV.COURSE.id;

            //        var current_course_id = get_course_id_from_url(), current_course_name, information_page_creds_id, information_page_creds_name;

            var information_page_creds_id, information_page_creds_name;

            // INFORMATION PAGE
            if ($('#rmit-creds').length) {
                information_page_creds_id = $('#rmit-creds').attr('data-creds-id');
                information_page_creds_name = $('#rmit-creds').attr('data-creds-name');

                get_course_data(information_page_creds_id).then(function(data) {
                    console.log('---- User have access to ' + information_page_creds_name);
                    check_information_page(information_page_creds_id, current_course_id, current_course_name);

                }, function(err) {
                    console.log('User do not have access to this course. show error');
                    console.log(err); // Error: "It broke"

                    // get the award course name and course code
                    get_course_data(current_course_id).then(function(data) {
                        var current_course_name = data.name;
                        var current_course_code = data.course_code;

                        // get the user role in award course (student or teacher)
                        get_user_role(current_course_id).then(function(data) {
                            // if user have enrolment(s)
                            if (data.length > 0) {
                                for (var i = 0; i < data.length; i++) {
                                    // if a student, show student message
                                    if (data[i].role.match(/student/gi)) {
                                        display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, true);
                                        break;

                                        // else (should be a teacher), show teacher message    
                                    } else if (i == data.length - 1) {
                                        display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, false);
                                    }
                                }
                            }
                            // if user have no enrolment, assume admin
                            else {
                                display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, false);
                            }



                        }, function(err) {
                            // if user is not a teacher, then user must be a staff (admin)
                            console.log(err);
                            display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, false);
                        });
                    });

                });
            } else {
                creds_loop: for (var i = 0; i < embedded_data.length; i++) {
                    var cred_course_id = embedded_data[i].cred_course_id;
                    var cred_course_name = embedded_data[i].cred_course_name;
                    var cred_opt_out = embedded_data[i].cred_opt_out;
                    var embedded_in_course = embedded_data[i].embedded_in_course;

                    // CREDENTIAL COURSE
                    if (cred_course_id == current_course_id) {
                        var courses = '';
                        for (var j = 0; j < embedded_in_course.length; j++) {
                            courses += embedded_in_course[j].course_name + ', ';
                        }
                        console.log(cred_course_name + ' is an embedded micro-credential in ' + courses);

                        if (cred_opt_out) {
                            console.log(cred_course_name + ' OPTed-OUT!');
                            hide_creds_course(cred_course_name, embedded_in_course, cred_course_id);
                        } else {
                            console.log(cred_course_name + ' not opted out')
                        }
                        break creds_loop;
                    }
                    // UNDERTERMINED COURSE
                    else {
                        console.log('Course undetermined. Show content and assume opt-in if this is an embedded creds.');
                    }
                }
            }

            function check_information_page(information_page_creds_id, current_course_id, current_course_name) {
                creds_loop: for (var i = 0; i < embedded_data.length; i++) {
                    var cred_course_id = embedded_data[i].cred_course_id;
                    var cred_course_name = embedded_data[i].cred_course_name;
                    var cred_opt_out = embedded_data[i].cred_opt_out;
                    var embedded_in_course = embedded_data[i].embedded_in_course;

                    // if embedded creds is in the cred custom data
                    if (cred_course_id == information_page_creds_id) {
                        console.log('Student have interacted with opt-out');
                        console.log('Information page with embedded creds: ' + cred_course_name);

                        embedded_loop:
                            for (var j = 0; j < embedded_in_course.length; j++) {
                                var embedded_course_id = embedded_in_course[j].course_id;
                                var embedded_course_name = embedded_in_course[j].course_name;
                                var embedded_course_opt_out = embedded_in_course[j].opt_out;

                                if (current_course_id == embedded_course_id) {
                                    console.log('Information page is in custom data');
                                    break embedded_loop;
                                } else if (j == (parseInt(embedded_in_course.length) - 1)) {
                                    console.log('Information page is not in custom data. Add to custom data');
                                    var parent_data = {
                                        course_id: current_course_id,
                                        course_name: current_course_name,
                                        opt_out: cred_opt_out
                                    };
                                    embedded_in_course.push(parent_data);
                                }
                            }

                        handle_creds_landing_page(cred_opt_out);
                        break creds_loop;
                    }
                    // if embedded creds is not in cred custom data
                    else if (i == (parseInt(embedded_data.length) - 1)) {
                        console.log('No interaction with opt-out');
                        console.log('Information page with embedded creds: ' + information_page_creds_name);

                        create_new_data(information_page_creds_id, information_page_creds_name, current_course_id, current_course_name, false);

                        handle_creds_landing_page(false);
                    }
                    console.log(embedded_data);
                    save_embedded_creds_data(embedded_data);
                }
            }
        }

        function display_no_embedded_creds_message(current_course_name, current_course_code, information_page_creds_name, is_student) {
            if (!$('#rmit-creds-action').length) {
                $('.show-content.user_content').append('<div id="rmit-creds-action"></div>');

                var alert;

                if (is_student) {
                    // rollback message after SAMS issue have been fixed
                    alert = '<hr/><div class="ic-flash-info creds-opt-out-message" style="width:100%; margin: 20px 0;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div><p>As a student, you are receiving this message for one of the following reasons:</p><ol><li style="margin-bottom:10px;">You may be a late enrolment in ' + current_course_name + ', ' + current_course_code + ' and it will take 2 business days before the ' + information_page_creds_name + ' credential becomes available to you, or</li><li>The ' + information_page_creds_name + ' credential may not be part of ' + current_course_name + ', ' + current_course_code + '.</li></ol><p>If you need further clarification, please contact the course co-ordinator.</p>';

                    // error message due to SAMS issue
                    //                alert = '<hr/><div class="ic-flash-info creds-opt-out-message" style="width:100%; margin: 20px 0;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div><p>This digital credential will be available soon within your course and also added to your Canvas Dashboard. We\'ll let you know when it is ready for you. In the meantime, if you have any questions, please contact the Course Co-ordinator.</p>';
                } else {
                    alert = '<hr/><div class="ic-flash-info creds-opt-out-message" style="width:100%; margin: 20px 0;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div><p>As a teacher, you are receiving this message for one of the following reasons:</p><ol><li style="margin-bottom:10px;">You are not be enrolled in the ' + information_page_creds_name + ' credential and are unable to access it. Only course co-ordinator have access, or</li><li>The ' + information_page_creds_name + ' credential may not be included as part of the ' + current_course_name + ', ' + current_course_code + '.</li></ol><p>If you need further clarification, please contact the course co-ordinator.</p>';
                }



                $('#rmit-creds-action').html(alert);



            }

        }


        // set landing page buttons 
        function handle_creds_landing_page(opt_out) {

            var creds_id = $('#rmit-creds').attr('data-creds-id');
            var creds_name = $('#rmit-creds').attr('data-creds-name');

            //        console.log($('#rmit-creds-action').length);
            if (!$('#rmit-creds-action').length) {


                console.log('Display opt option on landing page');
                $('.show-content.user_content').append('<div id="rmit-creds-action"></div>');

                var parent_course_id = get_course_id_from_url(),
                    parent_course_name;

                get_course_data(parent_course_id).then(function(data) {
                    parent_course_id = data.id;
                    parent_course_name = data.name;
                    var alert, checkStatus;

                    if (opt_out || opt_out == 'true') {
                        alert = '<div class="ic-flash-info creds-opt-out-message" style="width:100%; margin: 20px 0;">';
                        checkStatus = 'checked';
                    } else {
                        alert = '<div class="ic-flash-info creds-opt-out-message" style="width:100%; margin: 20px 0; display:none;">';
                        checkStatus = '';
                    }

                    alert += '<div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div><p>Note that by checking this box, you have chosen to opt-out from ' + creds_name + ' credential. If you would like to undertake this credential, please uncheck the box above.</p></div>';

                    $('#rmit-creds-action').html('<hr/><p style="font-size:16px;">To undertake the ' + creds_name + ' credential, please click on the "Go to credential course" button.</p><a href="/courses/' + creds_id + '" class="btn btn-primary">Go to credential course</a><p style="font-size:16px; margin-bottom:0;">If you don\'t want to undertake the ' + creds_name + ' credential at this time, please opt-out by checking the box. You can always opt-in again to undertake this credential at a later stage by unchecking the box.</p><input id="opt-out-creds" type="checkbox" data-creds-id="' + creds_id + '" data-creds-name="' + creds_name + '" style="margin-right: 10px;" ' + checkStatus + '><label style="font-size:16px;">Opt-out from ' + creds_name + ' credential</label>' + alert + '<p>&nbsp;</p>');

                    if (opt_out) {
                        $('#rmit-creds-action a').addClass('disabled');
                    }

                    watch_landing_page_opt(creds_id, creds_name, parent_course_id, parent_course_name);

                });
            } else {
                console.log('Landing page already has opt option');
            }
        }

        function watch_landing_page_opt(creds_id, creds_name, parent_course_id, parent_course_name) {
            $('#opt-out-creds').off('change');
            $('#opt-out-creds').on('change', function() {

                console.log('--- Init creds opt status... ');
                var opt_out_status;

                // visual feedback
                if ($(this).is(':checked')) {
                    $('#rmit-creds-action a').addClass('disabled');
                    $('#rmit-creds-action .ic-flash-info').show();
                    opt_out_status = true;
                } else {
                    $('#rmit-creds-action a').removeClass('disabled');
                    $('#rmit-creds-action .ic-flash-info').hide();
                    opt_out_status = false;
                }

                // disable opt-out button until data have been saved
                $(this).prop('disabled', true);

                // data handling
                // if there is prior data in custom data
                if (embedded_data.length > 0) {
                    console.log('Checking existing creds data from custom data');

                    // loop through creds to find the current creds
                    creds_loop:
                        for (var i = 0; i < embedded_data.length; i++) {
                            var cred_course_id = embedded_data[i].cred_course_id;
                            var embedded_in_course = embedded_data[i].embedded_in_course;

                            // if this is the creds
                            if (creds_id == cred_course_id) {
                                console.log('Creds exist in data');
                                // Decision made will affect the credential, not the parent course
                                // Eg. Student is enrol to ENG101 and BUS101 which has CREDS101. If student opt-out from CREDS101 in ENG101, then it is considered opted-out for BUS101. If student opt-back in through BUS101, then it is also opt-in in ENG101.

                                // update creds opt status
                                embedded_data[i].cred_opt_out = opt_out_status;

                                // use to check if the parent matches
                                var parent_counter = 0;

                                // loop through parent courses to update their status to match the creds status
                                for (var j = 0; j < embedded_in_course.length; j++) {
                                    console.log('j: ' + j + ', length: ' + embedded_in_course.length + ', length-1: ' + (parseInt(embedded_in_course.length) - 1));
                                    var embedded_course_id = embedded_in_course[j].course_id;
                                    var embedded_course_name = embedded_in_course[j].course_name;
                                    embedded_in_course[j].opt_out = opt_out_status;

                                    // if this is the parent course 
                                    // update opt status
                                    if (parent_course_id == embedded_course_id) {
                                        parent_counter++;
                                        console.log('Parent course exist in data. Updating parent opt status to: ' + opt_out_status + ', Parent counter: ' + parent_counter);
                                    }
                                    // if this parent course is not in custom data
                                    // add this parent course into the custom data
                                    else if (j == parseInt(embedded_in_course.length) - 1 && parent_counter == 0) {
                                        var parent_data = {
                                            course_id: parent_course_id,
                                            course_name: parent_course_name,
                                            opt_out: opt_out_status
                                        };
                                        embedded_in_course.push(parent_data);
                                        console.log('Parent course do not exist in data. Creating new parent data...');
                                        console.log(parent_data);
                                    }
                                }

                                break creds_loop;
                            }
                            // if this is not the creds
                            else if (i == parseInt(embedded_data.length) - 1) {
                                console.log('Creds do not exist in data. Create new creds data.');
                                create_new_data(creds_id, creds_name, parent_course_id, parent_course_name, opt_out_status);
                            }
                        }
                }
                // if this is the first time (not prior data in custom data)
                else {
                    console.log('No data. Create new creds data.');
                    create_new_data(creds_id, creds_name, parent_course_id, parent_course_name, opt_out_status);
                }

                console.log(embedded_data);
                $(this).prop('disabled', false);

                // save to custom data at the end 
                save_embedded_creds_data(embedded_data).then(function() {
                    //                    console.log('Saving to custom data.');
                    $(this).prop('disabled', false);
                });

            });
        }

        // function to create a new creds data
        // if new, it's fine to assume the same opt_status for both creds and parent course
        function create_new_data(creds_id, creds_name, parent_course_id, parent_course_name, opt_out_status) {
            var creds_data = {
                cred_course_name: creds_name,
                cred_course_id: creds_id,
                cred_opt_out: opt_out_status,
                embedded_in_course: [{
                    course_id: parent_course_id,
                    course_name: parent_course_name,
                    opt_out: opt_out_status
                }],
            };
            embedded_data.push(creds_data);
        }

        // hide opted-out creds course content and display opt-out message
        function hide_creds_course(creds_name, embedded_course_arr, cred_course_id) {

            console.log('Hide course content and display opt-out message');

            $('#courseMenuToggle').remove();

            $('#main').css({
                'margin': 0,
                'padding': '2em',
                'box-sizing': 'border-box',
            });

            // get badge image
            var creds_badge_img;
            for (var k = 0; k < creds_badge.length; k++) {

                if (creds_badge[k].cred_course_id == cred_course_id) {
                    creds_badge_img = creds_badge[k].badge_img;
                    break;
                }
            }


            var html = '<div style="display:flex;flex-wrap:nowrap;"><div ><img src="' + creds_badge_img + '" alt="' + creds_name + ' Badge" style="width: 175px; margin: 15px 15px 15px 0;"></div><div id="opt-out-confirmation" style="max-width: calc(100% - 15px - 175px);"><h2 style="margin-top: 10px;">You have chosen to opt-out from this credential.</h2><p style="font-size: 16px;">The ' + creds_name + ' credential is part of the following course(s):</p><ul style="font-size: 16px;">';

            for (var i = 0; i < embedded_course_arr.length; i++) {
                var course_name = embedded_course_arr[i].course_name;
                var course_id = embedded_course_arr[i].course_id;
                html += '<li><a href="/courses/' + course_id + '">' + course_name + '</a></li>';
            }

            html += '</ul><br/><p style="font-size: 16px;">If you would like to undertake this credential, please opt-in by clicking on the "Undertake this credential" button.</p><button id="opt-in-creds" class="btn btn-primary" style="margin: 5px 0 15px 0; font-size: 16px;" data-creds-id="' + cred_course_id + '">Undertake this credential</button></div></div>';

            $('#main').html('<div id="content"><div class="ic-flash-info creds-opt-out-message" style="width:100%; margin-bottom: 20px;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div>' + html + '</div></div>');

            watch_opt_in_btn();
        }

        // watch opt-back in option in embedded credential course
        function watch_opt_in_btn() {
            $('#opt-in-creds').off('click');
            $('#opt-in-creds').on('click', function() {

                console.log('--- Opting back into this credential...');

                // prevent double clicking
                $(this).addClass('disabled');

                // get cred course if from data-attr
                var current_creds_id = $(this).attr('data-creds-id');

                // loop through creds data 
                for (var i = 0; i < embedded_data.length; i++) {
                    var cred_course_id = embedded_data[i].cred_course_id;
                    var embedded_in_course = embedded_data[i].embedded_in_course;

                    // if match creds course
                    if (current_creds_id == cred_course_id) {
                        // opt back in
                        embedded_data[i].cred_opt_out = false;

                        for (var j = 0; j < embedded_in_course.length; j++) {

                            embedded_in_course[j].opt_out = false;
                        }
                    }
                }

                console.log(embedded_data);

                save_embedded_creds_data(embedded_data).then(function() {
                    $('.creds-opt-out-message #opt-out-confirmation').html('<h2 style="margin-top: 10px;">You are now able to undertake this credential. <i class="icon-publish icon-Solid" style="transform: scale(1.3); color: #00AC18 !important;"></i></h2><p style="font-size: 16px;">The credential course page will automatically load in a few moments. If this page does not load automatically, please click <a href="/courses/' + current_creds_id + '">here</a>.</p>');

                    setTimeout(function() {
                        location.reload();
                    }, 1000);

                });
            });
        }

        function get_course_id_from_url() {
            var path = window.location.pathname.split('/'),
                current_course_id;
            for (var i = 0; i < path.length; i++) {
                if (path[i] == 'courses') {
                    current_course_id = path[i + 1];
                    console.log('Course id: ' + current_course_id);
                }
            }

            return current_course_id;
        }


        // global nav
        //    $('#global_nav_courses_link').off('click');
        //    $('#global_nav_courses_link').on('click',function(){
        //        
        //        if($('.tray-with-space-for-global-nav').length){
        //            $('.tray-with-space-for-global-nav a').each(function(i){
        //                var link = $(this).attr('href');
        //                var course_id = link.match(/[0-9]{1,}/g)[0];
        //                
        //                for(var i=0;i<embedded_data.length;i++){
        //                    var cred_course_id = embedded_data[i].cred_course_id;
        //                    if(cred_course_id == course_id){
        //                        $(this).parents('li').remove();
        //                    }
        //                }
        //            });
        //        }
        //        console.log('test;')
        //    });


        // Handle custom data API
        function get_embedded_creds_data() {
            return new Promise(function(resolve, reject) {
                var url = '/api/v1/users/self/custom_data/' + ns;
                var parms = {
                    'ns': ns
                };
                $.getJSON(url, parms, function(data) {
                    console.log('API got user custom data - embedded creds');
                    var custom_data = JSON.parse(data.data);
                    resolve(custom_data);
                }).fail(function(error) {
                    console.log('API fail');
                    reject(error);
                });
            });
        }

        function save_embedded_creds_data(embedded_data) {
            embedded_data = JSON.stringify(embedded_data);
            console.log(embedded_data);

            return new Promise(function(resolve, reject) {
                var url = '/api/v1/users/self/custom_data/' + ns;
                var parms = {
                    'ns': ns,
                    'data': embedded_data
                };

                $.ajax({
                    'url': url,
                    'type': 'PUT',
                    'data': parms
                }).done(function(data) {
                    console.log('Updated 21CC embedded creds data');
                    console.log(data);
                    console.log(JSON.parse(data.data));
                    resolve(data);
                }).fail(function(error) {
                    console.log('API fail');
                    reject(error);
                });
            });
        }

        function delete_embedded_creds_data() {
            var url = '/api/v1/users/self/custom_data/' + ns;
            var parms = {
                'ns': ns,
            };

            $.ajax({
                'url': url,
                'type': 'DELETE',
                'data': parms
            }).done(function(data) {
                console.log('Deleted 21CC embedded creds data');
                console.log(data);
            });
        }

        function get_course_data(course_id) {
            return new Promise(function(resolve, reject) {
                var url = '/api/v1/courses/' + course_id;
                $.getJSON(url, function(data) {
                    console.log('API got course data');
                    resolve(data);
                }).fail(function(error) {
                    console.log('API fail');
                    reject(error);
                });
            });
        }

        function get_user_role(current_course_id) {
            var url = '/api/v1/courses/' + current_course_id + '/enrollments?user_id=self';

            return new Promise(function(resolve, reject) {
                $.getJSON(url, function(data) {
                    console.log('API got user enrollment (role)');
                    resolve(data);
                }).fail(function(error) {
                    console.log('API fail');
                    reject(error);
                });
            });

        }
    }
    init_21CC_embedded_creds();

    if (document.querySelector("a[href='http://www1.rmit.edu.au/studyandlearningcentre']")) {
        document.querySelector("a[href='http://www1.rmit.edu.au/studyandlearningcentre']").setAttribute('href', 'https://www.rmit.edu.au/students/study-support/study-and-learning-centre');
    }

    if (document.querySelector("div.st-isearch")) {
        document.querySelector("div.st-isearch").setAttribute('data-link', 'https://emedia.rmit.edu.au/learninglab/content/researching-your-assignment');
        if (document.querySelector('div.st-library-element.st-isearch div.st-library-text span.st-library-heading span.st-library-heading')) {
            document.querySelector('div.st-library-element.st-isearch div.st-library-text span.st-library-heading span.st-library-heading').innerHTML = "Assignment Research";
        }
    }


    if (document.querySelector("iframe[src^='https://lgapi.libapps.com/widget_box.php']")) {

        document.querySelector("iframe[src^='https://lgapi.libapps.com/widget_box.php?']").setAttribute('src', 'https://lgapi-au.libapps.com/widget_box.php?site_id=325&widget_type=8&output_format=2&widget_title=LibrarySearch&widget_height=290&widget_width=100%25&widget_embed_type=1&guide_id=46646&box_id=7738563&map_id=9120061&content_only=0&config_id=1464570892533');

    }

    // https://lgapi.libapps.com/widget_box.php?site_id=325&widget_type=8&output_format=2&widget_title=LibrarySearch&widget_height=290&widget_width=100%25&widget_embed_type=1&guide_id=46646&box_id=7738563&map_id=9120061&content_only=0&config_id=1464570892533

    function hotfixA11y() {
        let fileLinks = document.querySelectorAll("a.instructure_file_link");
        console.log(fileLinks.length + " File Links Found");

        for (let i = 0; i < fileLinks.length; i++) {
            let childNodes = fileLinks[i].childNodes;
            let allChildNodesEmpty = true;
            for (let a = 0; a < childNodes.length; a++) {
                if (childNodes[a].tagName == "IMG" || typeof childNodes[a].innerHTML != "undefined" && childNodes[a].innerHTML.trim().length > 0 || childNodes[a].length > 0) {
                    console.log("Child node has content");
                    allChildNodesEmpty = false;
                }
            }
            if (fileLinks[i].innerHTML.trim().length == 0) {
                console.log("Empty a tag found removing links");
                fileLinks[i].outerHTML = "";
            } else if (allChildNodesEmpty) {
                console.log("All child nodes are empty removing link");
                console.log(fileLinks[i]);
                fileLinks[i].outerHTML = "";
            }
        }
    }

    hotfixA11y();

    if (window.location.href.indexOf("rmit-lab") != -1) {
        window.ALLY_CFG = {
            'baseUrl': 'https://prod-ap-southeast-2.ally.ac',
            'clientId': 57
        };
        $.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');
    } else if (window.location.href.indexOf("rmit.instructure") != -1) {
        window.ALLY_CFG = {
            'baseUrl': 'https://prod-ap-southeast-2.ally.ac',
            'clientId': 130
        };
        $.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');

    }

    /*
     **  Glossary Tool (Canvas LMS)
     **
     **  Purpose/Description:
     **     The 'Glossary Tool' provides inline definitions to terms found 
     **     within a course from a glossary page. 
     **     Key terms within your content will feature dots beneath them and a definition will appear 
     **     via a tooltip on hover.
     **
     **  Author(s):
     **     Prabhnoor Kaur (VE Design Team)
     **
     **  Contributor(s):
     **     Jack Dustan
     **     Sam Malcolm
     **
     **  Revision: 190116 Carly Milanovic (Notes in 190116_alterations)
     */

    //  Global vars - GT for the title of a glossary page.


    var gt = "global-glossary",
        gtCourseID = (typeof ENV != "undefined" && typeof ENV.COURSE_ID != "undefined") ? ENV.COURSE_ID : false,
        gtPageTitle = (typeof ENV != "undefined" && typeof ENV.WIKI_PAGE != "undefined") ? ENV.WIKI_PAGE.url : false,
        gtParser = new DOMParser(),
        glossaryArr;

    function getGlossaryPage() {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/api/v1/courses/" + gtCourseID + "/pages/" + gt);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    try {
                        let res = JSON.parse(xhr.responseText.slice(9, xhr.responseText.length));
                        res = res.body;
                        res = gtParser.parseFromString(res, "text/html");
                        resolve(res);
                    } catch (e) {
                        reject(e);
                    }
                }
            }
            xhr.send();
        });
    }

    function matchText(node, regex, callback) {
        // let excludeElements = ["a", "b", "blockquote", "br", "caption", "cite", "code", "col", "hr", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "del", "ins iframe", "colgroup", "dd", "div", "dl", "dt", "em", "i", "img", "li", "ol", "p", "pre", "q", "small", "span", "strike strong", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "u", "ul", "object", "embed", "param", "video", "track", "audio"];
        let excludeElements = ["a", "br", "caption", "cite", "code", "col", "hr", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "del", "ins", "iframe", "colgroup", "img", "pre", "object", "embed", "param", "video", "track", "audio"];
        var child = node.firstChild;
        while (child) {
            switch (child.nodeType) {
                case 1:
                    if (excludeElements.indexOf(child.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    matchText(child, regex, callback);
                    break;
                case 3:
                    var bk = 0;
                    child.data.replace(regex, function(all) {
                        var args = [].slice.call(arguments),
                            offset = args[args.length - 2],
                            newTextNode = child.splitText(offset + bk),
                            tag;
                        bk -= child.data.length + all.length;

                        newTextNode.data = newTextNode.data.substr(all.length);
                        tag = callback.apply(window, [child].concat(args));
                        child.parentNode.insertBefore(tag, newTextNode);
                        child = newTextNode;
                    });
                    regex.lastIndex = 0;
                    break;
            }

            child = child.nextSibling;
        }
        return node;
    };

    function processGlossaryData(glossaryDom) {
        let glossaryArray = [];
        let glossaryTags = glossaryDom.querySelectorAll("p,h1,h2,h3,h4,h5,h6");
        console.log(glossaryTags);
        for (let i = 0; i < glossaryTags.length; i++) {
            if (i % 2 == 0) {
                glossaryArray.push({
                    term: glossaryTags[i].innerHTML,
                    definition: glossaryTags[i + 1].innerHTML || "Undefined Definition"
                });
            }
        }
        return glossaryArray;
    }

    function injectTippyJs() {
        return new Promise(function(resolve, reject) {
            if (!document.getElementById('id1')) {
                var script = document.createElement('script');
                script.id = 'id1';
                script.src = 'https://unpkg.com/tippy.js@3/dist/tippy.all.min.js';
                document.body.appendChild(script);
                script.onload = function() {
                    resolve();
                }
            }
        });
    }

    function addDefinitionsToPage(glossaryArray, doc) {
        let pageText = doc.textContent;
        for (let key in glossaryArray) {
            var reg = new RegExp('([^\\w]' + glossaryArray[key].term + '[^\\w]|^' + glossaryArray[key].term + '[^\\w]|[^\\w]' + glossaryArray[key].term + '$|^' + glossaryArray[key].term + '$)', 'igm');
            matchText(doc, reg, function(node, match, offset) {
                var tipLink = document.createElement("a");
                tipLink.className = "tip";
                tipLink.setAttribute("style", "cursor:help; border-bottom: 2px dotted black; color:inherit; text-decoration:none;");
                tipLink.setAttribute("data-template", glossaryArray[key].term);
                tipLink.setAttribute("href", "javascript:void(0)");
                tipLink.setAttribute("data-tippy-arrow", "true");
                tipLink.textContent = match;
                return tipLink;
            });
        }
    }

    function gtInit() {
        console.log("INITIATING GLOSSARY TOOL\n\n\n");
        console.log("%cGlossary Tool", "font-size:50px; font-weight:bold; color:blue; border");
        injectTippyJs().then(function(res) {
            getGlossaryPage().then(function(response) {
                let glossaryPage = response;
                let glossary = processGlossaryData(glossaryPage);
                glossary = glossary.sort(function(a, b) {
                    return b.term.length - a.term.length;
                });
                glossaryArr = glossary;
                addDefinitionsToPage(glossary, document.querySelector(".show-content"));
                for (let key in glossary) {
                    console.log("INITIATE TOOLTIPS");
                    tippy(`a.tip[data-template='${glossary[key].term}']`, {
                        arrow: true,
                        arrowType: 'round',
                        content: glossary[key].definition,
                        interactive: true
                    })
                }
            }).catch(function(err) {
                console.warn("There was an error getting the glossary page");
                console.warn(err);
            })

        }).catch(function(err) {
            console.error("There was an error adding tippy to the DOM");
        })

    }

    if (gtCourseID && gtPageTitle) {
        if (ENV.WIKI_PAGE.url != 'global-glossary') {
            gtInit();
        }
    }
    var path = window.location.pathname,
        message,
        type,
        uniqueClass = '',
        initChecker = function() {

            console.log('what is path ' + path)
            console.log('path has index of ' + path.indexOf('speed_grader'))

            if (path.includes('gradebook') && document.title.match(/Individual|history|History/) == null && path.indexOf('speed_grader') == -1) {



                temporaryProgressiveAlert();

            }

        },
        runAlert = function(message, type, uniqueClass) {

            canvasAlert = '<div class="customFlash ic-flash-' + type + ' ' + uniqueClass + '" style="width: calc(100% - 40px); margin: 20px 20px 0 20px;"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-info"></i></div><p translate="yes"> ' + message + '</p></div>';
            $(canvasAlert).insertBefore('#content');

            // Future button to close alerts
            // <button type="button" class="Button Button--icon-action close_link"><i class="icon-x"></i></button>

        },
        temporaryProgressiveAlert = function() {

            // If mobile
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                message = 'Please be aware that the score displayed in the total column is the current score only, and does not take unsubmitted or ungraded submissions into account. To view the students unposted final score or grade, <strong><a href="https://community.canvaslms.com/docs/DOC-12811-415255012">please export the grade book</a>.<strong>';

            } else {

                message = 'Please be aware that the score displayed in the total column is the current score only, and does not take unsubmitted or ungraded submissions into account. To view the students unposted final score or grade, <a href="' + path + '?walkme=19-500494"><strong>please follow the steps here</a></strong>.';

            }
            runAlert(message, 'warning');

        };

    // -----------------------------------------------------------------

    $(document).ready(function() {
        initChecker();
    });
}

console.log("END OF CUSTOM JS FILE");