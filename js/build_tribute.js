"use strict";

let build_tribute = () => {
let tributeData =
/*--------------------------*/
/*- Honorary Tribute Data  -*/
/*--------------------------*/
    [
        {
            tributee:
                [
                    {
                        id: "000",
                        fname: "Gregory",
                        mname: "",
                        lname: "Scott",
                        suffix: "Jr",
                        bdate: "10/02/1959",
                        bcountry: "United States",
                        bcity: "Chicago",
                        bstate: "Illinois",
                        lock: "n",
                        parameters:
                            {   color: 0,

                                page_1_title_1: "<span id='page-1-title-1-text'><strong><i>September 24, 2025</i></strong></span>",
                                
                                page_1_title_2: "<span id='page-1-title-2-text'><strong><i>Happy Wedding Day!!!</i></strong></span>",

                                page_1_image: "images/greg-wedding-1.jpg",

                                page_1_caption: "<span id='page-1-figcaption-text'><strong><i>Gregory Jr. and Deneisha</i></strong></span>",

                                page_2_title_1: "<span id='page-2-title-1-text'><strong><i>God's Holy Matrimony...</i></strong></span>",
                                
                                page_2_title_2: "",

                                page_2_image: "images/greg-wedding-2.jpg",

                                page_2_caption: "<span id='page-2-figcaption-text'><strong><i>What is it?</i></strong></span>",

                                page_3_narrative: "<p class='first-p-header-top text-center'><span><strong><i>What is God's Holy Matrimony?</i></strong></span></p><p>In God's eyes, the union of a man and a woman, two becoming one, as set forth by God, in the Garden of Eden, when God joined Adam and Eve.</p><p class='text-center'><span class='p-header'><strong><i>Proverbs 18: [22]</i></strong></span></p><p><strong>22</strong>  Whoso findeth a wife findeth a good thing, and obtaineth favour of the Lord.</p><p class='text-center'><span class='p-header'><strong><i>Proverbs 31: [10-12]</i></strong></span></p><p><strong>10</strong> Who can find a virtuous woman? for her price is far above rubies.</p><p><strong>11</strong> The heart of her husband doth safely trust in her, so that he shall have no need of spoil.</p><p><strong>12</strong> She will do him good and not evil all the days of her life.</p><p class='text-center'><span class='p-header'><strong><i>Ephesians 5: [21-25]</i></strong></span></p><p><strong>21</strong> Submitting yourselves one to another in the fear of God.</p><p><strong>22</strong> Wives, submit yourselves unto your own husbands, as unto the Lord.</p>                                <p><strong>23</strong> For the husband is the head of the wife, even as Christ is the head of the church: and he is the saviour of the body.</p><p><strong>24</strong> Therefore as the church is subject unto Christ, so let the wives be to their own husbands in every thing.</p><p><strong>25</strong> Husbands, love your wives, even as Christ also loved the church, and gave himself for it;</p><p class='text-center'><span class='p-header'><strong><i>Hewbrews 13: [4]</i></strong></span></p><p><strong>4</strong> Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.</p>",

                                author_salutation: "<div class='author-signature'><p>Created By:</p><img class='author-photo' src='images/g02s06gregory.jpg' alt='Author Photo'><p><i><span class='author'>Gregory Scott Sr.</i></span></p></div>"
                            }

                    }
                ]
        }
    ];

    let colorSchemes = [
        "css/colorscheme/black-black-gold.css",
        "css/colorscheme/black-red-gold.css",
        "css/colorscheme/black-red-red.css",
        "css/colorscheme/black-red-blue.css",
        "css/colorscheme/green-red-gold.css"
    ];
    
    let i = 0;

    let colorIndex = tributeData[0].tributee[i].parameters.color; // set tributee color . . .
    $("#color-switcher").attr("href", colorSchemes[colorIndex]);

    if (tributeData[0].tributee[i].id == "011" || tributeData[0].tributee[i].id == "022" ) {
        $("#page-1-image").addClass("border-radius");
    }

    $("#logo-image").attr("src","icon/favicon-red.png");
    $("#logo-tagline").text("Greeting Card Creations . . .");

    $("#page-1-title-1").html(tributeData[0].tributee[i].parameters.page_1_title_1);
    $("#page-1-title-2").html(tributeData[0].tributee[i].parameters.page_1_title_2);

    $("#page-1-image").attr("src",tributeData[0].tributee[i].parameters.page_1_image);
    $("#page-1-figcaption").html(tributeData[0].tributee[i].parameters.page_1_caption);

 
    $("#page-2-title-1").html(tributeData[0].tributee[i].parameters.page_2_title_1);
    $("#page-2-title-2").html(tributeData[0].tributee[i].parameters.page_2_title_2);    

    $("#page-2-image").attr("src",tributeData[0].tributee[i].parameters.page_2_image);
    $("#page-2-figcaption").html(tributeData[0].tributee[i].parameters.page_2_caption);

    $("#page-3").html(tributeData[0].tributee[i].parameters.page_3_narrative);





    $("title").text("GCS - " + $("#title-1").text() + " " + $("#title-2").text());
    $("#main-content").html(tributeData[0].tributee[i].parameters.author_salutation);
}; // end build_tribute . . .

$(document).ready(() => {

    var today = new Date();
    $("#copyright-1").html("&copy; Copyright " + today.getFullYear());

    build_tribute ();

    $("#page").show(2000);
    $("#copyright-1").show(2500);
    $("#copyright-2").show(3000);
    $("#email-contact-us").show(3500);
    $("#company-name").show(4000);
    
    $("footer").hover(function() {
        $("#copyright-1").effect("shake");
        }, function() {
        $("#email-contact-us").effect("shake");
    });
//--------------------//
//- Set Browser Keys -//
//--------------------//
$(document).on("contextmenu", ()=> {return false;});

document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'cfnjvxspwuatyz'.indexOf(event.key) !== -1) {
      event.preventDefault()
    }

    if (event.ctrlKey && event.shiftKey && 'CIJKPNV'.indexOf(event.key) !== -1) {
        event.preventDefault()
    }

    if (event.altlKey && 'EF'.indexOf(event.key) !== -1) {
        event.preventDefault()
    }

    if (event.shiftKey && event.code == "F10") {
        event.preventDefault()
    }

    if (event.code == "F12") {
        event.preventDefault()
    }
})


});
