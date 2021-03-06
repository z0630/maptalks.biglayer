'use strict';

module.exports = LineAtlas;

/**
 * From mapbox-gl-js
 * https://github.com/mapbox/mapbox-gl-js
 *
 * @author mapbox team
 * @license MIT
 *
 * A LineAtlas lets us reuse rendered dashed lines
 * by writing many of them to a texture and then fetching their positions
 * using .getDash.
 *
 * @param {number} width
 * @param {number} height
 * @private
 */
function LineAtlas(width, height) {
    this.width = width;
    this.height = height;
    this.nextRow = 0;

    this.bytes = 4;
    this.data = new Uint8Array(this.width * this.height * this.bytes);

    this.positions = {};
}

/**
 * Get or create a dash line pattern.
 *
 * @param {Array<number>} dasharray
 * @param {boolean} round whether to add circle caps in between dash segments
 * @returns {Object} position of dash texture in { y, height, width }
 * @private
 */
LineAtlas.prototype.getDash = function (dasharray, round) {
    const key = dasharray.join(',') + round;

    if (!this.positions[key]) {
        this.positions[key] = this.addDash(dasharray, round);
    }
    return this.positions[key];
};

LineAtlas.prototype.addDash = function (dasharray, round) {

    const n = round ? 7 : 0;
    const height = 2 * n + 1;
    const offset = 128;

    if (this.nextRow + height > this.height) {
        return null;
    }

    let length = 0;
    for (let i = 0; i < dasharray.length; i++) {
        length += dasharray[i];
    }

    const stretch = this.width / length;
    const halfWidth = stretch / 2;

    // If dasharray has an odd length, both the first and last parts
    // are dashes and should be joined seamlessly.
    const oddLength = dasharray.length % 2 === 1;

    for (let y = -n; y <= n; y++) {
        const row = this.nextRow + n + y;
        const index = this.width * row;

        let left = oddLength ? -dasharray[dasharray.length - 1] : 0;
        let right = dasharray[0];
        let partIndex = 1;

        for (let x = 0; x < this.width; x++) {

            while (right < x / stretch) {
                left = right;
                right = right + dasharray[partIndex];

                if (oddLength && partIndex === dasharray.length - 1) {
                    right += dasharray[0];
                }

                partIndex++;
            }

            const distLeft = Math.abs(x - left * stretch);
            const distRight = Math.abs(x - right * stretch);
            const dist = Math.min(distLeft, distRight);
            const inside = (partIndex % 2) === 1;
            let signedDistance;

            if (round) {
                // Add circle caps
                const distMiddle = n ? y / n * (halfWidth + 1) : 0;
                if (inside) {
                    const distEdge = halfWidth - Math.abs(distMiddle);
                    signedDistance = Math.sqrt(dist * dist + distEdge * distEdge);
                } else {
                    signedDistance = halfWidth - Math.sqrt(dist * dist + distMiddle * distMiddle);
                }
            } else {
                signedDistance = (inside ? 1 : -1) * dist;
            }

            this.data[3 + (index + x) * 4] = Math.max(0, Math.min(255, signedDistance + offset));
        }
    }

    const pos = {
        y: (this.nextRow + n + 0.5) / this.height,
        height: 2 * n / this.height,
        width: length
    };

    this.nextRow += height;
    this.dirty = true;

    return pos;
};
