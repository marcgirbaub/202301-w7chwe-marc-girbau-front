import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { UserProfile } from "../../store/features/usersProfilesSlice/types";
import UsersList from "./UsersList";

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

describe("Given a UsersList component", () => {
  describe("When rendered", () => {
    test("Then it should show a user list with a user and an image with the alt text 'Róman'", () => {
      render(
        <Wrapper>
          <UsersList />
        </Wrapper>
      );

      const altText = "Róman";

      const expectedImage = screen.getByAltText(altText);

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
