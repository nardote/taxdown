import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  taxes: [],
  user: {},
};

export const taxesSlice = createSlice({
  name: "taxes",
  initialState,
  reducers: {
    signin: (state, { payload }) => {
      state.user = payload;
    },
    taxesStatus: (state, { payload }) => {
      state.taxes = payload;
    },

    addSubmission: (state, { payload }) => {
      const newTaxes = current(state.taxes).map((tax) => {
        if (tax.id === payload.id) {
          const { id, ...submission } = payload;
          return {
            ...tax,
            submissions: tax.submissions
              ? [...tax.submissions, submission]
              : [submission],
          };
        }
        return tax;
      });

      state.taxes = newTaxes;
    },
  },
});

export const selectTaxes = (state) => state.taxes.taxes;
export const selectUser = (state) => state.taxes.user;

export const { signin, taxesStatus, addSubmission } = taxesSlice.actions;
export default taxesSlice.reducer;
