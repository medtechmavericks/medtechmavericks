const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "admin_page.html"
    }else{
        alert("Incorrect Username or Password")
    }
})

function authentication(username,password){
    if(username === "medtech" && password === "mavericks"){
        return true
    }else{
        return false
    }
}