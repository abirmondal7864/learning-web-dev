function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched");
        }, 2000);
    });
};
function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched");
        }, 3000);
    });
};
async function getBlogData() {
    try {
        console.log("Fetching Blog Data...");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();   // better alternative below (using Promise.all)
        const [postData, commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
         // Fetch post and comment data concurrently using Promise.all***
        console.log(postData);
        console.log(commentData);
        console.log("Data fetched successfully");
        
    } catch (error) {
        console.error("Error fetching data",error);
    };
};
getBlogData();