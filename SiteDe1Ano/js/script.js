function createBalloons() {
    const container = document.getElementById('balloons-container');
    const balloonCount = 50;
    const colors = ['#ff4081', '#ff79b0', '#ff1744', '#f50057', '#ff80ab', '#fcb4cb'];

    for (let i = 0; i < balloonCount; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'balloon-wrapper';
        
        // Random position horizontally
        const leftPos = Math.random() * 150;
        wrapper.style.left = leftPos + 'vw';
        
        // Random size
        const size = 35 + Math.random() * 45;
        // Random duration
        const duration = 30 + Math.random() * 20;
        // Random delay
        const delay = Math.random() * 1;
        
        wrapper.style.animationDuration = duration + 's';
        wrapper.style.animationDelay = delay + 's';
        
        const balloon = document.createElement('div');
        balloon.className = 'heart-balloon';
        
        // Pick a varied pink/red color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        balloon.style.setProperty('--size', size + 'px');
        balloon.style.setProperty('--color', color);
        
        const spinDuration = 4 + Math.random() * 5;
        balloon.style.animationDuration = spinDuration + 's';

        const string = document.createElement('div');
        string.className = 'string';
        balloon.appendChild(string);
        
        wrapper.appendChild(balloon);
        container.appendChild(wrapper);
    }
}
createBalloons();
