//arrays to store all donations and distributions
const donations = [];
const distributions = [];

// registers a new donation
function registerDonations(name, type, amount, date) {
    donations.push({name, type, amount, date });
}

//records a distribution of donations
function distributeDonationa(type, amount, date) {
    distributions.push({ type, amount, date });
}

//calculates the current inventory  by donation type, considering both donations and distributions.
function getInventory() {
    const inventory = {};

    donations.forEach(d => {
        inventory[d.type] = (inventory[d.type] || 0) + d.amount;

    });

    distributions.forEach(d => {
        inventory[d.type] = (inventory[d.type] || 0) - d.amount;
    });

    return inventory;
}

//summarizes total donations per donor.
function getDonationsSummary() {
    const summary = {};

    donations.forEach(d => {
        summary[d.name] = (summary[d.name] || 0) + d.amount;
    });

    return summary;
}

//sample usage(testing)
// registerDonations("Alice", "Food", 10, "2025-07-11");
// registerDonations("Bob", "Money", 100, "2025-09- 11");
// distributeDonationa("Food", 4, "2025-07-12");

// console.log("Inventory report:", getInventory());
// console.log("Donot Summary: ", getDonationsSummary());

