// async / await: These keywords provide a more readable and concise way to work with promises.async marks a
// function as asynchronous, and await *pauses* the execution of the function until a promise resolves.

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "ChaiCode", url: "https://chaicode.com"});
        }, 3000);
    });
};
async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User Data: ", userData);
        console.log("User data fetched successfully");
    } catch (error) {
        console.error("Error fetching data ",error);
    };
};
getUserData();
