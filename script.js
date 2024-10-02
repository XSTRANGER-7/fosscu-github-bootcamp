
async function fetchMembers() {
    const membersContainer = document.getElementById('members-container');
    const loader = document.getElementById('loader'); // Get loader element

    // Show loader
    loader.style.display = 'flex';

    // Define categories and range for numbers
    const categories = ["IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
    const startNumber = 1000;
    const endNumber = 1400;

    // Create an array to hold the JSON file names
    const jsonFiles = [];

    // Loop through each category and number to construct filenames
    for (const category of categories) {
        for (let i = startNumber; i <= endNumber; i++) {
            jsonFiles.push(`member/member${category}${i}.json`);
        }
    }

    const maxConcurrentRequests = 5; // Limit the number of concurrent fetch requests
    const validMembers = []; // Array to hold valid member data

    // Function to fetch a single member
    const fetchMember = async (file) => {
        try {
            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json(); // Return the JSON data if the fetch was successful
                validMembers.push(data); // Add valid data to the array
            } else {
                console.warn(`Unable to fetch ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    };

    // Process all requests with throttling
    for (let i = 0; i < jsonFiles.length; i += maxConcurrentRequests) {
        const promises = jsonFiles.slice(i, i + maxConcurrentRequests).map(fetchMember);
        await Promise.all(promises); // Wait for the current batch to complete
    }

    // Check if there are valid members to display
    if (validMembers.length === 0) {
        membersContainer.innerHTML = '<p>No members found.</p>'; // Optional: display a message if no members are found
    } else {
        // Create and append cards for each valid member
        validMembers.forEach(data => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';

            memberCard.innerHTML = `
                <div class="image-wrapper">
                    <div class="image-background"></div> <!-- Circular background -->
                    <img src="${data.image}" alt="${data.name}" />
                </div>
                <h3>${data.name}</h3>
                <p>${data.description}</p>
            `;

            membersContainer.appendChild(memberCard);
        });
    }

    // Hide loader after fetching members
    loader.style.display = 'none';
}

// Fetch members when the page loads
document.addEventListener('DOMContentLoaded', fetchMembers);
