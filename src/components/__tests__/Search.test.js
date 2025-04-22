import { fireEvent, render, screen  } from "@testing-library/react";
import Body from '../Body';
import MOCK__DATA from '../mocks/mockResListData.json';
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// creating a fetch like function in the global env
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK__DATA);
    }
  })
})

it("Should Search Res List for burger text input", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
 
  fireEvent.change(searchInput, { target: { value: "Biryani" } });
  fireEvent.click(searchBtn);

  // screen should load 3 res Cards
  const cards = screen.getAllByTestId("resCard");

  // console.log(cards);

  expect(cards.length).toBe(2);

  // expect(searchBtn).toBeInTheDocument();
})

it("Should Filter Top rated resturant", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
  
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(2);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  console.log(topRatedBtn);

  fireEvent.click(topRatedBtn); 

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(2);

  expect(searchBtn).toBeInTheDocument();
})