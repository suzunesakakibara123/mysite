const mainTitle = document.getElementById("main-title")
console.log(mainTitle)

const contents = document.getElementsByClassName("contents")
console.log(contents)

// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿入するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`
// setTimeoutはJavaScriptで指定した時間後に実行する
setTimeout(function () {
  // wrapper要素の先頭にnewBoxを挿入
  wrapper.insertAdjacentHTML("afterbegin", newBox)
  // wrapper要素の後ろにnewBoxを挿入
  wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000)

// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで指定したchildを取得
const child = document.getElementById("child")
setTimeout(function () {
  // 3秒後に#child要素が削除される
  parent.removeChild(child)
}, 3000)


//フランス語挨拶

//↓.frenchが付いた要素の中のうち、最初の要素のみを使いたい場合は、[0]を付けるということを学びました！！！！
// classで指定したfrenchを取得
const french = document.getElementsByClassName("french")[0]
// idで指定したgreetingを取得
const greeting = document.getElementById("greeting")
// 挿入するHTML要素
const ask = `<p id="ask">Ça va?</p>`
setTimeout(function () {
  // 2秒後に#greeting要素が削除される
  french.removeChild(greeting)
  // 2秒後に#ask要素を挿入
  french.insertAdjacentHTML("beforeend", ask)
}, 2000)
