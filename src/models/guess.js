
export default {
    namespace: 'guess',
    state: {
        count: 0,
        guessedNo: null,
        enable: true,
    },

    effects: {
        *fetch(payload, { put }) {  // eslint-disable-line
            yield put({ type: 'change', payload });
        },
        *comp(payload, { put }) {
            yield put({ type: 'guessed', payload })
        }
    },
    reducers: {
        change(count, { payload }) {
            return {
                ...count,
                count: payload.payload,
                enable: false,
            };
        },
        guessed(guessedNo, { payload }) {
            return {
                ...guessedNo,
                guessedNo: payload.payload,
            };
        },
    }
}


