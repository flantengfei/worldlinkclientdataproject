const url = document.location.href;

if (url.indexOf("sellercentral.amazon.com") >= 0) {
    captureCustomerData();
} else if (url.indexOf("www.amazon.com/gp/profile/") >= 0) {
    searchCustomerData();
} else if (url.indexOf("file:///C:/Users/flan_/Dropbox/") >= 0) {
    captureCustomerData();
}
