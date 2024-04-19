
function allTruthy(n) {
    for (let i = 0; i < n.length; i++) {
        if (!n[i]) {
            return false;
        }
    }
    return true;
};

allTruthy(true, true, true);

allTruthy(true, false, true) ;

allTruthy(5, 4, 3, 2, 1, 0) ;