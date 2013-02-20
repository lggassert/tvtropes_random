function randomTrope() {
	chrome.tabs.create({
		url: "http://tvtropes.org/pmwiki/randomitem.php?p=1"
	});
}

chrome.browserAction.onClicked.addListener(randomTrope);
