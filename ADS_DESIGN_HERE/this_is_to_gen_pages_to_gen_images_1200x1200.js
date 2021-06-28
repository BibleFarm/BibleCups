$(document).ready(function (){

/*
//Get first five words of of the verse
function getWords(string){
    return string.split(/\s+/).slice(0,5).join(" ");
}

//provide string for getWords function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first 5 words back to the DOM
$('<span>' + getWords(str) + '...' + '</span>').appendTo('.top_verse');
*/

// get the first phrase up to any of these: , ; : . ? ! ( )

function getFirstPhrase(string){

return string.split(/[.\,\;\:\.\?\!\(]/).slice(0,1);

}

//provide string for getFirstPhrase function
var str = $('.top_verse').text();

// delete the entire verse
$('.top_verse').text('');
//now write just the first phrase back to the DOM
$('<span>' + getFirstPhrase(str) + '… </span>').appendTo('.top_verse');

// setTimeout(function(){

	function renderIn_modalVerse() {
		$('.selected_bible_verse_fixed_on_mug').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug").textfill({maxFontPixels:2000});
	}
	function renderIn_modalReviewOrder() {
		$('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').html(
			'<span>' + $('.selected_bible_verse_fixed_on_mug_in_modalReviewOrder').text() + '</span>'
		);
		$(".selected_bible_verse_fixed_on_mug_in_modalReviewOrder").textfill({maxFontPixels:2000});
	}
renderIn_modalVerse();
renderIn_modalReviewOrder();

// }, 50);


// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.red').textStroke(1,'black');
    $('.shop > span').textStroke(4,'black');
		$('.ad_intro, .ad_description, .ad_big_message_2, .ad_big_message_3, .shop').textStroke(4,'black');
		$('.ad_big_message_1').textStroke(5,'black');
})
// END textStroke


/*
    var len = $('span').text().length;
    if(len > 60){
        $('.verse').addClass("justify");
console.log("JUSTIFIED // because // character count is: " + len);
    }
else {
console.log("NOT JUSTIFIED // because // character count is: " + len);
}
*/

// custom CSS for biblical or flowers displayed in other modals
var IsItBiblical = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItBiblical.indexOf("B") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItFlowers = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItFlowers.indexOf("F") > -1) {
      console.log("it's biblical or flower. Adding custom classes for flowers");
$('.wrap_container_showing_selected_picture').addClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').addClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforFlowers_item_little_Left');
      console.log("it's biblical or flower. Removing custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforScenery_item_little_Left');
 }
var IsItScenery = $('.container_showing_selected_picture_little_Left').attr('src');
 if (IsItScenery.indexOf("S") > -1) {
      console.log("it's not a flower. Removing custom classes for flowers");
$('.wrap_container_showing_selected_picture').removeClass('customCSSforFlowers_table');
$('img.container_showing_selected_picture').removeClass('customCSSforFlowers_cell');
$('.wrap_container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').removeClass('customCSSforFlowers_item_little_Left');
      console.log("it's not a flower. Adding custom classes for scenery");
$('.wrap_container_showing_selected_picture_little_Left').addClass('customCSSforScenery_flex_little_Left');
$('img.container_showing_selected_picture_little_Left').addClass('customCSSforScenery_item_little_Left');
 }

});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

$(document).ready(function (){
// BEGIN Order ID
$('#order_id').on('keyup', function() {
var idNeeded = $(this).val();
$('#show_order_id').text(idNeeded);
$('#fname_01_10').val(idNeeded + '_01_10');
$('#fname_11_20').val(idNeeded + '_11_20');
$('#fname_21_30').val(idNeeded + '_21_30');
$('#fname_31_40').val(idNeeded + '_31_40');
$('#fname_41_50').val(idNeeded + '_41_50');
$('#fname_51_60').val(idNeeded + '_51_60');
$('#fname_61_70').val(idNeeded + '_61_70');
$('#fname_71_80').val(idNeeded + '_71_80');
$('#fname_81_90').val(idNeeded + '_81_90');
$('#fname_91_100').val(idNeeded + '_91_100');
});
// BEGIN Render the CUSTOMER_NAME_table-cell
$( "#customize_name" ).on( "focus click", function() {
	function renderIn_modalName() {
		$('.CUSTOMER_NAME_table-cell').html(
			'<span>' + $('#customize_name').val() + '</span>'
		);
		$('.CUSTOMER_NAME_table-cell').textfill({
			maxFontPixels: 2500
		});
	}
	$('#customize_name').keyup(renderIn_modalName);
	renderIn_modalName();
});
// END Render the CUSTOMER_NAME_table-cell

// BEGIN Render the CUSTOMER_FLOWER_table-cell
$( "#customize_flower" ).on( "focus click", function() {
	function renderIn_modalFlower() {
		$('.CUSTOMER_FLOWER_table-cell').html(
			'<img class="CUSTOMER_FLOWER_img" width="" height="" src="../p-original-size/' + $('#customize_flower').val() + '.png" alt="" />'
		);
	}
	$('#customize_flower').keyup(renderIn_modalFlower);
	renderIn_modalFlower();
});
// END Render the CUSTOMER_FLOWER_table-cell

// BEGIN Render the CUSTOMER_VERSE_table-cell
$( "#customize_verse" ).on( "focus click", function() {
	function renderIn_modalVerse() {
		$('.CUSTOMER_VERSE_table-cell').html(
			'<span>' + $('#customize_verse').val() + '</span>'
		);
		$('.CUSTOMER_VERSE_table-cell').textfill({
			maxFontPixels: 2000
		});
	}
	$('#customize_verse').keyup(renderIn_modalVerse);
	renderIn_modalVerse();
});
// END Render the CUSTOMER_VERSE_table-cell

// BEGIN Render the CUSTOMER_REF_table-cell
$( "#customize_ref" ).on( "keyup change", function() {
	function renderIn_modalRef() {
		$('.CUSTOMER_REF_table-cell').html(
			'<span>' + $('#customize_ref').val() + '</span>'
		);
	}
	$('#customize_ref').keyup(renderIn_modalRef);
	renderIn_modalRef();
});
// END Render the CUSTOMER_REF_table-cell

// BEGIN Render the CUSTOMER_BACKGROUND
$( "#customize_bg" ).on( "focus click", function() {
	function renderTheBackground() {
	/*
	// commented out until I decide to use backgrounds

		$('.CUSTOMER_BACKGROUND').html(
			'<img id="bg" class="" width="2717" height="1146" src="../bg-bleed/' + $('#customize_bg').val() + '.png" alt="" />'
		);
	*/
	}
	$('#customize_bg').keyup(renderTheBackground);
	renderTheBackground();
});
	// in the meantime, we do not have a background
	$( "#bg" ).css('display', 'none');

// END Render the CUSTOMER_BACKGROUND

// BEGIN red heart stroke
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
    $('.heart').textStroke(1,'#000000');
});
// END textStroke
// END red heart stroke









