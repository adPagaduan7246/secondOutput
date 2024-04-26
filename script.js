window.addEventListener('load', () => {
    const title = document.querySelector("#title")


    title.innerHTML = "Log In"

    const btnGenerate = document.querySelector("#generate")

    btnGenerate.addEventListener('click', () => {
        const value = "abcdefghijk0123456789"
        const len = 18

        let password = ""
        for (let i = 0; i < len; i ++){
            const randomNumber = Math.floor(Math.random() * value.length)
            password += value.charAt(randomNumber)
        }
        
        const email = document.querySelector("#email")
        const dataEmail = email.value

        const table = document.querySelector("table")
        const row = table.insertRow(1)
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        cell1.innerHTML = email
        cell2.innerHTML = password
        
    })
})