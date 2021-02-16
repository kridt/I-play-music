import mockedAxios from "axios";
import { render, cleanup, waitFor, screen, act } from "@testing-library/react";
import TokenContext from "../TokenContext";
import Album from "../components/Album";

jest.mock("axios");
afterEach(cleanup);

describe("Album", async function () {
  var response = {
    data: {
      albums: {
        items: {
          total_tracks: "3",
          id: "1",
          images: [
            {
              url: "https://via.placeholder.com/100",
            },
          ],
          name: "idk album",
          artists: [
            {
              name: "songwriter",
            },
          ],
        },
      },
    },
  };

  var mockContext = [
    {
      access_token: "1234",
    },
  ];

  it("all albums", async function () {
    mockedAxios.get.mockResolvedValue(response);

    act(function () {
      render(
        <TokenContext.Provider value={mockContext}>
          <Album />
        </TokenContext.Provider>
      );
    });
  });

  await waitFor(function () {
    var text = screen.getByText(/idk album/i);
    expect(text).toBeInTheDocument();
  });
});
