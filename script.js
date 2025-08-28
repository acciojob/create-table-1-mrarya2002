function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable");
	let th = document.createElement("tr");
	let tr1 = document.createElement("td");
	tr1.innerText = "New Cell1";
	let tr2 = document.createElement("td");
	tr2.innerText = "New Cell2";

	th.append(tr1);
	th.append(tr2);

	table.prepend(th);
  
}
