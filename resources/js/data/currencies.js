// Full list of all countries with their currency codes
export const CURRENCIES = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
    { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', symbol: 'د.إ' },
    { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', symbol: '﷼' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$' },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', symbol: 'CHF' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', symbol: '₹' },
    { code: 'KWD', name: 'Kuwaiti Dinar', flag: '🇰🇼', symbol: 'د.ك' },
    { code: 'BHD', name: 'Bahraini Dinar', flag: '🇧🇭', symbol: 'د.ب' },
    { code: 'QAR', name: 'Qatari Riyal', flag: '🇶🇦', symbol: '﷼' },
    { code: 'OMR', name: 'Omani Rial', flag: '🇴🇲', symbol: '﷼' },
    { code: 'JOD', name: 'Jordanian Dinar', flag: '🇯🇴', symbol: 'د.ا' },
    { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬', symbol: '£' },
    { code: 'PKR', name: 'Pakistani Rupee', flag: '🇵🇰', symbol: '₨' },
    { code: 'BDT', name: 'Bangladeshi Taka', flag: '🇧🇩', symbol: '৳' },
    { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: 'S$' },
    { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰', symbol: 'HK$' },
    { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', symbol: 'NZ$' },
    { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪', symbol: 'kr' },
    { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴', symbol: 'kr' },
    { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰', symbol: 'kr' },
    { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦', symbol: 'R' },
    { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', symbol: 'R$' },
    { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', symbol: '$' },
    { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺', symbol: '₽' },
    { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷', symbol: '₺' },
    { code: 'PLN', name: 'Polish Zloty', flag: '🇵🇱', symbol: 'zł' },
    { code: 'CZK', name: 'Czech Koruna', flag: '🇨🇿', symbol: 'Kč' },
    { code: 'HUF', name: 'Hungarian Forint', flag: '🇭🇺', symbol: 'Ft' },
    { code: 'RON', name: 'Romanian Leu', flag: '🇷🇴', symbol: 'lei' },
    { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩', symbol: 'Rp' },
    { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', symbol: 'RM' },
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', symbol: '฿' },
    { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', symbol: '₱' },
    { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳', symbol: '₫' },
    { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷', symbol: '₩' },
    { code: 'TWD', name: 'Taiwan Dollar', flag: '🇹🇼', symbol: 'NT$' },
    { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬', symbol: '₦' },
    { code: 'KES', name: 'Kenyan Shilling', flag: '🇰🇪', symbol: 'KSh' },
    { code: 'GHS', name: 'Ghanaian Cedi', flag: '🇬🇭', symbol: '₵' },
    { code: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦', symbol: 'د.م.' },
    { code: 'TND', name: 'Tunisian Dinar', flag: '🇹🇳', symbol: 'د.ت' },
    { code: 'DZD', name: 'Algerian Dinar', flag: '🇩🇿', symbol: 'د.ج' },
    { code: 'LYD', name: 'Libyan Dinar', flag: '🇱🇾', symbol: 'ل.د' },
    { code: 'IQD', name: 'Iraqi Dinar', flag: '🇮🇶', symbol: 'ع.د' },
    { code: 'SYP', name: 'Syrian Pound', flag: '🇸🇾', symbol: '£' },
    { code: 'LBP', name: 'Lebanese Pound', flag: '🇱🇧', symbol: '£' },
    { code: 'YER', name: 'Yemeni Rial', flag: '🇾🇪', symbol: '﷼' },
    { code: 'AFN', name: 'Afghan Afghani', flag: '🇦🇫', symbol: '؋' },
    { code: 'NPR', name: 'Nepalese Rupee', flag: '🇳🇵', symbol: '₨' },
    { code: 'LKR', name: 'Sri Lankan Rupee', flag: '🇱🇰', symbol: '₨' },
    { code: 'MMK', name: 'Myanmar Kyat', flag: '🇲🇲', symbol: 'K' },
    { code: 'KHR', name: 'Cambodian Riel', flag: '🇰🇭', symbol: '៛' },
    { code: 'ETB', name: 'Ethiopian Birr', flag: '🇪🇹', symbol: 'Br' },
    { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿', symbol: 'TSh' },
    { code: 'UGX', name: 'Ugandan Shilling', flag: '🇺🇬', symbol: 'USh' },
    { code: 'MZN', name: 'Mozambican Metical', flag: '🇲🇿', symbol: 'MT' },
    { code: 'COP', name: 'Colombian Peso', flag: '🇨🇴', symbol: '$' },
    { code: 'ARS', name: 'Argentine Peso', flag: '🇦🇷', symbol: '$' },
    { code: 'CLP', name: 'Chilean Peso', flag: '🇨🇱', symbol: '$' },
    { code: 'PEN', name: 'Peruvian Sol', flag: '🇵🇪', symbol: 'S/' },
    { code: 'VES', name: 'Venezuelan Bolívar', flag: '🇻🇪', symbol: 'Bs' },
    { code: 'UYU', name: 'Uruguayan Peso', flag: '🇺🇾', symbol: '$' },
    { code: 'PYG', name: 'Paraguayan Guaraní', flag: '🇵🇾', symbol: '₲' },
    { code: 'BOB', name: 'Bolivian Boliviano', flag: '🇧🇴', symbol: 'Bs.' },
    { code: 'GTQ', name: 'Guatemalan Quetzal', flag: '🇬🇹', symbol: 'Q' },
    { code: 'CRC', name: 'Costa Rican Colón', flag: '🇨🇷', symbol: '₡' },
    { code: 'DOP', name: 'Dominican Peso', flag: '🇩🇴', symbol: '$' },
    { code: 'UAH', name: 'Ukrainian Hryvnia', flag: '🇺🇦', symbol: '₴' },
    { code: 'GEL', name: 'Georgian Lari', flag: '🇬🇪', symbol: '₾' },
    { code: 'AMD', name: 'Armenian Dram', flag: '🇦🇲', symbol: '֏' },
    { code: 'AZN', name: 'Azerbaijani Manat', flag: '🇦🇿', symbol: '₼' },
    { code: 'KZT', name: 'Kazakhstani Tenge', flag: '🇰🇿', symbol: '₸' },
    { code: 'UZS', name: 'Uzbekistani Som', flag: '🇺🇿', symbol: 'so\'m' },
    { code: 'IRR', name: 'Iranian Rial', flag: '🇮🇷', symbol: '﷼' },
];

// Helper function to get currency by code
export const getCurrencyByCode = (code) => {
    return CURRENCIES.find(c => c.code === code) || CURRENCIES[0];
};

// Helper function to format amount with currency
export const formatCurrency = (amount, currencyCode = 'USD') => {
    const currency = getCurrencyByCode(currencyCode);
    const formattedAmount = parseFloat(amount || 0).toFixed(2);
    
    // Some currencies put symbol after (like EUR, GBP)
    if (['EUR', 'GBP'].includes(currencyCode)) {
        return `${formattedAmount} ${currency.symbol}`;
    }
    // Most currencies put symbol before
    return `${currency.symbol}${formattedAmount}`;
};
