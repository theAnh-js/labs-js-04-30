
//v1
export function getErrorMessage(errorCode){
    let message = '';

    switch (errorCode) {

        case 'E01':{
            message = 'Invalid username or password';
            break;
        }
    
        case 'E02':{
            message = 'Too many attempts';
            break;
        }
            
        case 'E03':{
            message = 'Missing data';
            break;
        }
            
        default:
            message = 'Something went wrong';
    }

    return message;
}

//v2
export function getErrorMessage2(errorCode){
    const errorMap = {
        E01: 'Invalid username or password',
        E02: 'Too many attempts',
        E03: 'Missing data'
    };

    // const message =
    //  errorMap[errorCode] ? errorMap[errorCode] : 'Something went wrong';
    // return message;
    return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));
