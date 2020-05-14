'usestrict'

function deployCharCircle() {
    const angle = 5.3;
    const target = document.querySelector('#js-text-area');
    const str = "I thought what I'd do was, I'd pretend I was one of those deaf-mutes";
    const chars = Array.from(str);
    
    chars.forEach(function(c, i, arr) {
        let span = document.createElement('span');
        span.innerHTML = c;
        span.style.display = 'inline-block';
        span.style.position = 'absolute';
        span.style.left = '50%';
        span.style.top = '50%';
        span.style.transformOrigin = 'left top';
        span.style.transform =
            `rotate(${(i * angle - angle * ((arr.length / 2) >> 0))}deg)` +
            'translate(0%, 40%)' +
            `translate(0, -${(target.offsetWidth * 0.5)}px)` +
            'translate(-50%, -50%)';
        target.appendChild(span);
    });
}

deployCharCircle();

