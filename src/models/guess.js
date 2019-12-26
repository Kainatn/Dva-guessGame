
export default {
    namespace: 'guess',
    state: {
        count: 0
    },

    effects: {
        *fetch(action, { put }) {  // eslint-disable-line
            console.log("inside effects");
            const randomNumber = action.payload.Newrandom;
            yield put({ type: 'change', payload: { randomNumber } });

        },
    },
    reducers: {
        change(state, payload) {
            console.log(state.count);
            console.log(payload);
            return {
                ...state.count,
                count: {
                    ...state.count,
                    number: payload.payload.randomNumber,

                },

            };


        }

    }


}