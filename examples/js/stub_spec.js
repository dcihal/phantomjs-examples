describe("Test Stub", function() {
	it("should get a friend list from the server", function() {
		setFixtures('<div id="friends"></container>');
    	spyOn(jQuery,'ajax');

    	$('#friends').addFriendList();
    	
    	jQuery.ajax.mostRecentCall.args[0].success('<ul><li>Arturo</li><li>Concetto</li></ul>');
    	expect($('#friends li').length).toBe(2);
	});
});