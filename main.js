const urlInfo = {
    baseUrl:'https://jsonmock.hackerrank.com/api',
    endPoint:'/countries',
    field:'?name='
}

const input = {
    country: 'Afghanistan',
    phoneNumber: 656445445
}

const extractCountryData = (data) => {
    const result = Object.keys(data).reduce((acc, key) => {
        (key === 'data') ? acc = data[key] : {}
        return acc
    }, 0);
    return result
}

const getCallingCode = (countryData) => {
    const result = countryData.reduce((acc, obj) => {
        if (obj.hasOwnProperty('callingCodes') && obj['callingCodes'].length != 0)
            acc = obj['callingCodes'][0]
        return acc
    }, -1)
    return result
}

const getPhoneNumbers = async (countryInput, urlInfo) => {
    const {baseUrl, endPoint, field} = urlInfo
    const request = await fetch(`${baseUrl}${endPoint}${field}${countryInput.country}`)
    const data = await request.json()
    const countryData = extractCountryData(data)
    const callingCode = getCallingCode(countryData)
    const result = `+${callingCode} ${countryInput.phoneNumber}`
    console.log(result)
    return result
}

getPhoneNumbers(input, urlInfo)


