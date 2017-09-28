const parseDataFromPage = () => {
    var data = [];
    if ($("tr input.cust-id").length === 0) {
        console.log("Can not caputre cust-id data from page.");
        return false;
    }
    $("tr input.cust-id").each(function() {
        if (
            $(this)
                .closest("tr")
                .find("a[href^='https://sellercentral.amazon.com/hz/orders/']")
                .length === 0
        ) {
            console.log("Can not capture order number from page.");
            return false;
        }

        var id = $(this).val();
        if (id !== "") {
            data.push({
                _id: id,
                orderNumber: $(this)
                    .closest("tr")
                    .find(
                        "a[href^='https://sellercentral.amazon.com/hz/orders/']"
                    )
                    .text()
            });
        }
    });
    return data;
};

const captureCustomerData = () => {
    const data = parseDataFromPage();
    if (data !== false) {
        console.log(data); //101743
        customerApi.captureData(JSON.stringify(data));
    }
};
