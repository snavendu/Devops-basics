const app = require('express')();

app.get('/', (req, res) => {
	res.send('welcome to the new world of devops');
});

app.listen(8080, () => console.log('app is listening. Please command it.'));
