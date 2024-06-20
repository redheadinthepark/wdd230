const baseURL = "https://redheadinthepark.github.io/wdd230/chamber/";
const membersURL = `${baseURL}data/members.json`;

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member-card');

        const memberImage = document.createElement('img');
        memberImage.src = `${baseURL}images/${member.image}`;
        memberImage.alt = member.name;

        const memberInfo = document.createElement('div');
        memberInfo.classList.add('member-info');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = member.address;

        const memberPhone = document.createElement('p');
        memberPhone.textContent = member.phone;

        const memberWebsite = document.createElement('a');
        memberWebsite.href = member.website;
        memberWebsite.textContent = "Visit Website";

        const memberDescription = document.createElement('p');
        memberDescription.textContent = member.description;

        memberInfo.appendChild(memberName);
        memberInfo.appendChild(memberAddress);
        memberInfo.appendChild(memberPhone);
        memberInfo.appendChild(memberWebsite);
        memberInfo.appendChild(memberDescription);

        memberElement.appendChild(memberImage);
        memberElement.appendChild(memberInfo);

        container.appendChild(memberElement);
    });
}

document.getElementById('toggle-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.toggle('grid-view');
    container.classList.toggle('list-view');
});

getMembers();
