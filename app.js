// Filter , Map , Reduce




const contacts = [
  {
    id: 1,
    name: "Hashir Ahmed",
    gmail: "mhashir23@gmail.com",
  },
  {
    id: 2,
    name: "Altamash zia",
    gmail: "ziaaltamash15@gmail.com",
  },
  {
    id: 3,
    name: "fawadkhan",
    gmail: "fawadkhan0404@gmail.com",
  },
];

function renderContacts(contacts) {
  const contactList = document.getElementById("contact-List");
  contactList.innerHTML = "";
  for (const contact of contacts) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <b>${contact.name}</b>
    <p>${contact.gmail}</p>
    `;
    contactList.appendChild(contactDiv);
  }
}
function filterContacts() {
  const filterInput = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterInput)
  );
  renderContacts(filterContacts);
}
renderContacts(contacts);
document.getElementById('filter-button').addEventListener('click', filterContacts);

// function sum(a,b){
//   let sum = a + b;
//   console.log(sum);
// }
// sum(2,7);
// sum(11,8);