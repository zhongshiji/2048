/**
 * 
 * @authors Er_shenger (Just Because)
 * @date    2018-05-25 11:23:41
 * 
 */

documentWidth = window.screen.availWidth;
console.log(documentWidth)
gridContainerWidth = 0.92 * documentWidth;
console.log(gridContainerWidth)
cellSideLength = 0.18 * documentWidth;
console.log(cellSideLength)
cellSpace = 0.04 * documentWidth;
console.log(cellSpace)

// 20 是格子之间的距离，100 是一个小格子的宽度
function getPosTop(i, j) {
    let top = 20 + i * (100 + 20);
    return top;
}

function getPosLeft(i, j) {
    let left = 20 + j * (100 + 20);
    return left;
}

// 获取数字方块的背景色
function getNumberBackgroundColor(number) {
    let color = 'black';
    switch (number) {
        case 2:
            color = '#eee4da';
            break;
        case 4:
            color = '#ede0c8';
            break;
        case 8:
            color = '#f2b179';
            break;
        case 16:
            color = '#f59563';
            break;
        case 32:
            color = '#f67c5f';
            break;
        case 64:
            color = '#f65e3b';
            break;
        case 128:
            color = '#edcf72';
            break;
        case 256:
            color = '#edcc61';
            break;
        case 512:
            color = '#9c0';
            break;
        case 1024:
            color = '#33b5e5';
            break;
        case 2048:
            color = '#09c';
            break;
    }
    return color;
}

// 获取数字方块的前景色
function getNumberColor(number) {
    if (number <= 4) {
        return '#776e50';
    }
    return 'white';
}

// 判断是否还有空格子可以生成
function nospace(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false; 
            }
        }
    }
    return true;
}

function canMoveLeft(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j+1] == 0 || board[i][j+1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board) {
    for (let j = 0; j < 4; j++) {
        for (let i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i-1][j] == 0 || board[i-1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board) {
    for (let j = 0; j < 4; j++) {
        for (let i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i+1][j] == 0 || board[i+1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlockHorizontal(row, col1, col2, board) {
    for (let i = col1 + 1; i < col2; i++){
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}

function noBlockVertical(col, row1, row2, board) {
    for (let i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0) {
            return false;
        }
    }
    return true;
}

function nomove(board) {
    if (canMoveLeft(board) || canMoveRight(board) || canMoveUp(board) || canMoveDown(board)) {
        return false;
    }
    return true;
}