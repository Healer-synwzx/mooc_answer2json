var answers = [];
$('.Py_answer.clearfix>span:first-child').each(function(index, ele) {
    answers.push(ele.innerText.substring(5).trim());
});
answers_str = JSON.stringify(answers);



$('input[type="checkbox"]:checked').prop('checked',false);
$('.TiMu').each(function(index, ele, array) {
    var answer = answers[index];
    if (answer.match(/[√×]/)) {
        if ('√' === answer) {
            $('input:first', ele).attr('checked', true);
        } else {
            $('input:nth(1)', ele).attr('checked', true);
        }
        return;
    }
    answer = answer.split('');
    for (var ans of answer) {
        $('input[value=' + ans + ']', ele).click();
    }
});