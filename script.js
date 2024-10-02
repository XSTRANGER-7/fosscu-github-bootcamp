
// async function fetchMembers() {
//     const membersContainer = document.getElementById('members-container');

//     const numberOfMembers = 500; // Change this number if you want more members
//     const jsonFiles = Array.from({ length: numberOfMembers }, (_, i) => `member${i + 1}.json`);

//     const fetchPromises = jsonFiles.map(async (file) => {
//         const response = await fetch(`member/${file}`);
//         if (response.ok) {
//             return response.json(); // Return the JSON data if the fetch was successful
//         } else {
//             console.warn(`Unable to fetch ${file}: ${response.status}`);
//             return null; // Return null for files that can't be fetched
//         }
//     });

//     try {
//         // Wait for all fetch promises to resolve
//         const membersData = await Promise.all(fetchPromises);

//         // Filter out any null values from the fetched data
//         const validMembers = membersData.filter(member => member !== null);

//         // Create and append cards for each valid member
//         validMembers.forEach(data => {
//             const memberCard = document.createElement('div');
//             memberCard.className = 'member-card';

//             memberCard.innerHTML = `
//                 <img src="${data.image}" alt="${data.name}" />
//                 <h3>${data.name}</h3>
//                 <p>${data.description}</p>
//             `;

//             membersContainer.appendChild(memberCard);
//         });

//     } catch (error) {
//         console.error('Error fetching members:', error);
//     }
// }

// document.addEventListener('DOMContentLoaded', fetchMembers);







async function fetchMembers() {
    const membersContainer = document.getElementById('members-container');

    const numberOfMembers = 500; // Change this number if you want more members
    const jsonFiles = Array.from({ length: numberOfMembers }, (_, i) => `member${i + 1}.json`);

    const fetchPromises = jsonFiles.map(async (file) => {
        const response = await fetch(`member/${file}`);
        if (response.ok) {
            return response.json(); // Return the JSON data if the fetch was successful
        } else {
            console.warn(`Unable to fetch ${file}: ${response.status}`);
            return null; // Return null for files that can't be fetched
        }
    });

    try {
        // Wait for all fetch promises to resolve
        const membersData = await Promise.all(fetchPromises);

        // Filter out any null values from the fetched data
        const validMembers = membersData.filter(member => member !== null);

        // Create and append cards for each valid member
        validMembers.forEach(data => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';

            memberCard.innerHTML = `
                <div class="image-wrapper">
                    <div class="circular-border"></div>
                    <img src="${data.image}" alt="${data.name}" />
                </div>
                <h3>${data.name}</h3>
                <p>${data.description}</p>
            `;

            membersContainer.appendChild(memberCard);
        });

    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchMembers);




// async function fetchMembers() {
//     const membersContainer = document.getElementById('members-container');

//     const numberOfMembers = 500; // Change this number if you want more members
//     const jsonFiles = Array.from({ length: numberOfMembers }, (_, i) => `member${i + 1}.json`);

//     const fetchPromises = jsonFiles.map(async (file) => {
//         const response = await fetch(`member/${file}`);
//         if (response.ok) {
//             return response.json(); // Return the JSON data if the fetch was successful
//         } else {
//             console.warn(`Unable to fetch ${file}: ${response.status}`);
//             return null; // Return null for files that can't be fetched
//         }
//     });

//     try {
//         // Wait for all fetch promises to resolve
//         const membersData = await Promise.all(fetchPromises);

//         // Filter out any null values from the fetched data
//         const validMembers = membersData.filter(member => member !== null);

//         // Create and append cards for each valid member
//         validMembers.forEach(data => {
//             const memberCard = document.createElement('div');
//             memberCard.className = 'member-card';

//             memberCard.innerHTML = `
//                 <div class="image-wrapper">
//                     <div class="circular-border"></div>
//                     <img src="${data.image}" alt="${data.name}" />
//                 </div>
//                 <h3>${data.name}</h3>
//                 <p>${data.description}</p>
//             `;

//             membersContainer.appendChild(memberCard);
//         });

//     } catch (error) {
//         console.error('Error fetching members:', error);
//     }
// }

// document.addEventListener('DOMContentLoaded', fetchMembers);
