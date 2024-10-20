function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block"; // Show the bio
    } else {
        bio.style.display = "none"; // Hide the bio
    }
}