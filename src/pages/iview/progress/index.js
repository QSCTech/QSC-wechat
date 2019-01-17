Component({
    externalClasses: ['i-class'],

    properties: {
        percent: {
            type: Number,
            value: 0
        },
        // normal || active || wrong || success
        status: {
            type: String,
            value: 'normal'
        },
        strokeWidth: {
            type: Number,
            value: 12
        },
        hideInfo: {
            type: Boolean,
            value: true
        },
        units: {
            type: Number,
            value: 0,
        }
    }
});
