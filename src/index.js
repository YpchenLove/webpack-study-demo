function getComponent() {
  return import('lodash').then(({default: _} ) => {
    var element = document.createElement('div')
    element.innerHTML = _join(['ypchen', '520'], '-')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})
