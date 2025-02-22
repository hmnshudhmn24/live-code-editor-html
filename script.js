function updateOutput() {
    const html = document.getElementById("htmlCode").value;
    const css = document.getElementById("cssCode").value;
    const js = document.getElementById("jsCode").value;
    
    const output = document.getElementById("output");
    const doc = output.contentDocument || output.contentWindow.document;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`);
    doc.close();

    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
}

function clearCode() {
    document.getElementById("htmlCode").value = "";
    document.getElementById("cssCode").value = "";
    document.getElementById("jsCode").value = "";
    updateOutput();
}

document.getElementById("htmlCode").addEventListener("input", updateOutput);
document.getElementById("cssCode").addEventListener("input", updateOutput);
document.getElementById("jsCode").addEventListener("input", updateOutput);

window.onload = function() {
    document.getElementById("htmlCode").value = localStorage.getItem("html") || "";
    document.getElementById("cssCode").value = localStorage.getItem("css") || "";
    document.getElementById("jsCode").value = localStorage.getItem("js") || "";
    updateOutput();
};
