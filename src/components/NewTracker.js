import React from "react";

export default class NewTracker extends React.Component {
  state = { fromCurrency: "", toCurrency: "" };

  currencies = [
    { code: "AED", name: "United Arab Emirates Dirham (AED)" },
    { code: "AFN", name: "Afghan Afghani (AFN)" },
    { code: "ALL", name: "Albanian Lek (ALL)" },
    { code: "AMD", name: "Armenian Dram (AMD)" },
    { code: "AOA", name: "Angolan Kwanza (AOA)" },
    { code: "ARS", name: "Argentine Peso (ARS)" },
    { code: "AUD", name: "Australian Dollar (AUD)" },
    { code: "BDT", name: "Bangladeshi Taka (BDT)" },
    { code: "BGN", name: "Bulgarian Lev (BGN)" },
    { code: "BHD", name: "Bahraini Dinar (BHD)" },
    { code: "BIF", name: "Burundian Franc (BIF)" },
    { code: "BMD", name: "Bermudan Dollar (BMD)" },
    { code: "BND", name: "Brunei Dollar (BND)" },
    { code: "BOB", name: "Bolivian Boliviano (BOB)" },
    { code: "BRL", name: "Brazilian Real (BRL)" },
    { code: "BSD", name: "Bahamian Dollar (BSD)" },
    { code: "BWP", name: "Botswanan Pula (BWP)" },
    { code: "BZD", name: "Belize Dollar (BZD)" },
    { code: "CAD", name: "Canadian Dollar (CAD)" },
    { code: "CDF", name: "Congolese Franc (CDF)" },
    { code: "CHF", name: "Swiss Franc (CHF)" },
    { code: "CLP", name: "Chilean Peso (CLP)" },
    { code: "CNY", name: "Chinese Yuan (CNY)" },
    { code: "COP", name: "Colombian Peso (COP)" },
    { code: "CUP", name: "Cuban Peso (CUP)" },
    { code: "CZK", name: "Czech Republic Koruna (CZK)" },
    { code: "DJF", name: "Djiboutian Franc (DJF)" },
    { code: "DKK", name: "Danish Krone (DKK)" },
    { code: "DOP", name: "Dominican Peso (DOP)" },
    { code: "DZD", name: "Algerian Dinar (DZD)" },
    { code: "EGP", name: "Egyptian Pound (EGP)" },
    { code: "ERN", name: "Eritrean Nakfa (ERN)" },
    { code: "ETB", name: "Ethiopian Birr (ETB)" },
    { code: "EUR", name: "Euro (EUR)" },
    { code: "FJD", name: "Fijian Dollar (FJD)" },
    { code: "GBP", name: "British Pound Sterling (GBP)" },
    { code: "GEL", name: "Georgian Lari (GEL)" },
    { code: "GHS", name: "Ghanaian Cedi (GHS)" },
    { code: "GMD", name: "Gambian Dalasi (GMD)" },
    { code: "GNF", name: "Guinean Franc (GNF)" },
    { code: "GTQ", name: "Guatemalan Quetzal (GTQ)" },
    { code: "GYD", name: "Guyanaese Dollar (GYD)" },
    { code: "HKD", name: "Hong Kong Dollar (HKD)" },
    { code: "HNL", name: "Honduran Lempira (HNL)" },
    { code: "HRK", name: "Croatian Kuna (HRK)" },
    { code: "HTG", name: "Haitian Gourde (HTG)" },
    { code: "HUF", name: "Hungarian Forint (HUF)" },
    { code: "IDR", name: "Indonesian Rupiah (IDR)" },
    { code: "ILS", name: "Israeli New Sheqel (ILS)" },
    { code: "INR", name: "Indian Rupee (INR)" },
    { code: "IQD", name: "Iraqi Dinar (IQD)" },
    { code: "IRR", name: "Iranian Rial (IRR)" },
    { code: "ISK", name: "Icelandic Krona (ISK)" },
    { code: "JEP", name: "Jersey Pound (JEP)" },
    { code: "JMD", name: "Jamaican Dollar (JMD)" },
    { code: "JOD", name: "Jordanian Dinar (JOD)" },
    { code: "JPY", name: "Japanese Yen (JPY)" },
    { code: "KES", name: "Kenyan Shilling (KES)" },
    { code: "KGS", name: "Kyrgystani Som (KGS)" },
    { code: "KHR", name: "Cambodian Riel (KHR)" },
    { code: "KMF", name: "Comorian Franc (KMF)" },
    { code: "KPW", name: "North Korean Won (KPW)" },
    { code: "KRW", name: "South Korean Won (KRW)" },
    { code: "KWD", name: "Kuwaiti Dinar (KWD)" },
    { code: "KYD", name: "Cayman Islands Dollar (KYD)" },
    { code: "KZT", name: "Kazakhstani Tenge (KZT)" },
    { code: "LAK", name: "Laotian Kip (LAK)" },
    { code: "LBP", name: "Lebanese Pound (LBP)" },
    { code: "LKR", name: "Sri Lankan Rupee (LKR)" },
    { code: "LRD", name: "Liberian Dollar (LRD)" },
    { code: "LSL", name: "Lesotho Loti (LSL)" },
    { code: "LYD", name: "Libyan Dinar (LYD)" },
    { code: "MAD", name: "Moroccan Dirham (MAD)" },
    { code: "MDL", name: "Moldovan Leu (MDL)" },
    { code: "MGA", name: "Malagasy Ariary (MGA)" },
    { code: "MKD", name: "Macedonian Denar (MKD)" },
    { code: "MMK", name: "Myanma Kyat (MMK)" },
    { code: "MNT", name: "Mongolian Tugrik (MNT)" },
    { code: "MOP", name: "Macanese Pataca (MOP)" },
    { code: "MUR", name: "Mauritian Rupee (MUR)" },
    { code: "MVR", name: "Maldivian Rufiyaa (MVR)" },
    { code: "MWK", name: "Malawian Kwacha (MWK)" },
    { code: "MXN", name: "Mexican Peso (MXN)" },
    { code: "MYR", name: "Malaysian Ringgit (MYR)" },
    { code: "MZN", name: "Mozambican Metical (MZN)" },
    { code: "NAD", name: "Namibian Dollar (NAD)" },
    { code: "NGN", name: "Nigerian Naira (NGN)" },
    { code: "NOK", name: "Norwegian Krone (NOK)" },
    { code: "NPR", name: "Nepalese Rupee (NPR)" },
    { code: "NZD", name: "New Zealand Dollar (NZD)" },
    { code: "OMR", name: "Omani Rial (OMR)" },
    { code: "PAB", name: "Panamanian Balboa (PAB)" },
    { code: "PEN", name: "Peruvian Nuevo Sol (PEN)" },
    { code: "PGK", name: "Papua New Guinean Kina (PGK)" },
    { code: "PHP", name: "Philippine Peso (PHP)" },
    { code: "PKR", name: "Pakistani Rupee (PKR)" },
    { code: "PLN", name: "Polish Zloty (PLN)" },
    { code: "PYG", name: "Paraguayan Guarani (PYG)" },
    { code: "QAR", name: "Qatari Rial (QAR)" },
    { code: "RON", name: "Romanian Leu (RON)" },
    { code: "RSD", name: "Serbian Dinar (RSD)" },
    { code: "RUB", name: "Russian Ruble (RUB)" },
    { code: "RWF", name: "Rwandan Franc (RWF)" },
    { code: "SAR", name: "Saudi Riyal (SAR)" },
    { code: "SCR", name: "Seychellois Rupee (SCR)" },
    { code: "SDG", name: "Sudanese Pound (SDG)" },
    { code: "SEK", name: "Swedish Krona (SEK)" },
    { code: "SGD", name: "Singapore Dollar (SGD)" },
    { code: "SHP", name: "Saint Helena Pound (SHP)" },
    { code: "SLL", name: "Sierra Leonean Leone (SLL)" },
    { code: "SOS", name: "Somali Shilling (SOS)" },
    { code: "SRD", name: "Surinamese Dollar (SRD)" },
    { code: "SYP", name: "Syrian Pound (SYP)" },
    { code: "SZL", name: "Swazi Lilangeni (SZL)" },
    { code: "THB", name: "Thai Baht (THB)" },
    { code: "TJS", name: "Tajikistani Somoni (TJS)" },
    { code: "TMT", name: "Turkmenistani Manat (TMT)" },
    { code: "TND", name: "Tunisian Dinar (TND)" },
    { code: "TOP", name: "Tongan Pa'anga (TOP)" },
    { code: "TRY", name: "Turkish Lira (TRY)" },
    { code: "TTD", name: "Trinidad and Tobago Dollar (TTD)" },
    { code: "TWD", name: "New Taiwan Dollar (TWD)" },
    { code: "TZS", name: "Tanzanian Shilling (TZS)" },
    { code: "UAH", name: "Ukrainian Hryvnia (UAH)" },
    { code: "UGX", name: "Ugandan Shilling (UGX)" },
    { code: "USD", name: "United States Dollar (USD)" },
    { code: "UYU", name: "Uruguayan Peso (UYU)" },
    { code: "UZS", name: "Uzbekistan Som (UZS)" },
    { code: "VND", name: "Vietnamese Dong (VND)" },
    { code: "VUV", name: "Vanuatu Vatu (VUV)" },
    { code: "WST", name: "Samoan Tala (WST)" },
    { code: "YER", name: "Yemeni Rial (YER)" },
    { code: "ZAR", name: "South African Rand (ZAR)" },
    { code: "ZMW", name: "Zambian Kwacha (ZMW)" },
    { code: "ZWL", name: "Zimbabwean Dollar (ZWL)" }
  ];

  render() {
    return (
      <div className="fx-card new-currency">
        <div>
          <h3>Track another exchange rate</h3>
          <label>From Currency: </label>
          <select
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            name="fromCurrency"
          >
            <option value="" />
            {this.currencies.map(currency => {
              return (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              );
            })}
          </select>
          <br />
          <label>To Currency: </label>
          <select
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            name="toCurrency"
          >
            <option value="" />
            {this.currencies.map(currency => {
              return (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              );
            })}
          </select>
          <br />
          <button
            onClick={() =>
              this.props.newTracker(
                this.state.fromCurrency,
                this.state.toCurrency
              )
            }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
