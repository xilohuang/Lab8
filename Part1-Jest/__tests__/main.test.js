const formatVolumeIconPath = require('../assets/scripts/main.js');

describe ('my volume level', () => {
    test('is 3', () => {
        expect(formatVolumeIconPath(67)).toMatch("./assets/media/icons/volume-level-3.svg");
    });

    test('is 2', () => {
        expect(formatVolumeIconPath(50)).toMatch("./assets/media/icons/volume-level-2.svg");
    });

    test('is 1', () => {
        expect(formatVolumeIconPath(2)).toMatch("./assets/media/icons/volume-level-1.svg");
    });

    test('is 0', () => {
        expect(formatVolumeIconPath(0)).toMatch("./assets/media/icons/volume-level-0.svg");
    });
});
