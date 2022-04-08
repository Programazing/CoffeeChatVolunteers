var papaParse = document.createElement('script')
papaParse.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.js')
papaParse.setAttribute('crossorigin','anonymous')
papaParse.setAttribute('referrerpolicy','no-referrer')
document.head.appendChild(papaParse)

var css = document.createElement('link')
css.setAttribute('rel','stylesheet')
css.href = 'https://raw.githubusercontent.com/Programazing/CoffeeChatVolunteers/main/index.css'
document.head.appendChild(css);

window.onload = () => {
    let csvURL = 'https://raw.githubusercontent.com/Programazing/CoffeeChatVolunteers/main/volunteers.csv'
    Papa.parse(csvURL, {
        download: true,
        quotes: false,
        delimiter: ",",
        header: true,
        complete: function(results) {
            generateVolunteerCard(results)
        }
    })

    function generateVolunteerCard(results) {
        for(item of results.data){
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            document.body.append(card)

            const a = document.createElement('a')
            a.setAttribute('target', '_blank')
            a.href = item.link

            const img = document.createElement('img')
            img.setAttribute('alt', 'Avatar')
            img.src = item.image

            const container = document.createElement('div')
            container.setAttribute('class', 'container')

            const name = document.createElement('h4')
            name.append(item.name)

            a.append(img)
            container.append(name)
            a.append(container)
            card.appendChild(a)
        }  
    } 
}