/*
	// BEGIN and change font colors & shadows accordingly
	$( "#customize_bg" ).on( "keyup", function() {
// if url has a "D"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/D') > -1) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#d5ad6d");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#000000');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#000000');
});
// END textStroke
}
// if url has a "d"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/d') > -1) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#d5ad6d");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#d5ad6d");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#000000');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#000000');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#000000');
});
// END textStroke
}
// if url has a "L"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/L') > -1) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#000000");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#000000");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#d5ad6d');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#d5ad6d');
});
// END textStroke
}
// if url has a "l"
if ($(".CUSTOMER_BACKGROUND > img").attr('src').indexOf('bg-bleed/l') > -1) {
// BEGIN textStroke. text stroke made by http://jsfiddle.net/KjyYV/ hack, thanks to http://readysetdinosaurs.blogspot.com.ar/2013/05/adding-text-strokes-with-jquery-and-css.html https://github.com/simonausten/jquery-textstroke/blob/master/jquery-textstroke.js
$.fn.textStroke = function(r, colour) {
var rules = [];
var steps = 24;
for (var t=0;t<=(2*Math.PI);t+=(2*Math.PI)/steps){
var x = r*Math.cos(t);
var y = r*Math.sin(t);
x = (Math.abs(x) < 1e-6) ? '0' : x.toString();
y = (Math.abs(y) < 1e-6) ? '0' : y.toString();
rules.push( x + "px " + y + "px 0px " + colour );
}
this.css('textShadow',rules.join());
};
$(function(){
$('body').css("background", "none");
    $('.CUSTOMER_NAME_table-cell').attr("style", "").css("color", "#000000");
    $('.MADE_WITH_LOVE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_VERSE_table-cell').attr("style", "").css("color", "#000000");
    $('.CUSTOMER_REF_table-cell').attr("style", "").css("color", "#000000");

    $('.CUSTOMER_NAME_table-cell').textStroke(2,'#d5ad6d');
    $('.MADE_WITH_LOVE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_VERSE_table-cell').textStroke(2,'#d5ad6d');
    $('.CUSTOMER_REF_table-cell').textStroke(2,'#d5ad6d');
});
// END textStroke
}
});
	// END and change font colors & shadows accordingly
*/
// BEGIN button to remove guidelines
$( "#removeGuidelines" ).on( "click", function() {
	$( ".CustomCat11ozMugTemplate, .MugMockupL, .MugMockupR" ).toggle('slow');
});
// END button to remove guidelines

    $('#SaveHTMLpage').click(function(){
var order_id = $('#order_id').val();
      // fill the show_order_id div
      $('#show_order_id').text(order_id);

        // Save the page's HTML to a file that is automatically downloaded.

        // We make a Blob that contains the data to download.
        var file = new window.Blob([document.documentElement.innerHTML], { type: "text/html" });
        var URL = window.webkitURL || window.URL;

        // This is the URL that will download the data.
        var downloadUrl = URL.createObjectURL(file);

        var a = document.createElement("a");
        // This sets the file name.
        a.download = order_id + ".html";
        a.href = downloadUrl;

        // Actually perform the download.
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

////////////////////////////////////
// BEGIN node JS file 01-10 ///////
////////////////////////////////////
// fill the input that will contain the content of the js file to create
$('#populate_01_10').on('click', function() {
var idNeeded = $('#order_id').val();
$('#fname_01_10').val(idNeeded + '_01_10');
$('#fname_11_20').val(idNeeded + '_11_20');
$('#fname_21_30').val(idNeeded + '_21_30');
$('#fname_31_40').val(idNeeded + '_31_40');
$('#fname_41_50').val(idNeeded + '_41_50');
$('#fname_51_60').val(idNeeded + '_51_60');
$('#fname_61_70').val(idNeeded + '_61_70');
$('#fname_71_80').val(idNeeded + '_71_80');
$('#fname_81_90').val(idNeeded + '_81_90');
$('#fname_91_100').val(idNeeded + '_91_100');
// node JS File to run the 10 Ad images for this verse
var commentFileTitle = "// node JS File to run the 10 Ad images for this verse\n\n";
// var to populate initial for Autofill node JS File Content
var initialRequireFileSystem = "const fsPromises = require('fs').promises;\n\n";
// common variables for all ads
var beforeHtmlFileName = "fsPromises.writeFile('";
var afterHtmlFileName = ".html', '<html>";
// Ad 01 BEGIN
// Targeting Women with: so I asked him... What's your favourite verse?
// So, let's modify the DOM for Ad 01
var DOM_modified_for_Ad_01 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "His Name")
.replace("s_ad_big_message_1", "so I asked him")
.replace("s_ad_big_message_2", "What's your favorite verse?")
.replace("Add my Name", "Add his Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 230px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/S-115.png');
// now proceed to build the code
var commentBeginAd_01 = "// BEGIN Ad 01\n";
var commentEndAd_01 = "\n// END Ad 01\n\n";
var HtmlFileName_01 = $('#order_id').val() + "-AD-01-" + "S-115";
var lets_add_the_rest_for_Ad_01 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_01 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_01 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_01 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_01 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_01 = (commentBeginAd_01 + beforeHtmlFileName + HtmlFileName_01 + afterHtmlFileName + DOM_modified_for_Ad_01 + lets_add_the_rest_for_Ad_01 + commentEndAd_01).replace("</script>\n", "</script>");
// Ad 01 END
// Ad 02 BEGIN
// Targeting Women with: I'd like him to... believe this verse every day
// So, let's modify the DOM for Ad 02
var DOM_modified_for_Ad_02 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "His Name")
.replace("s_ad_big_message_1", "I'd like him to")
.replace("s_ad_big_message_2", "believe this verse every day")
.replace("Add my Name", "Add his Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 245px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/S-115.png');
// now proceed to build the code
var commentBeginAd_02 = "// BEGIN Ad 02\n";
var commentEndAd_02 = "\n// END Ad 02\n\n";
var HtmlFileName_02 = $('#order_id').val() + "-AD-02-" + "S-115";
var lets_add_the_rest_for_Ad_02 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_02 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_02 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_02 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_02 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_02 = (commentBeginAd_02 + beforeHtmlFileName + HtmlFileName_02 + afterHtmlFileName + DOM_modified_for_Ad_02 + lets_add_the_rest_for_Ad_02 + commentEndAd_02).replace("</script>\n", "</script>");
// Ad 02 END
// Ad 03 BEGIN
// Targeting Women with: there's a verse... I want to keep in mind
// So, let's modify the DOM for Ad 03
var DOM_modified_for_Ad_03 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "My Name")
.replace("s_ad_big_message_1", "there's a verse")
.replace("s_ad_big_message_2", "I want to keep in mind")
.replace("Add my Name", "Add my Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/F-017.png');
// now proceed to build the code
var commentBeginAd_03 = "// BEGIN Ad 03\n";
var commentEndAd_03 = "\n// END Ad 03\n\n";
var HtmlFileName_03 = $('#order_id').val() + "-AD-03-" + "F-017";
var lets_add_the_rest_for_Ad_03 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_03 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_03 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_03 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_03 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_03 = (commentBeginAd_03 + beforeHtmlFileName + HtmlFileName_03 + afterHtmlFileName + DOM_modified_for_Ad_03 + lets_add_the_rest_for_Ad_03 + commentEndAd_03).replace("</script>\n", "</script>");
// Ad 03 END
// Ad 04 BEGIN
// Targeting Women with: I will believe... this verse every morning
// So, let's modify the DOM for Ad 04
var DOM_modified_for_Ad_04 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "My Name")
.replace("s_ad_big_message_1", "I will believe")
.replace("s_ad_big_message_2", "this verse every morning")
.replace("Add my Name", "Add my Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/F-017.png');
// now proceed to build the code
var commentBeginAd_04 = "// BEGIN Ad 04\n";
var commentEndAd_04 = "\n// END Ad 04\n\n";
var HtmlFileName_04 = $('#order_id').val() + "-AD-04-" + "F-017";
var lets_add_the_rest_for_Ad_04 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_04 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_04 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_04 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_04 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_04 = (commentBeginAd_04 + beforeHtmlFileName + HtmlFileName_04 + afterHtmlFileName + DOM_modified_for_Ad_04 + lets_add_the_rest_for_Ad_04 + commentEndAd_04).replace("</script>\n", "</script>");
// Ad 04 END
// Ad 05 BEGIN
// Targeting Women with: I want to remember... this verse every morning
// So, let's modify the DOM for Ad 05
var DOM_modified_for_Ad_05 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "My Name")
.replace("s_ad_big_message_1", "I want to remember")
.replace("s_ad_big_message_2", "this verse every morning")
.replace("Add my Name", "Add my Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/F-017.png');
// now proceed to build the code
var commentBeginAd_05 = "// BEGIN Ad 05\n";
var commentEndAd_05 = "\n// END Ad 05\n\n";
var HtmlFileName_05 = $('#order_id').val() + "-AD-05-" + "F-017";
var lets_add_the_rest_for_Ad_05 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_05 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_05 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_05 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_05 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_05 = (commentBeginAd_05 + beforeHtmlFileName + HtmlFileName_05 + afterHtmlFileName + DOM_modified_for_Ad_05 + lets_add_the_rest_for_Ad_05 + commentEndAd_05).replace("</script>\n", "</script>");
// Ad 05 END
// Ad 06 BEGIN
// Targeting Men with: so I asked her... What's your favorite verse?
// So, let's modify the DOM for Ad 06
var DOM_modified_for_Ad_06 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "Her Name")
.replace("s_ad_big_message_1", "so I asked her")
.replace("s_ad_big_message_2", "What's your favorite verse?")
.replace("Add my Name", "Add her Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 240px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/F-017.png');
// now proceed to build the code
var commentBeginAd_06 = "// BEGIN Ad 06\n";
var commentEndAd_06 = "\n// END Ad 06\n\n";
var HtmlFileName_06 = $('#order_id').val() + "-AD-06-" + "F-017";
var lets_add_the_rest_for_Ad_06 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_06 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_06 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_06 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_06 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_06 = (commentBeginAd_06 + beforeHtmlFileName + HtmlFileName_06 + afterHtmlFileName + DOM_modified_for_Ad_06 + lets_add_the_rest_for_Ad_06 + commentEndAd_06).replace("</script>\n", "</script>");
// Ad 06 END
// Ad 07 BEGIN
// Targeting Men with: I'd like her to... believe this verse every day
// So, let's modify the DOM for Ad 07
var DOM_modified_for_Ad_07 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "Her Name")
.replace("s_ad_big_message_1", "I'd like her to")
.replace("s_ad_big_message_2", "believe this verse every day")
.replace("Add my Name", "Add her Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 257px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/F-017.png');
// now proceed to build the code
var commentBeginAd_07 = "// BEGIN Ad 07\n";
var commentEndAd_07 = "\n// END Ad 07\n\n";
var HtmlFileName_07 = $('#order_id').val() + "-AD-07-" + "F-017";
var lets_add_the_rest_for_Ad_07 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_07 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_07 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_07 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_07 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_07 = (commentBeginAd_07 + beforeHtmlFileName + HtmlFileName_07 + afterHtmlFileName + DOM_modified_for_Ad_07 + lets_add_the_rest_for_Ad_07 + commentEndAd_07).replace("</script>\n", "</script>");
// Ad 07 END
// Ad 08 BEGIN
// Targeting Men with: there's a verse... I want to keep in mind
// So, let's modify the DOM for Ad 08
var DOM_modified_for_Ad_08 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "My Name")
.replace("s_ad_big_message_1", "there's a verse")
.replace("s_ad_big_message_2", "I want to keep in mind")
.replace("Add my Name", "Add my Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 234px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/S-115.png')
.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
// now proceed to build the code
var commentBeginAd_08 = "// BEGIN Ad 08\n";
var commentEndAd_08 = "\n// END Ad 08\n\n";
var HtmlFileName_08 = $('#order_id').val() + "-AD-08-" + "S-115";
var lets_add_the_rest_for_Ad_08 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_08 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_08 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_08 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_08 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_08 = (commentBeginAd_08 + beforeHtmlFileName + HtmlFileName_08 + afterHtmlFileName + DOM_modified_for_Ad_08 + lets_add_the_rest_for_Ad_08 + commentEndAd_08).replace("</script>\n", "</script>");
// Ad 08 END
// Ad 09 BEGIN
// Targeting Men with: I will believe... this verse every morning
// So, let's modify the DOM for Ad 09
var DOM_modified_for_Ad_09 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "My Name")
.replace("s_ad_big_message_1", "I will believe")
.replace("s_ad_big_message_2", "this verse every morning")
.replace("Add my Name", "Add my Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 236px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/S-115.png')
.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
// now proceed to build the code
var commentBeginAd_09 = "// BEGIN Ad 09\n";
var commentEndAd_09 = "\n// END Ad 09\n\n";
var HtmlFileName_09 = $('#order_id').val() + "-AD-09-" + "S-115";
var lets_add_the_rest_for_Ad_09 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_09 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_09 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_09 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_09 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_09 = (commentBeginAd_09 + beforeHtmlFileName + HtmlFileName_09 + afterHtmlFileName + DOM_modified_for_Ad_09 + lets_add_the_rest_for_Ad_09 + commentEndAd_09).replace("</script>\n", "</script>");
// Ad 09 END
// Ad 10 BEGIN
// Targeting Men with: I want to remember... this verse every morning
// So, let's modify the DOM for Ad 10
var DOM_modified_for_Ad_10 = $('html').html()
.replace('../this_is_to_gen_pages_to_gen_images_1200x1200.js', '')
.replace("My Name", "My Name")
.replace("s_ad_big_message_1", "I want to remember")
.replace("s_ad_big_message_2", "this verse every morning")
.replace("Add my Name", "Add my Name")
.replace(/\'/g, "\\\'")
.replace("text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px;", "text-shadow: black 5px 0px 0px, black 4.82963px 1.2941px 0px, black 4.33013px 2.5px 0px, black 3.53553px 3.53553px 0px, black 2.5px 4.33013px 0px, black 1.2941px 4.82963px 0px, black 0px 5px 0px, black -1.2941px 4.82963px 0px, black -2.5px 4.33013px 0px, black -3.53553px 3.53553px 0px, black -4.33013px 2.5px 0px, black -4.82963px 1.2941px 0px, black -5px 0px 0px, black -4.82963px -1.2941px 0px, black -4.33013px -2.5px 0px, black -3.53553px -3.53553px 0px, black -2.5px -4.33013px 0px, black -1.2941px -4.82963px 0px, black 0px -5px 0px, black 1.2941px -4.82963px 0px, black 2.5px -4.33013px 0px, black 3.53553px -3.53553px 0px, black 4.33013px -2.5px 0px, black 4.82963px -1.2941px 0px, black 5px 0px 0px; font-size: 168px !important;")
.replace('p-original-size/S-001.png', 'p-original-size/S-115.png')
.replace('<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left">', '<div id="" class="wrap_container_showing_selected_picture_little_Left customCSSforScenery_flex_little_Left" style="top: 580px;">');
// now proceed to build the code
var commentBeginAd_10 = "// BEGIN Ad 10\n";
var commentEndAd_10 = "\n// END Ad 10\n\n";
var HtmlFileName_10 = $('#order_id').val() + "-AD-10-" + "S-115";
var lets_add_the_rest_for_Ad_10 = "</html>', function (err) {  if (err) throw err;  console.log('" + HtmlFileName_10 + " Saved!');}).then(() => {    console.log('I think " + HtmlFileName_10 + " is saved, so I\\\'m going to run the puppeteer now');const puppeteer = require('/home/demo/node_modules/puppeteer'); (async () => { const browser = await puppeteer.launch({      defaultViewport: {width: 1200, height: 1200}  }); const page = await browser.newPage(); await page.goto('file:///media/demo/ALL-DATA/Github/BibleCups/ADS_DESIGN_HERE/ADS_Pages_Ready_To_Edit_Before_Node/" + HtmlFileName_10 + ".html'); await page.waitForTimeout(100); await page.screenshot({ path: '//media/demo/ALL-DATA/Github/BibleCups/ADS_RENDER_HERE/" + HtmlFileName_10 + ".png' }); await browser.close(); })();  }).catch(er => {    console.log(er);  });";
var finishedWithAd_10 = (commentBeginAd_10 + beforeHtmlFileName + HtmlFileName_10 + afterHtmlFileName + DOM_modified_for_Ad_10 + lets_add_the_rest_for_Ad_10 + commentEndAd_10).replace("</script>\n", "</script>");
// Ad 10 END


// fill textarea with complete code to render all ads
$('#fcontent_01_10').val(
commentFileTitle +
initialRequireFileSystem +
finishedWithAd_01 +
finishedWithAd_02 +
finishedWithAd_03 +
finishedWithAd_04 +
finishedWithAd_05 +
finishedWithAd_06 +
finishedWithAd_07 +
finishedWithAd_08 +
finishedWithAd_09 +
finishedWithAd_10
);
});


// BEGIN save js file to later run puppeteer
(function() {
    var textFile = null,
        makeTextFile = function(js) {
            var data = new Blob([js], {
                type: 'text/javascript'
            });

            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };


    var create = document.getElementById('create_01_10');
    var fileContent = document.getElementById("fcontent_01_10");

    create.addEventListener('click', function() {
        const fileName = document.getElementById("fname_01_10").value;
        document.getElementById("downloadlink_01_10").setAttribute("download", fileName);
        var link = document.getElementById('downloadlink_01_10');
        link.href = makeTextFile(fileContent.value);
        link.style.display = 'block';
    }, false);
})();
////////////////////////////////////
// END node JS file 01-10 ///////
////////////////////////////////////







////////////////////////////////////
// BEGIN move flower up/down ///////
////////////////////////////////////
$('#moveFlowerUpDown').on('change', function() {
var moveThisMuch = $(this).val();
$('.wrap_container_showing_selected_picture_little_Left').css('top', moveThisMuch);
});
////////////////////////////////////
// EBD move flower up/down ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN increase font size ///////
////////////////////////////////////
$('#increaseFontSize').on('change', function() {
var increaseThisMuch = $(this).val();
$('.selected_bible_verse_fixed_on_mug > span').css('font-size', increaseThisMuch + 'px');
});
////////////////////////////////////
// EBD increase font size ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN decrease line height ///////
////////////////////////////////////
$('#decreaseLineHeight').on('change', function() {
var decreaseThisMuch = $(this).val();
$('.selected_bible_verse_fixed_on_mug > span').css('line-height', decreaseThisMuch + 'px');
});
////////////////////////////////////
// EBD decrease line height ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN automatically select current font-size & line-height in select boxes ///////
////////////////////////////////////
$(document).on("focusin",".DesignCustomerOrdersUI_select_increaseFontSize",function(){
var fontSizeNeededForSelectIncreaseFontSize = $(".selected_bible_verse_fixed_on_mug > span").css('font-size').replace('px', '');
console.log("Current font-size is: " + fontSizeNeededForSelectIncreaseFontSize);
$('#increaseFontSize').val(fontSizeNeededForSelectIncreaseFontSize);
$('#increaseFontSize').change();
$('#decreaseLineHeight').val(fontSizeNeededForSelectIncreaseFontSize);
$('#decreaseLineHeight').change();
});
////////////////////////////////////
// END automatically select current font-size & line-height in select boxes ///////
////////////////////////////////////

////////////////////////////////////
// BEGIN move ref sideways ///////
////////////////////////////////////
$('#moveRefSideways').on('change', function() {
var moveThisMuch = $(this).val();
$('.bot_left').css('left', moveThisMuch + 'px');
});
////////////////////////////////////
// END move ref sideways ///////
////////////////////////////////////




///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//BEGIN integrate select book chapter verse and bring it in with ajax lie the website does/////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

  // ////////////////////////// -->
  // BEGIN STEP 1 - VERSE -->
  // ////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
// initial book situation
var selected_book = $('#select_book').find('.selected').html().split(' ')[0];
 console.log('Upon landing - Book: ' + selected_book);
// initial chapter situation
var selected_chapter = $('#select_chapter').find('.selected').html().split(' ')[0];
 console.log('Upon landing - Chapter: ' + selected_chapter);
// initial verse situation
var selected_verse = $('#select_verse').find('.selected').html().split(' ')[0];
 console.log('Upon landing - Verse: ' + selected_verse);
// hidden containers holding selections get updated when page visited
$('#hidden_book_desired').text(selected_book);
$('#hidden_chapter_desired').text(selected_chapter);
$('#hidden_verse_desired').text(selected_verse);
////////////////////////// -->
// update class on the select elements and update the hidden divs
$('select#select_book').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_book = $('#select_book').find('.selected').html().split(' ')[0];
$('#hidden_book_desired').text(selected_book);
console.log('Book changed to: ' + selected_book);
});

$('select#select_chapter').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_chapter = $('#select_chapter').find('.selected').html().split(' ')[0];
$('#hidden_chapter_desired').text(selected_chapter);
console.log('Chapter changed to: ' + selected_chapter);
});

