const container = document.getElementById("membersContainer");

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit</a>
            <p>Level: ${member.level}</p>
        `;

        container.appendChild(card);
    });
}

// Toggle views
document.getElementById("gridBtn").onclick = () => {
    container.classList.add("grid");
    container.classList.remove("list");
};

document.getElementById("listBtn").onclick = () => {
    container.classList.add("list");
    container.classList.remove("grid");
};

// Last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Mobile menu
document.getElementById("menuBtn").onclick = () => {
    document.getElementById("navMenu").classList.toggle("open");
};

getMembers();