window.onload = function () {
    let bg = document.querySelector('.bg')  //背景
    let bird = document.querySelector('.bird') //鸟
    let lu8 = document.querySelector('.lu8')
    let lu12 = document.querySelector('.lu12')
    let lu17 = document.querySelector('.lu17')
    let lu21 = document.querySelector('.lu21')
    let bo = document.querySelector('.bo')  //箭头父盒子
    //手机内容显示顺序
    let diyi = document.querySelector('.diyi')
    let diyid = document.querySelector('.diyid')
    let dier = document.querySelector('.dier')
    let disan = document.querySelector('.disan')
    let disi = document.querySelector('.disi')
    let zhong = document.querySelector('.zhong')  //提示
    let er = document.querySelector('.er')   //柱子
    let guang = document.querySelector('.guang') //光圈1-4
    let guang1 = document.querySelector('.guang1')
    let guang2 = document.querySelector('.guang2')
    let guang3 = document.querySelector('.guang3')
    let jia2 = document.querySelectorAll('.jia2')
    let wang = document.querySelector('.wang')
    let audio1 = document.querySelector('#audio1') //音频1-4
    let audio2 = document.querySelector('#audio2')
    let audio3 = document.querySelector('#audio3')
    let audio4 = document.querySelector('#audio4')
    let que = document.querySelector('#que')
    let jiantou = document.querySelectorAll('.jiantou')
    let box = document.querySelector('.box')  //升天后显示区域
    let top = document.querySelector('.top')  //升天后隐藏区域
    let xiaqu = document.querySelector('.xiaqu') //升天后下移区域

    //小鸭走路
    function bb(j, i, z, q) {
        setTimeout(() => {
            let b = setInterval(() => {
                if (i > 5) i = 1
                bird.setAttribute('src', '../images/年度账单/所有鸽子/gz' + j + i + '.png')
                i++
            }, 200)
            setTimeout(() => {
                clearInterval(b)
            }, z)
        }, q)
    }
    function aa(j, i, z) {
        let a = setInterval(() => {
            if (i > 5) i = 1
            bird.setAttribute('src', '../images/年度账单/所有鸽子/gz' + j + i + '.png')
            i++
        }, 200)
        setTimeout(() => {
            clearInterval(a)
        }, z)
    }
    //瞬移
    function cc(a, b, c, d, e) {
        if (jia2[a].getAttribute('rel') == '1') {
            bird.setAttribute('class', b)
            c.style.display = 'block';
            d.style.display = 'none';
            e.style.display = 'none';
        }
    }
    //加载音频
    function play(a, b) {
        setTimeout(() => {
            a.play()
        }, b)
    }
    function push(c, d) {
        setTimeout(() => {
            c.pause()
        }, d)
    }
    //光圈点击
    function dd(a,b,c,d,e){
        setTimeout(() => {
            xia(a)
        }, b)
        setTimeout(() => {
            xia1(c)
        }, d)
        e.style.display = 'none'
    }
    //光圈点击开关
    function ee(a,b){
        setTimeout(() => {
            a.style.display = 'block'
            if (a.style.display == 'block') {
                jia2[0].setAttribute('rel', '1')
                jia2[1].setAttribute('rel', '1')
                jia2[2].setAttribute('rel', '1')
            }
        }, b)
    }
    function ff(a,b){
            setTimeout(() => {
                a.style.display = 'none';
                b.style.display = 'block';
            }, 1500)
    }
    //柱子升起
    let ui = 0
    function xia(a) {
        let jia = document.querySelectorAll('.jia')
        let xi = setInterval(() => {
            let ui = a
            jia[ui].classList.add('shen')
            a++
            if (a == 7) { clearInterval(xi) }
            if (a == 12) { clearInterval(xi) }
            if (a == 17) { clearInterval(xi) }
            if (a == 21) { clearInterval(xi) }
        }, 400)

    }
    //柱子升起 瞬移
    let iu = 0
    function xia1(k) {
        let jia1 = document.querySelectorAll('.jia1')
        let xin = setInterval(() => {
            let iu = k
            jia1[iu].classList.add('sheng')
            k++
            if (k == 2) {
                clearInterval(xin);
            ff(diyid,dier)
            }
            if (k == 4) {
                clearInterval(xin)
                ff(dier,disan)
            }
            if (k == 6) {
                clearInterval(xin)
                // ff(dier,disi)
                setTimeout(() => {
                    dier.style.display = 'none';
                    disi.style.display = 'block';
                    disan.style.display = 'none';
                }, 1500)
            }
        })
    }
    setTimeout(() => {
        for (let m = 0; m < jiantou.length; m++) {
            setTimeout(() => {
                jiantou[m].setAttribute('class', 'jiantou hua')
            }, m * 800)
        }
    }, 1000)
    setTimeout(() => {
        zhong.style.opacity = '1'
        // let result = confirm("您确定要访问此页面吗");
        // if(result){
        //     que.style.display = 'block'
        // }
        que.style.display = 'block'
    }, 2400)
    //滑动事件
    bo.ontouchmove = function () {
        bo.style.display = 'none'
        zhong.style.display = 'none'
        er.style.display = 'block'
        setTimeout(() => {
            xia(0)
        }, 1500)
        setTimeout(() => {
            guang.style.display = 'block'
            if (guang.style.display == 'block') {
                wang.style.display = 'block'
                diyi.style.display = 'none'
                diyid.style.display = 'block'
            }
        }, 5900)
        push(audio1, 0)
        play(audio2, 2500)
        push(audio2, 5600)
    }
    //柱子点击事件
    lu8.onclick = function () {
        cc(0, 'bird wei', dier, disan, disi)
    }
    lu12.onclick = function () {
        cc(1, 'bird wei1', disan, dier, disi)
    }
    lu17.onclick = function () {
        cc(2, 'bird wei2', disi, disan, dier)
    }
    //光圈一点击事件
    guang.onclick = function () {
        aa(0, 1, 2304)
        bb(1, 1, 1240, 2304)
        bb(0, 1, 2724, 3544)
        bb(1, 1, 1600, 6284)
        dd(7,8200,0,7700,guang)
        bird.setAttribute('class', 'bird active1')
        wang.style.display = 'none'
        setTimeout(() => {
            guang1.style.display = 'block'
        }, 12000)
        play(audio4, 0)
        push(audio4, 7900)
        setTimeout(() => {
            play(audio2, 1000)
            push(audio2, 3500)
        }, 7900)
    }
    //光圈二点击事件
    guang1.onclick = function () {
        bird.setAttribute('class', 'bird active2')
        aa(0, 1, 660)
        bb(1, 1, 3600, 460)
        dd(12,4480,2,4000,guang1)
        ee(guang2,8000)
        play(audio4, 0)
        push(audio4, 4280)
        setTimeout(() => {
            play(audio2, 1000)
            push(audio2, 3800)
        }, 4280)
    }
    //光圈三点击事件
    guang2.onclick = function () {
        bird.setAttribute('class', 'bird active3')
        aa(2, 1, 1550)
        bb(3, 1, 1298, 1450)
        bb(2, 1, 1852, 2700)
        dd(17,4700,4,4000,guang2)
        if (this.style.display == 'none') {
            jia2[0].setAttribute('rel', '0')
            jia2[1].setAttribute('rel', '0')
        }
        ee(guang3,8000)
        play(audio4, 0)
        push(audio4, 4700)
        setTimeout(() => {
            play(audio2, 1000)
            push(audio2, 3300)
        }, 4700)
    }
    //光圈四点击事件
    guang3.onclick = function () {
        bird.setAttribute('class', 'bird active4')
        aa(3, 1, 1978)
        bb(0, 1, 1145, 1778)
        guang3.style.display = 'none'
        if (guang3.style.display == 'none') {
            jia2[0].setAttribute('rel', '0')
            jia2[1].setAttribute('rel', '0')
            jia2[2].setAttribute('rel', '0')
        }
        play(audio4, 0)
        push(audio4, 3120)
        play(audio3, 3320)
        //升天
        setTimeout(() => {
            bg.style.backgroundImage = 'url(../images/年度账单/新建文件夹/bg.jpg)'
            bg.style.backgroundPosition = '0 0';
            bird.setAttribute('class', 'bird zui')
            bird.setAttribute('src', '../images/年度账单/所有鸽子/gz31.png')
            lu21.setAttribute('class', 'lu21 luu ')
            setTimeout(() => {
                xiaqu.setAttribute('class', 'xiaqu1 xiaqu')
                top.style.display = 'none'
            }, 600)
        }, 3120)
        setTimeout(() => {
            box.style.display = 'block'
        }, 5000)
    }
    que.onclick = function () {
        console.log(123)
        this.style.display = 'none'
        play(audio1, 0)
    }






}