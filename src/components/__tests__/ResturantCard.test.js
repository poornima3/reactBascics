import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";


it('should render Resturant Card component with props data', () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const name = screen.getByText('Dindigul Thalappakatti');

  expect(name).toBeInTheDocument();
})