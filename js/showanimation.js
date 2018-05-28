/**
 * 
 * @authors Er_shenger (Just Because)
 * @date    2018-05-25 11:23:21
 * 
 */

function showNumberWithAnimation(i, j, randNumber) {
    let numberCell = $('#number-cell-' + i + '-' + j);

    numberCell.css('background-color', getNumberBackgroundColor(randNumber));
    numberCell.css('color', getNumberColor(randNumber));
    numberCell.text(randNumber);

    numberCell.animate({
        width: 100,
        height: 100,
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50);

    // numberCell.text(randNumber);
}

function showMoveAnimation(fromx, fromy, tox, toy) {
    let numberCell = $('#number-cell-' + fromx + '-' + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200);
}

function updateScore(score) {
    $('#score').text(score);
}