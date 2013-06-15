	$(document).ready(function(){
		$('#submit').click(function(){
			new_item = $('#new_list').val();
			$('#sample').append('<li class="new_items">'+new_item+'</li>');
			$('.new_items').draggable();//important to add this line for dynamically added elements

		});

		/* Dynamically created elements need the below method*/

		$('#sample').on('click', '.new_items', function(){
			if($(this).css('text-decoration')=='none'){
				$(this).css("text-decoration","line-through");
				$(this).css("background-color","rgba(0,0,0,0)");
				$(this).css("color","black");
			}else{
				$(this).css("text-decoration","none");
				$(this).css("background-color","rgba(0,0,0,1)");
				$(this).css("color","white");
			}
			
		});

		$(function(){
			$('#test').draggable();
			$('#trash').droppable({
				drop:function(event,ui){
					$(ui.draggable).remove();
				}
			});
		});
			
		});



		