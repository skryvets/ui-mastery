import $$ from '../../actions/helpers/uimastery'

describe('UIMastery Test Suite', () => {

  it('UIMastery does exist', () => {
    expect($$).toBeDefined()
  })

  describe('Method: UIMastery.prototype.init', () => {

    it('Returns HTML Element if it was already assigned', () => {
      let htmlElement = TestHelper.createHTMLElement('div');
      let uiMasteryObject = $$(htmlElement)
      expect(uiMasteryObject.elem).toEqual(htmlElement)
    })

    it('Returns HTML Element by ID', () => {

      let elementID = 'custom-div-id'
      let htmlElement = TestHelper.createHTMLElementWithAttribute('div', 'id', elementID)

      let uiMasteryObject = $$('#' + elementID)
      expect(uiMasteryObject.elem).toEqual(htmlElement)

      TestHelper.removeHTMLElementFromBody(htmlElement);
    })

    it('Returns Array of HTML Elements by CSS Class', () => {

      let cssClass = 'navigation__bar--test'
      let htmlElement = TestHelper.createHTMLElementWithAttribute('div', 'class', cssClass)

      let uiMasteryObject = $$('.' + cssClass)
      expect(uiMasteryObject.elem).toEqual([htmlElement])

      TestHelper.removeHTMLElementFromBody(htmlElement);
    })
  })

  describe('Method: UIMastery.prototype.hasClass', () => {
    it('Returns true if HTML has CSS Class', () => {
      let cssClass = 'sidebar--test'
      let falseCssClass = 'sidebar--test-false'
      let htmlElement = TestHelper.createHTMLElementWithAttribute('div', 'class', cssClass)

      let uiMasteryObject = $$('.' + cssClass)
      expect(uiMasteryObject.hasClass(cssClass)).toBe(true)
      expect(uiMasteryObject.hasClass(falseCssClass)).toBe(false)

      TestHelper.removeHTMLElementFromBody(htmlElement)
    })
  })

})


let TestHelper = {
  createHTMLElement: function (elementType) {
    return document.createElement(elementType);
  },
  createHTMLElementWithAttribute: function (elementType, attribute, attributeValue) {
    let htmlElement = document.createElement(elementType)
    htmlElement.setAttribute(attribute, attributeValue)
    document.body.appendChild(htmlElement)
    return htmlElement
  },
  removeHTMLElementFromBody: function (HTMLElement) {
    document.body.removeChild(HTMLElement);
  }
}
