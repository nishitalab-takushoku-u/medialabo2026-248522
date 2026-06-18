let heikin = 3.5;
// console.log(Heikin);        // (1) 正しくは heikin

// (2) 関数名のつづり間違い
// let h = Math.froor(heikin); // 正しくは floor

// (3) 存在しない配列要素
let ary = ['a', 'b', 'c'];
console.log(ary[3]);

// (4) 小数のインデックス
let i = 3/2;
console.log(ary[i]);

// (5) メンバー名の間違い
let obj = {x:3, y:7};
console.log(obj.z);

// (6) 初期化していない変数のメンバー
let o;
// console.log(o.x);

// (7) オブジェクトや配列ではない値のメンバーと要素
let n = 3;
console.log(n.x);
console.log(n[2]);

// (8) メンバー名の間違い(その2）
let obj2 = {
    mem1: {x:4, y:9},
    mem2: "abc"
};
// console.log(obj2.mem0.x);