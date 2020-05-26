import {
    _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer
} from './_DATA';

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
        users,
        questions
    }));
}
export function findDif(a1, a2) {
    const a = [];
    const diff = [];

    for (let i = 0; i < a1.length; i += 1) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i += 1) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (const k in a) {
        diff.push(k);
    }

    return diff;
}
