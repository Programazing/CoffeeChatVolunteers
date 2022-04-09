const env = 'main'
const papaVersion = '5.3.2'

var papaParse = document.createElement('script')
papaParse.setAttribute('src',`https://cdnjs.cloudflare.com/ajax/libs/PapaParse/${papaVersion}/papaparse.js`)
papaParse.setAttribute('crossorigin','anonymous')
papaParse.setAttribute('referrerpolicy','no-referrer')
document.head.appendChild(papaParse)

window.onload = () => {
    let csvURL = `https://raw.githubusercontent.com/Programazing/CoffeeChatVolunteers/${env}/volunteers.csv`
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
            if (itemHasValue(item) == false) {break}
            
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

    function itemHasValue(item){
        if(item.name == undefined){return false}
        if(item.link == undefined){return false}
        if(item.image == undefined){return false}
        return true
    }
}