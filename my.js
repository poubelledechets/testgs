
function testGS() {
var url = "https://script.google.com/macros/s/AKfycbyXa3j_eOWvBxuMv7MIjZ5yQRL6qST_mgAfmOMXtPFPsNDiiCXkx-SyKgKyyi8pBKY/exec"

fetch(url)
.then (d => d.json())
.then (d => {
    document.getElementById("app").textContent = d[0].status;
});
}

document.getElementById("btn").addEventListener("click",testGS) 