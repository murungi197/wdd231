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
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

// GRID VIEW
document.getElementById("gridBtn").onclick = () => {
    container.classList.add("grid");
    container.classList.remove("list");

    document.querySelectorAll(".card img").forEach(img => {
        img.style.display = "block";
    });
};

// LIST VIEW (NO IMAGES)
document.getElementById("listBtn").onclick = () => {
    container.classList.add("list");
    container.classList.remove("grid");

    document.querySelectorAll(".card img").forEach(img => {
        img.style.display = "none";
    });
};

// MENU
document.getElementById("menuBtn").onclick = () => {
    document.getElementById("navMenu").classList.toggle("open");
};

// LAST MODIFIED
document.getElementById("lastModified").textContent = document.lastModified;

getMembers();