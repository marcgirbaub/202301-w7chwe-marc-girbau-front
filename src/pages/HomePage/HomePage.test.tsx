import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { UserProfile } from "../../store/features/usersProfilesSlice/types";
import HomePage from "./HomePage";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUsersProfilesList,
}));

const mockUsersProfilesList: UserProfile[] = [
  {
    username: "Róman",
    email: "sdf",
    location: "sdf",
    age: "20",
    friends: [],
    enemies: [],
    id: "sdf",
    avatar: "sdfsdf",
  },
  {
    username: "Raul",
    email: "sdf",
    location: "sdfdsfg",
    age: "20",
    friends: [],
    enemies: [],
    id: "sdfsd",
    avatar: "sdfdf",
  },
];

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show a user list with a user and an image with the alt text 'Róman'", () => {
      render(
        <Wrapper>
          <HomePage />
        </Wrapper>
      );

      const altText = "Róman";

      const expectedImage = screen.getByAltText(altText);

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
