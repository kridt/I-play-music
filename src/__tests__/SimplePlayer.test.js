import mockedAxios from "axios";
import { render, cleanup, waitFor, screen, act } from "@testing-library/react";
import SimplePlayer from "../pages/SimplePlayer";
import TokenContext from "../TokenContext";

jest.mock("axios");
afterEach(cleanup);

describe("simplePlayer", async function () {
  var response = {
    data: {
      content: {
        name: "7 years",
        artists: [
          {
            name: "lukas graham",
          },
        ],
        preview_url:
          "https://p.scdn.co/mp3-preview/6be8eb12ff18ae09b7a6d38ff1e5327fd128a74e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
        duration_ms: "123456",
      },
    },
  };

  var mockContext = [
    {
      access_token: "1234",
    },
  ];

  it("play the song you want", async function () {
    mockedAxios.get.mockResolvedValue(response);

    act(function () {
      render(
        <TokenContext.Provider value={mockContext}>
          <SimplePlayer />
        </TokenContext.Provider>
      );
    });
  });

  await waitFor(function () {
    var text = screen.getByText(/7 years/i);
    expect(text).toBeInTheDocument();
  });
});
