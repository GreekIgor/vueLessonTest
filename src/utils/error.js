const ERROR_CODES = {
    'EMAIL_NOT_FOUND' : 'такои емаил не наиден'
}
export function error(code)
{
    return ERROR_CODES[code]? ERROR_CODES[code]: 'неизвестная ошбка'
}