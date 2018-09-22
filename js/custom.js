$(function () {

	'use strict';

	//Adjust Main Height 
	$('.main, .main .info, .main .content').height($(window).height());

	// Add Height To Class box / ch 
	var
		boxMrTotal = $('.box').outerHeight(true) - $('.box').outerHeight(), // Height Of Margin
		boxHeight = $('.sections').height() - boxMrTotal; // Height - Margin
	$('.box, .ch').height(boxHeight); // Height Of Div


	// Adust Contents On Screen Height Resize
	$(window).resize(function () {
		$('.main, .main .info, .main .content').height($(window).height()); // Adjust Class Main Height 
		boxMrTotal = $('.box').outerHeight(true) - $('.box').outerHeight(); //Calc Class box Height 
		$('.box').height($('.sections').height() - boxMrTotal); // Add Height To Class box
	});





});