const tabs = new Array();

const pageContainer = document.querySelector('.page-container');

const buildTab1Content = () => {
	const table = document.createElement('table');
	table.classList.add('table');
	const thead = document.createElement('thead');
	let quotes = new Array();
	let tbody = document.createElement('tbody');

	pageContainer.appendChild(table);
	table.appendChild(thead);
	table.appendChild(tbody);

	getAllQuotes().then((results) => {
		Object.values(results).forEach((item) => {
			let i = 0;
			item.forEach((quote) => {
				quotes[i++] = quote;
			});
		});
		buildQuoteTable(quotes, thead, tbody);
	});
	table.style.display = 'none';
};

const getTabs = () => {
	return document.querySelectorAll('.nav-link');
};

const getAllQuotes = () => {
	return fetch('http://api.robertosaliola.eu/quotes', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((responseData) => {
			return responseData;
		})
		.catch((error) => console.warn(error));
};

const buildTableThead = (quotes, thead) => {
	const tr = document.createElement('tr');
	thead.appendChild(tr);
	Object.keys(quotes[0]).forEach((quote) => {
		const th = document.createElement('th');
		th.setAttribute('scope', 'col');
		th.innerHTML = quote;
		tr.appendChild(th);
	});
};

const buildTableTbody = (quotes, tbody) => {
	quotes.forEach((quote) => {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		Object.values(quote).forEach((item) => {
			const td = document.createElement('td');
			td.innerHTML = item;
			tr.appendChild(td);
		});
	});
};

const buildQuoteTable = (quotes, thead, tbody) => {
	buildTableThead(quotes, thead);
	buildTableTbody(quotes, tbody);
};

const handleNavClick = (tabs) => {
	tabs.forEach((tab) => {
		tab.element.addEventListener('click', () => {
			if (document.querySelector('.active')) {
				document.querySelector('.active').classList.remove('disabled');
				document.querySelector('.active').classList.remove('active');
			}
			tab.element.classList.add('active');
			tab.element.classList.add('disabled');
			handleContentChange(tab);
		});
	});
};

const handleContentChange = (tab) => {
	if(tab.element.classList.contains('one')) {
		document.querySelector('.table').style.display = 'unset';
	}

	if(tab.element.classList.contains('two')) {
		
	}

	if(tab.element.classList.contains('three')) {
		
	}

	if(tab.element.classList.contains('four')) {
		
	}

	if(tab.element.classList.contains('five')) {
		
	}
};

window.onload = () => {
	getTabs().forEach((tab) => {
		tabs.push({ element: tab });
	});
	tabs[0].element.classList.add('active');
	tabs[0].element.classList.add('disabled');
	handleNavClick(tabs);	
	buildTab1Content();
};
