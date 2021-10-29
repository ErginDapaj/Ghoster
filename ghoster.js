const { keyboard, Key, mouse, left, right, up, down } = require("@nut-tree/nut-js");

(async () => {
    await keyboard.pressKey(Key.CapsLock);
    await keyboard.pressKey(Key.M);
    await keyboard.pressKey(Key.O);
    await keyboard.pressKey(Key.O);
    await keyboard.pressKey(Key.O);
    await keyboard.pressKey(Key.S);
    await keyboard.pressKey(Key.Space);
    await keyboard.pressKey(Key.E);
    await keyboard.pressKey(Key.Space);
    await keyboard.pressKey(Key.H);
    await keyboard.pressKey(Key.E);
    await keyboard.pressKey(Key.N);
    await keyboard.pressKey(Key.G);
    await keyboard.pressKey(Key.R);
    await keyboard.pressKey(Key.E);
    await keyboard.pressKey(Key.Space);
    for (let i = 0; i < 100; i++) {
        // let random = Math.floor(Math.random() * 100) + 1
        // console.log(random)
        await keyboard.pressKey(Key.CapsLock);
        await keyboard.pressKey(Key.M);
        await keyboard.pressKey(Key.O);
        await keyboard.pressKey(Key.O);
        await keyboard.pressKey(Key.O);
        await keyboard.pressKey(Key.S);
        await keyboard.pressKey(Key.Space);
        await keyboard.pressKey(Key.E);
        await keyboard.pressKey(Key.Space);
        await keyboard.pressKey(Key.H);
        await keyboard.pressKey(Key.E);
        await keyboard.pressKey(Key.N);
        await keyboard.pressKey(Key.G);
        await keyboard.pressKey(Key.R);
        await keyboard.pressKey(Key.E);
        await keyboard.pressKey(Key.Space);
        await mouse.move(left(500));
        await mouse.move(up(500));
        await mouse.move(right(500));
        await mouse.move(down(500))
    }
})(); 