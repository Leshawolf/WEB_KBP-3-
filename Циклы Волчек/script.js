function First(obj) {
	var a = 1*obj.a.value;
	var b = 1*obj.b.value;
	var h = 1*obj.h.value;
	var body = document.getElementsByTagName('body')[0];
	var tbl = document.createElement('table');
	tbl.setAttribute('border', '5');
	var table = {
		'x':[],
		'y':[],
	};
	for (var i = a; i < b; i+=h) {
		table['y'].push(Math.pow((i+2), 3));
		table['x'].push(i);
	}
	var let = ['x', 'y'];
	for (var i = 0; i < let.length; i++) {
		var tr = document.createElement('tr');
		for (var j = 0; j < table[let[i]].length; j++) {
			var td = document.createElement('td');
			var t = document.createTextNode(table[let[i]][j]);
			td.appendChild(t);
			tr.appendChild(td);
		}
		tbl.appendChild(tr);
	}
	body.appendChild(tbl);
}

function Second(obj) {
	var a = 1*obj.a.value;
	var b = 1*obj.b.value;
	var c = 1*obj.c.value;
	var y = 0;
	for (var i = a; i < c; i+=i*b/100) {
		y++;
	}
	obj.y.value = y;
}

function Third() {
	var sum = 0;
	for (var i = 11; i < 100; i+=2) {
		sum+=i;
	}
	alert(sum);
}

function Fourth() {
	var arr = '';
	for (var i = 100; i < 1000; i++) {
		var f_s = parseInt((i.toString())[0] + (i.toString())[1]);
		var t = parseInt((i.toString())[2]);
		var ii = Math.pow(f_s,2) - Math.pow(t,2);
		if (ii == i) {
			arr += i + ', ';
		}
	}
	alert(arr);
}

function Fifth(obj) {
	var n = obj.n.value;
	var just = '';
	for (let i = 2; i * 2 <= n; i++) {
    if (n % i == 0) {
        	just += i +', ';
    	}
	}
	obj.y.value = just;
}