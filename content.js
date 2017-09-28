let count = 0;

const keepChecking = setInterval(() => {
    checkCustomerId();
}, 1000);

const checkCustomerId = () => {
    //console.log("checking customer ID...");

    if (count >= 10) {
        console.log("exceed max check time");
        clearInterval(keepChecking);
    }

    /* customer profile page */
    if (document.getElementById("glimpse-ephemeral-metadata")) {
        const customerId = document
            .getElementById("glimpse-ephemeral-metadata")
            .getAttribute("data-customer-id");
        const customerIdHtml = `<br><span class='a-size-large'>Customer ID: ${customerId}</span>`;
        //console.log("CustomerId found: " + customerId);
        $("div.name-container").append(customerIdHtml);
        customerApi.searchData(customerId);
        clearInterval(keepChecking);
    }

    /* sellercentral page */

    count++;
};
