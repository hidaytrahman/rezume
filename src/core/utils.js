/**
 * 
 * @param {*} startYear 
 * @returns 
 */
export const getYears = (startYear) => {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
}


export const print = () => {
    window.print();
}

/**
 * 
 * How to use: saveTemplateAsFile("filename.json", myDataObj);
 * @param {*} filename 
 * @param {*} dataObjToWrite
 */
export const saveTemplateAsFile = (filename, dataObjToWrite) => {
    const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
    const link = document.createElement("a");

    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

    const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove();
};