$('select#select_verse').change(function(){
    $(this).find(':selected').addClass('selected')
           .siblings('option').removeClass('selected');
var selected_verse = $('#select_verse').find('.selected').html().split(' ')[0];
		   $('#hidden_verse_desired').text(selected_verse);
console.log('Verse changed to: ' + selected_verse);
});
////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
////////////////////////// -->
// BEGIN When coming from the menu Create Your Own ///// -->
////////////////////////// -->
$( ".CreateYourOwnDesign" ).on( "click", function() {
// close the menu_modal
        $(".menu_modal").hide();
// open the modal
        $(".modal_customize_verse").show();
        $(".opacity_cover").show();
// display a selected book chapter verse or offer to choose one
	if ($('.selected_verse:contains("Nothing selected yet")').length > 0)
 {
// when customer has not yet selected a verse
     $('.lets_change').hide();
     $('.lets_choose').show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the welcome instructions
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
////////////////////////// -->
////////////////////////// -->
// END render the welcome instructions
////////////////////////// -->
////////////////////////// -->

 } else {
// if statement is to make sure all 3 select elements have been changed to something other than the defaults.
if (($('#hidden_book_desired').text() != 'select') && ($('#hidden_chapter_desired').text() != '0') && ($('#hidden_verse_desired').text() != '0')) {
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
$(".step1_next_step2").css("background", "#292a00").show();
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('../../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\[.*?\]/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '').replace(/\(\(.*?\)\)/g , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('.populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('.populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");
$('.populated_verse_with_ajax_in_modalReviewOrder').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
// Update newly selected verse at the top
var newlySelectedBook = $('#hidden_book_desired').text();
var newlySelectedChapter = $('#hidden_chapter_desired').text();
var newlySelectedVerse = $('#hidden_verse_desired').text();
$(".selected_verse").text(newlySelectedBook + '-' + newlySelectedChapter + '-' + newlySelectedVerse);
     $('.lets_choose').hide();
     $('.lets_change').show();
////////////////////////// -->
////////////////////////// -->
// END render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
  })
  .fail(function() {
    console.log( ".fail function: Unable to retrieve that verse" );
	$('.populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$('.populated_verse_with_ajax_in_modalReviewOrder').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".step1_next_step2").hide();
	clearTimeout(step1_next_step2TimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
////////////////////////// -->
////////////////////////// -->
// END render the fail and error verse
////////////////////////// -->
////////////////////////// -->

  })
  .always(function() {
    console.log( ".always function: Finished" );
  });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
  console.log( "jqxhr.always function: Second finished" );
});
} // this is the end of the if statement
 }
});
////////////////////////// -->
// BEGIN say "got it!" when all 3 are selected and bring in the scripture
////////////////////////// -->
$('select#select_book, select#select_chapter, select#select_verse').change(function(){
// if statement is to make sure all 3 select elements have been changed to something other than the defaults.
if (($('#hidden_book_desired').text() != 'select') && ($('#hidden_chapter_desired').text() != '0') && ($('#hidden_verse_desired').text() != '0')) {
	///////////////////////////////////////////////////
	/// BEGIN waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
$('.popup_ok_this_verse_selected').show();
$(".wait_to_load_options").show();
    $('.hidden_1').removeClass('class_hide_show');
    $('.hidden_2').removeClass('class_hide_show');
    $('.hidden_3').removeClass('class_hide_show');
    $('.hidden_4').removeClass('class_hide_show');
	var timer1,
		clock = 3;
	$(startup);
	function startup() {
		$(start).trigger({
			type: "click",
			which: 1
		});
	}
	function start() {
		clock = 3;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		timer1 = setInterval(countdown, 1000);
	}
	function countdown() {
		clock -= 1;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		if (clock == 0) {
			clearInterval(timer1);
			$("#btn_countdown_start").prop("disabled", false);
			$(".wait_to_load_options").hide("slow");
		}
	}
  setTimeout(function() {
$('.popup_ok_this_verse_selected').hide("slow");
    $('.hidden_1').addClass('class_hide_show');
    $('.hidden_2').addClass('class_hide_show');
    $('.hidden_3').addClass('class_hide_show');
    $('.hidden_4').addClass('class_hide_show');
  }, 3500);
	///////////////////////////////////////////////////
	/// END waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
  $(".step1_next_step2").css("background", "#292a00").show();
  $(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('../../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\[.*?\]/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '').replace(/\(\(.*?\)\)/g , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('.populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('.populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");
$('.populated_verse_with_ajax_in_modalReviewOrder').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);

// Update newly selected verse at the top
var newlySelectedBook = $('#hidden_book_desired').text();
var newlySelectedChapter = $('#hidden_chapter_desired').text();
var newlySelectedVerse = $('#hidden_verse_desired').text();
$(".selected_verse").text(newlySelectedBook + '-' + newlySelectedChapter + '-' + newlySelectedVerse);
     $('.lets_choose').hide();
     $('.lets_change').show();
////////////////////////// -->
////////////////////////// -->
// END render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
  })
  .fail(function() {
    console.log( ".fail function: Unable to retrieve that verse" );
	$('.populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$('.populated_verse_with_ajax_in_modalReviewOrder').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".step1_next_step2").hide();
	clearTimeout(step1_next_step2TimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
////////////////////////// -->
////////////////////////// -->
// END render the fail and error verse
////////////////////////// -->
////////////////////////// -->

  })
  .always(function() {
    console.log( ".always function: Finished" );
  });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
  console.log( "jqxhr.always function: Second finished" );
});
} // this is the end of the if statement
}); // this is the end of the change function
////////////////////////// -->
// END say "got it!" when all 3 are selected and bring in the scripture
////////////////////////// -->
////////////////////////// -->
// END When coming from the menu Create Your Own ///// -->
////////////////////////// -->
////////////////////////// -->
// BEGIN When coming from the changeVerse links ///// -->
////////////////////////// -->
$( "body" ).on( "click", ".changeVerse", function(event) {
// event.preventDefault();
	///////////////////////////////////////////////////
	/// BEGIN waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
$('.popup_ok_this_verse_selected').show();
$(".wait_to_load_options").show();
    $('.hidden_1').removeClass('class_hide_show');
    $('.hidden_2').removeClass('class_hide_show');
    $('.hidden_3').removeClass('class_hide_show');
    $('.hidden_4').removeClass('class_hide_show');
	var timer1,
		clock = 3;
	$(startup);
	function startup() {
		$(start).trigger({
			type: "click",
			which: 1
		});
	}
	function start() {
		clock = 3;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		timer1 = setInterval(countdown, 1000);
	}
	function countdown() {
		clock -= 1;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		if (clock == 0) {
			clearInterval(timer1);
			$("#btn_countdown_start").prop("disabled", false);
			$(".wait_to_load_options").hide("slow");
		}
	}
  setTimeout(function() {
$('.popup_ok_this_verse_selected').hide("slow");
    $('.hidden_1').addClass('class_hide_show');
    $('.hidden_2').addClass('class_hide_show');
    $('.hidden_3').addClass('class_hide_show');
    $('.hidden_4').addClass('class_hide_show');
  }, 3500);
	///////////////////////////////////////////////////
	/// END waitingto_load_verse_countdown ///////
	///////////////////////////////////////////////////
// when customer arrives here by clicking under a particular samle image
var bookNeeded = $(this).parent().find(".changeVerse").attr('book');
var chapterNeeded = $(this).parent().find(".changeVerse").attr('chapter');
var verseNeeded = $(this).parent().find(".changeVerse").attr('verse');
var completeRefNeeded = (bookNeeded + '-' + chapterNeeded + '-' + verseNeeded);
console.log(completeRefNeeded);
// simulate the clicks and changes on the select boxes
var booktoselect = $('#select_book option').filter(function() {return $(this).text() === bookNeeded;});
$('#select_book option').removeClass('selected');
$(booktoselect).prop('selected', true).addClass('selected').trigger('change');
var chaptertoselect = $('#select_chapter option').filter(function() {return $(this).text() === chapterNeeded;});
$('#select_chapter option').removeClass('selected');
$(chaptertoselect).prop('selected', true).addClass('selected').trigger('change');
var versetoselect = $('#select_verse option').filter(function() {return $(this).text() === verseNeeded;});
$('#select_verse option').removeClass('selected');
$(versetoselect).prop('selected', true).addClass('selected').trigger('change');
// update the hidden divs
$('#hidden_book_desired').text(bookNeeded);
$('#hidden_chapter_desired').text(chapterNeeded);
$('#hidden_verse_desired').text(verseNeeded);
// put verse selected in the modal
$(".selected_verse").text(completeRefNeeded);
     $('.lets_choose').hide();
     $('.lets_change').show();
// open the modal
        $(".modal_customize_verse").show();
        $(".opacity_cover").show();
// customer has selected a verse, so...
     $('.lets_change').show();
     $('.lets_choose').hide();
$(".no_book_nor_chapter_nor_verse_selection_yet").hide();
var step1_next_step2TimeoutID = setTimeout(function() {
  $(".step1_next_step2").css("background", "#292a00").show();
  $(".no_book_nor_chapter_nor_verse_selection_yet").hide();
  }, 1500);
var willGrabBook = $('#hidden_book_desired').text();
var willGrabChapter = $('#hidden_chapter_desired').text();
var willGrabVerse = $('#hidden_verse_desired').text();
var completeVerseURLtoGrab = ('../../data_files/_YourNameHere_/' + willGrabBook + '/' + willGrabBook + '-' + willGrabChapter + '-' + willGrabVerse + '.html');
console.log("completeVerseURLtoGrab is: " + completeVerseURLtoGrab);
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( completeVerseURLtoGrab, function() {
  console.log( "Began bringing in the verse via Ajax" );
})
  .done(function(result) {
var html = jQuery('<div>').html(result);
var removedItalicsAndRef = $(html).find('.v').html().replace(/\[.*?\]/g , '').replace(/<i>/ , '').replace(/<\/i>/ , '').replace(/\(\(.*?\)\)/g , '');
console.log("Removed the italics and ref like this: " + removedItalicsAndRef);
$('.populated_ref_with_ajax').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
$('.populated_ref_with_ajax_in_modalReviewOrder').html(willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);
  console.log( 'Now populating the ref like this: ' + willGrabBook + ' ' + willGrabChapter + ' : ' + willGrabVerse);

$('.populated_verse_with_ajax').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");
$('.populated_verse_with_ajax_in_modalReviewOrder').html(removedItalicsAndRef);
console.log(".done function is now populating the text of the verse...");

////////////////////////// -->
////////////////////////// -->
// BEGIN render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
}, 3500);
// Update newly selected verse at the top
var newlySelectedBook = $('#hidden_book_desired').text();
var newlySelectedChapter = $('#hidden_chapter_desired').text();
var newlySelectedVerse = $('#hidden_verse_desired').text();
$(".selected_verse").text(newlySelectedBook + '-' + newlySelectedChapter + '-' + newlySelectedVerse);
     $('.lets_choose').hide();
     $('.lets_change').show();
////////////////////////// -->
////////////////////////// -->
// END render the Ajaxed verse
////////////////////////// -->
////////////////////////// -->
  })
  .fail(function() {
    console.log( ".fail function: Unable to retrieve that verse" );
	$('.populated_verse_with_ajax').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
	$('.populated_verse_with_ajax_in_modalReviewOrder').html("Nope. You selected the wrong chapter, or you selected the wrong verse. or you have no internet. Please try again.");
// things went wrong, so we're back to square one
	$(".selected_verse").text("Nothing selected yet");
     $('.lets_choose').show();
     $('.lets_change').hide();
	$(".step1_next_step2").hide();
	clearTimeout(step1_next_step2TimeoutID);
	$(".no_book_nor_chapter_nor_verse_selection_yet").show();

////////////////////////// -->
////////////////////////// -->
// BEGIN render the fail and error verse
////////////////////////// -->
////////////////////////// -->
	function renderIn_modalVerse() {
		$('.populated_verse_with_ajax').html(
			'<span>' + $('.populated_verse_with_ajax').text() + '</span>'
		);
		$(".populated_verse_with_ajax").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalVerse.");
setTimeout(function() {
renderIn_modalVerse();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
	function renderIn_modalReviewOrder() {
		$('.populated_verse_with_ajax_in_modalReviewOrder').html(
			'<span>' + $('.populated_verse_with_ajax_in_modalReviewOrder').text() + '</span>'
		);
		$(".populated_verse_with_ajax_in_modalReviewOrder").textfill({maxFontPixels:200});


	}
console.log("We're giving it 5 seconds before we renderIn_modalReviewOrder.");
setTimeout(function() {
renderIn_modalReviewOrder();
}, 3500);
setTimeout(function() {
console.log("The 5 seconds went by, so we should now have it rendered.");
console.log( "Now things should be still okay, and ready to try again." );
}, 3500);
////////////////////////// -->
////////////////////////// -->
// END render the fail and error verse
////////////////////////// -->
////////////////////////// -->

  })
  .always(function() {
    console.log( ".always function: Finished" );
  });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
  console.log( "jqxhr.always function: Second finished" );
});
});
////////////////////////// -->
// END When coming from the changeVerse links ///// -->
////////////////////////// -->
  // ////////////////////////// -->
  // END STEP 1 - VERSE -->
  // ////////////////////////// -->
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//END integrate select book chapter verse and bring it in with ajax lie the website does/////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//////////
// focus on Order ID upon landing
$(".DesignCustomerOrdersUI_imput_ORDER").focus();
//////////

// BEGIN update order ID & node JS file name
$('#select_book, #select_chapter, #select_verse').on('change', function() {
var getHiddenBook = $('#hidden_book_desired').text();
var getHiddenChapter = $('#hidden_chapter_desired').text();
var getHiddenVerse = $('#hidden_verse_desired').text();
$('#order_id, #fname').val(getHiddenBook + '-' + getHiddenChapter + '-' + getHiddenVerse);
});
// END update order ID & node JS file name







});
