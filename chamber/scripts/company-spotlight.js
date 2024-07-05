document.addEventListener('DOMContentLoaded', function() {
    const members = [
        {
            "name": "Alpha Solutions",
            "address": "123 Innovation Way, Mesa, AZ",
            "phone": "480-123-4567",
            "website": "https://www.alphasolutions.com",
            "image": "alpha-solutions-logo.webp",
            "membershipLevel": "Gold",
            "description": "A leading provider of innovative tech solutions."
        },
        {
            "name": "Beta Enterprises",
            "address": "456 Market Street, Mesa, AZ",
            "phone": "480-234-5678",
            "website": "https://www.betaenterprises.com",
            "image": "beta-ent-logo.webp",
            "membershipLevel": "Silver",
            "description": "Your partner in business growth and development."
        },
        {
            "name": "Gamma Goods",
            "address": "789 Commerce Blvd, Mesa, AZ",
            "phone": "480-345-6789",
            "website": "https://www.gammagoods.com",
            "image": "gamma-goods-logo.webp",
            "membershipLevel": "Bronze",
            "description": "Quality goods for all your needs."
        },
        {
            "name": "Delta Dynamics",
            "address": "321 Innovation Park, Mesa, AZ",
            "phone": "480-456-7890",
            "website": "https://www.deltadynamics.com",
            "image": "delta-dyn-logo.webp",
            "membershipLevel": "Gold",
            "description": "Dynamic solutions for the modern world."
        },
        {
            "name": "Epsilon Enterprises",
            "address": "654 Business Road, Mesa, AZ",
            "phone": "480-567-8901",
            "website": "https://www.epsilonenterprises.com",
            "image": "epsilon-ent-logo.webp",
            "membershipLevel": "Silver",
            "description": "Leading the way in financial services."
        },
        {
            "name": "Zeta Services",
            "address": "987 Service Ave, Mesa, AZ",
            "phone": "480-678-9012",
            "website": "https://www.zetaservices.com",
            "image": "zeta-logo.webp",
            "membershipLevel": "Bronze",
            "description": "Exceptional services for exceptional clients."
        },
        {
            "name": "Eta Solutions",
            "address": "159 Tech Street, Mesa, AZ",
            "phone": "480-789-0123",
            "website": "https://www.etasolutions.com",
            "image": "eta-logo.webp",
            "membershipLevel": "Gold",
            "description": "Solving tomorrow's problems today."
        }
    ];

    const eligibleMembers = members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");

    shuffleArray(eligibleMembers);

    const spotlightMembers = eligibleMembers.slice(0, 3);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    spotlightMembers.forEach((member, index) => {
        const cardElement = document.getElementById(`company-spotlight-${index + 1}`);
        if (cardElement) {
            cardElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h2>${member.name}</h2>
                <p>${member.description}</p>
                <p><b>Address:</b> ${member.address}</p>
                <p><b>Phone:</b> ${member.phone}</p>
                <p><b>Website:</b> <a href="${member.website}" target="_blank">${member.website}</a></p>
            `;
        }
    });
});
