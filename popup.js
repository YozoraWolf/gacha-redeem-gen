const gameLink = {
    "genshin": "https://genshin.hoyoverse.com/en/gift?code=",
    "hsr": "https://hsr.hoyoverse.com/gift?code=",
    "zzz": "https://zenless.hoyoverse.com/redemption?code="
}

let copyBtnFlag = false;

document.getElementById("copy-links-btn").innerHTML = "Copy Links";

document.getElementById("gen-links-btn").addEventListener("click", () => {
    const links = document.getElementById("links").value;
    let separator = document.getElementById("separator-token").value;
    const line = document.getElementById("separator-line").value;
    const game = document.getElementById("game").value;

    separator = separator.replace(/\\n/g, "\n");


    const codes = links.split(separator);
    console.log(codes);
    const gen_links = codes.map(code => {
        return `${gameLink[game]}${code}`;
    }).join(`\n${line}\n`);

    console.log(gen_links);

    document.getElementById("gen-links").value = gen_links;
});

document.getElementById("copy-links-btn").addEventListener("click", (el) => {
    const copyBtn = el.target;
    copyBtn.innerHTML = "Copied!";
    if (!copyBtnFlag) {
        copyBtnFlag = true;
        setTimeout(() => {
            copyBtn.innerHTML = "Copy Links";
            copyBtnFlag = false;
        }, 2000);
    }
    const copyText = document.getElementById("gen-links");
    let result = copyText.value;
    result = result.replace(/\n/g, "\r\n"); // Ensure using \r\n for compatibility
    const blob = new Blob([result], { type: 'text/plain' });
    const item = new ClipboardItem({ "text/plain": blob });

    // Use write() with the ClipboardItem
    navigator.clipboard.write([item]).then(() => {
        console.log("Text copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});

document.getElementById("help-modal-btn").addEventListener("click", () => {
    document.getElementById("help-modal-cont").style.display = "flex";
});

document.getElementById("help-modal-cont").addEventListener("click", () => {
    document.getElementById("help-modal-cont").style.display = "none";
});