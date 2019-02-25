import bag from './bag.jpg'
import './index.scss'

const img = new Image()
img.src = bag
img.classList.add('img')

const btn = document.createElement('button')
btn.innerHTML = '按钮'
btn.onclick = function() {
  const div = document.createElement('div');
  div.innerHTML = 'item'
  document.body.appendChild(div)
}
const app = document.getElementById('root')
app.append(btn)
console.log('as')
