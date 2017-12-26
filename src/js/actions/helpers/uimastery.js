export default function (selector) {
  return new UIMastery(selector)
}

function UIMastery (selector) {
  this.init(selector)
}

UIMastery.prototype.init = function (selector) {
  let re = /^#/

  if (selector instanceof HTMLElement) {
    this.elem = selector
  } else if (re.test(selector)) {
    this.elem =  document.querySelector(selector)
  } else if (!re.test(selector)) {
    this.elem = [].slice.call(document.querySelectorAll(selector));
  }
}

UIMastery.prototype.hasClass = function (value) {
  if (this.elem[0].classList.contains(value)) {
    return true
  } else {
    return false
  }
}

UIMastery.prototype.addClass = function (value) {
  if (Array.isArray(this.elem)) {
    for (let i = 0; i < this.elem.length; i++){
      this.elem[i].classList.add(value)
    }
  } else {
    this.elem.classList.add(value)
  }
  return this
}

UIMastery.prototype.removeClass = function (value) {
  if (Array.isArray(this.elem)) {
    for (let i = 0; i < this.elem.length; i++){
      this.elem[i].classList.remove(value)
    }
  } else {
    this.elem.classList.remove(value)
  }
  return this
}

UIMastery.prototype.toggleClass = function (value) {
  if (Array.isArray(this.elem)) {
    for (let i = 0; i < this.elem.length; i++){
      this.elem[i].classList.toggle(value)
    }
  } else {
    this.elem.classList.toggle(value)
  }
  return this
}

UIMastery.prototype.on = function (event, callback) {
  this.elem.addEventListener(event, callback)
}

UIMastery.prototype.isEmpty = function (obj) {

  // null and undefined are "empty"
  if (obj == null) return true

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0)    return false
  if (obj.length === 0)  return true

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== 'object') return true

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false
  }

  return true
}

