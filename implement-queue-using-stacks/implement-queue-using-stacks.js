/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.in = [];
    this.out = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.in.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.out.length === 0) {
      while(this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    
    return this.out.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.out.length === 0) {
        while(this.in.length > 0) {
            this.out.push(this.in.pop());
        }
    }
    
    return this.out[this.out.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.in.length === 0 && this.out.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */