class customerData {
    constructor() {
        this.addDataUrl = `https://worldlinkcustomerdata.herokuapp.com/api/customerdata/add`;
        this.searchDataUrl = `https://worldlinkcustomerdata.herokuapp.com/api/customerdata/search/`;
    }

    addData(data) {}

    searchData(customerId) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const responseObj = JSON.parse(xhr.response)[0];
                let orderNumber = "Not found";
                if (responseObj !== undefined) {
                    orderNumber = responseObj.orderNumber;
                }
                const orderNumberHtml = `<br><span class='a-size-large'>OrderNumber: ${orderNumber}</span>`;
                $("div.name-container").append(orderNumberHtml);
            }
        };

        xhr.open("GET", `${this.searchDataUrl}${customerId}`, true);
        xhr.send();
    }

    captureData(data) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                console.log(xhr.response);
            }
        };
        xhr.open("POST", this.addDataUrl, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);
    }
}

const customerApi = new customerData();
