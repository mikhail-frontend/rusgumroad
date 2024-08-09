export default (price: string | number): string => {
    if (!price) return '0';
    price = Number(Number(price).toFixed(2));
    price = String(price);
    if (!price.includes('.')) return price.replace(/(.)(?=(.{3})+$)/g, '$1 ');
    return price;
};
