function isBalanced(s) {
    let stack = [];
    let balanced = 'YES';

    function isMatch(open, close) {
        if ( (open === '{' && close === '}') || 
             (open === '[' && close === ']') ||
             (open === '(' && close === ')')
        ) {
            return true;
        }
        return false;
    }
    
    for (let c of s) {
        if (['{', '[', '('].includes(c)) {
            stack.push(c);
        } else if (['}', ']', ')'].includes(c)) {
            if (stack.length === 0) {
                balanced = 'NO';
                break;
            }
            const last = stack.pop();
            if ( !isMatch(last, c) ) {
                balanced = 'NO';
                break;
            }
        }
    }
    if (stack.length !== 0) {
        balanced = 'NO';
    }
    return balanced;
}

exports.isBalanced = isBalanced;