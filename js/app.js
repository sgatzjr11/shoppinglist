$(document).ready(function()
	{
		$("#add-button").on("click", function(e)
			{
				e.preventDefault();
				addButton();
				$('#add-button').prop('disabled', true);
			});
	

		$(".shop-table").on("click", ".fa-trash-o", function(e)
			{
				e.preventDefault();
				$(this).closest("tr").fadeOut("slow", function() 
				{
					$(this).remove()
				});
				
			});



		$(".shop-table").on("click", ".fa-check", function(e)
			{
				e.preventDefault();
				$(this).closest("tr").find("span").toggleClass("cross-out");
				$(this).toggleClass("red");
		});


//checks for item to be entered first 
		
		$('#enter-item').on('keyup', function() {
			var nameLength = $('#add-items').length;
			if (nameLength > 0) 
			{
			$('#add-button').removeAttr('disabled');
			}
		});

	
});



    var addButton = function(){
			var add = $("#add-items").val();
			var newItem = $("<tr><td class='trash'><i class='fa fa-trash-o fa-2x'></i></td><td class='list-item'><span class='items'>" + add + "</span></td><td class='check'><i class='fa fa-check fa-2x'></i></td></tr>").hide();
			$(".shop-table").append(newItem);
			newItem.fadeIn("slow");
			$("#add-items").val("");
	}

