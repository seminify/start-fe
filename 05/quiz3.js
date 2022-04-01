var $box = document.querySelector('.box');
var toggle = 'block'

function addRed() {
    var $addRed = document.querySelector('.add-red');
    $addRed.addEventListener('click', function () {
        var $box = document.querySelectorAll('.box');
        for (var i = 0; i < $box.length; i++) {
            $box[i].classList.add('red');
        }
    })
}

function addBtn() {
    var $addBtn = document.querySelector('.add-btn');
    $addBtn.addEventListener('click', function () {
        var $div = $box.cloneNode(true)
        document.body.appendChild($div);
    })
}

function deleteBtn() {
    var $deleteBtn = document.querySelector('.delete-btn');
    $deleteBtn.addEventListener('click', function () {
        var $box = document.querySelectorAll('.box');
        if ($box.length)
            $box[$box.length - 1].remove();
    })
}

function textBtn() {
    var $textBtn = document.querySelector('.text-btn');
    $textBtn.addEventListener('click', function () {
        var $txt = document.querySelector('.txt');
        var $box = document.querySelectorAll('.box');
        for (i = 0; i < $box.length; i++) {
            $box[i].innerHTML = $txt.value;
        }
    })
}

function resetBtn() {
    var $resetBtn = document.querySelector('.reset-btn');
    $resetBtn.addEventListener('click', function () {
        var $box = document.querySelectorAll('.box');
        for (var i = 0; i < $box.length; i++) {
            $box[i].remove();
        }
    })
}

function toggleBtn() {
    var $toggleBtn = document.querySelector('.toggle-btn');
    $toggleBtn.addEventListener('click', function () {
        var $box = document.querySelectorAll('.box');
        if (toggle == 'block') {
            toggle = 'none';
            for (var i = 0; i < $box.length; i++) {
                $box[i].style.display = toggle;
            }
        } else {
            toggle = 'block';
            for (var i = 0; i < $box.length; i++) {
                $box[i].style.display = toggle;
            }
        }

    })
}

function imageBtn() {
    var $imageBtn = document.querySelector('.image-btn');
    $imageBtn.addEventListener('click', function () {
        var src = 'https://imgur.com/69NjYBH';
        var str = '<img src="' + src + '">'
        var $box = document.querySelectorAll('.box');
        if ($box.length)
            addBtn();
        for (var i = 0; i < $box.length; i++) {
            $box[i].innerHTML = str;
        }
    })
}

addRed();
addBtn();
deleteBtn();
textBtn();
resetBtn();
toggleBtn();
imageBtn();