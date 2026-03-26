const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const nameEl = document.getElementById("name-el")
const usernameEl = document.getElementById("username-el")
const locationEl = document.getElementById("location-el")
const avatarImg = document.getElementById("avatar-img")
const postImg = document.getElementById("post-img")
const commentEl = document.getElementById("comment-el")
const likeCounter = document.getElementById("like-counter-el")
const heartBtn = document.getElementById("heart-btn")
const dmBtn = document.getElementById("dm-btn")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document. getElementById("next-btn")

heartBtn.addEventListener("click", function() {
    let count = parseInt(likeCounter.textContent)
    count += 1
    likeCounter.textContent = count + " likes"
})

function user() {

        nameEl.textContent = posts[currentPost].name
        usernameEl.textContent = posts[currentPost].username
        locationEl.textContent = posts[currentPost].location
        avatarImg.src = posts[currentPost].avatar
        postImg.src = posts[currentPost].post
        commentEl.textContent = posts[currentPost].comment
        likeCounter.textContent = posts[currentPost].likes + " likes"
    }

let currentPost = 0

nextBtn.addEventListener("click", function() {

    if (currentPost === posts.length -1) {
        currentPost = 0
        user()
    }
    else {
        currentPost += 1
        user()
    }
})

prevBtn.addEventListener("click", function() {
    if (currentPost === 0){
        currentPost = posts.length -1
        user()
    }
    else {
        currentPost -= 1
        user()
    }
})