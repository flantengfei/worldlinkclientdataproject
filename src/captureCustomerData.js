let dataCache = [];

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
    let data = [];
    const keepChecking = setInterval(() => {
        //console.log("checking page data...");
        data = parseDataFromPage();
        if (JSON.stringify(data) !== JSON.stringify(dataCache)) {
            //console.log("not match");
            if (data !== false) {
                dataCache = data;
                //console.log("capture Data !!!");
                customerApi.captureData(JSON.stringify(data));
            }
        }
    }, 3000);
};
