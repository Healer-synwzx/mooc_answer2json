$('input[type="checkbox"]:checked').prop('checked', false);
$('.TiMu').each(function(index, ele, array) {
    var choices = $('input[type="radio"]', ele);
    if (!choices.length) {
        choices = $('input[type="checkbox"]', ele);
    }
    var index = Math.floor(Math.random() * choices.length - 1);
    choices.get(index).click();
});


var answers = [];
$('.TiMu').each(function(index, ele, array) {
    var question = $('.Zy_TItle>div', ele).text().trim();
    var answer = $('.Py_answer.clearfix', ele).text();
    answer = answer.match(/正确答案：\s*[ABCD√×]+/);
    if (!answer) {
        alert('cannot find answer!');
        return false;
    }
    answer = answer[0].match(/[ABCD√×]+/);
    answer = answer[0];
    answers.push([
        question,
        answer,
    ]);

});
console.log(JSON.stringify(answers));



$('input[type="checkbox"]:checked').prop('checked',false);



function find_answer(question) {
    for (answer of answers){
        if (question === answer[0]) {
            return answer;
        }
    }
}
$('.TiMu').each(function(index, ele, array) {
    var question = $('.Zy_TItle>div', ele).text().trim();
    var answer = find_answer(question);
    answer = answer[1];

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