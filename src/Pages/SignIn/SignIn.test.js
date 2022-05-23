import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import SignIn from "./SignIn";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../../app/store";
import "@testing-library/jest-dom";

import reducer, { taxesStatus } from "../../features/taxes/taxesSlice";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const labels = [/Email Address/i, /Password/i];

test("Exist labels", async () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );

  for await (const label of labels) {
    const emailLabel = await screen.findAllByLabelText(label);
    expect(emailLabel[0]).toBeInTheDocument();
  }
});

test("Add Taxes", async () => {
  const newState = [
    {
      id: "1",
      name: "Tax Season 2021",
      year: "2021",
    },
    {
      id: "2",
      name: "Tax Season 2020",
      year: "2020",
    },
  ];
  expect(reducer(undefined, taxesStatus(newState))).toEqual({
    taxes: newState,
    user: {},
  });
});
