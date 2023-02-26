import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { UserProfile } from "../../store/features/usersProfilesSlice/types";
import UserCard from "./UserCard";

const RomanUserProfile: UserProfile = {
  username: "Róman",
  email: "",
  location: "",
  age: "",
  friends: [],
  enemies: [],
  id: "",
  avatar: "",
};

describe("Given a UserCard component", () => {
  describe("When it is rendered with the user Róman", () => {
    render(
      <Wrapper>
        <UserCard userProfile={RomanUserProfile} />
      </Wrapper>
    );
    test("Then it should show an image with the alt text 'Róman'", () => {
      const altText = "Róman";

      const expectedImage = screen.getByAltText(altText);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Róman'", () => {});

    const titleText = "Róman";

    const expectedTitle = screen.getByRole("heading", { name: titleText });

    expect(expectedTitle).toBeInTheDocument();
  });

  test("Then it should show a button with the text `Friendzone`", () => {
    const buttonText = "Friendzone";
    render(
      <Wrapper>
        <UserCard userProfile={RomanUserProfile} />
      </Wrapper>
    );

    const expectedButtoIcon = screen.getByRole("button", { name: buttonText });

    expect(expectedButtoIcon).toBeInTheDocument();
  });
});
