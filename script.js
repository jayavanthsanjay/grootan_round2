// api url
const api_url =
	"https://house.free.beeceptor.com/java";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>age</th>
		<th>dob</th>
		<th>firstName</th>
                <th>lastName</th>
		<th>Address1</th>
		<th>Address2</th>
		<th>Address3</th>
		<th>phone</th>
		</tr>`;
	
	// Loop to access all rows
	for (var i=0; i<data.length; i++) {
		tab += `<tr>
	<td>${data[i].name} </td>
	<td>${data[i].age}</td>
	<td>${data[i].dob}</td>
	<td>${data[i].firstName}</td>
        <td>${data[i].lastName}</td>
	<td>${data[i].more.address_line1}</td>	
	<td>${data[i].more.address_line2}</td>	
	<td>${data[i].more.address_line2}</td>	
	<td>${data[i].more.phone}</td>		
</tr>`;
	}
	
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
