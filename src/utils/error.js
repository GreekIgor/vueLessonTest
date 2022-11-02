const ERROR_CODES = {
    'EMAIL_NOT_FOUND' : 'такои емаил не наиден',
    'auth': 'Авторизуетесь в системе',
    'main' : 'test main'
}
export function error(code)
{
    return ERROR_CODES[code]? ERROR_CODES[code]: 'неизвестная ошбка'
}