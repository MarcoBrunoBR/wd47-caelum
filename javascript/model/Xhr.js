class Xhr {
  constructor() {
    this.xhr = new XMLHttpRequest()
  }

  //option é um json
  get(option) {
    this.xhr.addEventListener('load', function () {
      option.success(JSON.parse(this.response))
    })
    this.xhr.open('GET', option.url)
    this.xhr.send()
  }
}
