function loadProfile() {
    return new Promise((res, rej) =>
        setTimeout(() => Math.random() > 0.3 ? res("Profile Loaded") : rej("Profile Error"), 2000)
    );
}
function loadPosts() {
    return new Promise((res, rej) =>
        setTimeout(() => Math.random() > 0.3 ? res("Posts Loaded") : rej("Posts Error"), 1500)
    );
}
function loadMessages() {
    return new Promise((res, rej) =>
        setTimeout(() => Math.random() > 0.3 ? res("Messages Loaded") : rej("Messages Error"), 1000)
    );
}

async function dashboardLoader() {
    const start = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    console.log(results);
    console.log("Time taken:", Date.now() - start, "ms");
}

dashboardLoader();