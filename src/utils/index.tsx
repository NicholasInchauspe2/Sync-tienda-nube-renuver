export const formatPrice = (number: number) => {
    if(Number.isNaN(number)) return '$0';
    return number.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    });
};
