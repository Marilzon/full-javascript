const bibleBooks = fetch("https://www.abibliadigital.com.br/api/books")
	.then((response) => response.json())
	.then((data) => console.log(data));
