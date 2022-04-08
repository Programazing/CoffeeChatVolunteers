let csvURL = "https://raw.githubusercontent.com/Programazing/CoffeeChatVolunteers/dev/volunteers.csv";
let loadCSV = window.onload = (event) => {
    Papa.parse(csvURL, {
        download: true,
        quotes: false,
        delimiter: ",",
        header: true,
        complete: function(results) {
            generateVolunteerCard(results);
        }
    })
}

function generateVolunteerCard(results) {

    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    document.body.append(container);

    for(item of results.data){
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const a = document.createElement('a')
        a.href = item.link

        const img = document.createElement('img')
        img.src = item.image

        const name = item.name

        a.append(img)
        a.append(name)
        card.appendChild(a)

        container.appendChild(card)
    }  
}