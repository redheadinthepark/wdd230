const baseURL = "https://redheadinthepark.github.io/wdd230/chamber/";
const membersURL = `${baseURL}data/members.json`;

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Failed to fetch members:', error);
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
        memberImage.alt = `${member.name} logo`;
        memberImage.width = 200;
        memberImage.height = 100;

        const memberInfo = document.createElement('div');
        memberInfo.classList.add('member-info');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = member.address;

        const memberPhone = document.createElement('p');
        memberPhone.textContent = member.phone;

        const memberDescription = document.createElement('p');
        memberDescription.textContent = member.description;

        const memberLevel = document.createElement('p');
        memberLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        const memberWebsite = document.createElement('a');
        memberWebsite.href = member.website;
        memberWebsite.textContent = member.website.replace('https://', '');

        memberInfo.appendChild(memberName);
        memberInfo.appendChild(memberAddress);
        memberInfo.appendChild(memberPhone);
        memberInfo.appendChild(memberDescription);
        memberInfo.appendChild(memberLevel);
        memberInfo.appendChild(memberWebsite);

        memberElement.appendChild(memberImage);
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
