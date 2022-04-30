export function classifyStudent(mark) {
    let result;

    switch(mark){
        case 0:
        case 1:
        case 2:
        case 3:{
            result = 'Bad'
            break;
        }
        case 4:
        case 5:
        case 6:{
            result = 'Not good'
            break;
        }
        case 7:
        case 8:{
            result = 'Good'
            break;
        }
        case 9:
        case 10:{
            result = 'Excellent'
            break;
        }
        default:{
            result = 'Invalid mark'
        }

    }

    return result;
}
console.log(classifyStudent(99))