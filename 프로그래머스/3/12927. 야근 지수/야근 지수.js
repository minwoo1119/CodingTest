class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        if (this.size() === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
    size() { return this.heap.length; }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let largest = index;
            if (left < this.size() && this.heap[left] > this.heap[largest]) largest = left;
            if (right < this.size() && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

function solution(n, works) {
    if (works.reduce((a, b) => a + b, 0) <= n) return 0;

    const heap = new MaxHeap();
    for (const work of works) heap.push(work);

    for (let i = 0; i < n; i++) {
        let max = heap.pop();
        if (max <= 0) break;
        heap.push(max - 1);
    }

    return heap.heap.reduce((acc, cur) => acc + cur ** 2, 0);
}