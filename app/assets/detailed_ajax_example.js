
$(document).on "ready page:change", ->
	$('.store .entry > img').click ->
		$(this).parent().find(':submit').click()
		

$(document).on('ready', function(e1){
	e1
// $(document).ready(function(){
// $(function(){
	$('.store .entry > img').click(function(e2){
	// $('.store .entry > img').on('click', function(){
		$(this).parent().find(':submit').click()
	})

	$('button').on('click', function(){
	// $('body').on('click', 'button', function(){
		var form = $(this)

		$.ajax({
			url: '/line_items',
			method: 'post',
			data: form.serialize()
		})

		.done(function(data){
			$('#cart').append('<tr><td>'+ data +'</td></tr>')
		})

		.fail(function(){
			console.log('error!')
		})
	})
})

