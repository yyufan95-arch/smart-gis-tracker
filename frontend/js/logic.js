let steps = ['A', 'B', 'C', 'D'];
let currentIndex = 0;

function processCert() {
    let currentStep = steps[currentIndex];
    const time = new Date().toLocaleTimeString();

    // 模拟 PDF 中的加密：Base64 编码并翻转
    let secretToken = btoa(currentStep + "_" + time).split("").reverse().join("");

    // 存入浏览器模拟数据库 (LocalStorage)
    let db = JSON.parse(localStorage.getItem('gis_records') || "[]");
    db.push({ step: currentStep, time: time, token: secretToken });
    localStorage.setItem('gis_records', JSON.stringify(db));

    // 更新 UI 展示
    document.getElementById('li-' + currentStep).style.color = "green";
    document.getElementById('li-' + currentStep).innerHTML += " ✓";
    document.getElementById('log').innerText = JSON.stringify(db, null, 2);

    alert(`地点 ${currentStep} 认证成功！\n数据已加密并模拟存入 DB。`);
    currentIndex++;
}
