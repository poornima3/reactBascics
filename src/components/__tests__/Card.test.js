import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../../components/mocks/mockResMenu.json';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from '../Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
})

it("should load Resturtant menu Component", async () => {
  await act(async () => render(<BrowserRouter><Provider store={appStore}><RestaurantMenu /><Cart /></Provider></BrowserRouter>))
  
  const accordianHeader = screen.getByText('Keto Salad Bowls(3)');
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId('foodItems').length).toBe(5);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
})