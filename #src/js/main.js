
/*Array.from(rangeSliderInputs).forEach(input => {
    input.addEventListener('click', changeSliderValue)
})


function changeSliderValue() {
    let radioRangeItem = this.closest('.radio__range__slider-item');
    let formRange = this.closest('.form-range');
    let lineForRadioRange = radioRangeItem.querySelector('.line-for-range')
    let radioRangeStyles = lineForRadioRange.getBoundingClientRect();
    let leftMargin = formRange.getBoundingClientRect().left;
    let topRangePointerMapLeftPadding = radioRangeStyles.x - leftMargin
    let topRangePointerElement = document.querySelector('.radio__range__slider-pointer')
    topRangePointerElement.style.left = `${topRangePointerMapLeftPadding}px`
}*/
let rangeSliderInputs = document.querySelectorAll('.radio__range__slider-item input');

function radioFormRangeSlider (inputs) {
    this.inputs = Array.from(inputs);
    this.formRange = document.querySelector('.form-range');

    this.topRangePointerElement = document.querySelector('.radio__range__slider-pointer')
    let self = this

    document.addEventListener('resize', () => {
        this.leftMargin = this.formRange.getBoundingClientRect().left;
    })

    this.changeSliderTo = function(input) {
        let radioRangeItem = input.closest('.radio__range__slider-item');
        let lineForRadioRange = radioRangeItem.querySelector('.line-for-range');
        let radioRangeStyles = lineForRadioRange.getBoundingClientRect();
        let leftMargin = self.formRange.getBoundingClientRect().left;
        let topRangePointerMapLeftPadding = radioRangeStyles.x - leftMargin;
        self.topRangePointerElement.style.left = `${topRangePointerMapLeftPadding}px`;
    }

    this.inputs.forEach(input => {
        input.addEventListener('click', changeSliderValue);
        if(input.checked){
            this.changeSliderTo(input);
        }
    })



    function changeSliderValue() {
        let radioRangeItem = this.closest('.radio__range__slider-item');
        let lineForRadioRange = radioRangeItem.querySelector('.line-for-range');
        let radioRangeStyles = lineForRadioRange.getBoundingClientRect();
        let leftMargin = self.formRange.getBoundingClientRect().left;
        let topRangePointerMapLeftPadding = radioRangeStyles.x - leftMargin;
        self.topRangePointerElement.style.left = `${topRangePointerMapLeftPadding}px`;
    }

}

try{
    radioFormRangeSlider(rangeSliderInputs)
} catch (e) {
    console.log(e)
}

var textarea = document.querySelector('.form-textarea .textarea-control');
autosize(textarea);
let dates = document.querySelectorAll('.js-date');

Array.from(dates).forEach(date => {
    IMask(date, {
        mask: '00.00.0000'
    })
})


var phoneMask = IMask(
    document.querySelector('.js-phone-number'), {
        mask: '+998 00 000-00-00'
    });
