{
    {
        const num: number = 0;

        // 型Tはnumber型
        type T = typeof num;

        // fooはnumber型の変数となる
        const foo: T = 123;
    }
    {
        const obj = {
            foo: 123,
            bar: "hi"
        };

        type T = typeof obj;
        const obj2: T = {
            foo: -50,
            bar: ""
        };
    }
}
