export default function chain(fns) {
    return Object.assign(fns,{
        lastValue: false,
        currentValue: false,
        sum: function sum(x, y) {
            if(!this.currentValue) {
                if(!y) {
                    this.sum(1, 2)
                    this.sum(5)
                    this.sum(3)
                } else {
                    this.currentValue = x + y
                }
            } else {
                this.currentValue = x + this.currentValue
            }
            return this
        },
        double: function double(x) {
            if(!this.currentValue) {
                if(!x) {
                    this.double(this.sum(1, 2));
                } else {
                    this.sum(x, x);
                }
            } else {
                this.sum(this.currentValue, this.currentValue);
            }
            return this
        },
        minus: function minus (x, y) {
            if(!this.currentValue) {
                this.currentValue = x - y
            } else {
                this.currentValue = this.currentValue - x
            }
            return this
        },
        addOne: function addOne(x) {
            if(!this.currentValue) {
                if(!x) {
                    this.addOne(this.sum(1, 2));
                } else {
                    this.sum(x, 1);
                }

            } else {
                this.sum(1);
            }
            return this
        },
        execute: function execute() {
            if(!this.currentValue) {
                this.sum(1,2)
                return this
            } else {
                let out = this.currentValue
                this.currentValue = false
                return out
            }
        }
    });
}