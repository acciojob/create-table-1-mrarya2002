function insert_Row() {
    //Write your code here
	 let table = document.querySelector("#sampleTable");

    // make sure we target the tbody (or the table itself if no tbody exists)
    let tbody = table.querySelector("tbody") || table;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = "New Cell1";

    let td2 = document.createElement("td");
    td2.innerText = "New Cell2";

    tr.append(td1, td2);

    // insert at the top
    tbody.insertBefore(tr, tbody.firstChild);
}
