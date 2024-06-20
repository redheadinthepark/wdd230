const baseURL = "https://redheadinthepark.github.io/wdd230/chamber/";
const membersURL = `${baseURL}data/members.json`;

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member-card');

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
        memberWebsite.textContent = member.website; // Show the website URL

        const memberDescription = document.createElement('p');
        memberDescription.textContent = member.description;

        memberInfo.appendChild(memberName);
        memberInfo.appendChild(memberAddress);
        memberInfo.appendChild(memberPhone);
        memberInfo.appendChild(memberWebsite);
        memberInfo.appendChild(memberDescription);

        memberElement.appendChild(memberInfo);

        container.appendChild(memberElement);
    });
}

document.getElementById('toggle-list-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.remove('grid-view');
    container.classList.add('list-view');
});

document.getElementById('toggle-grid-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.remove('list-view');
    container.classList.add('grid-view');
});

getMembers();
