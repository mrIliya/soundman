

function ajax(url, method, functionName, dataArray) {
	const xhttp = new XMLHttpRequest;
	xhttp.open(method, url, true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send(dataArray);

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			functionName(this);
		}
	}
}

function requestData(dataArr) {
	let out = '';
	for (let key in dataArr) {
		out += `${key}=${dataArr[key]}&`;
	}
	return out;
}

function f1(data) {
	console.log(data);
}

let a = {
	name: 'iliya',
	age: '30'
}

ajax('/core/signup.php', 'post', f1, requestData)