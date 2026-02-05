let discount = 10;
let laptopPrice = 30000;
let headphonePrice = 2500;
let speakerPrice = 1000;

console.log(`Flat Discount Rate: ${discount}%`);

console.log(
	`Laptop: ${laptopPrice}/- (Discount: - ${(laptopPrice * discount) / 100}/-) = ${laptopPrice - (laptopPrice * discount) / 100}/-`,
);

console.log(
	`Headphone: ${headphonePrice}/- (Discount: - ${(headphonePrice * discount) / 100}/-) = ${headphonePrice - (headphonePrice * discount) / 100}/-`,
);

console.log(
	`Speaker: ${speakerPrice}/- (Discount: - ${(speakerPrice * discount) / 100}/-) = ${speakerPrice - (speakerPrice * discount) / 100}/-`,
);
