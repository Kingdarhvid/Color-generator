const colorBtn = document.getElementById('color-btn')
const color =document.getElementById('color')

colorBtn.addEventListener('click', ()=>{
    const hex = color.value.slice(1,7)
    const colorMode = document.getElementById('color-mode').value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorMode}&count=4`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('color-seed').style.background = '#' + hex
            document.getElementById('hex-seed').textContent= '#' + hex.toUpperCase()
            for (let i = 0; i < data.colors.length; i++) {
                document.getElementById(`color-${i + 1}`).style.background = data.colors[i].hex.value
                document.getElementById(`hex-${i+1}`).textContent = data.colors[i].hex.value
            }

    })
 })
 
// document.getElementById('color-container').addEventListener('click', e=>{
//     copyColor(e.target.id)
//     alert('copied!')
// })

// function copyColor(id) {
//     navigator.clipboard.writeText(document.getElementById(`${id}`).style.background) 
// }


