class Queue {
    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }
    push(element) {
        this.queue[this.tail++] = element;
    }
    pop() {
        const element = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        return element;
    }
    size() {
        return this.tail - this.head;
    }
    front() {
        return this.queue[this.head];
    }
    back() {
        return this.queue[this.tail];
    }
    isEmpty() {
        return this.size() === 0;
    }
}

function solution(bridge_length, weight, truck_weights) {
    const bridge = new Queue();

    let time = 0;
    let idx = 0;
    let currentBridgeWeight = 0;

    while (idx < truck_weights.length || !bridge.isEmpty()) {
        time++;

        // 지금 시간에 나갈 트럭이 있으면 다리를 나감
        if (!bridge.isEmpty() && bridge.front().exitTime === time) {
            const truck = bridge.pop();
            currentBridgeWeight -= truck.weight;
        }

        // 아직 올릴 트럭이 남아있고 올라갈수있으면 다리에 올림
        if (idx < truck_weights.length) {
            const truckWeight = truck_weights[idx];

            if (currentBridgeWeight + truckWeight <= weight) {
                bridge.push({
                    weight: truckWeight,
                    exitTime: time + bridge_length,
                });
                currentBridgeWeight += truckWeight;
                idx++;
            }
        }
    }
    return time;
}
