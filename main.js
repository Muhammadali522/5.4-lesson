// API > Aplicatioon programming interface

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const userList = document.querySelector(".warpper");
    
    data.forEach(user => {
        const Card = document.createElement("div");
        Card.className = "card";
        
        const name = document.createElement("h1");
        const username = document.createElement("p");
        const phone = document.createElement("p");
        const email = document.createElement("p");
        
        name.textContent = `Name: ${user.name}`;
        username.textContent = `Username: ${user.username}`;
        phone.textContent = `Phone: ${user.phone}`;
        email.textContent = `Email: ${user.email}`;
        
        Card.append(name, username, phone, email);
        userList.append(Card);
    });
})
.catch(error => {
    console.error("Xato");
});