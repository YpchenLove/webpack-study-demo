import bag from './bag.jpg'
import './index.scss'

const img = new Image()
img.src = bag
img.classList.add('img')

const app = document.getElementById('root')
app.append(img)
