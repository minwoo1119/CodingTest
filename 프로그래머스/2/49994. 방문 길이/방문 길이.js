function solution(dirs) {
    const visited = new Set();
    let position = {x: 0, y: 0};

    const up = () => {
        if (position.y >= 5) return; 
        
        visited.add(`${position.x},${position.y}-${position.x},${position.y + 1}`);
        visited.add(`${position.x},${position.y + 1}-${position.x},${position.y}`);
        
        position.y += 1;
    }

    const down = () => {
        if (position.y <= -5) return;
        visited.add(`${position.x},${position.y}-${position.x},${position.y - 1}`);
        visited.add(`${position.x},${position.y - 1}-${position.x},${position.y}`);
        position.y -= 1;
    }

    const left = () => {
        if (position.x <= -5) return;
        visited.add(`${position.x},${position.y}-${position.x - 1},${position.y}`);
        visited.add(`${position.x - 1},${position.y}-${position.x},${position.y}`);
        position.x -= 1;
    }

    const right = () => {
        if (position.x >= 5) return;
        visited.add(`${position.x},${position.y}-${position.x + 1},${position.y}`);
        visited.add(`${position.x + 1},${position.y}-${position.x},${position.y}`);
        position.x += 1;
    }

    for (let i = 0; i < dirs.length; i++) {
        if (dirs[i] === 'U') up();
        if (dirs[i] === 'D') down();
        if (dirs[i] === 'L') left();
        if (dirs[i] === 'R') right();
    }

    return visited.size / 2;
}